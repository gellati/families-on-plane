import { useState } from 'react';
import { Cabin } from './components/Cabin';
import { Input } from './components/Input';
import { parseReservedSeats } from './util/seats';

function App() {

  const [reservedSeatsString, setReservedSeatsString] = useState('')
  const [numberOfRows, setnumberOfRows] = useState(0)

  const onNumberOfRowsInputChage = (value:number) => {
    setnumberOfRows(value)
  }

  const onReservedSeatsInputChange = (value:string) => {
    setReservedSeatsString(value)
  }

  const reservedSeats = parseReservedSeats(reservedSeatsString)

  return (
    <div>
      <div
        style={{display: "flex", gap: "10px", padding: "20px 0px"}}
      >
        <Input
          value={numberOfRows}
          onChange={onNumberOfRowsInputChage}
        />
        <Input
          value={reservedSeatsString}
          onChange={onReservedSeatsInputChange}
        />
      </div>
      <Cabin
        numberOfRows={numberOfRows}
        reservedSeats={reservedSeats}
      />
    </div>
  );
}

export default App;
