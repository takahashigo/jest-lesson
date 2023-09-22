it("モック関数に戻り値を設定する", () => {
  const mockFn = jest.fn();
  // mockReturnValueを使うと、mock関数の戻り値を設定できる
  mockFn.mockReturnValue("Hello");
  expect(mockFn()).toBe("Hello");
  expect(mockFn()).toBe("Hello");
  expect(mockFn()).toBe("Hello");
});

it("モック関数に一度だけ返される戻り値を設定する", () => {
  const mockFn = jest.fn();
  mockFn.mockReturnValueOnce("Hello");
  mockFn.mockReturnValueOnce("Hello2");
  mockFn.mockReturnValueOnce("Hello3");
  expect(mockFn()).toBe("Hello");
  expect(mockFn()).toBe("Hello2");
  expect(mockFn()).toBe("Hello3");
  expect(mockFn()).toBe(undefined);
});

// APIを叩いて非同期な処理を行う場合、モック関数の戻り値を非同期な値にする必要がある
it("モック関数に非同期な戻り値を設定する", async () => {
  const mockFn = jest.fn();
  mockFn.mockResolvedValue("Hello");
  expect(await mockFn()).toBe("Hello");
});
