import React from 'react'
import { Square } from './Square'
export const Row = ({squares, row, handleClick}) => {

  const boxes = squares.map((value, index) => {
    return <Square square={value} key={index} row={row} col={index} handleClick={handleClick}/>
  });
  return (
    <div className='row'>
      {boxes}
    </div>
  )
}
