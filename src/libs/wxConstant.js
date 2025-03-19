


export const wxAppMethods = ['onLaunch','onShow','onHide','onError','onPageNotFound','onUnhandledRejection'] 



/** 微信App的事件 */
export const wxAppEvents = {
    onLaunch: 'onLaunch',
    onShow: 'onShow',
    onHide: 'onHide',
    onError: 'onError',
    onPageNotFound: 'onPageNotFound',
    onUnhandledRejection: 'onUnhandledRejection'
}

/** 微信Page的事件 */
export const wxPageEvents = {
    onLoad: 'onLoad',
    onShow: 'onShow',
    onReady: 'onReady',
    onHide: 'onHide',
    onUnload: 'onUnload',
    onPullDownRefresh: 'onPullDownRefresh',
    onReachBottom: 'onReachBottom',
    onPageScroll: 'onPageScroll',
    onShareAppMessage: 'onShareAppMessage',
    onResize: 'onResize',
    onTabItemTap: 'onTabItemTap'
}

/** 微信Component的事件 */
export const wxComponentEvents = {
    created: 'created',
    attached: 'attached',
    ready: 'ready',
    moved: 'moved',
    detached: 'detached',
    error: 'error'
}

/** 微信 route 的事件 */
export const wxRouteEvents = {
    switchTab: 'switchTab',
    reLaunch: 'reLaunch',
    redirectTo: 'redirectTo',
    navigateTo: 'navigateTo',
    navigateBack: 'navigateBack',
    navigateToMiniProgram: 'navigateToMiniProgram',
    navigateBackMiniProgram: 'navigateBackMiniProgram',
    routeFail: 'routeFail'
}