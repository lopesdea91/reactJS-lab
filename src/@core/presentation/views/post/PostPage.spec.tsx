import { render, screen } from "@testing-library/react"
import { PostView } from "./PostPage"

jest.mock('react-router-dom')

const spuUseParams = jest.spyOn(require('react-router-dom'), 'useParams')

describe('src/@core/presentation/views/post/PostPage', () => {
  test('render page with id 1', () => {
    spuUseParams.mockImplementationOnce(() => ({
      id: 1
    }))

    render(<PostView />)

    expect(screen.getByText('Post id: 1')).toBeVisible()
  })
})