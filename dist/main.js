/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry_points/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/p5/lib/p5.js":
/*!***********************************!*\
  !*** ./node_modules/p5/lib/p5.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/classes/life.ts":
/*!*****************************!*\
  !*** ./src/classes/life.ts ***!
  \*****************************/
/*! exports provided: Life, PassiveLife, DeadBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Life\", function() { return Life; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PassiveLife\", function() { return PassiveLife; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeadBody\", function() { return DeadBody; });\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./src/classes/object.ts\");\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physics */ \"./src/classes/physics.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar Life = /** @class */ (function (_super) {\n    __extends(Life, _super);\n    function Life(position) {\n        var _this = _super.call(this, position) || this;\n        _this.position = position;\n        _this.mass = 3;\n        return _this;\n    }\n    Life.prototype.next = function () {\n        return _physics__WEBPACK_IMPORTED_MODULE_1__[\"Force\"].zero();\n    };\n    Life.prototype.draw = function (p) {\n        p.noFill();\n        p.stroke(86, 51, 245);\n        var diameter = this.mass;\n        p.circle(this.position.x, this.position.y, diameter);\n    };\n    Life.collisionPriority = 100;\n    return Life;\n}(_object__WEBPACK_IMPORTED_MODULE_0__[\"WorldObject\"]));\n\nvar PassiveLife = /** @class */ (function (_super) {\n    __extends(PassiveLife, _super);\n    function PassiveLife(position) {\n        var _this = _super.call(this, position) || this;\n        _this.position = position;\n        _this.mass = 1;\n        return _this;\n    }\n    PassiveLife.prototype.next = function () {\n        return _physics__WEBPACK_IMPORTED_MODULE_1__[\"Force\"].zero();\n    };\n    PassiveLife.prototype.draw = function (p) {\n        p.noFill();\n        p.stroke(86, 51, 245);\n        this.drawCircles(p, 6, this.position.x, this.position.y, 20);\n    };\n    PassiveLife.prototype.drawCircles = function (p, numberOfCircles, x, y, diameter) {\n        if (numberOfCircles <= 0) {\n            return;\n        }\n        p.circle(x, y, diameter);\n        this.drawCircles(p, numberOfCircles - 1, x - this.velocity.x * 2.5, y - this.velocity.y * 2.5, diameter * 0.6);\n    };\n    return PassiveLife;\n}(Life));\n\nvar DeadBody = /** @class */ (function (_super) {\n    __extends(DeadBody, _super);\n    function DeadBody() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(DeadBody.prototype, \"velocity\", {\n        get: function () {\n            return new _physics__WEBPACK_IMPORTED_MODULE_1__[\"Vector\"](0, 0);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    DeadBody.prototype.draw = function (p) {\n        _super.prototype.draw.call(this, p); // TODO: implement\n    };\n    DeadBody.collisionPriority = 101;\n    return DeadBody;\n}(_object__WEBPACK_IMPORTED_MODULE_0__[\"WorldObject\"]));\n\n\n\n//# sourceURL=webpack:///./src/classes/life.ts?");

/***/ }),

/***/ "./src/classes/object.ts":
/*!*******************************!*\
  !*** ./src/classes/object.ts ***!
  \*******************************/
/*! exports provided: WorldObject, Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WorldObject\", function() { return WorldObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wall\", function() { return Wall; });\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physics */ \"./src/classes/physics.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar WorldObject = /** @class */ (function () {\n    function WorldObject(position) {\n        this.position = position;\n        this.velocity = new _physics__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](0, 0);\n        this.mass = 1;\n    }\n    WorldObject.prototype.collideWith = function (other) {\n        // TODO: implement\n        // ここで何かが起きるのは物理法則の何かを発動するということ\n        return;\n    };\n    WorldObject.prototype.draw = function (p) {\n        p.noStroke();\n        p.fill(255, 0, 0);\n        var radius = 1;\n        var diameter = radius * 2;\n        p.ellipse(this.position.x - radius, this.position.y - radius, diameter, diameter);\n    };\n    WorldObject.collisionPriority = 0;\n    return WorldObject;\n}());\n\nvar Wall = /** @class */ (function (_super) {\n    __extends(Wall, _super);\n    function Wall(position, width, height) {\n        var _this = _super.call(this, position) || this;\n        _this.position = position;\n        _this.width = width;\n        _this.height = height;\n        return _this;\n    }\n    Wall.prototype.draw = function (p) {\n        p.noStroke();\n        p.fill(207, 196, 251);\n        p.rect(this.position.x, this.position.y, this.width, this.height);\n    };\n    Wall.collisionPriority = 1;\n    return Wall;\n}(WorldObject));\n\n\n\n//# sourceURL=webpack:///./src/classes/object.ts?");

/***/ }),

/***/ "./src/classes/physics.ts":
/*!********************************!*\
  !*** ./src/classes/physics.ts ***!
  \********************************/
/*! exports provided: Vector, Force, calculateOrbitalSpeed, calculateOrbitalVelocity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vector\", function() { return Vector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Force\", function() { return Force; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateOrbitalSpeed\", function() { return calculateOrbitalSpeed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateOrbitalVelocity\", function() { return calculateOrbitalVelocity; });\nvar Vector = /** @class */ (function () {\n    function Vector(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    Object.defineProperty(Vector.prototype, \"transposed\", {\n        get: function () {\n            return new Vector(this.y, this.x);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Vector.prototype, \"size\", {\n        get: function () {\n            return Math.sqrt(this.x * this.x + this.y * this.y);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Vector.zero = function () {\n        return new Vector(0, 0);\n    };\n    Vector.prototype.toString = function () {\n        return \"(\" + this.x.toFixed(2) + \", \" + this.y.toFixed(2) + \")\";\n    };\n    Vector.prototype.add = function (other) {\n        return new Vector(this.x + other.x, this.y + other.y);\n    };\n    Vector.prototype.sub = function (other) {\n        return new Vector(this.x - other.x, this.y - other.y);\n    };\n    Vector.prototype.mult = function (n) {\n        return new Vector(this.x * n, this.y * n);\n    };\n    Vector.prototype.div = function (n) {\n        return new Vector(this.x / n, this.y / n);\n    };\n    Vector.prototype.dist = function (other) {\n        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));\n    };\n    Vector.prototype.sized = function (size) {\n        var mul = size / this.size;\n        return this.mult(mul);\n    };\n    Vector.prototype.rotated = function (radian) {\n        var x = this.x * Math.cos(radian) - this.y * Math.sin(radian);\n        var y = this.x * Math.sin(radian) + this.y * Math.cos(radian);\n        return new Vector(x, y);\n    };\n    return Vector;\n}());\n\nvar Force = /** @class */ (function () {\n    function Force(magnitude) {\n        this.magnitude = magnitude;\n    }\n    Force.zero = function () {\n        return new Force(new Vector(0, 0));\n    };\n    Force.prototype.accelerationTo = function (mass) {\n        return this.magnitude.div(mass);\n    };\n    Force.prototype.add = function (other) {\n        var vector = this.magnitude.add(other.magnitude);\n        return new Force(vector);\n    };\n    return Force;\n}());\n\nfunction calculateOrbitalSpeed(position, gravityCenter, gravity) {\n    var distance = position.dist(gravityCenter);\n    return Math.sqrt(gravity / distance);\n}\nfunction calculateOrbitalVelocity(position, gravityCenter, gravity) {\n    var orbitalSpeed = calculateOrbitalSpeed(position, gravityCenter, gravity);\n    var tangentVector = position.sub(gravityCenter)\n        .rotated(Math.PI / 2);\n    return tangentVector.sized(orbitalSpeed);\n}\n\n\n//# sourceURL=webpack:///./src/classes/physics.ts?");

/***/ }),

/***/ "./src/classes/terrain.ts":
/*!********************************!*\
  !*** ./src/classes/terrain.ts ***!
  \********************************/
/*! exports provided: Terrain, VanillaTerrain, GravitationalTerrain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Terrain\", function() { return Terrain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VanillaTerrain\", function() { return VanillaTerrain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GravitationalTerrain\", function() { return GravitationalTerrain; });\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physics */ \"./src/classes/physics.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Terrain = /** @class */ (function () {\n    function Terrain(size) {\n        this.size = size;\n    }\n    Terrain.prototype.frictionAt = function (position) {\n        return 1; // 0(停止) ~ 1(摩擦なし)\n    };\n    Terrain.prototype.forceAt = function (position) {\n        return _physics__WEBPACK_IMPORTED_MODULE_0__[\"Force\"].zero();\n    };\n    Terrain.prototype.draw = function (p) {\n        return;\n    };\n    return Terrain;\n}());\n\nvar VanillaTerrain = /** @class */ (function (_super) {\n    __extends(VanillaTerrain, _super);\n    function VanillaTerrain(size, immobilizedWidth) {\n        var _this = _super.call(this, size) || this;\n        _this.size = size;\n        _this.immobilizedWidth = immobilizedWidth;\n        return _this;\n    }\n    VanillaTerrain.prototype.frictionAt = function (position) {\n        if (position.x < this.immobilizedWidth) {\n            return (position.x / this.immobilizedWidth);\n        }\n        if (position.x > (this.size.x - this.immobilizedWidth)) {\n            return (this.size.x - position.x) / this.immobilizedWidth;\n        }\n        if (position.y < this.immobilizedWidth) {\n            return (position.y / this.immobilizedWidth);\n        }\n        if (position.y > (this.size.y - this.immobilizedWidth)) {\n            return (this.size.y - position.y) / this.immobilizedWidth;\n        }\n        return 1;\n    };\n    VanillaTerrain.prototype.forceAt = function (position) {\n        return _physics__WEBPACK_IMPORTED_MODULE_0__[\"Force\"].zero();\n    };\n    VanillaTerrain.prototype.draw = function (p) {\n        p.stroke(207, 196, 251);\n        p.strokeWeight(this.immobilizedWidth);\n        p.noFill();\n        p.rect(0, 0, this.size.x, this.size.y);\n    };\n    return VanillaTerrain;\n}(Terrain));\n\nvar GravitationalTerrain = /** @class */ (function (_super) {\n    __extends(GravitationalTerrain, _super);\n    function GravitationalTerrain(size, center, gravity) {\n        var _this = _super.call(this, size) || this;\n        _this.size = size;\n        _this.center = center;\n        _this.gravity = gravity;\n        return _this;\n    }\n    GravitationalTerrain.prototype.frictionAt = function (position) {\n        // // 大気圏\n        // const distance = Math.max(this.center.dist(position), 0.1)\n        // if (distance > 10) {\n        //   return 1\n        // }\n        // return (distance / 10)\n        return 1;\n    };\n    GravitationalTerrain.prototype.forceAt = function (position) {\n        var distance = Math.max(this.center.dist(position), this.gravity / 10); // ブラックホールは法律で禁止されている\n        var magnitude = (1 / (distance * distance)) * this.gravity;\n        var vector = this.center.sub(position);\n        return new _physics__WEBPACK_IMPORTED_MODULE_0__[\"Force\"](vector.sized(magnitude));\n    };\n    GravitationalTerrain.prototype.draw = function (p) {\n        p.noStroke();\n        p.fill(80);\n        var size = Math.max(this.gravity / 10, 4);\n        p.ellipse(this.center.x, this.center.y, size, size);\n    };\n    return GravitationalTerrain;\n}(Terrain));\n\n\n\n//# sourceURL=webpack:///./src/classes/terrain.ts?");

/***/ }),

/***/ "./src/classes/world.ts":
/*!******************************!*\
  !*** ./src/classes/world.ts ***!
  \******************************/
/*! exports provided: VanillaWorld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VanillaWorld\", function() { return VanillaWorld; });\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physics */ \"./src/classes/physics.ts\");\n\nvar VanillaWorld = /** @class */ (function () {\n    function VanillaWorld(size, terrains) {\n        this._t = 0;\n        this._objects = [];\n        this._lives = [];\n        this._size = size;\n        this._terrains = terrains;\n    }\n    Object.defineProperty(VanillaWorld.prototype, \"size\", {\n        get: function () {\n            return this._size;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(VanillaWorld.prototype, \"t\", {\n        get: function () {\n            return this._t;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(VanillaWorld.prototype, \"terrains\", {\n        get: function () {\n            return this._terrains;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(VanillaWorld.prototype, \"objects\", {\n        get: function () {\n            return this._objects;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(VanillaWorld.prototype, \"lives\", {\n        get: function () {\n            return this._lives;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    VanillaWorld.prototype.addObjects = function (objects) {\n        this._objects = this._objects.concat(objects);\n    };\n    VanillaWorld.prototype.addLives = function (lives) {\n        this._lives = this._lives.concat(lives);\n    };\n    VanillaWorld.prototype.next = function () {\n        var _this = this;\n        this._t += 1;\n        this._lives.forEach(function (life) {\n            var forces = _this.terrains.map(function (terrain) {\n                return terrain.forceAt(life.position);\n            });\n            var fieldForce = forces.reduce(function (result, value) {\n                return result.add(value);\n            }, _physics__WEBPACK_IMPORTED_MODULE_0__[\"Force\"].zero());\n            var force = life.next()\n                .add(fieldForce);\n            var frictions = _this.terrains.map(function (terrain) {\n                return terrain.frictionAt(life.position);\n            });\n            var friction = frictions.reduce(function (sum, value) {\n                return sum + value;\n            }, 1) / (frictions.length + 1);\n            var acceleration = force.accelerationTo(life.mass);\n            var nextPosition = life.position.add(life.velocity);\n            var nextVelocity = life.velocity.mult(friction)\n                .add(acceleration);\n            var x = nextPosition.x;\n            var y = nextPosition.y;\n            var dx = nextVelocity.x;\n            var dy = nextVelocity.y;\n            if (x < 0) {\n                x = 0;\n                dx = 0;\n            }\n            else if (x > _this.size.x) {\n                x = _this.size.x;\n                dx = 0;\n            }\n            if (y < 0) {\n                y = 0;\n                dy = 0;\n            }\n            else if (y > _this.size.y) {\n                y = _this.size.y;\n                dy = 0;\n            }\n            life.position = new _physics__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](x, y);\n            life.velocity = new _physics__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"](dx, dy);\n        });\n    };\n    VanillaWorld.prototype.draw = function (p) {\n        p.background(220);\n        this.terrains.forEach(function (terrain) {\n            terrain.draw(p);\n        });\n        this._objects.forEach(function (obj) {\n            obj.draw(p);\n        });\n        this._lives.forEach(function (life) {\n            life.draw(p);\n        });\n    };\n    return VanillaWorld;\n}());\n\n\n\n//# sourceURL=webpack:///./src/classes/world.ts?");

/***/ }),

/***/ "./src/entry_points/main.ts":
/*!**********************************!*\
  !*** ./src/entry_points/main.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.js\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes_life__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/life */ \"./src/classes/life.ts\");\n/* harmony import */ var _classes_physics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/physics */ \"./src/classes/physics.ts\");\n/* harmony import */ var _classes_terrain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/terrain */ \"./src/classes/terrain.ts\");\n/* harmony import */ var _classes_world__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/world */ \"./src/classes/world.ts\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\n\n\n\n\n\n\nvar main = function (p) {\n    var world;\n    p.setup = function () {\n        var size = 800;\n        var worldSize = new _classes_physics__WEBPACK_IMPORTED_MODULE_2__[\"Vector\"](size, size);\n        p.createCanvas(size, size);\n        var terrains = [\n            new _classes_terrain__WEBPACK_IMPORTED_MODULE_3__[\"GravitationalTerrain\"](worldSize, worldSize.mult(0.33), 2),\n            new _classes_terrain__WEBPACK_IMPORTED_MODULE_3__[\"GravitationalTerrain\"](worldSize, worldSize.mult(0.66), 2),\n        ];\n        world = new _classes_world__WEBPACK_IMPORTED_MODULE_4__[\"VanillaWorld\"](worldSize, terrains);\n        var lives = randomLives(80, size, 1);\n        world.addLives(lives);\n    };\n    p.draw = function () {\n        world.next();\n        world.draw(p);\n    };\n    function randomLives(numberOfLives, positionSpace, velocity) {\n        var lives = [];\n        for (var i = 0; i < numberOfLives; i += 1) {\n            lives.push(new _classes_life__WEBPACK_IMPORTED_MODULE_1__[\"Life\"](new _classes_physics__WEBPACK_IMPORTED_MODULE_2__[\"Vector\"](Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[\"random\"])(positionSpace), Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[\"random\"])(positionSpace))));\n        }\n        if (velocity != undefined) {\n            lives.forEach(function (life) {\n                life.velocity = new _classes_physics__WEBPACK_IMPORTED_MODULE_2__[\"Vector\"](Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[\"random\"])(-velocity, velocity), Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[\"random\"])(-velocity, velocity));\n            });\n        }\n        return lives;\n    }\n};\nvar sketch = new p5__WEBPACK_IMPORTED_MODULE_0__(main);\n\n\n//# sourceURL=webpack:///./src/entry_points/main.ts?");

/***/ }),

/***/ "./src/utilities.ts":
/*!**************************!*\
  !*** ./src/utilities.ts ***!
  \**************************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n// export function random(max: number): number\t// not working: raises \"Expected 1 arguments, but got 2.\"\nfunction random(max, min) {\n    if (min == undefined) {\n        return Math.random() * max;\n    }\n    var range = max - min;\n    return Math.random() * range + min;\n}\n\n\n//# sourceURL=webpack:///./src/utilities.ts?");

/***/ })

/******/ });