import { Calculator } from "./mock_spy";

it("sumメソッドが呼び出される", () => {
  const calc = new Calculator();
  // sumSpyはmockReturnValueOnceなどで上書きすることとかもでき、上書きしなければ通常のsumメソッドが呼ばれる、spyは関数やメソッドの呼び出しを監視する
  const sumSpy = jest.spyOn(calc, "sum");
  calc.sum(1, 2);
  expect(sumSpy).toHaveBeenCalled();
  expect(sumSpy).toHaveBeenCalledWith(1, 2);

  // 他のテストに影響を与えないように、spyをリセットする(afterEachでやるのが良い)
  sumSpy.mockRestore();
});
