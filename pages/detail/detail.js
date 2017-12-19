var app = getApp();  
var util = require("../../utils/util.js")  
Page({  
  data: {  
    shenfen: 1,  
    nanshen_card: {},  
    nvshen_card: {},  
    img_list: ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3037038421,3741455114&fm=27&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513685388614&di=ec031f1bb2af77d04f99405ee4ac08f5&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201303%2F11%2F20130311104442_AdCBd.thumb.700_0.jpeg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2530423729,948738506&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4059778750,1002628613&fm=27&gp=0.jpg'],  
    danshen_data: {},  
    meipo_data: {},  
    meipo: true,  
    danshen: false,  
    img: 'http://sz800800.cn/Uploads/',  
    animationData: {},  
  },  
  // 男神女神推荐  
  shenfen_click: function (e) {  
    var shen_click_val = e.currentTarget.dataset.id  
    console.log(shen_click_val)  
    this.setData({  
      shenfen: shen_click_val  
    })  
  },  
  onShow: function (options) {  
    if (wx.getStorageSync('btn') == 1) {  
      wx.setNavigationBarTitle({ title: '快速组团' })  
      this.setData({  
        meipo: true,  
        danshen: false  
      })  
    } else {  
      wx.setNavigationBarTitle({ title: '智能推荐' })  
      this.setData({  
        meipo: false,  
        danshen: true  
      })  
    }  
    this.show_data()  
  },  
  show_data: function () {  
    var that = this  
    var data = {  
      program_id: app.program_id,  
      openid: app.openid,  
    }  
    if (this.data.danshen) {  
      util.request('', 'get', data, '正在加载数据', function (res) {  
        that.setData({  
          danshen_data: res.data,  
          img_length: res.data.length  
        })  
      })  
    } else {  
      util.request('', 'get', data, '正在加载数据', function (res) {  
        console.log(res.data)  
        that.setData({  
          meipo_data: res.data,  
          nanshen_card: res.data.k3,  
          nvshen_card: res.data.k4  
        })  
      })  
    }  
  
  },    
  //单身事件处理函数  
  slidethis: function (e) {  
    var that = this;  
    var img_list = this.data.img_list;  
    var img_1 = this.data.img_list[0];  
    img_list.splice(0, 1)  
    img_list.push(img_1)  
    this.setData({  
      img_list: img_list  
    })  
    var animation = wx.createAnimation({  
      duration: 300,  
      timingFunction: 'linear',  
    });  
    this.animation = animation;  
    this.animation.translateY(20).rotate(-10).translateX(270).step();  
    this.animation.translateY(0).translateX(0).rotate(0).step();  
    this.setData({  
      animationData: this.animation.export()  
    });  
    setTimeout(function () {  
      that.setData({  
        animationData: {}  
      });  
    }, 350);  
    this.show_data()  
  },  
  /** 
   * 用户点击右上角分享 
   */  
  onShareAppMessage: function () {  
  
  }  
})  