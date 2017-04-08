// var util= require('../../util/util');
// var Page = new util.Page({
//   Wdgs: [iconList.Wdg]
// });

Page({
  data:{
    userList:[{
      username:''
    },{
      username:''
    },],
    user:{
      role: 1, // 活动者 1 ,发布者 2
      status:"join", //1--join:报名 joined 已报名 finished: 已结束 ; 2 -- deleted:删除
      // btnMessage: '我要报名'
    },
    type:''

  },
  onLoad(options){
    console.log(options)
  },
  onReady(){

    const status = this.data.user.status
    if ( status == 'join' || status == 'joined') {
      this.setData({
        type: 'primary',
        'user.btnMessage': status == 'join'? '我要报名' : '已报名'
      })
    }
    if (status == 'finished') {
      this.setData({
        type: 'default',
        'user.btnMessage': '已结束',
        'user.btnDisabled': 'disabled'
      })
    }
    if (status == 'deleted') {
      this.setData({
        type: 'warn',
        'user.btnMessage': '删除'
      })
    }
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'toway', // 分享标题
      desc: 'desc', // 分享描述
      path: '/pages/index/index' // 分享路径
    }
  },
  join:function(){
    const status = this.data.user.status
    if (status == 'join') {
      wx.login({
        success(res){
          if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }

          wx.navigateTo({
            url: '../join/join',

          })
        }
      })

    }

    if (status == 'deleted') {
      wx.showModal({
        content: '尊的要删除发布的活动吗?\n我觉得还可以挽救一下',
        cancelText: '手抖点错',
        confirmText: '删除',
        confirmColor: '',

        success(res){
          if(res.confirm) console.log('confirm')
        }
      })
    }

  }
})
