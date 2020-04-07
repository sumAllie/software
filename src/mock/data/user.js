import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '皮卡丘'
  }
];

const Users = [];

for (let i = 0; i < 1; i++){
  Users.push({
    stuid: 1234567890,
    name: "杰尼龟",
    chinese: 124,
    math: 127,
    english: 136,
    spoken: 5,
    listen: 29,
    integrate: 253,
    all: 640,
    time: "2016秋",
    school: "武汉大学",
    major: "软件工程（软件工程类）",
    batch: "本科一批",
    type: "一般统考生"
  })
}

// for (let i = 0; i < 1; i++) {
//   Users.push(Mock.mock({
//     id: Mock.Random.guid(),
//     name: Mock.Random.cname(),
//     addr: Mock.mock('@county(true)'),
//     'age|18-60': 1,
//     birth: Mock.Random.date(),
//     sex: Mock.Random.integer(0, 1)
//   }));
// }

export { LoginUsers, Users };
