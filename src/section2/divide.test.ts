// toThrow

import { divide, ZeroDivisorError } from "./divide";

it("０で割るとエラーが発生する", () => {
  // 例外が発生する関数を実行するときは、関数をラップする必要がある
  // なぜなら、例外が発生すると、それ以降のコードは実行されないから
  expect(() => divide(1, 0)).toThrow();
  expect(() => divide(1, 0)).toThrow("0で割ることはできません");
  expect(() => divide(1, 0)).toThrow(ZeroDivisorError);
});
