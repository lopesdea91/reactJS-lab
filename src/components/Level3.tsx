import React from "react"
import { Search, controllerApp } from "../controllers/AppControllers"
import Observer from "../entities/Observer"

export const Level3 = () => {
  const [search, setSearch] = React.useState<Search>(controllerApp.search)

  React.useEffect(() => {
    controllerApp.register(new Observer('level3', (data: Search) => {
      console.log('... event Level3');

      setSearch(data)
    }))
  }, [])

  return (
    <>
      <h4>Level3</h4>

      <p>Page: {search.page}</p>
      <p>limit: {search.limit}</p>
    </>
  )
}