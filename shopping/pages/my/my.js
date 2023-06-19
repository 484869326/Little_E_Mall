// pages/my/my.js
import{request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:{},
        isLogin:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      
    },
    onShow(){
      let userInfo=wx.getStorageSync("userInfo")||"";
      if(userInfo.length==0){
        return false;
      }
      this.setData({
        userInfo,
        isLogin:true
      })
    },
   goLogin(){
     console.log(1);
        wx.getUserProfile({
            desc: '展示用户信息',
            success: (res) => {
            this.insertMy(res);
            res.userInfo["signature"]=res.signature;
            wx.setStorageSync("userInfo",  res.userInfo);
              this.setData({
                userInfo: res.userInfo,
                isLogin:true
              })
            }
          })
    },
    async insertMy(res){
      let data={};
      data.signature=res.signature;
      data.nickName=res.userInfo.nickName;
      data.gender=res.userInfo.gender;
      data.avatarUrl=res.userInfo.avatarUrl;
      data.city=res.userInfo.city;
      data.phone="";
      await request({url:"Login",data,method:"post"})
    },
    goRecived(){
      let userInfo=wx.getStorageSync('userInfo')||"";
      console.log(userInfo.length);
      if(userInfo.length==0){
        wx.showToast({
          title: '请先登录',
        })
        return false;
      }
      wx.navigateTo({
        url: '../received/received'
      });
        
    },
    mycollect(){
      let userInfo=wx.getStorageSync('userInfo')||"";
      console.log(userInfo.length);
      if(userInfo.length==0){
        wx.showToast({
          title: '请先登录',
        })
        return false;
      }
      wx.navigateTo({
        url: '../collect/collect',
      });
        
    }
})