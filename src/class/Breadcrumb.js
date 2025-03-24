

import { _support } from '../libs/constant.js'
import {getTimestamp}  from '../utils/help.js'
import {validOption} from '../utils/help.js'
class BreadCrumb {

    constructor(){}

    stack = []
    maxStorageNumber = 10
    beforePushBreadCrumbFunction = null


    /**
     * time
     * leal
     * type
     * url
     * name
     * stack
     * message
     * 
     * data的格式
     */
    push(data){
        if(typeof this.beforePushBreadCrumbFunction === 'function'){
            //todo 监听的console得去掉
            this.beforePushBreadCrumbFunction(data)
        }

        this.immediatePush(data)
        
    }

    immediatePush(data){
        data.time || (data.time =  getTimestamp())
        this.stack.push(data)
        if(this.stack.length >= this.maxStorageNumber){
            this.stack.shift()
        }
        this.stack.push(data)
        this.stack.sort((a,b)=>a.time - b.time)
    }


    shift(){
      return this.stack.shift() !== undefined
    }

    clear(){
        this.stack = []
    }

    getStack(){
        return this.stack
    }

    getCategory(value){
        switch (value) {
            case 'fetch':
            case 'xhr':
                return 'http'
            default:
                break;
        }
    }


    bindOption(option){
        const {maxStorageNumber,beforePushBreadCrumbFunction} = option
        if(validOption(maxStorageNumber,'maxStorageNumber','number')){
            this.maxStorageNumber = maxStorageNumber
        }
        validOption(beforePushBreadCrumbFunction,'beforePushBreadCrumbFunction','function') && (this.beforePushBreadCrumbFunction = beforePushBreadCrumbFunction)
    }
}

const  breadCrumb = _support.breadCrumb || (_support.breadCrumb =  new BreadCrumb())

export {breadCrumb}