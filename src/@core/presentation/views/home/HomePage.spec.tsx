import { act, render, renderHook, screen } from "@testing-library/react"
import { HomeView } from "./HomePage"
import { usePostStore, IPostStore, useLoadingStore, ILoadingStore } from "../../../framework/store"
import { http } from "../../../infra/http"
import { IPost } from "../../../domain/entities/Post"

jest.mock('./components/Posts', () => ({
  Posts: () => (<div>POSTS LIST</div>)
}))

describe('src/@core/presentation/views/home/HomePage', () => {
  const content1: IPost = {
    id: 1,
    title: 'title 1',
    body: 'body 1'
  }

  test('render component and postStore initial', async () => {
    http.get = jest.fn().mockImplementationOnce(() => ({
      status: 200,
      data: [content1],
    }))

    const { result: loadingStore } = renderHook<ILoadingStore, unknown>(() => useLoadingStore())
    const { result: postStore } = renderHook<IPostStore, unknown>(() => usePostStore())

    expect(loadingStore.current.loading).toBe(false)
    expect(postStore.current.data.posts.length).toBe(0)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      render(<HomeView />)
    })
    expect(screen.queryByText('POSTS LIST')).toBeVisible()

    expect(loadingStore.current.loading).toBe(false)
    expect(postStore.current.data.posts.length).toBe(1)

    expect(1).toBe(1)
  })

  test('render component and postStore with values', async () => {
    http.get = jest.fn().mockImplementationOnce(() => ({
      status: 200,
      data: [content1],
    }))

    const { result: loadingStore } = renderHook<ILoadingStore, unknown>(() => useLoadingStore())
    const { result: postStore } = renderHook<IPostStore, unknown>(() => usePostStore())

    await act(() => {
      loadingStore.current.setStatus(true)
      postStore.current.setPosts([content1])
    })

    expect(loadingStore.current.loading).toBe(true)
    expect(postStore.current.data.posts.length).toBe(1)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      render(<HomeView />)
    })

    expect(!!screen.queryByText('carregando ...')).toBeTruthy()

    await act(() => {
      loadingStore.current.setStatus(false)
    })

    expect(!!screen.queryByText('carregando ...')).toBeFalsy()

    expect(loadingStore.current.loading).toBe(false)
    expect(postStore.current.data.posts.length).toBe(1)

    expect(1).toBe(1)
  })
})