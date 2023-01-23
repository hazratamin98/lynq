import React, { Children } from 'react'

const Container = ({Children}) => {
  return (
    <div className="max-w-[1080px] mx-auto   py-5 px-28 bg-black text-white">{Children}</div>
  )
}

export default Container