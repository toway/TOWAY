
## <center>突围小程序数据接口</center>
<br/>
<br/>

code

```

├── images  //图片资源
├── pages
│     └── details //详情页模块
│         ├── details.js    //详情页脚本
│         ├── details.json  //详情页配置
│         ├── details.wxml  //详情页结构
│         ├── details.wxss  //详情页样式
│     ├── index     //首页模块
│     ├── join      //加入模块
│     ├── my        //我的模块
│     ├── release   //发布活动模块
│     ├── template  //公共模板
├── utils //工具
│     └── utils.js
├── app.js      // 公共全局脚本
├── app.json    // 公共全局配置
├── app.wxss    // 公共全局样式
└── README.md   // how to use
```
1. index 首页服务端返回数据

请求方式 | GET |
------------ | ---------------- | ------------
路径 | pages/index/index  |
活动状态 | status.type  |
type: | ended  |  //活动已结束
type: | doing  |  //活动报名中


  服务器返回数据 :

```
{
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
---
2. details 详情页数据请求

请求方式 | GET |
------------ | ---------------- 
请求条件  | id = 1
路径 | pages/details/details  
角色: | user.role
role: | 1 | 活动者
role: | 2 | 发布者
活动状态信息: | user.status
status: |  join | 报名(活动者)
status:    | joined | 已报名(活动者)
status:    | finished | 已结束(活动者)
status:    | deleted | 删除(发布者)
服务器返回数据 :
```
{
  userList:[{ // 已报名的用户
    username:'张张'
  },{
    username:'柠檬'
  }],
  user:{//  用户看到的页面
    role: 1, //角色: 活动者 1 ;发布者 2
    status:"join", //1--join:报名 joined 已报名 finished: 已结束; 2 -- deleted:删除
  },
  type:''
  {
    details:{
      { // 活动详情
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
  }
}
```
----
3. release 活动发布

请求方式 | POST |
------------ | ----------------
路径 | pages/release/release  

客户端提交数据 :
```
{
  userId: '123', // 发布者id
  title: '一起去浪',  // 活动标题
  description: '浪里个浪', // 活动描述
  pics:['http://p5.qhimg.com/t01f4229190a609af43.png', http://p5.qhimg.com/t01f4229190a609af43.png], // 发布者添加的图片,
  address: '大鹏', //活动地址
  活动费用: '120', // 活动费用
  picker:[
    {  // 活动开始时间
      date: '2016-009-01',
      time: '12:01'
    },
    { // 活动结束时间
      date: '2016-09-01',
      time: '12:01'
    },
    { // 报名截止时间
      date: '2016-09-01',
      time: '12:01'
    },
  ],

  userTags: [{  // 用户报名填写项
    tagname: '姓名',  // 用户姓名
    choose: true      // 必填
  },{
    tagname: '身份证号码', // 用户姓名
    choose: false // 非必填
  },{
    tagname: '手机号', // 用户手机号
    choose: true // 必填
  },{
    tagname: '性别', // 用户性别
    choose: false // 非必填
  },{
    tagname: '年龄', // 用户年龄
    choose: false // 非必填
  }],

}
```

----
4. join 报名模块

请求方式 | POST |
------------ | ----------------
路径 | pages/join/join  

客户端提交数据 :
```
{
  userId: '', //用户ID
  join:[{
    type: '姓名',
    name: 'zhangzhang',
    },
    {
      type: '年龄',
      age: '25',
    },
    {
      type: '性别',
      sex: '男',
    }
  ]
}
```

----
4. my 我的模块

请求方式 | GET |
------------ | ----------------
路径 | pages/my/my  
请求条件 | userId

```
{
    "activity": [
        { // 活动一
          role: '1',// 活动参与者
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
        },
        { // 活动2
          role: '2',// 活动发布者
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
        },
  }
```  
