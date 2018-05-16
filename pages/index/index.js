
Page({
  data: {
    firstImage: "",
    gn:'国内', gj:'国际', cj:'财经', yr:'娱乐', js:'军事', ty:'体育', qt:'其他',
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