

import { _support } from '../libs/constant.js'
import {getTimestamp}  from '../utils/help.js'
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
     */

    push(data){
        if(typeof this.beforePushBreadCrumbFunction === 'function'){

        }

        this.immediatePush(data)
        
    }

    immediatePush(data){
        data.time || (data.time =  getTimestamp())
        this.stack.push(data)
        if(this.stack.length > this.maxStorageNumber){
            this.stack.shift()
        }

        this.stack.push(data)
    }


    shift(){
        this.stack.shift() 
    }

    clear(){
        this.stack = []
    }

    getCategory(value){
        switch (value) {
            case 'fetch':
                return 'http'
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
    }
}

const  breadCrumb = _support.breadCrumb || (_support.breadCrumb =  new BreadCrumb())

export {breadCrumb}