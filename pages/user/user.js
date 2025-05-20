// pages/user/user.js
var requestUtil = require("../../utils/request.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        rooms: [],
        roomDetail:{},
        roomDetailShow: false
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
    async __init__() {
        const rooms = await requestUtil.roomList('', 0, '', 1, 10)
        this.setData({
            rooms: rooms
        })
    },
    handleRoomClick(e) {
        const roomItem = e.detail.item;
        let userItem = null;
        // console.log(roomItem)
        if (roomItem.status !== 0) {
            userItem = this.findUser(roomItem.id);
        }
        if (userItem) {
            this.setData({
                userDetail: userItem
            })
        }
        // console.log(roomItem)
        // console.log(e)
        // console.log(userItem)
        this.setData({
            roomDetail: roomItem
        })
        // console.log(userItem)
        this.setData({
            roomDetailShow: true
        })

    }
})