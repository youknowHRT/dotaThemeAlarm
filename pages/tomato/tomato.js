const {http}=require('../../utils/http.js')

let time = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setTime: time.defaultTime,
    showTime:"",
    timer:null,
    timeStatus:'start',
    confirmVisible:false,
    againButtonVisible:false,
    finishConfirmVisible:false,
    tomato:{},
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
    console.log(time)
    this.setData({
      setTime: time.defaultTime
    })
    this.startTimer()
    // http.post(`/tomatoes`).then(response=>{
    //   this.setData({tomato:response.response.data.resource})
    // })
  },
  startTimer(){
    this.setData({ timeStatus : 'start'})
    this.data.timer = setInterval(() => {
      this.data.setTime--
      this.changeTime()
      if (this.data.setTime === 0) { 
        this.setData({againButtonVisible:true})
        this.setData({ finishConfirmVisible:true})
        //播放音频
        this.playAlarm()

        return this.clearTimer()
      }
    }, 1000)
  },
  //铃响提示
  playAlarm(){
     this.myaudio = wx.createInnerAudioContext();
    this.myaudio.autoplay = true;
    this.myaudio.src = "/music/alarm.mp3";
    console.log(this.myaudio.src)
    this.myaudio.onPlay(
      ()=>{console.log("开始播放")}
    );
    this.myaudio.onError((res) => {//打印错误
      console.log(res.errMsg);//错误信息
      console.log(res.errCode);//错误码
    })

  },

  clearTimer(){
    // this.data.timeStatus='stop'
    this.setData({ timeStatus: 'stop' })
    clearInterval(this.data.timer)
    this.data.timer=null 
  },
  changeTime(){
    let m = Math.floor(this.data.setTime/60)
    let s = Math.floor(this.data.setTime%60)
    if(s===0){
      s="00"
    }
    if((s+"").length===1){
      s="0"+s
    }
    if((m+"").length===1){
      m="0"+m
    }
    this.setData({showTime:`${m}:${s}`})
  },

  showConfirm(){
    this.setData({ confirmVisible: true})
    this.clearTimer()
  },
  confirmAbandon(event){
    let content =event.detail
    // http.put(`/tomatoes/${this.data.tomato.id}`,{
    //   description:content,
    //   aborted:true
    // }).then(response=>{
    //   wx.navigateBack({
    //     to: -1
    //   })
    // })
    this.clearTimer()
    wx.navigateBack({
      to: -1
    })
  },
  hideConfirm(){
    this.setData({ confirmVisible: false})
    this.startTimer()
  },
  anotherTomato(){
    // this.data.defaultSecond = 5
    this.setData({ 
      setTime: time.defaultTime,
      againButtonVisible:false
      })
    this.startTimer()
  },
  finishConfirm(event){
    let content=event.detail
    // http.put(`/tomatoes/${this.data.tomato.id}`, {
    //   description: content,
    //   aborted:true
    // })
    this.setData({ finishConfirmVisible: false })
    this.myaudio.stop()
  },
  finishCancel(){
    this.setData({ finishConfirmVisible: false })
    this.myaudio.stop()
    wx.navigateBack({
      to: -1
    })
  },




  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.clearTimer()
    // http.put(`/tomatoes/${this.data.tomato.id}`,{
    //   description:"退出放弃",
    //   aborted:true
    // })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.clearTimer()
    // http.put(`/tomatoes/${this.data.tomato.id}`, {
    //   description: "退出放弃",
    //   aborted: true
    // })
  },
  
  
})