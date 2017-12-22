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
  onLoad: function () {
    
  },
  //搜索事件处理
  searchpagedo: function(event) {
    var pageshow = event.currentTarget.dataset.pageindex;
    var searchtextlist = wx.getStorageSync('searchall') || [];
    var that = this;
    that.setData({
      pageshow: pageshow,
      searchpage: {
        pageshow: pageshow,
        searchlist: searchtextlist,
      },
    });
     
  },
  searchdo: function (event){
    var value = event.detail.value;
    var searchall = wx.getStorageSync('searchall') || [];
    if (searchall.indexOf(value)<0)  {
      searchall.unshift(event.detail.value)
      wx.setStorageSync('searchall', searchall)
    }
    //value.indexof(searchall);
    
  },
  clearsearch:function(){
    wx.removeStorageSync('searchall')
    var searchtextlist = wx.getStorageSync('searchall') || [];
    var that = this;
    that.setData({
      searchpage: {
        searchlist: searchtextlist,
      },
    });
  },
  onReachBottom: function () {
    console.log('c');
  },
  detailres:function(){
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})
