//生活视频列表页面路由
exports.lifechannel = function(req, res) {
    res.render('lifechannel', {
        life_list: [{
            life_poster: 'images/life/1.png',
            title: '巢人纪事－日本留学生真实记录留学生活',
            author: 'by CircusRabbit',
            introduction: '巢来巢往系列，日本留学不孤单，作者用纪录片的形式讲述日本留学生真实生活',
            _id: 1,
        }, {
            life_poster: 'images/life/2.png',
            title: '难以适应留学生活？在英国第7天 我在宿舍哭得撕心裂肺【留星语】',
            author: 'by 易申网',
            introduction: '即使当时哭得上气不接下气，我也清楚的意识到，此刻我只能依靠自己。',
            _id: 2,
        }, {
            life_poster: 'images/life/3.png',
            title: '励志！一个北京留学生在东京的打工生活',
            author: 'by 征服_1598',
            introduction: '新系列开始了！Ryu和YUMA将会把，在日本东京生活的外国人最真实的姿态，拍成视频给大家。今天就来看看北京人的留学生在东京的打工生活吧！不再错过更新！',
            _id: 3,
        }, {
            life_poster: 'images/life/4.png',
            title: '来自韩国留学生的生活。我们喜欢在中国生活',
            author: 'by RongTai12',
            introduction: '来自韩国留学生的生活。我们喜欢在中国生活',
            _id: 4,
        }, {
            life_poster: 'images/life/5.png',
            title: '【意式形态ITAologico】意大利留学生活',
            author: 'by 138****7211_m1099',
            introduction: '',
            _id: 5,
        }, {
            life_poster: 'images/life/6.png',
            title: '揭露美帝留学生的奢靡生活！',
            author: 'by 白树根_1974',
            introduction: '揭露美帝留学生的奢靡生活！',
            _id: 6,
        }, {
            life_poster: 'images/life/7.png',
            title: '英国曼大留学生用《Seve》鬼步舞蹈纪录生活点滴，环境好美！',
            author: 'by 火影忍者',
            introduction: '',
            _id: 7,
        }, {
            life_poster: 'images/life/8.png',
            title: '【第一人称英国】补记留学英国生活 小城小事',
            author: 'by 只如初见',
            introduction: '自制 去图书馆之前正好出去转一圈 英国留学之小城小事系列，日更中',
            _id: 8,
        }, {
            life_poster: 'images/life/9.png',
            title: '韩国A直播公司“面试” 探访 - 韩国留学生活日记vlog ＃18',
            author: 'by 加尔福特_1037',
            introduction: '去了韩国afreecaTV公司总部“参观学习 交流沟通',
            _id: 9,
        }, {
            life_poster: 'images/life/10.png',
            title: '【留学生的中国生活】留学生们在中国最让他们感动和失',
            author: 'by 请让钱怀孕',
            introduction: '',
            _id: 10,
        }]
    })
}

//生活视频详情页面路由
exports.detail = function(req, res) {
    var id = req.params.id //url中的id
    res.render('lifechannel-detail', {
        life_detail: [{
            lifeVideo: 'http://www.iqiyi.com/common/flashplayer/20170601/14401a7ff0f5.swf?vid=79a8e7863dc7a71dea46853890362bc2&pageURL=w_19ru1jzlfh.swf&albumId=0&tvId=7930243409&isPurchase=0&cnId=27&share_sTime=0&share_eTime=1374&source=&purl=',
            title: '巢人纪事－日本留学生真实记录留学生活',
            info: '留学生 留学生活 真实记录',
        }, {
            lifeVideo: 'http://player.video.qiyi.com/6151467d9fb5c1ea5bf33df2f05ce60c/0/284/w_19ru1hpe99.swf-albumId=0-tvId=7932702209-isPurchase=0-cnId=12',
            title: '难以适应留学生活？在英国第7天 我在宿舍哭得撕心裂肺【留星语】',
            info: '即使当时哭得上气不接下气，我也清楚的意识到，此刻我只能依靠自己。',
        }, {
            lifeVideo: 'http://player.video.qiyi.com/ea5b1e969f9b907a5daa7a714abe8909/0/575/w_19ru4h2v5h.swf-albumId=0-tvId=7869598809-isPurchase=0-cnId=21',
            title: '励志！一个北京留学生在东京的打工生活',
            info: '新系列开始了！Ryu和YUMA将会把，在日本东京生活的外国人最真实的姿态，拍成视频给大家。今天就来看看北京人的留学生在东京的打工生活吧！不再错过更新！',
        }, {
            lifeVideo: 'http://player.video.qiyi.com/77367741818baa15f514a626354347b9/0/396/w_19rtwubndp.swf-albumId=0-tvId=7676714609-isPurchase=0-cnId=21',
            title: '来自韩国留学生的生活。我们喜欢在中国生活',
            info: '来自韩国留学生的生活。我们喜欢在中国生活',
        }, {
            lifeVideo: 'http://player.video.qiyi.com/ccc846dd71e3f846ff34989e08da3c80/0/291/w_19rtwpdpfd.swf-albumId=0-tvId=7668297109-isPurchase=0-cnId=27',
            title: '【意式形态ITAologico】意大利留学生活',
            info: '',
        }, {
            lifeVideo: 'http://player.video.qiyi.com/bfbc3843ba4ba2ad43df9cd70a938818/0/610/w_19ruilumc5.swf-albumId=0-tvId=6545231609-isPurchase=0-cnId=27',
            title: '揭露美帝留学生的奢靡生活！',
            info: '揭露美帝留学生的奢靡生活！',
        }, {
            lifeVideo: 'http://player.video.qiyi.com/a14b0b2dae647bbed66565d55b8a5c9b/0/298/w_19rtx3v93h.swf-albumId=0-tvId=7661269409-isPurchase=0-cnId=21',
            title: '英国曼大留学生用《Seve》鬼步舞蹈纪录生活点滴，环境好美！',
            info: '',
        }, {
            lifeVideo: 'http://player.video.qiyi.com/37d47624d761e09421d03c3575bbd69e/0/1153/w_19rtzc4cux.swf-albumId=0-tvId=7527515509-isPurchase=0-cnId=27',
            title: '【第一人称英国】补记留学英国生活 小城小事',
            info: '简单的留学生活，发生在位于英格兰东部的小城故事。 之前的1-8都发在生活区，从9以后发在了科普区。',
        }, {
            lifeVideo: 'http://player.video.qiyi.com/98663e8f95589d6587642ea677a32ee6/0/1159/w_19rtzbzkhl.swf-albumId=0-tvId=7527423509-isPurchase=0-cnId=21',
            title: '韩国A直播公司“面试” 探访 - 韩国留学生活日记vlog ＃18',
            info: '去了韩国afreecaTV公司总部“参观学习 交流沟通”，公司很大，共三层。但意外有很多码农，不过公司各处也不乏各主播们俏皮的身影',
        }, {
            lifeVideo: 'http://player.video.qiyi.com/87292259baa29f388267e92759bf9eb3/0/806/w_19ru78vfs5.swf-albumId=0-tvId=7234052809-isPurchase=0-cnId=6',
            title: '【留学生的中国生活】留学生们在中国最让他们感动和失',
            info: '',
        }][id - 1]
    })
}
