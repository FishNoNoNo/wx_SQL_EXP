// pages/manager/manager.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    manager:{
        id:'',
        name:'',
        phone:'',
        position:''
    },
    rooms:[]
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
  addone(){
    this.setData({
        'manager.id': '1',
        'manager.name': '管理员',
        'manager.phone': '12345678901',
        'manager.position': '超级管理员'
      });
  },
  handleRoomClick(e){
      const roomId=e.detail.id;
      console.log(roomId)
    // console.log(e)
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
    const manager={
      id:'1',
      name:'张三',
      phone:'136....3595',
      position:'前台'
    }
    this.setData({
      rooms:rooms,
      manager:manager
    })
  }
})