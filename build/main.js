require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = {
  jwtSecret: 'estding',
  db: {
    host: 'localhost',
    user: 'estdingblog',
    // password: '123456',
    password: 'Blogding912*',
    database: 'estding'
  },
  needAuth: ['/api/classify/add', '/api/classify', '/api/articles/className/', '/api/classify/update', '/api/articles/add', '/api/articles/update', '/admin']
};

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Sequelize = __webpack_require__(20);
var config = __webpack_require__(1).db;

var dbOrm = new Sequelize(config.database, config.user, config.password, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

function defineModel(name, attributes) {
  var attrs = {};
  for (var key in attributes) {
    var value = attributes[key];
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value['type']) {
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: false
      };
    }
  }
  attrs.id = {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  };
  attrs.createAt = {
    type: Sequelize.BIGINT
  };
  attrs.updateAt = {
    type: Sequelize.BIGINT
  };
  attrs.version = {
    type: Sequelize.INTEGER,
    allowNull: false
  };
  return dbOrm.define(name, attrs, {
    timestamps: false
  });
}
dbOrm.authenticate().then(function () {
  console.log('Connection has been established successfully.');
}).catch(function (err) {
  console.error('Unable to connect to the database:', err);
});

module.exports.db = {
  defineModel: defineModel,
  Sequelize: Sequelize
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var article = __webpack_require__(13);
var user = __webpack_require__(5);
var classify = __webpack_require__(14);

module.exports = {
  article: article,
  user: user,
  classify: classify
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__);


var auth = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(authUser) {
    var result;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return user.findOne({
              where: {
                userName: authUser.userName,
                password: authUser.pwd
              }
            });

          case 3:
            result = _context.sent;

            if (!result) {
              _context.next = 9;
              break;
            }

            console.log('用户验证通过');
            return _context.abrupt('return', result.dataValues);

          case 9:
            return _context.abrupt('return', false);

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 12]]);
  }));

  return function auth(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by estding on 17/8/27.
 */

var _require$db = __webpack_require__(3).db,
    defineModel = _require$db.defineModel,
    Sequelize = _require$db.Sequelize;

var user = defineModel('user', {
  name: Sequelize.STRING,
  userName: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  avatar: Sequelize.STRING
});

user.sync();

console.log(auth({
  userName: 'estding',
  pwd: '6c46005182c07af19c5dfaee34501da7fd451aea'
}));

module.exports = {
  auth: auth
};

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  router: {}
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var jwtSecrect = __webpack_require__(1).jwtSecret;
var jwt = __webpack_require__(6);
var needAuth = __webpack_require__(1).needAuth;

module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var url, token, decodeToken;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = ctx.request.url;

            if (!(needAuth.indexOf(url) < 0)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return', next());

          case 5:
            token = ctx.cookies.get('token');

            if (token) {
              _context.next = 10;
              break;
            }

            ctx.response.redirect('/login');
            _context.next = 24;
            break;

          case 10:
            _context.prev = 10;
            decodeToken = jwt.verify(token, jwtSecrect);

            console.log(decodeToken);

            if (!(decodeToken.exp > Date.now() / 1000)) {
              _context.next = 17;
              break;
            }

            return _context.abrupt('return', next());

          case 17:
            ctx.response.redirect('/login');

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context['catch'](10);

            ctx.response.redirect('/login');
            ctx.response.redirect('/login');
            // ctx.throw(401, 'auth required')

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[10, 20]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var Router = __webpack_require__(2);
var artilceRouter = __webpack_require__(15);
var userRouter = __webpack_require__(17);
var classifyRouter = __webpack_require__(16);

module.exports = function (app) {
  var router = new Router({
    prefix: '/api'
  });
  // Router
  router.use('/articles', artilceRouter.routes(), artilceRouter.allowedMethods());
  router.use('/user', userRouter.routes(), userRouter.allowedMethods);
  router.use('/classify', classifyRouter.routes(), classifyRouter.allowedMethods);
  app.use(router.routes());
  app.use(router.allowedMethods());
};

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__);
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by estding on 17/8/27.
 */





/**
 * 查询最近发表的文章
 * @param limit 最多获取多少条
 * @returns {Promise.<*>}
 */
var articleList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(limit) {
    var result;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return article.findAll({
              where: { status: 'publish' },
              limit: limit,
              order: [['createAt', 'DESC']]
            });

          case 3:
            result = _context.sent;
            return _context.abrupt('return', result);

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function articleList(_x) {
    return _ref.apply(this, arguments);
  };
}();

var addArtile = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(newArticle) {
    var result;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return article.create(newArticle);

          case 3:
            result = _context2.sent;
            return _context2.abrupt('return', result);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 7]]);
  }));

  return function addArtile(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var findArticleByTitle = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(title) {
    var result;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(title);
            _context3.prev = 1;
            _context3.next = 4;
            return article.find({ where: { title: title } });

          case 4:
            result = _context3.sent;
            return _context3.abrupt('return', result.dataValues);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](1);

            console.log(_context3.t0);

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 8]]);
  }));

  return function findArticleByTitle(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

// async function publishArticle (id) {
//   try {
//
//   }
// }
// async function create () {
//   try {
//     let log = await article.create()
//     console.log(log)
//   } catch (e) {
//     console.log(e)
//   }
// }
/**
 * 获取分类下所有文章
 * @param className
 * @returns {Promise.<Model[]>}
 */


var getArticlesByClassify = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(className) {
    var results;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return article.findAndCount({
              where: {
                className: className
              },
              order: [['createAt', 'DESC']]
            });

          case 3:
            results = _context4.sent;
            return _context4.abrupt('return', results.rows);

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);

            console.log(_context4.t0);

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 7]]);
  }));

  return function getArticlesByClassify(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var updateArticle = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(upArticle) {
    var results;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            console.log(upArticle);
            _context5.next = 4;
            return article.update(upArticle, {
              where: {
                id: upArticle.id
              }
            });

          case 4:
            results = _context5.sent;
            return _context5.abrupt('return', results);

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5['catch'](0);

            console.log(_context5.t0);

          case 11:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 8]]);
  }));

  return function updateArticle(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require$db = __webpack_require__(3).db,
    defineModel = _require$db.defineModel,
    Sequelize = _require$db.Sequelize;

var article = defineModel('article', {
  publishTime: {
    type: Sequelize.BIGINT
  },
  title: {
    type: Sequelize.STRING,
    unique: true
  },
  desc: {
    type: Sequelize.TEXT
  },
  markdown: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.STRING
  },
  className: {
    type: Sequelize.STRING
  }
}, {
  comment: 'article model save all article'
});
article.sync().catch(function (error) {
  return console.log(error);
});

module.exports = {
  articleList: articleList,
  addArtile: addArtile,
  findArticleByTitle: findArticleByTitle,
  getArticlesByClassify: getArticlesByClassify,
  updateArticle: updateArticle
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__);


var classList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var results;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Classify.findAndCount();

          case 3:
            results = _context.sent;
            return _context.abrupt('return', results.rows);

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function classList() {
    return _ref.apply(this, arguments);
  };
}();

var createClass = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(type) {
    var results;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            type.version = 1;
            _context2.prev = 1;
            _context2.next = 4;
            return Classify.create(type);

          case 4:
            results = _context2.sent;
            return _context2.abrupt('return', results);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](1);

            console.log(_context2.t0);

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 8]]);
  }));

  return function createClass(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var updateClass = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(type) {
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return Classify.update(type, {
              where: {
                id: type.id
              }
            });

          case 3:
            _context3.next = 8;
            break;

          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3['catch'](0);

            console.log(_context3.t0);

          case 8:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 5]]);
  }));

  return function updateClass(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require$db = __webpack_require__(3).db,
    defineModel = _require$db.defineModel,
    Sequelize = _require$db.Sequelize;

var Classify = defineModel('classify', {
  className: {
    type: Sequelize.STRING,
    unique: true
  }
});

Classify.sync();

module.exports = {
  createClass: createClass,
  updateClass: updateClass,
  classList: classList
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Router = __webpack_require__(2);
var article = __webpack_require__(4).article;

var articleRouter = new Router();
// home
articleRouter.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return article.articleList(parseInt(ctx.query.limit));

          case 2:
            ctx.body = _context.sent;

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()).get('/title', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return article.findArticleByTitle(ctx.query.title);

          case 2:
            ctx.body = _context2.sent;

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}()).get('/className', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx) {
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return article.getArticlesByClassify(ctx.query.className);

          case 2:
            ctx.body = _context3.sent;

          case 3:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}()).post('/add', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx) {
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(ctx.request.body);
            _context4.next = 3;
            return article.addArtile(ctx.request.body);

          case 3:
            ctx.body = _context4.sent;

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this);
  }));

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}()).post('/update', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx) {
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return article.updateArticle(ctx.request.body);

          case 2:
            ctx.body = _context5.sent;

          case 3:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this);
  }));

  return function (_x5) {
    return _ref5.apply(this, arguments);
  };
}());
module.exports = articleRouter;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Router = __webpack_require__(2);
var classify = __webpack_require__(4).classify;

var classifyRouter = new Router();

// classify
classifyRouter.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return classify.classList();

          case 3:
            ctx.body = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 6]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()).post('/add', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
    var results;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return classify.createClass(ctx.request.body);

          case 3:
            results = _context2.sent;

            if (results) {
              ctx.body = 'ok';
            }
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 7]]);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());
module.exports = classifyRouter;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Router = __webpack_require__(2);
var user = __webpack_require__(5);
var jwt = __webpack_require__(6);
var jwtSerect = __webpack_require__(1).jwtSecret;
var crypto = __webpack_require__(18);

var userRouter = new Router();
userRouter.post('/login', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    var pwd, authUser, token;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 数据库验证
            pwd = crypto.createHash('sha1').update(ctx.request.body.pwd).digest('hex');
            _context.next = 3;
            return user.auth({
              userName: ctx.request.body.userName,
              pwd: pwd
            });

          case 3:
            authUser = _context.sent;

            if (!authUser) {
              _context.next = 11;
              break;
            }

            token = jwt.sign({
              uid: authUser.id
            }, jwtSerect, { expiresIn: 24 * 7 + 'h' });

            ctx.cookies.set('token', token, {
              // 有效期7天
              maxAge: Date.now() / 1000 + 60 * 60 * 24 * 7,
              // 不设置此属性客户端无法通过document.cookie获取到
              httpOnly: false
            });
            ctx.response.redirect('/admin');
            ctx.body = '认证成功';
            _context.next = 12;
            break;

          case 11:
            throw new Error('用户名密码不正确');

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()).post('/logout', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
    var token;
    return __WEBPACK_IMPORTED_MODULE_0__Volumes_Develop_Developer_nodejs_vue_ssr_blog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = ctx.cookies.get('token');

            if (!token) {
              ctx.body = '用户未登录';
            } else {
              console.log(token);
              ctx.cookies.set('token', '', {
                maxAge: 0,
                httpOnly: false
              });
              ctx.body = '退出登录成功';
            }

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

module.exports = userRouter;

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("crypto");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("sequelize");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);



var app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

// Import and Set Nuxt.js options
var config = __webpack_require__(7);
config.dev = !(app.env === 'production');

// 使用ctx.body解析中间件,要放在router中间件之前
var bodyParser = __webpack_require__(11);
app.use(bodyParser());

// jwtAuth
var jwtAuth = __webpack_require__(8);
app.use(jwtAuth);
// router
__webpack_require__(9)(app);

// Instantiate nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build in development
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build().catch(function (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
}

app.use(function (ctx) {
  ctx.status = 200; // koa defaults to 404 when it sees that status is unset

  return new Promise(function (resolve, reject) {
    ctx.res.on('close', resolve);
    ctx.res.on('finish', resolve);
    nuxt.render(ctx.req, ctx.res, function (promise) {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject);
    });
  });
});

app.listen(80);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }
/******/ ]);
//# sourceMappingURL=main.map