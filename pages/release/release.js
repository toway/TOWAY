Page({
  data:{
    picker:[
      {
        date: '2016-009-01',
        time: '12:01'
      },
      {
        date: '2016-09-01',
        time: '12:01'
      },
      {
        date: '2016-09-01',
        time: '12:01'
      },
    ],

    userTags: [{
      tagname: '姓名',
      choose: true
    },{
      tagname: '身份证号码',
      choose: false
    },],
    tempPath:''
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  chooseImg(){
    var _this = this;
    wx.chooseImage({
      count: 5, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        _this.setData({
          tempPath: tempFilePaths
        })

      }
    })
  },
  bindDateChange: function(e) {
    const index = + e.target.dataset.index;
    console.log(index)
      const key = `picker[${index}].date`;
      console.log(key)
      if(index == 0){
        this.setData({
          // 'picker["' + index + '"].date': e.detail.value
          // key: e.detail.value
          'picker[0].date': e.detail.value
        })
      }
      if(index == 1){
        this.setData({
          // 'picker["' + index + '"].date': e.detail.value
          // key: e.detail.value
          'picker[1].date': e.detail.value
        })
      }
      if(index == 2){
        this.setData({
          // 'picker["' + index + '"].date': e.detail.value
          // key: e.detail.value
          'picker[2].date': e.detail.value
        })
      }
  },
   bindTimeChange: function(e) {
     const index = e.target.dataset.index;
     console.log(index);
     if(index == 0){
       this.setData({
         // 'picker["' + index + '"].date': e.detail.value
         // key: e.detail.value
         'picker[0].time': e.detail.value
       })
     }
     if(index == 1){
       this.setData({
         // 'picker["' + index + '"].time': e.detail.value
         // key: e.detail.value
         'picker[1].time': e.detail.value
       })
     }
     if(index == 2){
       this.setData({
         // 'picker["' + index + '"].time': e.detail.value
         // key: e.detail.value
         'picker[2].time': e.detail.value
       })
     }
  },
  switch1Change: function (e){
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change: function (e){
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  },
  chooseInfo(e){
    // var ele = document.getElementsByClassName('user-tag');
    var index = e.target.dataset.index;
    console.log(this.data.userTags[index].choose)
    // ele[index].classList += 'user-tag-active';
    var key = `userTags[${index}].choose`;
    var param = {};
    param[key] = !this.data.userTags[index].choose
    this.setData(param)
    console.log(this.data.userTags[index].choose)
  }
})
