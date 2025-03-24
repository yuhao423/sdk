import { breadCrumb } from "../class/Breadcrumb"
import { SdkOptions } from "../class/SdkOptions"


/** 入参的校验 */
export const initOptions = (option)=>{

    //开启标志位
    wxSetFlag(option)

    //参数校验
    breadCrumb.bindOption(option)
    SdkOptions.bindOptions(option)
}