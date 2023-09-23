import {React, useState} from 'react';
import {Board} from './Board';
const App =() => {
  const [squares, setSquares] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
  const [isX, setIsX] = useState(true);

  const checkForWinner = () => {
    for(let i = 0; i < 3; i++) {
      if(squares[i][0] && squares[i][0] === squares[i][1] && squares[i][1] === squares[i][2])
        return squares[i][0];
      if(squares[0][i] && squares[0][i] === squares[1][i] && squares[1][i] === squares[2][i])
        return squares[0][i];
    }
    if(squares[0][0] && squares[0][0] === squares[1][1] && squares[1][1] === squares[2][2])
      return squares[0][0];
    if(squares[0][2] && squares[0][2] === squares[1][1] && squares[1][1] === squares[2][0])
      return squares[0][2];
    const copySquares = JSON.parse(JSON.stringify(squares));
    const hasNull = copySquares.flat().some(value => value === null);
    return hasNull ? 'None' : 'Tie';
  };

  const winner = checkForWinner();
  const clickSquare = (row, col) => {
    if(squares[row][col] !== null || winner !== 'None')
      return;
    const copySquares = JSON.parse(JSON.stringify(squares));
    isX ? copySquares[row][col] = 'X' : copySquares[row][col] = 'O';
    setIsX(!isX);
    setSquares(copySquares);
  }

  const resetGame = () => {
    setIsX(true);
    const copySquares = new Array(3).fill(null).map(() => Array(3).fill(null));
    setSquares(copySquares);
  }

  return (
    <div className='app'>
      <h1> {winner === 'None' ? 'There is no Winner' : `The Winner is ${winner}`}</h1>
      <Board squares={squares} handleClick={clickSquare}/>
      {winner !== 'None' && <button className='button' onClick={resetGame}>Reset Game?</button>}
    </div>
  );
}

export default App;
