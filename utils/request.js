const baseUrl = "http://127.0.0.1:8010/api";

function bookRoom(phone, name, roomId) {
    const url = baseUrl + '/bookRoom';
    const data = { phone, name, roomId };

    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: "POST",
            data: data,
            success: (res) => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data);
                } else {
                    reject(new Error('请求失败，状态码：' + res.statusCode));
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

function checkin(roomId, userId) {
    const url = baseUrl + '/checkin';
    const data = { roomId, userId };

    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: "PUT",
            data: data,
            success: (res) => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data);
                } else {
                    reject(new Error('请求失败，状态码：' + res.statusCode));
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

function checkout(roomId, userId) {
    const url = baseUrl + '/checkout';
    const data = { roomId, userId };

    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: "PUT",
            data: data,
            success: (res) => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data);
                } else {
                    reject(new Error('请求失败，状态码：' + res.statusCode));
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

function roomList(permission, status, type, page, pageSize) {
    const url = baseUrl + '/roomList';
    const data = { permission, status, type, page, pageSize };

    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: "GET",
            data: data,
            success: (res) => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data?.data || null);
                } else {
                    reject(new Error('请求失败，状态码：' + res.statusCode));
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

function userList(status, page, pageSize) {
    const url = baseUrl + '/userList';
    const data = { status, page, pageSize };

    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: "GET",
            data: data,
            success: (res) => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data?.data || null);
                } else {
                    reject(new Error('请求失败，状态码：' + res.statusCode));
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

function getManager(id) {
    const url = baseUrl + '/getManager';
    const data = { id };

    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: "GET",
            data: data,
            success: (res) => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data?.data || null);
                } else {
                    reject(new Error('请求失败，状态码：' + res.statusCode));
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

module.exports = {
    bookRoom: bookRoom,
    checkin: checkin,
    checkout: checkout,
    roomList: roomList,
    userList: userList,
    getManager: getManager
};