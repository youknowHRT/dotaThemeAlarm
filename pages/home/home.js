let time = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minItems:[1,2,3,4,5,6,7,8,9,10,15,20,25,30,45,60],
    bigItemShow:false,
    timeWeChoose:null,
    backgroundIMG:"/images/regeneration.jpeg",
    minItemTop:"100",
    minItemLeft:"100",
    minItemColor:"red"
  },
  showBigItem(){
    this.setData({ bigItemShow: !this.data.bigItemShow}) 
    console.log(this.data.backgroundIMG)
  },
  chooseTime(event){
    this.setData({
      timeWeChoose: event.currentTarget.dataset.id * 60
    })
    time.defaultTime = this.data.timeWeChoose
    setTimeout(()=>{
      this.setData({
        bigItemShow: false,
      })
    },200)
    
    
  },
  onMyEvent(event){
    console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let bgDataSet = wx.getStorageSync('bgDataInfo')
    if (bgDataSet){
      this.setData({ backgroundIMG: bgDataSet })
    }
    //背景图片转码
    wx.getFileSystemManager().readFile({
      filePath: this.data.backgroundIMG, 
      encoding: 'base64', 
      success: res => {
        this.setData({
          backgroundIMG: 'data:image/jpeg;base64,' + res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})