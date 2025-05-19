import constants, { num1, num2 } from "./constants.js";

export function lib_add1() {
  return constants + num1;
}

export function add2() {
  return constants + num2;
}

// 使われない関数（ビルド後に消えることを確認）
export function unused_add() {
  return "unused";
}
