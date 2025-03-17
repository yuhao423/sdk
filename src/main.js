
//1.判断微信环境
export const isWxEnv = () => {
    return isObject(typeof wx === 'undefined' ? 0 : wx) && isFunction(typeof App === 'undefined' ? 0 : wx)
}

export const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object object]'
}

export const isFunction = (func) => {
    Object.prototype.toString.call(func) === '[object function]'
}

export const getGlobal = () => {
    if (isWxEnv) return wx
    return {}
}
export const getSupport = () => {
    _global._yu = {}
    return _global._yu
}
/**
 *  {
 *    _yu:{
 *         replaceFlag:{}
 *         }
 *  }
 * 设置全局对象，在wx上挂东西
 */
export const _global = getGlobal()  //wx

export const _support = getSupport()  //wx._yu

//设置代理的标志
_support.replaceFlag = {}
const replaceFlag = _support.replaceFlag

export const setFlag = (wxApi, set) => {
    //如果设置了true，就不用设置了
    if(replaceFlag[wxApi]) return
    replaceFlag[wxApi] = set
}

export const getFlag = (wxApi) => {
    return replaceFlag[wxApi] ? true : false
}