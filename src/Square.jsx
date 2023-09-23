import React from 'react'

export const Square = ({square, row, col, handleClick}) => {

  return (
    <div className='square' onClick={()=>handleClick(row, col)}>{square}</div>
  )
}
