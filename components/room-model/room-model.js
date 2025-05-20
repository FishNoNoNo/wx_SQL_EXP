// components/room-model/room-model.js
var requestUtil=require("../../utils/request.js")

Component({

    /**
     * 组件的属性列表
     */
    properties: {
        detailShow: {
            tyep: Boolean,
            value: false
        },
        roomDetail: {
            type: Object,
            value: {}
        },
        userDetail: {
            type: Object,
            value: {
                id: '',
                name: '',
                phone: '',
                status: 0,
                roomId: '1'
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        bookRoom:(e)=>{
            console.log(e.detail.value)
            const data=e.detail.value;
            const roomId=e.detail.target.dataset.roomid;
            console.log(roomId)
            console.log(e)
            requestUtil.bookRoom(data.name,data.phone,roomId);
        },
        checkin:(e)=>{
            console.log(e)
            const roomId=e.currentTarget.dataset.roomid;
            const userId=e.currentTarget.dataset.userid;
            requestUtil.checkin(roomId,userId)
        }
    },

})