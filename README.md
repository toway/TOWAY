
## <center>突围小程序数据接口</center>
<br/>
<br/>

1. index 首页服务端返回数据

请求方式 | GET | 无参数
------------ | ---------------- | ------------
路径 | pages/index/index  |

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
status | 活动者: jo
服务器返回数据 :
```
{
  userList:[{
    username:''
  },{
    username:''
  },],
  user:{//用户
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
