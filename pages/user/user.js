// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rooms:[],
    roomDetailShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.__init__()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  __init__(){
    const rooms=[
      {
          id:'1',
          type:'大床房',
          price:100,
          status:0
      },
      {
          id:'2',
          type:'大床房',
          price:100,
          status:0
      }
    ];
    this.setData({rooms:rooms})
  },
  handleRoomClick(e){
    const roomId=e.detail.id;
    console.log(roomId)
    // console.log(e)
    this.setData({roomDetailShow:true})
  }
})