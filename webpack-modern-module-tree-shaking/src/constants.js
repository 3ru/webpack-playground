// CJS モジュールを 1 回だけ require して、interop をテスト
const cjsVar = require("./cjs.js");

// 基本定数
const num = 0;
export default num;              // デフォルト輸出

export const num1 = 1;
export const num2 = 2;

// tree-shakable な関数（lib.js 経由で利用）
export const add1 = () => num + num1;

// まったく使われない値（production ビルドでは消えるはず）
export const unused2 = "unused2";
