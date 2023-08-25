import { http } from "./";

describe("src/@core/infra/http/http", () => {
  test("method get", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      json: () => ({
        items: [],
      }),
    });

    const res = await http.get("url.com/api");

    expect(res).toEqual({ status: 200, data: { items: [] } });
  });

  test("method post", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 201,
      json: () => ({
        name: "name",
        status: true,
      }),
    });

    const res = await http.post("url.com/api", { name: "name", status: true });

    expect(res).toEqual({ status: 201, data: { name: "name", status: true } });
  });

  test("method put", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 201,
      json: () => ({
        name: "name",
        status: true,
      }),
    });

    const res = await http.put("url.com/api/1", { name: "name", status: true });

    expect(res).toEqual({ status: 201, data: { name: "name", status: true } });
  });

  test("method delete", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 204,
    });

    const res = await http.delete("url.com/api/1");

    expect(res).toEqual({
      status: 204,
    });
  });
});
