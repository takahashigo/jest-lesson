it("はじめてのmock", () => {
  const mockFunc = jest.fn(() => "Helli mock");
  expect(mockFunc()).toBe("Helli mock");
});

it("mockImplementation", () => {
  const mockFunc = jest.fn();
  // mockimplementationを使うと、mock関数の実装を変更できる
  mockFunc.mockImplementation(() => "Hello mock2");
  expect(mockFunc()).toBe("Hello mock2");
});
