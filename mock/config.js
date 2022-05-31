import { getParams } from '@/libs/util'
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin',
    avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
  }
}
const datasourceData = {
  jinyuanceng: [
      {
        value: '1-talkingdata',
        label: '1-TalkingData'
      },
      {
        value: '1-baidu',
        label: '1-百度'
      },
      {
        value: '1-sina',
        label: '1-新浪'
      }
    ],
  mingxiceng: [
      {
        value: '2-talkingdata',
        label: '2-TalkingData'
      },
      {
        value: '2-baidu',
        label: '2-百度'
      },
      {
        value: '2-sina',
        label: '2-新浪'
      }
    ],
  huizongceng:[
      {
        value: '3-talkingdata',
        label: '3-TalkingData'
      },
      {
        value: '3-baidu',
        label: '3-百度'
      },
      {
        value: '3-sina',
        label: '3-新浪'
      }
    ],
  yingyongceng:[
      {
        value: '4-talkingdata',
        label: '4-TalkingData'
      },
      {
        value: '4-baidu',
        label: '4-百度'
      },
      {
        value: '4-sina',
        label: '4-新浪'
      }
    ]
}


export const getDataSourceCascader = req => {
  req = JSON.parse(req.body);
  console.log('mock config.js getDataSourceCascader req===',req);
  var key = req.value;
  console.log(datasourceData[key]);
  return datasourceData[key];
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return USER_MAP[params.token]
}

export const logout = req => {
  return null
}
