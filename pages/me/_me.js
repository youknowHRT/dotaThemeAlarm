const { http } = require('../../utils/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:'tomato',
    tomatoes:{},
    todos:{},
  },
  changeTab(event){
    let name=event.currentTarget.dataset.name
     this.setData({tab:name})
  },

  onShow: function () {
    this.fetchTomatoes()
    this.fetchTodos()
  },
  fetchTomatoes(){
    http.get(`/tomatoes`, {
      is_group: "yes"
    }).then(response=>{
      console.log(response)
      this.setData({ tomatoes: response.response.data.resources})
    })
  },
  fetchTodos(){
    http.get(`/todos`, {
      is_group: "yes"
    }).then(response=>{
      this.setData({todos:response.response.data.resources})
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