// pages/shopping/shopping.js
import{request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime.js";
Page({
    /**
     * 页面的初始数据
     */
    data: {
        shoppingList:[],
        tips:false,
        shopping:false,
        buyNow:true,
        tanchu:false,
        deleteId:0,
        index:0,
        good:[],
        type:0,
        color:0,
        totalChecked:0,
        TotalPrice:0,
        TotalNum:0,
        editShop:false
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
     
    },
    onShow:function(){
       this.getShopping();
    },
   sum(){
      if(this.data.TotalNum==0){
        return
      }
      let shoppingList=this.data.shoppingList;
      let buy=[];
      shoppingList.map(item=>{
        if(item.isChecked){
          item.good.Num=item.Num;
        item.good.price=item.good.price[item.type];
        item.good.Type=item.good.Type[item.type];
        item.good.color=item.good.color[item.color];
        item.good.shoppingid=item.shoppingid;
         buy.push(item.good);
        }
      })
      wx.setStorageSync("buy", buy);
      wx.navigateTo({
        url: '../buy/buy'
      });
   },
    buy(){
    },
    editShop(){
      this.setData({
        editShop:!this.data.editShop
      })
    },
    async editChecked(){
      let userInfo=wx.getStorageSync('userInfo');
      let data={};
      data.signature=userInfo.signature;
      await request({url:"deleteChecked",data})
      let shoppingList=this.data.shoppingList;
      shoppingList=shoppingList.filter((item,index)=>{
       return item.isChecked==false
      })
      this.setData({
        shoppingList
      })
    },
    async getShopping(){
      let userInfo=wx.getStorageSync('userInfo');
      let data={};
      data.signature=userInfo.signature;
      let shoppingList=await request({url:"getShop",method:"post",data});
      let totalChecked=0;
      shoppingList.map(item=>{
        item.good.Type=item.good.Type.split(",");
        item.good.color=item.good.color.split(",");
        item.good.price=item.good.price.split(",");
      })

      let newArr=shoppingList.filter(item=>{
        return item.isChecked==true
    })
    if(newArr.length==shoppingList.length){
      totalChecked=1
    }
      this.setData({
        shoppingList,
        totalChecked,
      })
      this.totalPrice();
    },

    showtips(e){
      let index= e.currentTarget.dataset.index;
      let deleteId= e.currentTarget.dataset.id;
        this.setData({
          tips:true,
          deleteId,
          index
        })
      },
      cancle(){
        this.setData({
          tips:false
        })
      },
      deleteHistory(){
        wx.setStorageSync('searchList', []);
        this.setData({
          searchList:[],
          tips:false
        })
      },
      chooseType(e){
        let index=e.currentTarget.dataset.index;
        let deleteId=e.currentTarget.dataset.id;
        let good=this.data.shoppingList[index].good;
        let type=this.data.shoppingList[index].type;
        let color=this.data.shoppingList[index].color;
        this.setData({
          tanchu:true,
          good,
          type,
          color,
          index,
          deleteId
        })
      },
      changeSection(e){
        this.setData({
          type:e.currentTarget.dataset.index
        })
      },
      changeColor(e){
        this.setData({
          color:e.currentTarget.dataset.index
        })
      },
      async buy(){
          await request({url:"changeType/"+this.data.deleteId+"/"+this.data.type+'/'+this.data.color})
          let shoppingList=this.data.shoppingList;
          shoppingList[this.data.index].type=this.data.type;
          shoppingList[this.data.index].color=this.data.color;
          this.setData({
            tanchu:false,
            shoppingList
          })
      },
      close(){
        this.setData({
          tanchu:false,
        })
      },
      async reduce(e){
        let id=e.currentTarget.dataset.id;
        let index=e.currentTarget.dataset.index;
        let shoppingList=this.data.shoppingList;
        let Num=shoppingList[index].Num;
       if(Num<=1){
         return;
       }
       Num=--shoppingList[index].Num;
       await request({url:"changeNum/"+id+"/"+Num});
       this.setData({
         shoppingList
       })
      },
      async add(e){
        let id=e.currentTarget.dataset.id;
        let index=e.currentTarget.dataset.index;

        let shoppingList=this.data.shoppingList;
        let Num=shoppingList[index].Num;
        Num=++shoppingList[index].Num;
       await request({url:"changeNum/"+id+"/"+Num});
       this.setData({
         shoppingList
       })
      },
      async deleteOneShopping(){
        await request({url:"DeleteShop/"+this.data.deleteId});
        let shoppingList=this.data.shoppingList;
        shoppingList.splice(this.data.index,1)
        this.setData({
          tips:false,
          shoppingList
        })
      },
      async itemChecked(e){
        let id=e.currentTarget.dataset.id;
        let index=e.currentTarget.dataset.index;
        let shoppingList=this.data.shoppingList;
        let isChecked=shoppingList[index].isChecked;
        let totalChecked=0;
      if(isChecked){
        isChecked=0;
      }
      else{
        isChecked=1;
      }
      shoppingList[index].isChecked=isChecked;
      let newArr=shoppingList.filter(item=>{
        return item.isChecked==true
    })
    if(newArr.length==shoppingList.length){
      totalChecked=1
    }
      this.setData({
        shoppingList,
        totalChecked,
      })
        await request({url:"changeChecked/"+id+'/'+isChecked});
        this.totalPrice();
      },
      async checkedTotal(){
        let totalChecked=this.data.totalChecked;
        let shoppingList=this.data.shoppingList;
        if(totalChecked){
          totalChecked=0;
        }
        else{
          totalChecked=1
        }
        shoppingList.map(item=>item.isChecked=totalChecked)
        let userInfo=wx.getStorageSync('userInfo');
        let signature=userInfo.signature;
        await request({url:"CheckedAll/"+signature+"/"+totalChecked})
        this.setData({
          totalChecked,
          shoppingList
        })
        this.totalPrice();
      },
      totalPrice(){
        let shoppingList=this.data.shoppingList;
        let TotalPrice=0;
        let TotalNum=0;
        let price=0;
        shoppingList.map(item=>{
          if(item.isChecked){
           price=parseInt(item.good.price[item.type]);
           TotalPrice+=price;
           TotalNum++;
          }
        })
        this.setData({
          TotalPrice,
          TotalNum
        })
      }
     
})