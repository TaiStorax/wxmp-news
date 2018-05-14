
Page({
  data:{
firstImage:""

  },  
  onLoad(){
  wx.request({
    url: 'https://test-miniprogram.com/api/news/list',
    data: {
      type: 'cj'
    },
    success: res => {
      console.log(res)
      let result=res.data.result[0]
      let firstImage=result.firstImage
     console.log(result,firstImage)
      
    }
  })
}})
