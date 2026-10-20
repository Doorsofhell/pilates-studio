export function read<T>(key:string,fallback:T):T{try{const raw=localStorage.getItem('ps-'+key);return raw?JSON.parse(raw) as T:fallback}catch{return fallback}}
export function write<T>(key:string,value:T):void{localStorage.setItem('ps-'+key,JSON.stringify(value))}
