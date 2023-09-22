describe("配列に関するテスト", () => {
  it("配列に要素を追加できる", () => {
    const array: number[] = [];
    array.push(1);
    expect(array).toEqual([1]);
  });

  it("配列の長さが正しい", () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
  });

  describe("配列の検索に関するテスト", () => {
    it("配列の要素を検索できる", () => {
      const array = [1, 2, 3];
      expect(array.indexOf(1)).toBe(0);
    });
  });
});
