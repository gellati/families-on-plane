import { rowSeats, stripRowSeatNumbers } from '../util/seats'
import { Row } from './Row'

interface CabinProps {
    numberOfRows: number
    reservedSeats: string[]
}

export function Cabin(props: CabinProps): JSX.Element {
    const { numberOfRows, reservedSeats } = props

    if (numberOfRows === 0) {
        return <></>
    }

    let rows = []

    for(let i = 1; i <= numberOfRows; i++) {
        const reservedRowSeats = rowSeats(reservedSeats, i)
        const seatLettersArray =  stripRowSeatNumbers(reservedRowSeats)

        rows.push(
            <Row id={`row-{i}`} num={i} seats={seatLettersArray} />
        )
    }
    return (
        <>
        <div
            style={{ display: 'flex', gap: '22px', paddingLeft: '25px'}}
        >
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
            <div>F</div>
            <div>G</div>
            <div>H</div>
            <div>J</div>
            <div>K</div>
        </div>
            {rows}
        </>
    )
}