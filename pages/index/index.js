//index.js
//获取应用实例
const app = getApp()
//获取搜索js
const search = require('../../utils/search.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    searchtext: '',
    pageshow:'',
    searchpage:{
      pageshow:'',
      searchtext:'',
    },
   
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //搜索事件处理
  searchpagedo: function(event) {
    var pageshow = event.currentTarget.dataset.pageindex;
    var that = this;
    that.setData({
      pageshow: pageshow,
      searchpage: {
        pageshow: pageshow,
      },
    });
     
  }
  
})
