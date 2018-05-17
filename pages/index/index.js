
Page({
  data: {
    firstImage: '',
    gn: '国内',
    gj: '国际',
    cj: '财经',
    yr: '娱乐',
    js: '军事',
    ty: '体育',
    qt: '其他',
    newslistArray: [1, 2, 3, 4, 5],
    imgList: "",    //图片列表，动态获取
    defaultImg: "../images/defaultImg.png",    //默认图片
  },

  onLoad() {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: 'cj'
      },
      success: res => {

      }

    })
  }
})