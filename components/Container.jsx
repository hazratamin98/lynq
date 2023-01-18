import React, { Children } from 'react'

const Container = ({Children}) => {
  return (
    <div className="max-w-[1080px] mx-auto   py-5 px-28">{Children}</div>
  )
}

export default Container