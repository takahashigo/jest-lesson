import fs from "fs";
import { readFile } from "./mock_module";

// モジュールをモックする(itとかdescribeの外でやる)
jest.mock("fs");
// TypeScriptの型安全性を維持しつつ、モック化したfsモジュールにアクセス(TypeScriptのコンパイラーがmock化したfsモジュールを認識できるようになる)
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("Hello mock");

it("readFileがデータを返却する", () => {
  const result = readFile("test.txt");
  expect(result).toBe("Hello mock");
  expect(mockFs.readFileSync).toHaveBeenCalled();
});
