
console.log([
    "|                   _ooOoo_",
    "|                  o8888888o",
    "|                  88\" . \"88",
    "|                  (| -_- |)",
    "|                  O\\  =  /O",
    "|               ____/`---'\\____",
    "|             .'  \\\\|     |//  `.",
    "|            /  \\\\|||  :  |||//  \\",
    "|           /  _||||| -:- |||||-  \\",
    "|           |   | \\\\\\  -  /// |   |",
    "|           | \\_|  ''\\---/''  |   |",
    "|           \\  .-\\__  `-`  ___/-. /",
    "|         ___`. .'  /--.--\\  `. . __",
    "|      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
    "|     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
    "|     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
    "|======`-.____`-.___\\_____/___.-`____.-'======",
    "|                   `=---='",
    "|^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
    "|            佛祖保佑       永无BUG                ",
    "                                               "
].join('\n'));

// // #ifdef H5
// console.log("%c ", "background: url(http://152.136.145.188:9000/yys/9cf39ddaaf03494a8f45737c55f32f52.gif) no-repeat center;padding-left:300px;padding-bottom: 300px;")
// // #endif

// get 获取/set 设置,
// add 增加/remove 删除
// create 创建/destory 移除
// start 启动/stop 停止
// open 打开/close 关闭,
// read 读取/write 写入
// load 载入/save 保存,
// create 创建/destroy 销毁
// begin 开始/end 结束,
// backup 备份/restore 恢复
// import 导入/export 导出,
// split 分割/merge 合并
// inject 注入/extract 提取,
// attach 附着/detach 脱离
// bind 绑定/separate 分离,
// view 查看/browse 浏览
// edit 编辑/modify 修改,
// select 选取/mark 标记
// copy 复制/paste 粘贴,
// undo 撤销/redo 重做
// insert 插入/delete 移除,
// add 加入/append 添加
// clean 清理/clear 清除,
// index 索引/sort 排序
// find 查找/search 搜索,
// increase 增加/decrease 减少
// play 播放/pause 暂停,
// launch 启动/run 运行
// compile 编译/execute 执行,
// debug 调试/trace 跟踪
// observe 观察/listen 监听,
// build 构建/publish 发布
// input 输入/output 输出,
// encode 编码/decode 解码
// encrypt 加密/decrypt 解密,
// compress 压缩/decompress 解压缩
// pack 打包/unpack 解包,
// parse 解析/emit 生成
// connect 连接/disconnect 断开,
// send 发送/receive 接收
// download 下载/upload 上传,
// refresh 刷新/synchronize 同步
// update 更新/revert 复原,
// lock 锁定/unlock 解锁
// check out 签出/check in 签入,
// submit 提交/commit 交付
// push 推/pull 拉,
// expand 展开/collapse 折叠
// begin 起始/end 结束,
// start 开始/finish 完成
// enter 进入/exit 退出,
// abort 放弃/quit 离开
// obsolete 废弃/depreciate 废旧,
// collect 收集/aggregate 聚集


// 加载龙的图片
// let img = new Image()
// img.src = '/static/imgs/long.png'
// img.onload = () => {
//     draw()
// }
// // 把图片绘制到canvas里
// const draw = () => {
//     const canvas = document.getElementById('canvas')
//     canvas.width = img.width
//     canvas.height = img.height
//     const ctx = canvas.getContext('2d')
//     ctx.drawImage(img, 0, 0, img.width, img.height)
//     // 获取像素数据
//     const imgData = ctx.getImageData(0, 0, img.width, img.height).data
//     // 拼接字符
//     join(imgData)
// }
// // 把像素数据拼接成字符
// const join = (data) => {
//     let gap = 10
//     let str = ''
//     for (let h = 0; h < img.height; h += gap) {
//         str += '\n'
//         for (let w = 0; w < img.width; w += gap) {
//             str += ' '// 因为字符的高度普遍都比其宽度大，所以额外添加一个空字符平衡一下，否则最终的图形会感觉被拉高了
//             let pos = (h * img.width + w) * 4
//             let r = data[pos]
//             let g = data[pos + 1]
//             let b = data[pos + 2]
//             // rgb转换成yuv格式，根据y（亮度）来判断显示什么字符
//             let y = r * 0.299 + g * 0.578 + b * 0.114
//             if (y >= 190) {
//                 // 浅色
//                 str += ' '
//             } else {
//                 // 深色
//                 str += '#'
//             }
//         }
//     }
//     console.log(str)
// }

