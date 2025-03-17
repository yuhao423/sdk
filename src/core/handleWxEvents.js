import {breadCrumb} from '../class/Breadcrumb.js'

export const HandleWxAppEvents = {
    onLaunch(options) {
        // sdkOptions.appOnLaunch(options)
        const data = {
          path: options.path,
          query: options.query
        }
        breadCrumb.push({
          category: 'appOnLaunch',
          type: 'appOnLaunch',
          data,
          level: 'info'
        })
      }
}