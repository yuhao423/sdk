import { replaceApp } from "./core/replace.js";
import { isWxEnv } from "./utils/index.js";


export function init(option= {}){
    /**
     * 1. 判断环境
     */
    
    if(!isWxEnv) {
        console.error('请在微信小程序环境下使用');
        return
    } 

    console.log('?>???');
    
    initOption(option)
    
    replaceApp()

}


