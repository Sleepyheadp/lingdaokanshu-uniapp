export default {
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    // dev: 'http://10.16.4.125:9999',
    // dev: 'http://10.18.1.99:11189',
    // dev: '/api',
    // dev: 'http://10.16.5.72:8088',
    // dev: 'http://10.18.1.99:8088', //线上
    // dev: 'http://10.16.16.152:8099', //本地
	// dev:'http://10.16.3.86:22111',//线上（有数据
	dev:'http://10.18.1.99:22111',//b3线上 
	// dev: 'http://10.18.1.99:8088', //线上 大屏接口
	// dev:'http://10.16.3.86:22111',//最新
	// dev:'http://10.16.5.93:22111',//b3本地
    // dev: 'http://10.16.3.5:8088',
    // dev: 'http://10.16.5.72:9999',
    // dev: 'http://10.16.4.157:9999',
    pro: ''
  },
  websocketUrl: {
    // dev: 'ws://10.16.4.125:9999',
    // dev: 'ws://10.18.1.99:11189',
    // dev: 'ws://10.16.16.33:8092/websocket/map', //之前的
    dev: 'ws://117.161.139.39:10081/citybrain/websocket/map', //之前的
    // dev: 'ws://127.0.0.1:2222',
    // dev: 'ws://10.16.4.157:9999',
    // pro: 'ws://117.161.139.39:10080/citybrain/websocket/map'
    pro: 'ws://117.161.139.39:10081/citybrain/websocket/map'
  }
}
