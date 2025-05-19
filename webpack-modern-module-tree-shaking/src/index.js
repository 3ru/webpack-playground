import constants from "./constants.js";   // ← default を一度ローカル変数に束縛

export default constants;                 // default は index → constants

export { lib_add1 as add1, add2, unused_add } from "./lib.js";
export { num1 } from "./constants.js";
export * as xyz from "./barrel-constants.js";

// 依存関数はバンドルの中で実際に呼ばれる形にしておく
import { lib_add1, add2 } from "./lib.js";
export function add3() {
    return lib_add1() + add2();
}
