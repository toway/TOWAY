//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    bothShow:false,
    motto: 'Hello World',
    userInfo: {},
    "activity": [
        {
            "id": 1,
            "avatarUrl":"http://wx.qlogo.cn/mmhead/PiajxSqBRaEKGeRlicDnVvhLZj30ibYYWz5qib0EnFWtpZ8BJJMs4ANRFg/132",
            "nickname":"Lemon~~",
            "beforeTime": "3小时前",
            "status": {
              type: 'ended', //ended 活动结束
              message:"活动结束",//活动结束
            },
            'viewImg':'',
            "title": "与心灵清净独处\r|\r周末换种方式去旅行\r(3期)",
            "duringTime":"06月18日-06月19日",
            "start": "06月18日",
            "end":"06月19日",
            "address": "惠州市新兴县酒店大道889号",
            "price": "832",
            "joinNum": "25",
            "limitNum": "60"
        },
        {
            "id": 2,
            "avatarUrl":"http://wx.qlogo.cn/mmhead/PiajxSqBRaEKGeRlicDnVvhLZj30ibYYWz5qib0EnFWtpZ8BJJMs4ANRFg/132",
            "nickname":"blue~~",
            "beforeTime": "3小时前",
            "status":{
              type: 'doing', //ended 活动结束
              message:"报名中",//活动结束
            }  ,
            "title": "与心灵清净独处\r|\r周末换种方式去旅行\r(3期)",
            "duringTime":"06月18日-06月19日",

            "address": "惠州市新兴县酒店大道889号",
            "price": "832",
            "joinNum": "25",
            "limitNum": "60"
        }
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../release/release'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
        console.log(userInfo)
    })
      console.log(this.userInfo)

  }
})
