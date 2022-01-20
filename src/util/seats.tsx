export function countSeats(N:number, S:string) {
    const reservedSeats = parseReservedSeats(S)

    let result = 0
    const twoFamilyRowString = 'BCDEFGHJ'
    const oneFamilyRowStrings = [ 'BCDE', 'DEFG', 'FGHJ']

    for(let i = 1; i <= N; i++) {
        let rowString = 'ABCDEFGHJK'
        const reservedRowSeats = rowSeats(reservedSeats, i)
        if(reservedRowSeats.length === 0) {
            result = result + 2
            continue
        }

        if(reservedRowSeats.length > 9) {
            continue
        }

        const seatLettersArray =  stripRowSeatNumbers(reservedRowSeats)

        seatLettersArray.forEach((seatLetter:string) => {
            rowString = rowString.replace(seatLetter, '')
        })

        if(rowString.includes(twoFamilyRowString)) {
            result = result + 2
            continue
        }

        if(rowString.includes(oneFamilyRowStrings[1])) {
            result = result + 1
            continue
        }

        if(rowString.includes(oneFamilyRowStrings[0])) {
            result = result + 1
        }

        if(rowString.includes(oneFamilyRowStrings[2])){
            result = result + 1
        }
    }

    return result
}

export function stripRowSeatNumbers(reservedRowSeats:string[]) {
    return reservedRowSeats.map((seat:string) => {
        return seat.slice(-1)
    })
}

export function rowSeats(S:string[], rowNumber:number) {
    const regex = RegExp("^" + rowNumber + "[A,B,C,D,E,F,G,H,J,K]{1}$")
    return S.filter((seat:string) => seat.match(regex)
    );
}

export function parseReservedSeats(S:string) {
    if(S === '') {
        return []
    }
    return S.split(' ')
}
