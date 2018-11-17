// pages/index/index.js
const app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr: app.globalData.arr,
    isobj:app.globalData.subjects,
    isjump:false
  },
  jumpSearch:function(){
    // console.log(app.globalData.subjects)
    // console.log(app.globalData.arr)
    wx.navigateTo({
      url: 'search/search',
    })
  },
  more:function(e){
    console.log(e)
    var indid=e.detail.arrid;
    wx:wx.navigateTo({
      url: 'more/more?indid='+indid
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