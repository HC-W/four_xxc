// pages/exercise/exercise.js
const util=require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    world:"点击变换颜色",
    color:util.randColor(0,255),
    color2: util.randColor(0, 255)
  },
  changeColor:function(){
    this.setData({
      color: util.randColor(0, 255)
    })
  },
  changeColor2: function () {
    this.setData({
      color2: util.randColor(0, 255)
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