import React from 'react'
import { controllerApp, Search } from '../@core/controllers/AppControllers'
import Observer from '../@core/entities/Observer'

type IData = {
  search: Search
  length: number
}
export const Data = () => {
  const [data, setData] = React.useState<IData>({
    search: controllerApp.search,
    length: 0
  })

  React.useEffect(() => {
    controllerApp.register(new Observer('controllerData', ({ length, search }: IData) => {
      console.log('... event ControllerData');

      setData({
        search, length
      })
    }))
  }, [])

  return (
    <div>
      <h3>ControllerData</h3>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
