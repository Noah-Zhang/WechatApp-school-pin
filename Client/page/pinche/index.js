Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,

        destination: [{
            title: '回学校',
            src: '../../image/destination/cumt.png'
        },{
            title: '去火车站',
            src: '../../image/destination/railway.png'
        },{
            title: '去高铁站',
            src: '../../image/destination/hs-railway.png'
        }]
    },


})
