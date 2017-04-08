
var iconList = {};    //设置一个对象名字存放数据
iconList.Wdg= {
      //存放要给VIEW层的页面数据，closeAllIcon ，showAllIcon 是对应的方法
  data: {
    bothShow: '', // 是否显示 有32/60 报名
    color: '', //显示字体颜色
    price: '', //价格
    has: '', // 已报名
    all: '' //总人数
  },

};

module.exports=iconList  //将接口的进行暴露，方便在外面调用
