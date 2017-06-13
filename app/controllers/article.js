//文章精选列表页面路由
exports.article = function(req, res) {
    res.render('article', {
        article_list: [{
            article_background: 'images/article/chonnam.jpg',
            title: '邂逅Chonnam，感悟留学',
            info: '作者：RSPT创始人 陆壹佛爷',
            _id: 1
        }, {
            article_background: 'images/article/710x360.jpg',
            title: '留学感悟 为什么义无反顾地选择出国留学？',
            info: '作者:中英网',
            _id: 2
        }, {
            article_background: 'images/article/america.jpg',
            title: '美国留学感悟',
            info: '作者:米高社区 ',
            _id: 3
        }, {
            article_background: 'images/article/england.jpg',
            title: '英国一年留学感悟:学习是一段悲伤的故事',
            info: '作者:中英网',
            _id: 4
        }, {
            article_background: 'images/article/army.jpg',
            title: '出国留学感悟：我就是“中国制造”的军人',
            info: '作者: 郭效东 选自《强军之路——亲历军队改革》',
            _id: 5
        }, {
            article_background: 'images/article/edu.jpg',
            title: '读书，给我最新鲜的快乐',
            info: '作者: 优弗教育',
            _id: 6
        }, {
            article_background: 'images/article/england1.jpg',
            title: '当想象照进现实',
            info: '85后英国留学的的真实感悟日志',
            _id: 7
        }, {
            article_background: 'images/article/hongkong.jpg',
            title: '清华学生感悟：留学是一个寻找内在自我的过程',
            info: '作者：老查留学',
            _id: 8
        }, {
            article_background: 'images/article/huangxiaochu.jpg',
            title: '出国后体会最深刻的感悟是什么？留学生们的飙泪自白',
            info: '作者：黄小厨 from INSIGHT CHINA',
            _id: 9
        }, {
            article_background: 'images/article/korean.jpg',
            title: '在韩博士生的韩国留学感悟：丰富自我',
            info: '作者：赵峻/建国大学应用统计专业博士',
            _id: 10
        }, {
            article_background: 'images/article/ashaniya.jpg',
            title: '留学经历：爱沙尼亚留学感悟',
            info: '',
            _id: 11
        }, {
            article_background: 'images/article/tiandao.jpg',
            title: '欧洲留学生分享不一样的欧洲留学感悟',
            info: '作者：天道留学教育',
            _id: 12
        }, {
            article_background: 'images/article/yumengran.jpg',
            title: '我的英国留学感悟',
            info: '作者：2009级于梦然',
            _id: 13
        }]

    })
}

//文章精选详情页面路由
exports.detail = function(req, res) {
    var id = req.params.id //url中的id
    res.render('article-detail', {
        article_detail: [{
            content_address1: '/images/article/chonam-luyi1.jpg',
            content_address2: '/images/article/chonam-luyi2.jpg',
        }, {
            content_address1: '/images/article/article-1.jpg',
            content_address2: '/images/article/article-2.jpg',
        }, {
            content_address1: '/images/article/article-3.jpg',
            content_address2: '/images/article/article-4.jpg',
        }, {
            content_address1: '/images/article/article-5.jpg',
            content_address2: '/images/article/article-6.jpg',
        }, {
            content_address1: '/images/article/article-7.jpg',
            content_address2: '/images/article/article-8.jpg',
        }, {
            content_address1: '/images/article/article-9.jpg',
            content_address2: '/images/article/article-10.jpg',
        }, {
            content_address1: '/images/article/article-11.jpg',
            content_address2: '/images/article/article-12.jpg',
        }, {
            content_address1: '/images/article/article-13.jpg',
            content_address2: '/images/article/article-14.jpg',
        }, {
            content_address1: '/images/article/article-15.jpg',
            content_address2: '/images/article/article-16.jpg',
        }, {
            content_address1: '/images/article/article-17.jpg',
            content_address2: '/images/article/article-18.jpg',
        }, {
            content_address1: '/images/article/article-19.jpg',
            content_address2: '/images/article/article-20.jpg',
        }, {
            content_address1: '/images/article/article-21.jpg',
            content_address2: '/images/article/article-22.jpg',
        }, {
            content_address1: '/images/article/article-23.jpg',
            content_address2: '/images/article/article-24.jpg',
        }][id - 1]
    })
}
