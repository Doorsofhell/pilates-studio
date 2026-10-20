import {Capacitor} from '@capacitor/core';
import {App} from '@capacitor/app';
export async function installLifecycle(){if(!Capacitor.isNativePlatform())return ()=>{};const interrupt=()=>window.dispatchEvent(new Event('pilates:interrupt'));const state=await App.addListener('appStateChange',s=>{if(!s.isActive)interrupt()});const back=await App.addListener('backButton',()=>{if(document.querySelector('dialog[open]'))interrupt();else window.history.back()});return ()=>{void state.remove();void back.remove()}}
