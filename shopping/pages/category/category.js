// pages/category/category.js
import{request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[],
    rightMenuList:[],
    categoryList:[],
  currenIndex:0,
  ifNext:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategory();
  },
  change(e){
    let currenIndex=e.detail.current;
    this.setData({
		currenIndex
	})
  },
  changeItem(e){
    let currenIndex=e.currentTarget.dataset.id;
    this.setData({
      currenIndex
    })
  },
  async getCategory(){
    let categoryList=await request({url:"categoryList"});
    let leftMenuList=categoryList.map(v=>v.Cname);
    let rightMenuList=categoryList.map(v=>v.children);
    this.setData({
      categoryList,
      leftMenuList,
      rightMenuList
    })
  },
  searchCategory(e){
    wx.navigateTo({
      url: '../goodList/goodList?id='+e.currentTarget.dataset.id
    });
      
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