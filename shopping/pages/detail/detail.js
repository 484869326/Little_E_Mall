import{request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yuDate:"",
    isAddress:true,
    address:{},
    good:{},
    section:0,
    color:0,
    tanchu:false,
    shoucang:false,
    shopping:true,
    buyNow:true,
    num:1,
    loginId:0
  },
  shoucang(){
    let shoucang=!this.data.shoucang;
    let shoucangList=wx.getStorageSync('shoucangList')||[];
    if(shoucang){
      shoucangList.push(this.data.good);
    }
    else{
      let index=shoucangList.findIndex(v=>v.Goodid==this.data.good.Goodid);
      shoucangList.splice(index,1);
    }
    wx.setStorageSync("shoucangList", shoucangList);
    this.setData({
      shoucang
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  async goodDetai(id){
    let good=await request({url:"goodDetail/"+id});
    good[0].price=good[0].price.split(",");
    good[0].Type=good[0].Type.split(",");
    good[0].color=good[0].color.split(",");
    let shoucangList=wx.getStorageSync('shoucangList')||[];
    let index=shoucangList.findIndex(v=>v.Goodid==good[0].Goodid);
    let shoucang=false;
    if(index!==-1){
      shoucang=true;
    }
    this.setData({
      good:good[0],
      shoucang
    })
  },
  close(){
    this.setData({
      tanchu:false,
      shopping:true,
      buyNow:true
    })
  },
  ceshi(){
    console.log("冒泡");
  },
  handlePreview(e){
    let current=e.currentTarget.dataset.current;
    wx.previewImage({
      current,
      urls: this.data.good.Swiper
    });
      
  },
  handleAddress(){
    var date= new Date();
    let month=date.getMonth();
    let today=date.getDate();
    // 获取这个月最后一天
    let lastDay = new Date(date.setDate(0)).getDate();
    if(lastDay>=today){
      month++;
      today+=2;
      if(lastDay==today){
        today=2;
      }
    }
    if(month>12){
      month=1;
    }
 let yuDate=month+"月"+today+"日";
    wx.chooseAddress({
      success: (address) => {
        wx.setStorageSync('isAddress', false);
        wx.setStorageSync('yuDate', yuDate);
        wx.setStorageSync('address', address);
        this.setData({
              address,
              isAddress:false,
              yuDate
        })
      }
    });
      
  },
  hanleChoose(e){
    this.setData({
      tanchu:true,
   
    })
  },
  hanleChooseOne(e){
    let value=e.currentTarget.dataset.value;
    this.setData({
      tanchu:true,
      [value]:false
    })
  },
  changeSection(e){
    this.setData({
      section:e.currentTarget.dataset.index
    })
  },
  changeColor(e){
    this.setData({
      color:e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  async onShow() {
    let pages = getCurrentPages();
  let currentPage = pages[pages.length-1];
    this.goodDetai(currentPage.options.id);
    let isAddress=wx.getStorageSync('isAddress');
    let yuDate=wx.getStorageSync('yuDate');
    let address=wx.getStorageSync('address');
    let userInfo=wx.getStorageSync('userInfo')||"";
    if(userInfo.length!=0){
      let data={};
      data.signature=userInfo.signature;
      let res=await request({url:"LoginId",method:"post",data});
      this.setData({
        loginId:res.id
      })
    }
    if(yuDate!=""){
      this.setData({
        isAddress,
        yuDate,
        address,

      })
    }
  },
  async addShop(){
    if(this.data.loginId==0){
      wx.showToast({
        title: '请先登录',
      })
      return;
    }
      let data={};
      data.Goodid=this.data.good.Goodid;
      data.color=parseInt(this.data.color);
      data.type=parseInt(this.data.section);
      data.Userid=this.data.loginId;
      data.Num=this.data.num;
      await request({url:"AddShop",method:"post",data});
      wx.showToast({
        title: '加入购物车成功',
        icon: 'success',
        duration: 1000
      });
      this.setData({
        tanchu:false,
        buyNow:true
      })
  },
    buy(){
      if(this.data.loginId==0){
        wx.showToast({
          title: '请先登录',
        })
        return;
      }
    let good=this.data.good;
    good.Num=this.data.num;
    good.price=good.price[this.data.section];
    good.Type=good.Type[this.data.section];
    good.color=good.color[this.data.color];
    good.shoppingid=0;
    let buy=[];
    buy.push(good);
    wx.setStorageSync("buy", buy);
    this.setData({
      tanchu:false,
      shopping:true
    })
    wx.navigateTo({
      url: '../buy/buy'
    });
      
  },
  gotoShopping(){
    wx.switchTab({
      url: '../shopping/shopping',
    });
  },
  numedit(e){
    let num=this.data.num;
    num+=parseInt(e.currentTarget.dataset.num);
    if(num==0){
      num=1;
    }
    this.setData({
      num
    })
  }
})