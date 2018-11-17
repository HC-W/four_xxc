// pages/mine/zhuce/zhuce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:[],
    psd:"",
    phone:"",
    icon:""
    },
    // 用户名失焦判断
  uName:function(e){
    this.setData({
      userName: e.detail.value
    })
    // 正则判断
    if (!(/^[\u4e00-\u9fa50-9a-zA-z]{1,10}$/i.test(e.detail.value))) {
      wx.showToast({
        title: '格式：1-10位的数字、字母、下划线',
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
  // 手机号失焦数值验证
  phone: function (e) {
    this.setData({
      phone: e.detail.value
    })
    // 正则判断
    if (!(/^1[3-9]\d{9}$/.test(e.detail.value))) {
      wx.showToast({
        title: '手机号码有误',
        icon: 'none'
      });
    }
  },
  // 注册按钮
  formsubmit:function(e){
    if (!(/^[\u4e00-\u9fa50-9a-zA-z]{1,10}$/i.test(this.data.userName)) || !(/^[1-9a-zA-Z]{1}[0-9a-zA-Z]{5,15}$/.test(this.data.psd)) || !(/^1[3-9]\d{9}$/.test(this.data.phone))){
      wx:wx.showModal({
        title: '',
        content: '输入有误！请重新输入'
      })
    }else{
      const _this = this;
      wx: wx.request({
        url: 'http://localhost/php/douban/zhuce.php',
        data: {
          make:"zhuce",
          user: this.data.userName,
          psd: this.data.psd,
          phone: this.data.phone
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
},
        dataType:JSON,
        method: 'POST',
        success: function (res) {
          if(res.data){
            wx.showToast({
              title: '注册成功！',
              icon:'success'
            })
            setTimeout(function(){
              wx.navigateBack()
            },2000)
          }else{
            wx.showModal({
              title: '',
              content: '注册失败！',
            })
          }
        },
        fail: function (res) {
          wx.showModal({
            title: '',
            content: '注册失败！',
          })
        },
        complete: function (res) { },
      })
    }
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