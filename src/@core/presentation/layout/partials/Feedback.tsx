import { useEffect, useState } from 'react'
import { appController } from '../../../controllers/AppController'
import { FeedbackObserver } from '../../../domain/Observer'
import { cssMerge } from '../../../../utils'

interface IFeedback {
  type: string,
  message: string
}
export const Feedback = () => {
  const [data, setData] = useState<IFeedback | null>(null)

  function open(values: IFeedback) {
    setData(values)
  }

  function close() {
    setData(null)
  }

  useEffect(() => {
    appController.subscribeWatcher('feedback', (value: FeedbackObserver) => {
      open({
        type: value.type,
        message: value.message
      })
    })
    appController.subscribeWatcher('feedbackInitial', () => {
      close()
    })
  }, [])

  const hasFeedback = !!data?.type
  const cssClose = hasFeedback ? 'h-12 border-slate-800' : 'h-0 border-transparent'

  return (
    <div className={
      cssMerge(
        'mb-3 flex items-center justify-between',
        'duration-300 overflow-hidden px-4 border-2',
        cssClose,
      )}>
      <span className='uppercase italic'>{data?.message}!</span>

      <button className='inline-block px-3 py-2 bg-slate-800 text-xs text-white font-mono rounded' onClick={close}>X</button>
    </div>
  )
}
