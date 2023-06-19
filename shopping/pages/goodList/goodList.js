import{request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime.js";

// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(options.value!==undefined){
            this.getGood(options.value);

        }
        else if(options.Cid!==undefined){
            this.getGoodByCid(options.Cid);
        }
        else{
            this.getgoodByid(options.id);

        }
    },
    async getGoodByCid(context){
        let data={
            Cid:context
        }
        let goods=await request({url:"getGood",method:"post",data});
        goods.map(item=>{
            item.Explain=item.Explain.split(",");
            item.color=item.color.split(",");
            item.price=item.price.split(",");
    })
        this.setData({
            goods
        })
    },
    async getGood(context){
        let data={
            value:context
        }
        let goods=await request({url:"getGood",method:"post",data});
        if(goods.length==0){
            return;
        }
        goods.map(item=>{
            item.Explain=item.Explain.split(",");
            item.color=item.color.split(",");
            item.price=item.price.split(",");
    })
        this.setData({
            goods
        })
    },
    async getgoodByid(context){
        let data={
            id:context
        }
        let goods=await request({url:"getGood",method:"post",data});
        goods.map(item=>{
            item.Explain=item.Explain.split(",");
            item.color=item.color.split(",");
            item.price=item.price.split(",");
    })
        this.setData({
            goods
        })
    },
    goDetail(e){
        wx.navigateTo({
            url: '../detail/detail?id='+e.currentTarget.dataset.id,
        });
          
    }
})