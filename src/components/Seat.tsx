interface ISeatProps {
    type: string // 'reserved' | 'family' | 'empty'
}


export function Seat(props:ISeatProps):JSX.Element {
    const { type } = props

    let background = 'white'
    if(type === 'reserved') {
        background = 'red'
    }
    if(type === 'family') {
        background = 'green'
    }

    return (
        <div
            style={{ border: "1px solid black", borderRadius: "50%",
                width: "20px", height: "25px",
                backgroundColor: background
            }}
        >
        </div>
    )
}
