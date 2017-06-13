//首页路由
exports.home = function(req, res) {
    res.render('home', {
        home_flexsider: [{
            home_background: "images/travel_the_world.jpg",
            title: "梦想，就是从创建 RSPT 开始",
            subtitle: "Recording Sharing Pondering Transcend",
            _id: 1
        }, {
            home_background: "images/airplane.png",
            title: "跨出国门，人生开始新的旅程",
            subtitle: "不忘初心，方得始终",
            _id: 2
        }, {
            home_background: "images/slide.jpg",
            title: "留学 改变我的世界",
            subtitle: "最好的我与最好的时代",
            _id: 3
        }]
    })
}
