import { delay } from "./async_func";

it("delayが指定された時間後にメッセージを返す", async () => {
  const result = await delay("Hello!", 1000);
  expect(result).toBe("Hello!");
});

it("timeがマイナスの場合はエラーが発生する", async () => {
  await expect(delay("Hello!", -1000)).rejects.toThrow(
    "timeは0以上で指定してください"
  );

  try {
    const result = await delay("Hello!", -1000);
  } catch (error: any) {
    expect(error.message).toBe("timeは0以上で指定してください");
  }
});
