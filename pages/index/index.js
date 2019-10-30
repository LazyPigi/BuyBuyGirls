import request from "../../utils/request.js"

Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    banners: [],
    menus: [],
    floors: []
  },

  onLoad() {
    // 轮播图
    request({
      url: "/api/public/v1/home/swiperdata"
    }).then(res => {
      const {message} = res.data;
      console.message;
      this.setData({
        banners: message
      })
    }),

    // 分类菜单栏
    request({
      url: "/api/public/v1/home/catitems"
    }).then(res => {
      const { message } = res.data;

      this.setData({
        menus: message
      })
    }),

    // 楼层列表
    request({
      url: "/api/public/v1/home/floordata"
    }).then(res => {
      const { message } = res.data;

      this.setData({
        floors: message
      })
    })

  },
})
