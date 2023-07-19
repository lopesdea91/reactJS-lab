import React from 'react'

const TitleLoading = ({ status }: { status: boolean }) => {
  if (status) {
    return <span className='inline-block text-lg'>loading ...</span>
  }
  return null
}

export default TitleLoading
