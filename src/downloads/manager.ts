import type {Media} from '../coaching/content';
export type Manifest={id:string;version:string;assets:Media[]};
/** Assets are staged and SHA-256 verified before a manifest is committed. History storage is never touched. */
export class Downloads {
 constructor(private fetcher:typeof fetch=fetch,private cacheStorage:CacheStorage=caches){}
 async download(manifest:Manifest,signal:AbortSignal,progress:(done:number,total:number)=>void){
  if(!manifest.assets.length)throw Error('Aucun média disponible');
  const total=manifest.assets.reduce((n,a)=>n+a.bytes,0);const estimate=await navigator.storage?.estimate();if(estimate?.quota&&total>estimate.quota-(estimate.usage||0))throw Error('Espace insuffisant');
  const name='pilates-media:'+manifest.id+':'+manifest.version;const staging=await this.cacheStorage.open(name+':staging');let done=0;
  {for(const asset of manifest.assets){signal.throwIfAborted();if(!/^[a-f0-9]{64}$/.test(asset.sha256)||!asset.url.startsWith('https://')||!asset.validation)throw Error('Média non validé');let response=await staging.match(asset.url);if(!response){response=await this.fetcher(asset.url,{signal});if(!response.ok)throw Error('Média indisponible');}const bytes=await response.arrayBuffer();const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(v=>v.toString(16).padStart(2,'0')).join('');if(hash!==asset.sha256||bytes.byteLength!==asset.bytes)throw Error('Média corrompu');await staging.put(asset.url,new Response(bytes));done+=bytes.byteLength;progress(done,total)}signal.throwIfAborted();await staging.put('https://pilates.local/manifest',new Response(JSON.stringify(manifest)));const target=await this.cacheStorage.open(name);for(const req of await staging.keys()){const response=await staging.match(req);if(response)await target.put(req,response)}await this.cacheStorage.delete(name+':staging');return name;}
 }
 async remove(id:string,version:string){await this.cacheStorage.delete('pilates-media:'+id+':'+version);await this.cacheStorage.delete('pilates-media:'+id+':'+version+':staging')}
}
