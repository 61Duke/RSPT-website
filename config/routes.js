var Home = require('../app/controllers/home');
var Article = require('../app/controllers/article');
var Lifechannel = require('../app/controllers/life');
var Interview = require('../app/controllers/interview');
var Thinking = require('../app/controllers/thinking');
var Developer = require('../app/controllers/developer');
module.exports = function(app) {

    // 首页
    app.get('/', Home.home);
    //文章精选
    app.get('/article', Article.article);
    app.get('/article/detail/:id', Article.detail);
    //生活视频页面路由
    app.get('/lifechannel', Lifechannel.lifechannel);
    app.get('/lifechannel/detail/:id', Lifechannel.detail);
    //节目访谈页面路由
    app.get('/interview', Interview.interview);
    var ID = null;
    app.get('/interview/list/:id', Interview.interview_list);
    app.get('/interview/detail/:id', Interview.detail);
    //思想碰撞页面路由
    app.get('/thinking', Thinking.thinking);
    app.get('/thinking/detail/:id', Thinking.detail);
    //关注开发者页面路由
    app.get('/developer', Developer.developer);
}
