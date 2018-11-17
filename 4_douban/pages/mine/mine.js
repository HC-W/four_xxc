// pages/mine/mine.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDeng:app.globalData.isDeng,
    uu: app.globalData.userN,
    hiddenmodalput: true,
    chongzhi:""
    //可以通过hidden是否掩藏弹出框的属性，来指定那个弹出框
  },
  // 获取数值
  nc:function(e){
    this.setData({
      chongzhi: e.detail.value
    })
  },
  //点击按钮痰喘指定的hiddenmodalput弹出框
  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true,
      chongzhi:""
    })
  },
  //确认后更改昵称
  confirm: function (e) {
    this.setData({
      hiddenmodalput: true
    })
    const _this = this;
    wx: wx.request({
      url: 'http://localhost/php/douban/zhuce.php',
      data: {
        make: "update",
        user: _this.data.chongzhi,
        uu:_this.data.uu
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function (res) {
        if(res.data){
          app.globalData.userN = _this.data.chongzhi;
          var page = getCurrentPages().pop();
          page.onLoad();
        }else{
          wx.showToast({
            title: '更改失败'
          })
        }
      }
    })
  },
  // 跳转登录界面
  jumpLogin:function(){
    wx.navigateTo({
      url: 'login/login',
    })
  },
  // 退出登录
  exit:function(){
    wx:wx.showModal({
      title: '',
      content: '退出登录？',
      success: function(res) {
        // 确认退出
        if(res.confirm){
          app.globalData.isDeng = false;
          app.globalData.userN = "";
          // wx:wx.switchTab({
          //   url: '../index/index',
          //   success: function(res) {},
          //   fail: function(res) {},
          //   complete: function(res) {},
          // })
          var page = getCurrentPages().pop();
          page.onLoad();
          // 点击退出取消
        }else if(res.cancel){
          var page = getCurrentPages().pop();
          page.onLoad();
        }
      },
      fail: function(res) {
        wx.showToast({
          title: '退出失败'
        })
      },
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.isDeng) {
      this.setData({
        isDeng: true,
        uu: app.globalData.userN
      })
    } else {
      this.setData({
        isDeng: false
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})