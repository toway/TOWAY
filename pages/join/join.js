Page({
  data:{
    disabled:'',
    btnMessage: '提交报名'
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  confirm(){
    const _this = this
    wx.showToast({
      title: '恭喜你报名成功',
      duration: 3000,
      success(){
        _this.setData({
          btnMessage: '已报名',
          disabled: 'disabled'
        })

      },
      complete(){
        setTimeout(()=>{
          wx.navigateTo({
            url: '../details/details'
          })
        },4000)

      }
    })
  },
  // 验证手机号码
  checkMobile(number){
        var reg = /^(((13[0-9]{1})|130|131|132|133|134|135|136|137|138|139|140|141|142|143|144|145|146|147|148|149|150|151|152|153|155|156|157|158|159|177|180|181|182|183|185|186|187|188|189)+\d{8})$/;
        return reg.test(number)
    }
})
