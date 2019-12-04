let time = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgMin:[
      // '../../images/arcane.jpeg',
      // '../../images/bounty.jpeg',
      // '../../images/doubleDamage.jpeg',
      // '../../images/haste.jpeg',
      // '../../images/illusion.jpeg',
      // '../../images/invisibility.jpeg',
      // '../../images/regeneration.jpeg',
      '/images/arcane.jpeg',
      '/images/bounty.jpeg',
      '/images/doubleDamage.jpeg',
      '/images/haste.jpeg',
      '/images/illusion.jpeg',
      '/images/invisibility.jpeg',
      '/images/regeneration.jpeg',
    ]
  },
  chooseTheme(event){
    let rawBgData = event.currentTarget.dataset.id
    time.bgData = rawBgData

    wx.setStorageSync("bgDataInfo", time.bgData)
    wx.showToast({
      title: '背景设置成功',
    })

    wx.switchTab({
      url:"/pages/home/home"
    })
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