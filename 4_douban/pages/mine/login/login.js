// pages/mine/login/login.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",
    psd:""
  },
  // 登录判断
  // 用户名失焦判断
  uName: function (e) {
    this.setData({
      userName: e.detail.value
    })
    // 正则判断
    if (!(/^[\u4e00-\u9fa50-9a-zA-z]{1,10}$/i.test(e.detail.value)) && !(/^1[3-9]\d{9}$/.test(e.detail.value))) {
      wx.showToast({
        title: '用户输入格式错误',
        icon: 'none'
      });
      return false;
    }
  },
  // 密码失焦判断
  psd: function (e) {
    this.setData({
      psd: e.detail.value
    })
    // 正则判断
    if (!(/^[1-9a-zA-Z]{1}[0-9a-zA-Z]{5,15}$/.test(e.detail.value))) {
      wx.showToast({
        title: '密码由6-16位的数字，字母组成，区分大小写',
        icon: 'none'
      });
    }
  },
  // 注册按钮
  formsubmit: function (e) {
    if (!(/^[\u4e00-\u9fa50-9a-zA-z]{1,10}$/i.test(this.data.userName)) && !(/^1[3-9]\d{9}$/.test(this.data.userName)) || !(/^[1-9a-zA-Z]{1}[0-9a-zA-Z]{5,15}$/.test(this.data.psd))) {
      wx: wx.showModal({
        title: '',
        content: '输入有误！请重新输入'
      })
    } else {
      const _this = this;
      wx: wx.request({
        url: 'http://localhost/php/douban/zhuce.php',
        data: {
          make:"login",
          user: this.data.userName
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: function (res) {
          if(res.data){
            var ppd=res.data[0]["password"];
            if(ppd==_this.data.psd){
              wx.showToast({
                title: '登录成功',
                icon: 'success'
              });
              app.globalData.isDeng = true;
              app.globalData.userN = _this.data.userName;
              setTimeout(function(){
              
                wx.switchTab({
                  url: '../../index/index',
                  // 加载页面
                  success: function (e) {
                    var page = getCurrentPages().pop();
                    if (page == undefined || page == null) return;
                    page.onLoad();
                  }

                })
              },1000)
             
              
            }else{
              wx.showModal({
                title: '',
                content: '密码输入错误',
              })
            }
          }
        },
        fail: function (res) {
         
        },
        complete: function (res) { },
      })
    }
  },
  // 注册豆瓣页面跳转
  zhuce:function(){
    wx.navigateTo({
      url: '../zhuce/zhuce',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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