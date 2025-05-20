const baseUrl="http://127.0.0.1:8010/api"

function bookRoom(phone,name,roomId){
    const url=baseUrl+'/bookRoom'
    const data={
        phone:phone,
        name:name,
        roomId:roomId
    }
    wx.request({
      url: url,
      method:"POST",
      data:data,
      success:(res)=>{
          console.log(res)
      }
    })
}

function checkin(roomId,userId){
    const url=baseUrl+'/checkin'
    const data={
        roomId:roomId,
        userId:userId
    }
    wx.request({
      url: url,
      method:"GET",
      data:data,
      success:(res)=>{
          console.log(res)
      }
    })
}

module.exports={
    bookRoom:bookRoom,
    checkin:checkin
}