import React, { Children } from 'react'

const Container = ({Children}) => {
  return (
    <div className='"max-w-[1080px] mx-auto"'>{Children}</div>
  )
}

export default Container