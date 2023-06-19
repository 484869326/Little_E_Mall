// pages/index/index.js
const app = getApp();
import{request} from "../../request/index.js";
// es7回调 其他机型不适配
import regeneratorRuntime from "../../lib/runtime/runtime.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Height: app.globalData.navBarHeight,
    hidden:false,
    flagPop:false,
    categoryList:[],
    good:[],
    lazyLoadGood:{
      paginate:2,
      lastPage:0
    },
    count:0
  },
  onLoad:function(){
    this.getCategory();
    this.getGoodList();
  },
  async getCategory(){
    const categoryList=await request({
      url:'/category'
    });
   this.setData({
    categoryList
   })
  },
  async getGoodList(){
    let data=this.data.lazyLoadGood;
    let res=await request({url:"getGoodList",method:"post",data});
    res.good.map(item=>{
      item.Explain=item.Explain.split(",");
      item.color=item.color.split(",");
      item.price=item.price.split(",");
  })
    let count=res.count;
    this.setData({
      good:[...this.data.good,...res.good],
      count
    })
  },
  onShow: function (options) {
  },
  goDetail(e){
    wx.navigateTo({
      url: '../detail/detail?id='+e.currentTarget.dataset.id,
  });
  },
  onPageScroll:function(e){
    if (e.scrollTop > 140) {
      this.setData({
        flagPop : true
      })
    } else {
      this.setData({
        flagPop : false
      })
    }
   },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      hidden:true
    })
    setTimeout(() => {
      wx.hideNavigationBarLoading(); 
      wx.stopPullDownRefresh();
      this.setData({
        hidden:false
      })
    }, 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let lastPage=this.data.lazyLoadGood.lastPage+this.data.lazyLoadGood.paginate;
    if(lastPage>=this.data.count){
      return wx.showToast({
        title: '没有更多得数据了',
        icon:'none'
      });
    }
    this.setData({
      lazyLoadGood:{
        lastPage,
        paginate:this.data.lazyLoadGood.paginate,
      }
    })
    this.getGoodList();
  },
  gosearch(){
    wx.navigateTo({
      url: '../search/search'
    });
      
  },
  goGoodList(e){
    wx.navigateTo({
      url: '../goodList/goodList?Cid='+e.currentTarget.dataset.id,
    });
      
  }
})