/* eslint-disable no-unused-vars */
//引入mockjs
import Mock from 'mockjs'
import {users, LoginUser} from '@/utils/mockData'

// 把传入的参数取出来
const getParams = (url, name) => {
    const index = url.indexOf('?');
    if (index !== -1) {
        const newArr = url.substring(index + 1).split('&');
        for (var i = 0; i < newArr.length; i++) {
            const itemArr = newArr[i].split('=');
            if (itemArr[0] == name) {
                return itemArr[1];
            }
        }
    }
    return null;

}

//使用mockjs模拟数据
Mock.mock('/api', 'get', {
    "ret": 0,
    "data":
    {
        "mtime": "@datetime",  // 随机生成日期时间
        "score|1-800": 800,  // 随机生成1-800的数字
        "rank|1-100": 100,  // 随机生成1-100的数字
        "stars|1-5": 5,  // 随机生成1-5的数字
        "nickname": "@cname",  // 随机生成中文名字
    }
    //data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});

Mock.mock('/users', 'get', (options) => {
    console.log(options)
    var pagenum = getParams(options.url, 'start');
    var pagesize = getParams(options.url, 'limit');

    return {
        status: 200,
        message: '获取电影列表成功！',
    }
})

Mock.mock('/loginUser', 'post', (options) => {
    console.log(options);
    const params = JSON.parse(options.body)

    const hasUser = LoginUser.some(item => {
        if (item.userName == params.username && item.password == params.password) {
            return true
        } else {
            return false
        }
    })
    if (hasUser) {
        return [200,
            {
                code: '200',
                msg: 'success',
                params
            }
        ]
    } else {
        return [200, 
            {
                code: '404',
                msg: 'failed',
                params
            }
        ]
    }
})
