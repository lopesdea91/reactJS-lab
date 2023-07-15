import React from 'react';
import { controllerApp } from '../@core/controllers/AppControllers';

export const Form = () => {
  function onsubmit(e: React.FormEvent) {
    e.preventDefault()
    controllerApp.getTodos()
  }

  return (
    <form onSubmit={onsubmit}>
      <h3>Form</h3>

      <div>
        <label htmlFor="page">Page</label>
        <input
          type="number"
          defaultValue={controllerApp.search.page}
          onChange={e => {
            controllerApp.setSearch({
              page: parseInt(e.target.value),
            })
          }}
        />
      </div>

      <div>
        <label htmlFor="limit">Limit</label>
        <input
          type="number"
          defaultValue={controllerApp.search.limit}
          onChange={e => {
            controllerApp.setSearch({
              limit: parseInt(e.target.value),
            })
          }}
        />
      </div>

      <button type="submit">buscar</button>
    </form>
  )
}

