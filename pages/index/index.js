
Page({
  data: {
    firstImage: "",
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
  },
  
  // newstypeArray: [
  //   { id: 'gn', unique: "国内" },
  //   { id: 'gj', unique: '国际' },
  //   { id: 'cj', unique: '财经' },
  //   { id: 'yr', unique: '娱乐' },
  //   { id: 'js', unique: '军事' },
  //   { id: 'ty', unique: '体育' },
  //   { id: 'qt', unique: '其他' },
  // ],  
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