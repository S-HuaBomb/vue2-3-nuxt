/* eslint-disable no-unused-vars */
// import axios from 'axios'
import request from './request'
import MockAdapter from 'axios-mock-adapter'

import { LoginUser, users } from './mockData'
let _Users = users;


// 设置模拟调试器实例
var mock = new MockAdapter(request);

// 模拟接收'/users'下的Get请求
// reply方法的参数格式（status,data,headers)
mock.onGet('/users').reply(200, {
    users: [
        { id: 1, name: 'John Smith' },
        { id: 2, name: 'kali Smith' },
        { id: 3, name: 'John kame' },
    ]
});

mock.onGet('/api', { params: { searchText: 'John' } }).reply(200, {
    users: [
        { id: 1, name: 'John Smith' }
    ]
})

// 登录
mock.onPost('/loginUser').reply(config => {
    // config.data 即为前端传入的参数
    let { username, password } = JSON.parse(config.data);
    return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
            let hasUser = LoginUser.some(userItem => {
                if (userItem.userName == username && userItem.password == password) {
                    user = JSON.parse(JSON.stringify(userItem));
                    user.password = undefined;
                    return true;
                }
            });
            if (hasUser) {
                resolve([200, { code: 200, msg: '请求成功', user }])
            } else {
                resolve([200, { code: 500, msg: '账号或密码错误' }])
            }
        }, 1000)
    })
})

// 获取用户列表
mock.onGet('/user/listpage').reply(config => {
    let { page, name } = config.params;
    let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
    });
    let total = mockUsers.length;
    mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, {
                total: total,
                users: mockUsers
            }]);
        }, 1000);
    });
});

// 删除用户
mock.onGet('/user/remove').reply(config => {
    let { id } = config.params;
    _Users = _Users.filter(u => u.id !== id);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, {
                code: 200,
                msg: '删除成功'
            }]);
        }, 500);
    });
});

// 批量删除用户
mock.onGet('/user/batchremove').reply(config => {
    let { ids } = config.params;
    ids = ids.split(',');
    _Users = _Users.filter(u => !ids.includes(u.id));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, {
                code: 200,
                msg: '删除成功'
            }]);
        }, 500);
    });
});

// 编辑用户
mock.onGet('/user/edit').reply(config => {
    let { id, name, addr, age, birth, sex } = config.params;
    _Users.some(u => {
        if (u.id === id) {
            u.name = name;
            u.addr = addr;
            u.age = age;
            u.birth = birth;
            u.sex = sex;
            return true;
        }
    });
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, {
                code: 200,
                msg: '编辑成功'
            }]);
        }, 500);
    });
});

// 新增用户
mock.onGet('/user/add').reply(config => {
    let { name, addr, age, birth, sex } = config.params;
    _Users.push({
        name: name,
        addr: addr,
        age: age,
        birth: birth,
        sex: sex
    });
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, {
                code: 200,
                msg: '新增成功'
            }]);
        }, 500);
    });
});

