import { renderHook, waitFor } from "@testing-library/react";
import { IPostStore, usePostStore } from "./";

describe("src/@core/framework/store/postStore", () => {
  it("change values", async () => {
    const { result } = renderHook<IPostStore, unknown>(usePostStore);

    expect(result.current.data).toEqual({
      posts: [],
      search: {
        page: 1,
      },
    });

    await waitFor(() => {
      result.current.setPosts([
        {
          id: 1,
          title: "title",
          body: "body",
        },
      ]);
      result.current.setSearch({
        page: 1,
      });
    });

    expect(result.current.data.posts.length).toBe(1);
    expect(result.current.data.search).toEqual({
      page: 1,
    });
  });
});
