import React, { ReactNode } from 'react'

const TitleView = ({ action, title }: { action?: ReactNode, title: string }) => {
  return (
    <div className="flex items-center p-2">
      <span className="mr-auto text-gray-300 uppercase text-lg border-b-4 border-b-red-600">
        {title}
      </span>

      {action}
    </div>
  )
}

export default TitleView
