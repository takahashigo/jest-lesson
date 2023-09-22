// toBe
it("数値のテスト", () => {
  expect(1 + 2).toBe(3);
});

it("文字列のテスト", () => {
  expect("Hello" + " " + "World").toBe("Hello World");
});

it("真偽値のテスト", () => {
  expect(true).toBe(true);
});

// toEqual(オブジェクトはプロパティの順番が違うくてもテストは通る、配列はダメ)
it("オブジェクトのテスト", () => {
  expect({ bazz: "bazz", foo: "bar" }).toEqual({ foo: "bar", bazz: "bazz" });
});

it("配列のテスト", () => {
  expect(["foo", "bar"]).toEqual(["foo", "bar"]);
});

// not
it("notのテスト", () => {
  expect(1 + 2).not.toBe(4);
});

