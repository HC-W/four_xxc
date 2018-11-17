//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    obj:[
      {
        id:1,
        imgPath:"../../images/banana.jpg",
        title:"进口香蕉500g包邮",
        detail:"纯天然无公害",
        price:18.88,
        flag:true,
        count:0
      },
      {
        id: 2,
        imgPath: "../../images/mihoutao.jpg",
        title: "12个猕猴桃",
        detail: "纯天然无公害",
        price: 19.8,
        flag: true,
        count: 0
      },
      {
        id: 3,
        imgPath: "../../images/putao.jpg",
        title: "无籽大葡萄",
        detail: "纯天然无公害",
        price: 19.99,
        flag: true,
        count: 0
      },
      {
        id: 4,
        imgPath: "../../images/yangtao.jpg",
        title: "第二份半价",
        detail: "纯天然无公害",
        price: 20.8,
        flag: true,
        count: 0
      },
      {
        id: 5,
        imgPath: "../../images/shiliu.jpg",
        title: "云南源自生态大石榴",
        detail: "纯天然无公害",
        price: 17.9,
        flag: true,
        count: 0
      }
    ],
    userInfo: null
  }
})