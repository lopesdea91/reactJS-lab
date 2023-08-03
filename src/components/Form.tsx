import React, { FormEvent } from 'react'

export default function Form() {

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    alert('Form send successfully!')
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-2'>
      <div className='flex flex-col'>
        <label className='text-sm mb-1' htmlFor='email'>E-mail</label>
        <input className='border border-white/50 bg-white/20 rounded-sm' id="email" type='email' required defaultValue='pedro@google.com' />
      </div>

      <div className='flex flex-col'>
        <label className='text-sm mb-1' htmlFor='password'>Password</label>
        <input className='border border-white/50 bg-white/20 rounded-sm' id="password" type='password' required />
      </div>

      <button type='submit' className='border border-white/50 text-xs uppercase font-bold px-4 py-2 mt-4 w-min ml-auto'>Enviar</button>
    </form>
  )
}
