import { wxAppEvents } from "../libs/wxConstant"
import { setFlag } from "../libs/constant"

export const isFunction = (func)=>{
    return Object.prototype.toString.call(func) === '[object function]'
}

export const isObject = (obj)=>{
    return Object.prototype.toString.call(obj) === '[object object]'
}

export const isWxEnv = ()=>{
    if(isObject(wx !== 'undefined' ? wx : 0) && isFunction(App !== 'undefined' ? App : 0)){
        return true
    }
    return false
}

export const getTimestamp = ()=>{
    return Date.now()
}

export const validOption = (source,target,value)=>{

    if(typeof source === value){
        return true
    }

   console.error(target + '期待是',value,'得到是',typeof source);
   return false
    
}


export const wxSetFlag = (option)=>{

    /** 设置标识位，默认是true，表示我要开启该功能 */
    setFlag(wxAppEvents.onError, !!option.wxAppOnError)
    setFlag(wxAppEvents.onUnhandledRejection, !!option.wxOnUnhandledRejection)
    setFlag(wxAppEvents.onPageNotFound, !!option.wxOnPageNotFound)
    //todo 
    // setFlag(wxAppEvents.route)
}
