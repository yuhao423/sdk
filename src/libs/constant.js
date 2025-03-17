import { isWxEnv } from "../utils/help.js"

export const wx = {
    onabort(){
        console.log('sb');
        
    }
}
export const getGlobal = ()=>{
    if(isWxEnv) return wx
    return {}
}
export const getSupport = ()=>{
    _global._yu = {}
    
}
export const _global = getGlobal()
export const _support = getSupport()|| {}

_support._replaceFlag = {}

export const replaceFlag = _support._replaceFlag

export const setFlag = (wxEvent,isSet)=>{
    if(replaceFlag[wxEvent]) return 
    replaceFlag[wxEvent] = isSet
}

export const getSet = (wxEvent)=>{
    return replaceFlag[wxEvent] ? true : false
}

export let App = {
    onLaunch(){
        console.log('onLaunch');
        
    }
}

//wx App 方法
export const wxAppMethods = ['onLaunch','onShow','onHide','onError','onPageNotFound','onUnhandledRejection'] 
