import request from "./utils/request.js"

//app.js
App({
  // 项目运行时候触发的声明周期，只执行一次
  onLaunch() {
    // 初始化

    // 设置默认基准路径
    request.defaults.baseURL = "https://api.zbztb.cn";

    // 监听错误的请求
    request.onError(res => {
      console.log(`拦截错误的:`, res)

      if (res.statusCode === 404) {
        wx.showToast({
          title: '接口不存在',
          icon: "error"
        })
      }
    })
  },

  // 每当程序显示时候会触发，定时器
  onShow() {

  },

  // 每当程序隐藏时候都会触发，定时器
  onHide() {

  },

  globalData: {
    userInfo: null,
    abc: 123
  }
})