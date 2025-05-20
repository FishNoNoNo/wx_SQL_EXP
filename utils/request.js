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
          console.log(res.data)
      }
    })
}

function checkout(roomId,userId){
  const url=baseUrl+'/checkout'
  const data={
    roomId:roomId,
    userId:userId
  }
  wx.request({
    url: url,
    data: data,
    method:'GET',
    success: (res) => {
      console.log(res.data)
    }
  })


function roomList(permission,status,type){
  const url=baseUrl+'/roomList'

  const data ={
    permission:permission,
    status:status,
    type:type
  }
}

function checkout(roomId,userId){
  const url=baseUrl+'/checkout'
  const data={
    roomId:roomId,
    userId:userId
  }
  wx.request({
    url: url,
    data: data,
    method:'GET',
    success: (res) => {
      console.log(res.data)
    }
  })
}

module.exports={
    bookRoom:bookRoom,
    checkin:checkin
}