import React from 'react'
import Layout from '../../layouts'
import { useLayoutContext } from '../../../framework/context/layoutContext'
import Title from '../../shared/Title'
import TitleLoading from '../../shared/TitleLoading'
import Card from './components/Card'
import { homeController } from '../../../controllers/homeController'
import Actions from './components/Actions'
import Button from '../../shared/Button'
import Input from '../../shared/Input'
import CardRoot from './components/CardRoot'

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
      <Title title='Home'>
        <TitleLoading status={layoutContext.loading} />
      </Title>

      <Actions>
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
      </Actions>

      <p className='my-2'>{JSON.stringify(ids)}</p>

      <CardRoot>
        {ids.map(id => <Card key={id} id={id} />)}
      </CardRoot>
    </Layout>
  )
}

export default HomeView
