// pages/manager/manager.js
var requestUtil=require("../../utils/request.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        manager: {
            id: '',
            name: '',
            phone: '',
            permission: ''
        },
        rooms: [],
        users: [],
        infoContainerHeight: 0,
        swiperHeight: '100vh',
        roomDetailShow: false,
        userDetailShow: false,
        roomDetail: {
            id: '',
            type: '',
            price: 0,
            status: 0
        },
        userDetail: {
            id: '',
            name: '',
            phone: '',
            status: 0,
            roomId: '1'
        }
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
        this.getInfoHeight();
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
    __init__() {
        const rooms = [{
                id: '1',
                type: '大床房',
                price: 100,
                status: 0
            },
            {
                id: '2',
                type: '大床房',
                price: 100,
                status: 1
            },
            {
                id: '3',
                type: '大床房',
                price: 100,
                status: 2
            },
            {
                id: '4',
                type: '大床房',
                price: 100,
                status: 3
            }
        ];
        const users = [{
                id: '1',
                name: '李四',
                phone: '13676623595',
                status: 1,
                roomId: '1'
            },
            {
                id: '2',
                name: '李四',
                phone: '13676623595',
                status: 2,
                roomId: '2'
            },
            {
                id: '3',
                name: '李四',
                phone: '13676623595',
                status: 1,
                roomId: '3'
            },
            {
                id: '4',
                name: '李四',
                phone: '13676623595',
                status: 2,
                roomId: '4'
            }
        ]
        // this.setData({
        //     rooms: rooms,
        //     users: users
        // })
    },
    findUser(roomId) {
        // 使用api获取数据
        for (let i = 0; i < this.data.users.length; i++) {
            const element = this.data.users[i];
            if (element.roomId == roomId) {
                return element;
            }
        }
        return undefined
    },
    handleRoomClick(e) {
        const roomItem = e.detail.item;
        let userItem = null;
        // console.log(roomItem)
        if (roomItem.status !== 0) {
            userItem = this.findUser(roomItem.id);
        }
        if (userItem){
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

    },
    handleUserClick(e) {
        const userItem = e.detail.item;
        // console.log(userId)
        // console.log(e)
        // console.log(userItem)
        this.setData({
            userDetail:userItem
        })
        // console.log(this.userDetail)
        this.setData({
            userDetailShow: true
        })
    },
    async changeMan(e){
        const id=e.detail.value.id
        const manager=await requestUtil.getManager(id)
        this.setData({manager:manager})
        const roomList=await requestUtil.roomList(manager.permission,'','',1,10)
        this.setData({rooms:roomList})
        const userList=await requestUtil.userList('',1,10)
        this.setData({users:userList})
    },
    getInfoHeight() {
        wx.createSelectorQuery().select('#infoContainer').boundingClientRect((rect) => {
            if (rect) {
                // console.log(rect)
                const height = rect.height;
                this.setData({
                    infoContainerHeight: height,
                    swiperHeight: `calc(100vh - ${height}px - 10px)`
                })
                // this.setData
            }
        }).exec();
    }
})