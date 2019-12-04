const {http} = require('../../utils/http.js')
const {app_id, app_secret} = getApp().globalData
Page({

  data: {

  },
  onShow: function () {
   
  },
  login(event){
    console.log(event)
    let encrypted_data = event.detail.encryptedData
    let iv =event.detail.iv
    this.wxLogin(encrypted_data, iv)
  },
  wxLogin(encrypted_data, iv){
    wx.login({
      success: (res) => this.loginMe(res.code, iv,encrypted_data)
    })
  },
  loginMe(code,iv,encrypted_data){
    http.post(`/sign_in/mini_program_user`, {
      code,
      iv,
      encrypted_data,
      app_id,
      app_secret,
    })
    .then(response => {
      console.log(response)
      wx.setStorageSync('me', response.response.data.resource)
      wx.setStorageSync('X-token', response.response.header["X-token"])
      wx.reLaunch({
        url: `/pages/home/home`,
      })
    })
    // wx.reLaunch({
    //   url: `/pages/home/home`,
    // })
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