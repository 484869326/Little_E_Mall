// pages/search/search.js
import{request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList:[],
    good:[],
    value:"",
    tips:false,
    goodlistShow:true,
    inputValue:""
  },
  timer:-1,
  getInputValue(e){
    if(!e.detail.value.trim()){
      this.setData({
        good:[]
      })
      return;
    }
    if(this.timer){
      clearTimeout(this.timer);
    }
    this.timer=setTimeout(()=>{
   this.searchValue(e.detail.value)
    },500)
  },
  async searchValue(value){
   let data={
     value
   }
    let good=await request({url:"getGood", method:"POST",data});
    this.setData({
      good,
      value
    })
  },
  search(e){
    this.goodList(e.detail.value);
  },
  searchButton(){
    this.goodList(this.data.value);
  },
  goodList(value){
    wx.navigateTo({
      url: '../goodList/goodList?value='+value
    });
   if(value!=""){
    let searchList=wx.getStorageSync('searchList')||[];
    searchList.push(value);
    wx.setStorageSync('searchList', searchList);
   }
  },
  deleteHistory(){
    wx.setStorageSync('searchList', []);
    this.setData({
      searchList:[],
      tips:false
    })
  },
  showtips(){
    this.setData({
      tips:true
    })
  },
  cancle(){
    this.setData({
      tips:false
    })
  },
  goodlistShow(){
    this.setData({
      goodlistShow:false
    })
  },
  goodlistHide(){
    this.setData({
      goodlistShow:true
    })
  },
  clearValue(){
    console.log(1);
    this.setData({
      inputValue:"",
      value:""
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
    let searchList=wx.getStorageSync('searchList');
    this.setData({
      searchList
    })
  },
  historyHref(e){
    let value=e.currentTarget.dataset.value
    wx.navigateTo({
      url: '../goodList/goodList?value='+value
    });
  }
})