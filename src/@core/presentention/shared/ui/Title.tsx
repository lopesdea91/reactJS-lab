import { ReactNode } from 'react'

const TitleRoot = ({ children }: { children: ReactNode }) => {
  return <div className='flex items-center justify-between mb-3'>{children}</div>
}
const TitleText = ({ text }: { text: string }) => {
  return <h1 className='text-2xl'>{text}</h1>
}
const TitleLoading = ({ status }: { status: boolean }) => {
  return status
    ? <span className='inline-block text-lg'>loading ...</span>
    : null
}

export const Title = {
  Root: TitleRoot,
  Text: TitleText,
  Loading: TitleLoading
}