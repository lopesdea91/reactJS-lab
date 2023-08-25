import { act, render, screen } from "@testing-library/react"
import { Posts } from "./Posts"
import { IPost } from "../../../../domain/entities/Post"

jest.mock('react-router-dom')

const spuUseParams = jest.spyOn(require('react-router-dom'), 'useNavigate')

describe('src/@core/presentation/views/home/components/Posts', () => {
  const useNavigateMock = jest.fn()

  const content1: IPost = {
    id: 1,
    title: 'title 1',
    body: 'body 1'
  }

  test('render posts not logged', async () => {
    spuUseParams.mockReturnValueOnce(useNavigateMock)

    render(<Posts posts={[content1]} logged={false} />)

    const elPost = screen.queryByTestId('post-1')
    expect(elPost).toBeVisible()

    await act(() => {
      elPost?.click()
    })

    expect(useNavigateMock).toBeCalledTimes(0)
  })

  test('render posts logged', async () => {
    spuUseParams.mockReturnValueOnce(useNavigateMock)

    render(<Posts posts={[content1]} logged={true} />)

    const elPost = screen.queryByTestId('post-1')
    expect(elPost).toBeVisible()

    await act(() => {
      elPost?.click()
    })

    expect(useNavigateMock).toBeCalledTimes(1)
  })
})