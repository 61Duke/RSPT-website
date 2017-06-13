//节目访谈页面路由
exports.interview = function(req, res) {
    res.render('interview', {
        interview_channel: [{
            interview_poster: '/images/interview/we/interview-we.png',
            title: 'WE留学生-人物系列',
            author: '纪录片 by WE留学生',
            info: '《WE留学生》人物系列跟踪拍摄了多位留学生在美国的真实生活，通过这一幅幅奋斗与成长的人物故事，展示不同背景的学生从准备留学到独自海外求学的经历与反思。',
            _id: 1,
        }, {
            interview_poster: '/images/interview/shuo/channel.png',
            title: '留学说',
            author: 'by 留学说',
            info: '我们留学生，有话说！《留学说》是一档专属于年轻人的留学生脱口秀栏目，带你扒一扒留学那点事儿。每期邀请几位身在海外的留学生，犀利点评、吐槽分享一个留学热议话题。',
            _id: 2,
        }, {
            interview_poster: '/images/interview/truth/poster.png',
            title: '对口秀《留学的真相》第二季',
            author: 'by 《留学的真相》',
            info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！',
            _id: 3,
        }]

    })
}

//节目访谈列表页面路由
var ID = null;
exports.interview_list = function(req, res) {
    ID = req.params.id //url中的id
    var interview_list = [
        [{
            interview_list_poster: '/images/interview/we/1.png',
            title: '2016-03-14期 WE留学生-马畅悦',
            info: '该系列的学生人物来自：哈佛大学、普林斯顿大学，斯坦福大学、加州大学洛杉矶分校、卫斯理安大学、弗吉尼亚大学、南加州大学、波士顿大学、波莫纳学院和纽约州立大学石溪分校。',
            _id: 1,
        }, {
            interview_list_poster: '/images/interview/we/2.png',
            title: '2016-03-14期 WE留学生-李奕',
            info: '该系列的学生人物来自：哈佛大学、普林斯顿大学，斯坦福大学、加州大学洛杉矶分校、卫斯理安大学、弗吉尼亚大学、南加州大学、波士顿大学、波莫纳学院和纽约州立大学石溪分校。',
            _id: 2,
        }, {
            interview_list_poster: '/images/interview/we/3.png',
            title: '2016-03-14期 WE留学生-周自横',
            info: '该系列的学生人物来自：哈佛大学、普林斯顿大学，斯坦福大学、加州大学洛杉矶分校、卫斯理安大学、弗吉尼亚大学、南加州大学、波士顿大学、波莫纳学院和纽约州立大学石溪分校。',
            _id: 3,
        }, {
            interview_list_poster: '/images/interview/we/4.png',
            title: '2016-03-14期 WE留学生-楼以忱',
            info: '该系列的学生人物来自：哈佛大学、普林斯顿大学，斯坦福大学、加州大学洛杉矶分校、卫斯理安大学、弗吉尼亚大学、南加州大学、波士顿大学、波莫纳学院和纽约州立大学石溪分校。',
            _id: 4,
        }, {
            interview_list_poster: '/images/interview/we/5.png',
            title: '2016-03-17期 WE留学生-胡旭岭',
            info: '该系列的学生人物来自：哈佛大学、普林斯顿大学，斯坦福大学、加州大学洛杉矶分校、卫斯理安大学、弗吉尼亚大学、南加州大学、波士顿大学、波莫纳学院和纽约州立大学石溪分校。',
            _id: 5,
        }, {
            interview_list_poster: '/images/interview/we/6.png',
            title: ' 2016-03-17期 WE留学生-吴奕格',
            info: '该系列的学生人物来自：哈佛大学、普林斯顿大学，斯坦福大学、加州大学洛杉矶分校、卫斯理安大学、弗吉尼亚大学、南加州大学、波士顿大学、波莫纳学院和纽约州立大学石溪分校。',
            _id: 6,
        }, {
            interview_list_poster: '/images/interview/we/7.png',
            title: ' 2016-03-18期 WE留学生-孔繁佳',
            info: '该系列的学生人物来自：哈佛大学、普林斯顿大学，斯坦福大学、加州大学洛杉矶分校、卫斯理安大学、弗吉尼亚大学、南加州大学、波士顿大学、波莫纳学院和纽约州立大学石溪分校。',
            _id: 7,
        }, {
            interview_list_poster: '/images/interview/we/8.png',
            title: ' 2016-03-18期 WE留学生-邹田醒言',
            info: '该系列的学生人物来自：哈佛大学、普林斯顿大学，斯坦福大学、加州大学洛杉矶分校、卫斯理安大学、弗吉尼亚大学、南加州大学、波士顿大学、波莫纳学院和纽约州立大学石溪分校。',
            _id: 8,
        }, {
            interview_list_poster: '/images/interview/we/9.png',
            title: ' 2016-03-18期 WE留学生-马赫德',
            info: '该系列的学生人物来自：哈佛大学、普林斯顿大学，斯坦福大学、加州大学洛杉矶分校、卫斯理安大学、弗吉尼亚大学、南加州大学、波士顿大学、波莫纳学院和纽约州立大学石溪分校。',
            _id: 9,
        }, {
            interview_list_poster: '/images/interview/we/10.png',
            title: '2016-03-18期 WE留学生-方震',
            info: '该系列的学生人物来自：哈佛大学、普林斯顿大学，斯坦福大学、加州大学洛杉矶分校、卫斯理安大学、弗吉尼亚大学、南加州大学、波士顿大学、波莫纳学院和纽约州立大学石溪分校。',
            _id: 10,
        }],
        [{
            interview_list_poster: '/images/interview/shuo/1.png',
            title: '2016-11-21期 低龄留学 我们的小别离',
            info: '《留学说》是一档专属于年轻人的留学生脱口秀栏目，带你扒一扒留学那点事儿。',
            _id: 1
        }, {
            interview_list_poster: '/images/interview/shuo/2.png',
            title: '2016-11-28期 《留学说》我的室友是奇葩',
            info: '《留学说》是一档专属于年轻人的留学生脱口秀栏目，带你扒一扒留学那点事儿。',
            _id: 2
        }, {
            interview_list_poster: '/images/interview/shuo/3.png',
            title: '2016-12-05期 《留学说》你出国后悔么',
            info: '《留学说》是一档专属于年轻人的留学生脱口秀栏目，带你扒一扒留学那点事儿。',
            _id: 3
        }, {
            interview_list_poster: '/images/interview/shuo/4.png',
            title: '2016-12-12期 《留学说》留学恋爱指南',
            info: '《留学说》是一档专属于年轻人的留学生脱口秀栏目，带你扒一扒留学那点事儿。',
            _id: 4
        }, {
            interview_list_poster: '/images/interview/shuo/5.png',
            title: '2016-12-19期 《留学说》海外打工-超人很忙',
            info: '《留学说》是一档专属于年轻人的留学生脱口秀栏目，带你扒一扒留学那点事儿。',
            _id: 5
        }, {
            interview_list_poster: '/images/interview/shuo/6.png',
            title: '2016-12-26期 外国食品吐槽大会',
            info: '《留学说》是一档专属于年轻人的留学生脱口秀栏目，带你扒一扒留学那点事儿。',
            _id: 6
        }, {
            interview_list_poster: '/images/interview/shuo/7.png',
            title: '2017-01-24期 海外游子的一封情书',
            info: '《留学说》是一档专属于年轻人的留学生脱口秀栏目，带你扒一扒留学那点事儿。',
            _id: 7
        }],
        [
            { interview_list_poster: '/images/interview/truth/1.png', title: '第1集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 1 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第2集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 2 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第3集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 3 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第4集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 4 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第5集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 5 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第6集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 6 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第7集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 7 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第8集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 8 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第9集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 9 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第10集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 10 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第11集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 11 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第12集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 12 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第13集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 13 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第14集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 14 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第15集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 15 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第16集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 16 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第17集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 17 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第18集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 18 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第19集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 19 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第20集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 20 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第21集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 21 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第22集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 22 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第23集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 23 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第24集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 24 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第25集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 25 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第26集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 26 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第27集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 27 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第28集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 28 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第29集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 29 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第32集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 32 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第43集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 43 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第44集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 44 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第45集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 45 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第46集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 46 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第47集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 47 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第48集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 48 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第49集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 49 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第50集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 50 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第51集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 51 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第52集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 52 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第53集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 53 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第54集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 54 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第55集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 55 },
            { interview_list_poster: '/images/interview/truth/2.png', title: '第56集', info: '我们用做媒体的本领 颠覆你的留学三观 打破留学行业的暴利！', _id: 56 }
        ]
    ]

    res.render('interview-list', {
        interview_list_item: interview_list[ID - 1]
    })

}

//节目访谈详情页面路由
exports.detail = function(req, res) {
    var id = req.params.id //url中的id
    var interview_detail_all = [
        [{
            interview_video: 'http://player.video.qiyi.com/9ef4d440c6a70369b70acc40e17d0592/0/190/v_19rrktg8sk.swf-albumId=203748501-tvId=461204200-isPurchase=0-cnId=3',
            title: '2016-03-14期 WE留学生-马畅悦',
            info: '中日混血的身份让马畅悦对不同文化（尤其是亚洲文化）有浓厚的兴趣；中学期间，马畅悦就曾参与联合国中非文化相关的项目。这些背景和经历使她期待可以为联合国跨文化的工作出力，并选择国际关系和全球经济作为自己专业。 高中IB课程的CAS要求，帮助马畅悦积累了很多课外活动经验和领导组织能力。如今入读大学，马畅悦依旧坚持继续做辩论、击剑等课外活动。',
        }, {
            interview_video: 'http://player.video.qiyi.com/68453c10ded729217c61c06957a02f25/0/190/v_19rrktgan4.swf-albumId=203748501-tvId=461205900-isPurchase=0-cnId=3',
            title: '2016-03-14期 WE留学生-李奕',
            info: '虽然毕业于中国最好的外国语学校之一，初到波莫纳学院的李奕，仍然感到语言上的挑战，然而一次偶然的演讲经历改变了她在波莫纳的境遇，更让她对来自不同背景的同学有了更多新的认识…… ',
        }, {
            interview_video: 'http://player.video.qiyi.com/57856b20989adc3212272b5de6f95b81/0/215/v_19rrl2ec5k.swf-albumId=203748501-tvId=461388900-isPurchase=0-cnId=3',
            title: '2016-03-14期 WE留学生-周自横',
            info: '来自安徽的周自横，对生活富有哲思、对学习充满兴趣。他的抱负是打造属于中国的世界品牌。在美国生活、学习三年，他有哪些反思？他如何看待美国的教育理念？他在学校兄弟会的经历又是怎样的？',
        }, {
            interview_video: 'http://player.video.qiyi.com/b5e30a67fa3db79ee1f77861d67a238e/0/243/v_19rrl2e5eo.swf-albumId=203748501-tvId=461397900-isPurchase=0-cnId=3',
            title: ' 2016-03-14期 WE留学生-楼以忱',
            info: '戏剧和艺术从小就是楼以忱心底的一颗种子。在杭州外国语学校读高中时，受外教老师影响组织了自己的戏剧俱乐部。现在，楼以忱为了追随自己的梦想与热情，在卫斯理安大学读戏剧专业。为什么她会选择走戏剧这条“冒险之路”？她对以后的打算是怎样的？她是如何看待艺术和戏剧的？',
        }, {
            interview_video: 'http://player.video.qiyi.com/abd558d23c29116fee1c4ddbdca52248/0/237/v_19rrktd0tg.swf-albumId=203748501-tvId=460891400-isPurchase=0-cnId=3',
            title: ' 2016-03-17期 WE留学生-胡旭岭',
            info: '15岁离开父母，赴新加坡读高中，以留学生的身份参加新加坡高考，并以九门课程全A的成绩同时被加州理工大学、宾夕法尼亚大学和普林斯顿大学录取，胡旭岭的履历如此傲人。 一个偶然的机会，让胡旭岭与戏剧结缘，成为普林斯顿大学中文剧社的社长。戏剧给他带来了哪些不同体验？',
        }, {
            interview_video: 'http://player.video.qiyi.com/77a9a3a8d50704154c8bc08d1d4989a7/0/258/v_19rrktd4b4.swf-albumId=203748501-tvId=460895100-isPurchase=0-cnId=3',
            title: '  2016-03-17期 WE留学生-吴奕格',
            info: '吴奕格高中就读于广州执信中学，但因高考失利不得不临时选择出国这条路，仓促之间申请了大农村的爱荷华大学。两年后，吴奕格转学到波士顿大学学习市场专业。在波士顿才不到两年，他就已经开始了自己的第三份工作，如今已是波士顿一名小有业绩的房地产经纪人',
        }, {
            interview_video: 'http://player.video.qiyi.com/719991d9cc4c48ab21096a05d0a6465d/0/259/v_19rrktir00.swf-albumId=203748501-tvId=461156700-isPurchase=0-cnId=3',
            title: ' 2016-03-18期 WE留学生-孔繁佳',
            info: '美国高校里的中国留学生不乏学霸，但是留在国外并生活得如鱼得水的却在少数。社交是阻碍不少人前行的头等问题，而本片介绍的孔繁佳却是一位社交达人。 孔繁佳是弗大中国学生和学者联合会的主席，学校白人兄弟会的创始人，社交舞、莎莎舞、摄影等社团的积极成员……人称“孔老爷”。他的身上又有什么值得我们借鉴的经验呢？',
        }, {
            interview_video: 'http://player.video.qiyi.com/0bf10b43fc1c7c5f3b84946b02a726b3/0/225/v_19rrktiq48.swf-albumId=203748501-tvId=461158100-isPurchase=0-cnId=3',
            title: ' 2016-03-18期 WE留学生-邹田醒言',
            info: '大学申请时，邹田醒言没有听从父母的意见，选择卡内基梅陇的数学专业，而是去UCLA读心理学。然而心理学并未如他所愿，帮助他找到人生诸多疑问的答案……出于就业的考虑，邹田醒言去哈佛读了教育学研究生。他在两所美国名校的学习体验给他带来怎样的反思，他会选择虔诚的道路还是地位的道路呢？',
        }, {
            interview_video: 'http://player.video.qiyi.com/aa6a80572e01401167341b3cd1beaed0/0/214/v_19rrktieec.swf-albumId=203748501-tvId=461173000-isPurchase=0-cnId=3',
            title: ' 2016-03-18期 WE留学生-马赫德',
            info: '马赫德的穆斯林身份，让他从小就对文化间差异和互相融入有更多、更深的想法。从穆斯林群体、到汉族群体再到美国这个文化大熔炉，他是如何面对一个不被了解、甚至歧视的环境的？',
        }, {
            interview_video: 'http://player.video.qiyi.com/cbd80c4bf11209cc0e7ab8be4146f526/0/189/v_19rrktg7a0.swf-albumId=203748501-tvId=461202100-isPurchase=0-cnId=3',
            title: '2016-03-18期 WE留学生-方震',
            info: '曾在澳洲留学的方震有着丰富的打工、创业经历，但因着自己的“美国梦”，他在一年半后决定重新申请美国的大学。在新的学校里依旧积极参与各类活动，并担任学生会主席，这些经历的收获帮助他最终成为一名成功的创业者。他创办的资讯提供平台网站“领客中国”让他离自己的梦想越走越近。',
        }],
        [{
            interview_video: 'http://player.video.qiyi.com/5a260c6d8c0ddd8cb611272d38f89283/0/1550/v_19rra4dk7k.swf-albumId=205170301-tvId=571368700-isPurchase=0-cnId=21',
            title: '2016-11-21期 低龄留学 我们的小别离',
            info: '《留学说》是一档留学生脱口秀栏目，带你扒一扒留学那点事儿。 《留学说之“小留”低龄留学-我们的小别离》20161122期，近年来，中国留学生低龄化趋势十分明显，小留群体日益庞大。面对外面的广阔世界，低龄留学生究竟面临着怎样的心酸、叛逆与成长呢？宝宝心里苦，但是宝宝一定要说！',
        }, {
            interview_video: 'http://player.video.qiyi.com/44910aeb57b1826de698fc04e9bf464f/0/1034/v_19rra1w45g.swf-albumId=205170301-tvId=575549800-isPurchase=0-cnId=21',
            title: '2016-11-28期 《留学说》我的室友是奇葩',
            info: '《留学说》，老外带你扒留学！ 《留学说》之我的室友是奇葩。奇葩到处有，留学特别多！留学生男女异国混居现象大爆料，教你如何在海外选房租房，是时候跟我们一起手撕奇葩室友啦！',
        }, {
            interview_video: 'http://player.video.qiyi.com/45f9c5740f9e4f4b1aff07f0a044a2d6/0/1284/v_19rra972nw.swf-albumId=205170301-tvId=579595600-isPurchase=0-cnId=21',
            title: '2016-12-05期 《留学说》你出国后悔么',
            info: '《留学说》之你出国后悔么-no zuo no die, why you try! 出国还是不国?让留学老司机们来谈谈他们的留学感受吧！',
        }, {
            interview_video: 'http://player.video.qiyi.com/9dd25090656efc9323981f4c23d5d567/0/1595/v_19rra5qnlw.swf-albumId=205170301-tvId=584093800-isPurchase=0-cnId=21',
            title: '2016-12-12期 《留学说》留学恋爱指南',
            info: '老司机带你深扒混血女友、白人男友、思密达欧巴等各国男女的约会套路！高能狗粮预警啦！',
        }, {
            interview_video: 'http://player.video.qiyi.com/0d478344663386b6e710cfdd95350cca/0/1297/v_19rr9u98jg.swf-albumId=205170301-tvId=587907600-isPurchase=0-cnId=21',
            title: '2016-12-19期 《留学说》海外打工-超人很忙',
            info: '种族歧视？持枪抢劫？有偿陪侍？听留学打工超人分享海外打工奇闻趣事、诉说血泪史！',
        }, {
            interview_video: 'http://player.video.qiyi.com/5f682af2d75b170b825f8eb0988da0ca/0/799/v_19rr9rlxt8.swf-albumId=205170301-tvId=591833600-isPurchase=0-cnId=21',
            title: '2016-12-26期 外国食品吐槽大会',
            info: '听留学生吐槽北美大学食堂、甜点咖啡快餐，直面那袭来的卡路里吧！',
        }, {
            interview_video: 'http://player.video.qiyi.com/0b70f696669bc22ab79c2ebf56c74058/0/498/v_19rralddik.swf-albumId=205170301-tvId=608433600-isPurchase=0-cnId=21',
            title: '2017-01-24期 海外游子的一封情书',
            info: '致家人-来自海外留学生的情书',
        }],
        [
            { interview_video: 'http://player.video.qiyi.com/b1f6b4b171f42bf8e9d2d499ad99f1c9/0/71/v_19rrkmf560.swf-albumId=203063601-tvId=405191300-isPurchase=0-cnId=27', title: '第1集 预告片', info: '1.女留学生钱多功夫好，老外爱 2.读博竟能免费带小孩上学 3.留学生性伴侣 解决生理需求 4.更有现场连线豪放女，劲爆话题，等你来看', },
            { interview_video: 'http://player.video.qiyi.com/ecefdf8071235af04a73f4ec57d0a309/0/2011/v_19rrkmjrjw.swf-albumId=203063601-tvId=405426000-isPurchase=0-cnId=27', title: '第2集 海归女找外国小三 理直气壮 ', info: '海归女找外国小三儿 为何理直气壮？为何中国留学生爱找老外做伴侣 调查结果让人屎尿未及！英国年逾八十夫妇一周一次性生活 一月一次度假 他们怎么做到的？中国留学生一年在美国保释金从200万美金涨到300万 检察官告诉你真相！', },
            { interview_video: 'http://player.video.qiyi.com/e5ddada28af5621bd6ff64ea9d8b2c70/0/1308/v_19rrkka4ds.swf-albumId=203063601-tvId=407924700-isPurchase=0-cnId=27', title: '第3集 中国留美学生买车花150亿 ', info: '中国留学生为何爱抱团？23万中国留美学生22个月总共花了150亿元美元买车 家长觉得划得来 你觉得呢？', },
            { interview_video: 'http://player.video.qiyi.com/7264dc10bed861f7ddaebaab789c415e/0/1092/v_19rrkjkdo8.swf-albumId=203063601-tvId=411030100-isPurchase=0-cnId=27', title: '第4集 留个学该有多贵？', info: '当留学≈旅游 大学≈学店', },
            { interview_video: 'http://player.video.qiyi.com/659c70fa8d2837356da6c72eb4f53270/0/1136/v_19rrkrhxlg.swf-albumId=203063601-tvId=413702200-isPurchase=0-cnId=27', title: '第5集 历史告诉我的留学问题 ', info: '出国跟风、专业扎堆、扩招班横行、问题二代。。。所有这些问题一百多年前的留学圈几乎一模一样地发生过。', },
            { interview_video: 'http://player.video.qiyi.com/eaee165a38546223328c867edeb7616e/0/1136/v_19rrkro740.swf-albumId=203063601-tvId=414126700-isPurchase=0-cnId=27', title: '第6集 毛泽东为何不留学 ', info: '出国跟风、专业扎堆、扩招班横行、问题二代。所有这些问题一百多年前的留学圈几乎一模一样地发生过。', },
            { interview_video: 'http://player.video.qiyi.com/f4f1e3a512652d9ad29b03a6068a7414/0/744/v_19rrkqedew.swf-albumId=203063601-tvId=416068100-isPurchase=0-cnId=27', title: '第7集 面对性侵她说了这句话成功逃脱 ', info: '美国大学生活的真谛：“社交——睡眠——学业”形成了一个三角的三个顶点，而任何凡人都只能选择其中两个顶点，放弃另外一个。', },
            { interview_video: 'http://player.video.qiyi.com/b9d5e8935326efd41f0fd3536c115624/0/850/v_19rrko07og.swf-albumId=203063601-tvId=418453900-isPurchase=0-cnId=27', title: '第8集 她试了试12星座接吻的区别 ', info: '这个女留学生想知道 12星座接吻的区别，然后。。。', },
            { interview_video: 'http://player.video.qiyi.com/7ce44b7faa65453c5b3739c5b88b1b1c/0/910/v_19rrkd7c5w.swf-albumId=203063601-tvId=421183800-isPurchase=0-cnId=27', title: '第9集 传媒大鳄BBC实习揭秘 ', info: '很多去英国学传媒的学生，要么是冲着实践课程去的，要么是冲着BBC去的。然，课程到底有多实践？BBC这扇门到底开多大？', },
            { interview_video: 'http://player.video.qiyi.com/bf799df487d1a248d62c343023a0c3e9/0/1171/v_19rrkbz8d0.swf-albumId=203063601-tvId=423438200-isPurchase=0-cnId=27', title: '第10集 结婚为目的的恋爱是耍流氓 ', info: '只能是中国妹子和鬼佬固定搭配吗？中国男生就该认怂么？100多年前，第一批拖着辫子的留美男生几乎人人皆有一西妇，班上美国女生爱中国人超过爱美国人；现在，又有一个90后男生留学三四年，把了40多个歪国妹纸。他们是如何做到的？', },
            { interview_video: 'http://player.video.qiyi.com/90dcdad8f734274476c07c50e046a41f/0/781/v_19rrk9x364.swf-albumId=203063601-tvId=426119200-isPurchase=0-cnId=27', title: '第11集 澳洲护士还得伺候病人这个 ', info: '在澳读会计的留学生不少，那为什么总是缺会计呢？同样是移民专业的澳洲的护士专业要求严格﹐一般的研究生课程都是为已经有护士资格的人准备的。', },
            { interview_video: 'http://player.video.qiyi.com/395f61ae6320be55b10aad01a50a50a5/0/756/v_19rrkhwsdc.swf-albumId=203063601-tvId=429207500-isPurchase=0-cnId=27', title: '第12集 口语考场的5分老太婆 ', info: '知道雅思考试是怎么来的么？为何雅思考官木有中国人？是木有人敢去应征么？口语考场的5分老太婆你听说过么？神马！这你都不知道？很多培训机构都会有保过协议，会有人因为分数不过而拿到退款么？一个雅思男考官给女考生递了一张条子，上面写了点神马？', },
            { interview_video: 'http://player.video.qiyi.com/5d109fb4b23173390e606a01b4295358/0/1036/v_19rrkgz228.swf-albumId=203063601-tvId=431825500-isPurchase=0-cnId=27', title: '第13集 我认真复习却算作弊 ', info: '这些出国类考试，经常出之前考过的题目，所以，民间就有了题库，有人就研究起了出题规律，考前给考生划范围，这种题库叫“机经”，它的命中率相当准。', },
            { interview_video: 'http://player.video.qiyi.com/77533781fc33cc6abd1ef41ca46493dc/0/1150/v_19rrkeqqgw.swf-albumId=203063601-tvId=434270700-isPurchase=0-cnId=27', title: '第14集 代写产业链已经五环了 ', info: '在国外的中国留学生抄袭代写的现象就非常普遍。论文代写这个产业了，目前这个行业的产业链已经集满五环了。', },
            { interview_video: 'http://player.video.qiyi.com/ab8afe5fc7895b933cadf3fcc39c1c31/0/865/v_19rrl7nod0.swf-albumId=203063601-tvId=436814200-isPurchase=0-cnId=27', title: '第15集 第二季 番外篇 ', info: '为了打破信息不对称 他一个人做了档视频节目', },
            { interview_video: 'http://player.video.qiyi.com/b947fd920e08ff2fcfa856cc6ed671d1/0/1072/v_19rrl5iguc.swf-albumId=203063601-tvId=439372200-isPurchase=0-cnId=27', title: '第16集 留学圈的闷声发大财 ', info: '论文代写行业的五环产业链已经不稀奇了，现在一个新兴行业在美国悄然兴起——代课，不是帮老师上课，是给学生上课。', },
            { interview_video: 'http://player.video.qiyi.com/6251e812ab03e423cdd8ca7a412a8334/0/995/v_19rrl4ekr0.swf-albumId=203063601-tvId=441823200-isPurchase=0-cnId=27', title: '第17集 名师们是这样被包装出来的 ', info: '7天速成班能成么 雅思老师是如何造出来的 教育培训为啥是粉丝经济', },
            { interview_video: 'http://player.video.qiyi.com/e0f6f20c6302038abe33b51f74433dae/0/998/v_19rrl3b4h8.swf-albumId=203063601-tvId=444192000-isPurchase=0-cnId=27', title: '第18集 体验做一回体面的普通人 ', info: 'Rob就是英国普普通通一个老头，Ricky就是英国最常见的老太，你可以说他们很可爱，很慈祥，和善，但我觉得我最想成为他们的理由，是他们既普通又体面，体面不仅仅是物质上不多不少，精神上不卑不亢，普通则意味着自由意味着周围环境都这样，留学一年很幸运可以自己体验做一回体面的普通人。', },
            { interview_video: 'http://player.video.qiyi.com/38a9092897eb5a3a3404d9d0b29b0cf1/0/1032/v_19rrlb52sk.swf-albumId=203063601-tvId=446696200-isPurchase=0-cnId=27', title: '第19集 留学真相！海归去哪儿了 ', info: '现在有专门的中介给海归办北京户口、帮海归写英文简历（对，是英文简历，还有求职英语）、教海归求职、海归心理辅导，一共收费20万元上下', },
            { interview_video: 'http://player.video.qiyi.com/0bf4fee9153309a1fcf49321bf1aa47e/0/879/v_19rrla515w.swf-albumId=203063601-tvId=449225800-isPurchase=0-cnId=27', title: '第20集 英语“差生”们有多差', info: '我有次给一个体育班学生上英语课 从A B C D开始教 我让他们把A改成小写 他就把A 改成了小A 真的很小 很小 很小', },
            { interview_video: 'http://player.video.qiyi.com/68681d904416c983b56246488812b425/0/257/v_19rrlaeo1s.swf-albumId=203063601-tvId=449837100-isPurchase=0-cnId=27', title: '第21集 大学很难产精英 ', info: '新年特别节目', },
            { interview_video: 'http://player.video.qiyi.com/3e60369dfa33708e5f2e9b0cd39d754c/0/1319/v_19rrl80eco.swf-albumId=203063601-tvId=451957700-isPurchase=0-cnId=27', title: '第22集 美国差生爷爷奶奶不够死 ', info: '美国教育的光环在中国一直都特别耀眼，中国教育受美国影响非常之深，结果中国教育的种种问题其实是美国教育问题的放大。', },
            { interview_video: 'http://player.video.qiyi.com/282163670f48b9e6f64b756139dbbc8b/0/920/v_19rrkx40gc.swf-albumId=203063601-tvId=454605600-isPurchase=0-cnId=27', title: '第23集 会胖会瘦的4.0学霸 吃土闯美国 ', info: '会胖会瘦的4.0学霸来了Insight China 团队八卦大起底', },
            { interview_video: 'http://player.video.qiyi.com/3f86e910f40dc7f399091652487cd5e1/0/887/v_19rrkvtjuc.swf-albumId=203063601-tvId=456765400-isPurchase=0-cnId=27', title: '第24集 中国学生在美国能否买枪', info: '真相君在上学那会经历了一场银行大劫案 路过现场时他拍了几张照片 一群劫匪要抢ATM 可是他们方法是用链子拽。。。。。', },
            { interview_video: 'http://player.video.qiyi.com/8e74099a195c1761e2c5ed38b2564016/0/961/v_19rrkuq7a4.swf-albumId=203063601-tvId=459121200-isPurchase=0-cnId=27', title: '第25集 我留学不是为了做代购！', info: '各位姐姐妹妹 如果你在某男性手机里看到这些软件 那么还是趁早放弃另寻良驹吧', },
            { interview_video: 'http://player.video.qiyi.com/171a061c0ae155d75a23a85eb228b529/0/847/v_19rrl2hc3o.swf-albumId=203063601-tvId=461511400-isPurchase=0-cnId=27', title: '第26集 韩国教授：kong子是我们的！ ', info: '雯雯为何爱去学长家蹭火锅 龙猫在澳洲如何吃遍全天下 小树的韩国叫兽一次当着全班面说道：*子是我们韩国的（不是jing） 全班十几个中国学生哑口无言', },
            { interview_video: 'http://player.video.qiyi.com/49fea06ada8fa58d05967d3572099e52/0/1222/v_19rrkzu4xc.swf-albumId=203063601-tvId=467587100-isPurchase=0-cnId=27', title: '第27集 美国高中学霸的日常 ', info: '惠尼中学是美国加利福利亚州的最“杰出学校”。世界各地的家长千里迢迢搬迁到附近学区，只为自己的孩子能在这里入学。普利策新闻奖获得者爱德华·休姆斯驻扎惠尼中学一年，“蹲点”采访，亲身体验了学生、家长、教师们值得回忆的欢欣、希望、忧虑、压力，真实记录了当代美国高素质中学生的生活。书中描述的校园百态，不仅是美国教育的现状，更是中国教育的翻版，还没有一本来自大洋彼岸的教育书籍能在中国读者中产生如此大的共鸣。', },
            { interview_video: 'http://player.video.qiyi.com/fd76e1ac69ca80fc7914d1b86cd830dd/0/1165/v_19rrkykiqc.swf-albumId=203063601-tvId=469654200-isPurchase=0-cnId=27', title: '第28集 炼狱般的美国寄宿家庭 ', info: 'Homestay，又叫家庭寄宿，指留学生住在当地人家，如果是小留学生，住家的家长一般就是留学生的监护人。这种住宿方式可以让留学生很好地融入当地生活，练习英语、结交朋友。然而 ，很多中介找的当地人家却让小留学生苦不堪言。', },
            { interview_video: 'http://player.video.qiyi.com/a40e5110dff988e861e4be77c779c71d/0/1060/v_19rrlqblnk.swf-albumId=203063601-tvId=472377100-isPurchase=0-cnId=27', title: '第29集 美国就真的阳痿吗 ', info: '阳痿美国 美国就真的阳痿吗', },
            { interview_video: 'http://player.video.qiyi.com/1f9fe35d7cbdeb0420e4a64a449a5b4d/0/981/v_19rrlshnek.swf-albumId=203063601-tvId=486504400-isPurchase=0-cnId=27', title: '第32集 欧巴想对他的中国女友们说抱歉 ', info: '这一集，小白自曝在中国的感情史：他前后谈过两个中国女友，都是女方主动开撩！第1段感情发生在高中，班上就小白一个韩国人，他的一个女同学（女主）有一次就问小白：你喜欢什么样的女生呀？ 小白回答：......... 女主：我就是这样的女生呀.....', },
            { interview_video: 'http://player.video.qiyi.com/c09d36d51b9aa65a0ecb30325422b9d8/0/1177/v_19rrlealnw.swf-albumId=203063601-tvId=492001600-isPurchase=0-cnId=27', title: '第43集 高等教育并不适合每一个人 ', info: '今天我们来批判商科，恳请各位看完文章（视频）再发表观点。 批判不代表全盘否定，偏颇不代表没有价值。', },
            { interview_video: 'http://player.video.qiyi.com/e0a7f9eb2f57b1eaa6fc5b4cf5c410ed/0/980/v_19rrlmebc8.swf-albumId=203063601-tvId=494964100-isPurchase=0-cnId=27', title: '第44集 坚守十年异地恋他们如何做到的 ', info: '《黑蝙蝠中队》里的歌词，源自一个真实的故事。在上个世纪的台湾，迫使年轻情侣分开的除了战争，还有留学。', },
            { interview_video: 'http://player.video.qiyi.com/3e6e82c680bdbe40bb9ed6b4ccf76e07/0/961/v_19rrm9nzbg.swf-albumId=203063601-tvId=506930400-isPurchase=0-cnId=27', title: '第45集 人生第一次拉差距在啥时 ', info: '刚进大学时，我的高考成绩在班上排倒数，但从大二开始，我就发现那些爱泡图书馆自习室的学霸往往不是那些高考优等生，而是那些对专业非常热爱或是高考虽然没考好没有放弃自我教育的人。我后来得出一个结论，人生第一次真正拉开差距的是大学的后半段。', },
            { interview_video: 'http://player.video.qiyi.com/42fce7ae4471416b0a49f214bfddde7e/0/1063/v_19rrm85wa8.swf-albumId=203063601-tvId=510567900-isPurchase=0-cnId=27', title: '第46集 希拉里为何没离婚？ ', info: '当年克林顿都已经被送上了审判席遭受到弹劾，但最后意想不到的是陪审团投票，克林顿被判无罪，他的支持率在他接受调查期间还有所增高，最后民调还显示行为不检点、丑闻不断的克林顿被认为是最受钦佩的男人，希拉里则被认为是最受敬仰的女人。', },
            { interview_video: 'http://player.video.qiyi.com/d04ccd994b6143df317271f037e73d98/0/1197/v_19rrmfcq74.swf-albumId=203063601-tvId=514417100-isPurchase=0-cnId=27', title: '第47集 什么是超越婚姻的爱情 ', info: '有一对名人“夫妻”，他们不领证、不生孩子，甚至允许对方在外面风流。他们契约式的爱情超过了婚姻。他们就是波伏娃和萨特。', },
            { interview_video: 'http://player.video.qiyi.com/d42998f991fff682cfc1f49e930e93ec/0/195/v_19rrm67h8c.swf-albumId=203063601-tvId=530368400-isPurchase=0-cnId=27', title: '第48集 王健林为何送王思聪留学 ', info: '王健林为何送王思聪留学 这是一个小小的目标 但他后来有点后悔', },
            { interview_video: 'http://player.video.qiyi.com/98233cbc062c765938225d995bcc18e8/0/276/v_19rrm47a68.swf-albumId=203063601-tvId=533421100-isPurchase=0-cnId=27', title: '第49集 我要去留学了 有什么要交代的 ', info: '“我要去留学了 你有什么要交代的” “心系祖国”', },
            { interview_video: 'http://player.video.qiyi.com/405219ffe61574a1073c18831d871e96/0/2287/v_19rrm2k8jk.swf-albumId=203063601-tvId=534861100-isPurchase=0-cnId=27', title: '第50集 《小别离》结局孩子放弃留学 ', info: '最近围绕《小别离》引发了各方讨论。关于留学，尤其是低龄留学这个话题，我找来了几个非常精彩的辩论视频，基本上各方观点都说到了。本期节目里有该视频片段，在我们公众号留学的真相回复“辩论”二字即可看完整视频辑。', },
            { interview_video: 'http://player.video.qiyi.com/509311190001c08496b3dfe5a14165ea/0/866/v_19rr9gz9f0.swf-albumId=203063601-tvId=542521600-isPurchase=0-cnId=27', title: '第51集 大公司高管为何印度人居多 ', info: '美国名牌大学的金融教授抱怨：中国学生开始成绩很棒，但等到博士论文时，就顶不住了，论文质量上不来，倒也罢了，最惨的是去不了一流大学任教。而同样是培养印度学生，毕业出来不少人去了一流学府任教。在美国的金融领域及硅谷，印度裔的高管也很多：谷歌、微软、Adobe、软银、花旗集团等公司的 CEO 都是印度人（裔），副总裁级别的印度人更多。', },
            { interview_video: 'http://player.video.qiyi.com/1e0c41461bf3a4c2670867fb9b2aa07e/0/1083/v_19rr9o4rf4.swf-albumId=203063601-tvId=548391100-isPurchase=0-cnId=27', title: '第52集 美国名校录取学生的真相 ', info: '今天我和大家从投资和回报的角度来理顺美国名牌大学和学生的关系。', },
            { interview_video: 'http://player.video.qiyi.com/eaa103181b093396fb9edf9d3ad75c3e/0/1058/v_19rr9n80e4.swf-albumId=203063601-tvId=548813200-isPurchase=0-cnId=27', title: '第53集 美国大学的钱经 ', info: '美国大学的捐款文化', },
            { interview_video: 'http://player.video.qiyi.com/efc7d3e47955b69e78e21cbd3830466f/0/823/v_19rr99jfx0.swf-albumId=203063601-tvId=555340600-isPurchase=0-cnId=27', title: '第54集 私立高中的失败 ', info: '我们节目之前有说到美国高中，介绍了美国高中本土学生和老师的日常，揭露了中国高中生在美国寄宿家庭的遭遇，今天我们来撩撩美国的私立寄宿高中，这也是大部分中国学生的选择。', },
            { interview_video: 'http://player.video.qiyi.com/0b31c59503a17821277c27987b1e8d1b/0/1005/v_19rr99s3es.swf-albumId=203063601-tvId=555727400-isPurchase=0-cnId=27', title: '第55集 他的世界已经很远 ', info: '很多出国的留学生都觉得国外的生活苦，语言和文化的隔膜，新环境的陌生，饮食的不习惯，学业的繁重，考试的压力，还有安全问题，而孤独，抑郁也是不少人的常见症状。但这些问题对于曾在日本和美国留学的李雁雁来说都不是问题，因为他要面对的是更多更不可思议的挑战，因为他是个盲人，而且是全盲，对这个世界没有一点光感。', },
            { interview_video: 'http://player.video.qiyi.com/6e0c548811bfe7c3764b33280786cef3/0/1271/v_19rr9eorns.swf-albumId=203063601-tvId=563987300-isPurchase=0-cnId=27', title: '第56集 如果我移民这是唯一的理由 ', info: '出租车司机叫福林，出生在江苏苏北贫穷落户的农村，小时候家里很穷，农村很少有汽车，大学毕业的他只碰过摩托车，第一次独立开车不到50码就吓得半死。他那时自己也没想到日后会当上出租车司机，而且这车一开就是10年，开出租车，福林不是在中国的三四线城市，而是在美国纽约。', }
        ]
    ]
    var interview_detail_one = interview_detail_all[ID - 1];
    var interview_detail = interview_detail_one[id - 1];
    res.render('interview-detail', {
        interview_detail: interview_detail
    })
}
