
import { _support } from '../libs/constant.js'

export class SdkOptions {
  

  //微信小程序的hooks，可以在对应事件之前或者之后执行
  appOnLaunch = ()=>{}
  appOnShow = ()=>{}
  onPageNotFound = () => {}
  appOnHide = () => {}


  constructor() {}




  bindOptions(option){
    const {appOnLaunch,appOnShow,appOnHide,onPageNotFound} = option
    validOption(appOnLaunch,'appOnLaunch','function') && (this.appOnLaunch = appOnLaunch)
    validOption(appOnShow,'appOnShow','function') && (this.appOnShow = appOnShow)
    validOption(appOnHide,'appOnHide','function') && (this.appOnHide = appOnHide)
    validOption(onPageNotFound,'onPageNotFound','function') && (this.onPageNotFound = onPageNotFound)

  }
}

export const sdkOptions = _support.sdkOptions || (_support.sdkOptions = new SdkOptions())