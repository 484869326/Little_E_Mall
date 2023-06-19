import{request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime.js";
// pages/buy/buy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        address:"",
        buy:[],
        totalPrice:0,
        loginId:0
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },
    async onShow(){
        let address=wx.getStorageSync("address")||"";
        let buy=wx.getStorageSync("buy");
        let totalPrice=0;
        let userInfo=wx.getStorageSync('userInfo');
        let data={};
        data.signature=userInfo.signature;
        let res=await request({url:"LoginId",method:"post",data});
        buy.map(item=>{
            totalPrice+= parseInt(item.price)*parseInt(item.Num)
        })
          this.setData({
              address,
              buy,
              totalPrice,
              loginId:res.id
          })
    },
    chooseAddress(){
        wx.chooseAddress({
            success: (address) => {
            this.setData({
                address
            })
            wx.setStorageSync("address", address);
            }
        });
          
    },
    async submit(){
        if(this.data.address.length==0){
            wx.showToast({
                title: '请选择地址',
                icon: 'error'
            });
              return;
        }
        let data={};
        data.Userid=this.data.loginId;
        let buy=[...this.data.buy];
        let newGoodid=[];
        let newNum=[];
        let newShoppingid=[];
        buy.map(item=>{
                newGoodid.push(item.Goodid);
                newNum.push(item.Num);
                newShoppingid.push(item.shoppingid);
            })
        data.Goodid=newGoodid.toString();
        data.shoppingid=newShoppingid.toString();
        data.Num=newNum.toString();
        data.totalPrice=this.data.totalPrice;
        data.Name=this.data.address.userName;
        data.Address=this.data.address.provinceName+"-"+this.data.address.cityName+"-"+this.data.address.countyName+"-"+this.data.address.detailInfo;
        data.Phone=this.data.address.telNumber;
        await request({url:"Buy",data,method:"post"})
        wx.showToast({
            title: '支付成功'
        });
        wx.navigateBack({
            delta: 1
        });
          
    }
    
})