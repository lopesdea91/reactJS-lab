import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const Link = ({ to, external, children, ...rest }: { to: string, external?: boolean, children: ReactNode, target: string }) => {
  const navigate = useNavigate();

  const css = 'px-2 py-1 font-semibold text-xs text-red-600 uppercase rounded border-b-4 border-b-red-600 bg-gray-200'

  if (external)
    return (
      <a href={to} className={css} {...rest}>
        {children}
      </a>
    )

  return (
    <a onClick={() => navigate(to)} className={css} {...rest}>
      {children}
    </a >
  )
}

export default Link
