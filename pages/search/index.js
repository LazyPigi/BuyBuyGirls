// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCancel: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 设置分类页标题
    wx.setNavigationBarTitle({
      title: '商品搜索'
    })
  },

  // 监听输入框输入时候的事件
  handleInput(event){
    // console.log(event)
    const {value} = event.detail
    // console.log(value)
    let showCancel;
    // 判断输入框有没值, value.trim()去除前后空格
    showCancel = value.trim() ? true : false

    this.setData({
      showCancel
    })
  }

})