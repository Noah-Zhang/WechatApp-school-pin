Page({
    data: {
        location: ['火车站', '高铁站', '中国矿业大学'],
        depIndex: 2,
        desIndex:0,
        date: '2016-12-07',
        time: '17:01',
        number: ['1人','2人','3人'],
        numIndex:0
    },
    bindDepartureChange: function (e) {
        this.setData({
            depIndex: e.detail.value
        })
    },
    bindDestinationChange: function (e) {
        this.setData({
            desIndex: e.detail.value
        })
    },
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    bindTimeChange: function (e) {
        this.setData({
            time: e.detail.value
        })
    },
    bindNumberChange: function (e) {
        this.setData({
            numIndex: e.detail.value
        })
    }


})
