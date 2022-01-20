import { Seat } from "./Seat";

interface RowProps {
    id: string
    num: number
    seats: string[]
}

export function Row(props: RowProps):JSX.Element {
    const { id, num, seats } = props
    const seatRow = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K',]
    const availableSeatsRow = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'J']

    const twoFamilyRow = ['B','C', 'D','E','F','G','H','J']
    const leftFamilyRow = [ 'B', 'C', 'D', 'E' ]
    const middleFamilyRow = ['D', 'E', 'F', 'G']
    const rightFamilyRow = ['F', 'G', 'H', 'J']

    let seatTypes:string[] = seatRow.map((seat:string) => availableSeatsRow.includes(seat) ? 'family' : 'empty')

    if(twoFamilyRow.some((seat) => { return seats.includes(seat)})) {

        if(middleFamilyRow.some((seat) => { return seats.includes(seat)})){
            if(leftFamilyRow.some((seat) => { return seats.includes(seat)})){
                seatTypes[1] = 'empty'
                seatTypes[2] = 'empty'
                seatTypes[3] = 'empty'
                seatTypes[4] = 'empty'
            }
            if(rightFamilyRow.some((seat) => { return seats.includes(seat)})) {
                seatTypes[5] = 'empty'
                seatTypes[6] = 'empty'
                seatTypes[7] = 'empty'
                seatTypes[8] = 'empty'
            }
        } else {
            seatTypes[1] = 'empty'
            seatTypes[2] = 'empty'
            seatTypes[7] = 'empty'
            seatTypes[8] = 'empty'
        }
    }

    seats.forEach(seat => {
        switch(seat){
            case 'A': seatTypes[0] = 'reserved'; break;
            case 'B': seatTypes[1] = 'reserved'; break;
            case 'C': seatTypes[2] = 'reserved'; break;
            case 'D': seatTypes[3] = 'reserved'; break;
            case 'E': seatTypes[4] = 'reserved'; break;
            case 'F': seatTypes[5] = 'reserved'; break;
            case 'G': seatTypes[6] = 'reserved'; break;
            case 'H': seatTypes[7] = 'reserved'; break;
            case 'J': seatTypes[8] = 'reserved'; break;
            case 'K': seatTypes[9] = 'reserved'; break;
            default:
        }
    });


    return(
        <div id={id}
            style={{
                display: "flex", gap: "10px",
                height: "20px", padding: "5px",
                alignItems: "center",
            }}
        >
            {num}
            {seatRow.map((letter:string, index:number) => {
                return <Seat type={seatTypes[index]} />
            })}
        </div>
    )
}