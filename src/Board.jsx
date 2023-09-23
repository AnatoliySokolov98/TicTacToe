import React from 'react'
import { Row } from './Row'
export const Board = ({squares, handleClick}) => {

  const rows = squares.map((row, index) => {
    return <Row squares={row} key={index} row={index} handleClick={handleClick}/>
  })
  return (
    <div className='board'>
      {rows}
    </div>
  )
}
