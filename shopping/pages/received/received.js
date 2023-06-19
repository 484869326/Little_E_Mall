// pages/received/received.js
import{request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    received:[],
      good:[]
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
    this.getReceived();
  },
  async getReceived(){
    let userInfo=wx.getStorageSync('userInfo');
    let data={};
    data.signature=userInfo.signature;
    let received=await request({url:'received',method:'post',data});
    received.map(item=>{
      let Num=item["Num"].split(",");
      let totalNum=0;
      Num.map(item1=>{
        totalNum+=parseInt(item1);
      })
      item["Num"]=totalNum;
    })
  
    this.setData({
      received
    })
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