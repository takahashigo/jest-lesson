import axios from "axios";
import Users from "./practice";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("Users", () => {
  beforeEach(() => {
    // モック関数の戻り値をリセットする
    mockedAxios.get.mockReset();
  });

  it("allメソッドがユーザーの一覧を返す", async () => {
    // mockデータの準備
    const users = [{ id: 1, name: "Bob" }];
    const resp = { data: users };
    mockedAxios.get.mockResolvedValue(resp);

    const res = await Users.all();
    expect(res).toEqual([{ id: 1, name: "Bob" }]);
    expect(mockedAxios.get).toHaveBeenCalledWith("/users.json");
  });
});
