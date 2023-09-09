import React from 'react'
import Layout from '../../layouts'
import { useLayoutContext } from '../../../framework/context/layoutContext'
import { homeController } from '../../../controllers/homeController'
import { Button, Input, Title } from '../../shared/ui'
import { Card } from './components'

let timeout: NodeJS.Timeout

const HomeView = () => {
  const layoutContext = useLayoutContext()

  const [ids, setIds] = React.useState([1, 2, 3])

  function incrementIds() {
    setIds(prev => [...prev, prev.length + 1])
  }
  function decrementIds() {
    setIds(prev => {
      const newIds = structuredClone(prev)
      newIds.splice(-1, 1)
      return newIds
    })
  }
  function reload() {
    homeController.reloadCards()
  }
  function onChangeQnty(value: string) {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      setIds(Array(value).fill('').map((_, i) => i + 1))
    }, 500)
  }

  return (
    <Layout>
      <Title.Root>
        <Title.Text text='Home' />
        <Title.Loading status={layoutContext.loading} />
      </Title.Root>

      <div className='flex gap-2'>
        <Input
          className='w-[76.82px]'
          max={15}
          type="number"
          value={ids.length}
          step={1}
          onChange={(e) => onChangeQnty(e.target.value)}
        />
        <Button onClick={incrementIds}>card +</Button>
        <Button onClick={decrementIds}>card -</Button>
        <Button onClick={reload}>reload</Button>
      </div>

      <p className='my-2'>{JSON.stringify(ids)}</p>

      <Card.Root>
        {ids.map(id => <Card.Item key={id} id={id} />)}
      </Card.Root>
    </Layout>
  )
}

export default HomeView
