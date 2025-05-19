/******/ var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

// CommonJS モジュールが混在しても問題ないか検証するためのスタブ
module.exports = "cjs";


/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/

// NAMESPACE OBJECT: ./src/barrel-constants.js
var barrel_constants_namespaceObject = {};
__webpack_require__.r(barrel_constants_namespaceObject);
__webpack_require__.d(barrel_constants_namespaceObject, {
  x: () => (x),
  y: () => (y),
  z: () => (z)
});

;// ./src/constants.js
// CJS モジュールを 1 回だけ require して、interop をテスト
const cjsVar = __webpack_require__(1);

// 基本定数
const num = 0;
/* harmony default export */ const constants = (num);              // デフォルト輸出

const num1 = 1;
const num2 = 2;

// tree-shakable な関数（lib.js 経由で利用）
const add1 = () => num + num1;

// まったく使われない値（production ビルドでは消えるはず）
const unused2 = "unused2";

;// ./src/lib.js


function lib_add1() {
  return constants + num1;
}

function add2() {
  return constants + num2;
}

// 使われない関数（ビルド後に消えることを確認）
function unused_add() {
  return "unused";
}

;// ./src/barrel-constants.js
// namespace 再エクスポートの動作を確認
const x = 1;
const y = 1;
const z = 1;

;// ./src/index.js
   // ← default を一度ローカル変数に束縛

/* harmony default export */ const src = (constants);                 // default は index → constants





// 依存関数はバンドルの中で実際に呼ばれる形にしておく

function add3() {
    return lib_add1() + add2();
}

export { lib_add1 as add1, add2, add3, src as default, num1, unused_add, barrel_constants_namespaceObject as xyz };
