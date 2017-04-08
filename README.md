# weixinapp
突围小程序
1. index 首页服务端返回数据

请求方式 | GET | 无参数
------------ | ------------- | ------------
服务器返回数据 | json
路径 | pages/index/index  | Content Cell
----
First Header | Second Header | Third Header
------------ | ------------- | ------------
Content Cell | Content Cell  | Content Cell
Content Cell | Content Cell  | Content Cell
```
  const json = {
    "activity": [
        { // 活动
            "id": 1, //活动唯一标识码 number
            "avatarUrl":"http://wx.qlogo.cn/mmhead/PiajxSqBRaEKGeRlicDnVvhLZj30ibYYWz5qib0EnFWtpZ8BJJMs4ANRFg/132", // 发布者头像地址 string
            "nickname":"Lemon~~", // 发布者昵称 string
            "beforeTime": "3小时前", // 发布时间 string
            "status": { // 活动状态
              type: 'ended', // 1. ended 活动已结束 2. doing 报名中

            },
            'viewImg':'', // 活动主图地址
            "title": "与心灵清净独处\r|\r周末换种方式去旅行\r(3期)", // 活动标题
            "start": "06月18日", // 活动开始时间
            "end":"06月19日",  // 活动结束时间
            "address": "惠州市新兴县酒店大道889号", //活动地址
            "price": "832", // 活动价格  number
            "joinNum": "25", // 已报名人数 number
            "limitNum": "60" // 限制人数 number
        }
  }
```
