//思想碰撞页面路由
exports.thinking = function(req, res) {
    res.render('thinking', {
        thinking_list: [{
            thinking_poster: 'images/thinking/1.png',
            title: '瞭望评辨天下 ：低龄留学说利弊',
            author: 'by 瞭望评辨天下',
            introduction: '瞭望评辨天下之20160918，低龄留学说利弊',
            _id: 1,
        }, {
            thinking_poster: 'images/thinking/2.png',
            title: ' 第1期 2017美国马里兰大学毕业致辞到底有没有辱华：她到底有没有诋毁祖国',
            author: 'by 游客',
            introduction: '第一次看到视频只有一分五十秒，女主在说中美空气区别，难道毕业典礼致辞只需要一分多钟？到底全程发生了什么，1p是我的分析，2p是原版视频。我找到的是十分钟的，不排除还有更多的，如果有其他信息，求各位大神更正。',
            _id: 2,
        }, {
            thinking_poster: 'images/thinking/3.png',
            title: ' 第2期 2017美国马里兰大学毕业致辞到底有没有辱华: 原版中文视频',
            author: 'by 游客',
            introduction: '第一次看到视频只有一分五十秒，女主在说中美空气区别，难道毕业典礼致辞只需要一分多钟？到底全程发生了什么，1p是我的分析，2p是原版视频。我找到的是十分钟的，不排除还有更多的，如果有其他信息，求各位大神更正。',
            _id: 3,
        }, {
            thinking_poster: 'images/thinking/4.png',
            title: ' 第3期 2017美国马里兰大学毕业致辞到底有没有辱华: 这可以叫反贼么',
            author: 'by 游客',
            introduction: '第一次看到视频只有一分五十秒，女主在说中美空气区别，难道毕业典礼致辞只需要一分多钟？到底全程发生了什么，1p是我的分析，2p是原版视频。我找到的是十分钟的，不排除还有更多的，如果有其他信息，求各位大神更正。',
            _id: 4,
        }, {
            thinking_poster: 'images/thinking/5.png',
            title: ' 第4期 2017美国马里兰大学毕业致辞到底有没有辱华: 拒绝煽动',
            author: 'by 游客',
            introduction: '第一次看到视频只有一分五十秒，女主在说中美空气区别，难道毕业典礼致辞只需要一分多钟？到底全程发生了什么，1p是我的分析，2p是原版视频。我找到的是十分钟的，不排除还有更多的，如果有其他信息，求各位大神更正。',
            _id: 5,
        }, {
            thinking_poster: 'images/thinking/6.png',
            title: '龚姚东：“留学热”背后的冷思考 ',
            author: 'by 杭州电视台少儿频道',
            introduction: '近年来，留学成了一个非常热门的话题，而且留学低龄潮的现象也越来越突现。',
            _id: 6,
        }]
    })
}

//思想碰撞详情页面路由
exports.detail = function(req, res) {
    var id = req.params.id //url中的id
    res.render('thinking-detail', {
        thinking_detail: [{
            thinking_video: 'http://player.video.qiyi.com/f23c951a304128a5799d5c7e7ddb4022/0/1458/v_19rr9ilni8.swf-albumId=180842601-tvId=539072300-isPurchase=0-cnId=6',
            title: '瞭望评辨天下之低龄留学说利弊',
            info: '《瞭望评辨天下》开播于2009年9月28日，是由新华社旗下的《瞭望》周刊社与辽宁电视台合作推出的一档高端时事评论栏目。该节目节目突出“评”、“辨”形态，力求实现“理性思考指导下的高强度对抗”。'
        }, {
            thinking_video: 'http://player.video.qiyi.com/0715d991818caaf709258bf289b147f8/0/608/v_19rr7fhwyw.swf-albumId=207245001-tvId=683506500-isPurchase=0-cnId=8',
            title: '第1期 2017美国马里兰大学毕业致辞到底有没有辱华：她到底有没有诋毁祖国',
            info: '第一次看到视频只有一分五十秒，女主在说中美空气区别，难道毕业典礼致辞只需要一分多钟？到底全程发生了什么，1p是我的分析，2p是原版视频。我找到的是十分钟的，不排除还有更多的，如果有其他信息，求各位大神更正。'
        }, {
            thinking_video: 'http://player.video.qiyi.com/e89a0b6a148713df791d6ce87ea1242b/0/662/v_19rr7fj0eg.swf-albumId=207245001-tvId=683508900-isPurchase=0-cnId=8',
            title: '第2期 2017美国马里兰大学毕业致辞到底有没有辱华：原版中文视频',
            info: '第一次看到视频只有一分五十秒，女主在说中美空气区别，难道毕业典礼致辞只需要一分多钟？到底全程发生了什么，1p是我的分析，2p是原版视频。我找到的是十分钟的，不排除还有更多的，如果有其他信息，求各位大神更正。'
        }, {
            thinking_video: 'http://player.video.qiyi.com/8664f166c464bf926c603f6ceec1566e/0/152/v_19rr7ef584.swf-albumId=207245001-tvId=683795800-isPurchase=0-cnId=8',
            title: '第3期 2017美国马里兰大学毕业致辞到底有没有辱华: 这可以叫反贼么',
            info: '第一次看到视频只有一分五十秒，女主在说中美空气区别，难道毕业典礼致辞只需要一分多钟？到底全程发生了什么，1p是我的分析，2p是原版视频。我找到的是十分钟的，不排除还有更多的，如果有其他信息，求各位大神更正。'
        }, {
            thinking_video: 'http://player.video.qiyi.com/c8517ba63445cbf1372df72e855b558d/0/584/v_19rr7dtw48.swf-albumId=207245001-tvId=684722100-isPurchase=0-cnId=8',
            title: '第4期 2017美国马里兰大学毕业致辞到底有没有辱华: 拒绝煽动',
            info: '第一次看到视频只有一分五十秒，女主在说中美空气区别，难道毕业典礼致辞只需要一分多钟？到底全程发生了什么，1p是我的分析，2p是原版视频。我找到的是十分钟的，不排除还有更多的，如果有其他信息，求各位大神更正。'
        }, {
            thinking_video: 'http://player.video.qiyi.com/f353dbd18b427ea72acf0eabe261662e/0/1800/v_19rr7hhjks.swf-albumId=206996201-tvId=680426800-isPurchase=0-cnId=12',
            title: '龚姚东：“留学热”背后的冷思考 ',
            info: '近年来，留学成了一个非常热门的话题，而且留学低龄潮的现象也越来越突现。去年一部火爆荧屏的《小别离》就讲述了大城市的三个中产家庭，因为孩子留学而引发的家庭教育规划以及社会价值观的冲击，然而电视剧背后折射出的现象就是留学热。 那么，什么样的孩子适合去海外求学？新课堂国际教育副总裁龚姚东先生就为大家解读了和分析了这一现象。'
        }][id - 1]
    })
}
