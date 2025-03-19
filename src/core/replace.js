
import { wxAppMethods } from '../libs/wxConstant.js'
import {replaceOld} from './replaceOld.js'
import {HandleWxAppEvents} from './handleWxEvents.js'
import {subscribeEvent} from './subscribeEvent'



export function addReplaceHandler(handler) {
    if (!subscribeEvent(handler)) return
    replace(handler.type)
  }

export const replaceApp = ()=>{
    if(App){
        const originApp = App
        //appOptions 是App里面多个方法
        App = function(appOptions){
          wxAppMethods.forEach((method)=>{
            addReplaceHandler({
                callback: (data) => HandleWxAppEvents[method](data),
                type: method
              })

              replaceOld(originApp,method,function(originMethod){
                    return function(...args){
                        if(originMethod){
                            originMethod.apply(this,args)
                            
                        }
                    }
              },true)
          })

          return originApp(appOptions)
        }
    }

   
}