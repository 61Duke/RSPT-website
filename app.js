//加载express模块
var express = require('express');
var path = require('path');
//设置端口
var port = process.env.PORT || 3000;
//启动web服务器
var app = express();
var bodyParser = require('body-parser');
//设置视图的根目录
app.set('views', './app/views/pages');
//设置默认的模块引擎
app.set('view engine', 'jade');
//给表单数据格式化
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')))

//监听端口
app.listen(port);
var logger = require('morgan');
if ('development' === app.get('env')) {
    app.set('showStackError', true);
    app.use(logger(':method :url :status'));
    app.locals.pretty = true;
}

require('./config/routes')(app)
console.log('Rspt started on port' + port);
