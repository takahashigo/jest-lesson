import { ShoppingList } from "./practice";

describe("演習", () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  describe("addItem", () => {
    it("アイテムをリストに追加できる", () => {
      shoppingList.addItem("apple");
      expect(shoppingList.list).toEqual(["apple"]);
    });
  });

  describe("removeItem", () => {
    it("アイテムをリストから削除できる", () => {
      shoppingList.addItem("apple");
      shoppingList.removeItem("apple");
      // expect(shoppingList.list).toEqual([]);
      expect(shoppingList.list).not.toContain("apple");
    });

    it("存在しないアイテムの削除を試みたときにエラーをスローする", () => {
      expect(() => shoppingList.removeItem("apple")).toThrow(
        "アイテム: apple は存在しません"
      );
    });
  });
});
