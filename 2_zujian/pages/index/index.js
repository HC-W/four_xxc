// pages/index/index.js
//引入
const app=getApp();
const util=require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
     db:[
    // {
    //   "sel":true,
    //   "p1":"你真漂亮",
    //   "p2":"你真帅",
    //   "wg":"鬼舞步"
    // },
    //   {
    //     "sel": true,
    //     "p1": "洛洛",
    //     "p2": "卿卿",
    //     "wg": "吸星大法"
    //   }
      ],
      isDB:false
  },
  sendQwer:function(e){
    console.log(e.detail.data.ind+":"+e.detail.data.wugong)
  },
  bt:function(){
    var _this=this;
    wx.request({
      url: 'http://localhost/php/hello.php',
      data:{},
      type:"GET",
      success:function(res){
        // console.log(res);
        _this.setData({
    isDB:true,
          db:res["data"]
        })
      }
    })
  },
  // abc:function(){
  //   // console.log(this.hahaha())
  //   console.log(util.formatTime(new Date()))
  // },
  // hahaha:function(){
  //   return "123"
  // },

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