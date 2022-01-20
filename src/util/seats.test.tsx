import { expect } from 'chai'
import { countSeats }  from './seats'

test('1 row, reserved 1A', () => {
    expect(countSeats(1, '1A')).to.equal(2)
})

test('1 row, reserved none', () => {
    expect(countSeats(1, '')).to.equal(2)
})

test('2 rows, reserved 1A 2F 1C', () => {
    expect(countSeats(2, '1A 2F 1C')).to.equal(2)
})

test('2 rows, reserved 1A 1B 1C 1D 1E 1F 1G 1H 1J 1K', () => {
    expect(countSeats(2, '1A 1B 1C 1D 1E 1F 1G 1H 1J 1K')).to.equal(2)
})

test('2 rows, reserved 1A 1B 1C 1D 1E 1F 1G 1H 1J 1K 2A 2B 2C 2D 2E 2F 2G 2H 2J 2K', () => {
    expect(countSeats(2, '1A 1B 1C 1D 1E 1F 1G 1H 1J 1K 2A 2B 2C 2D 2E 2F 2G 2H 2J 2K')).to.equal(0)
})

test('2 rows, reserved none', () => {
    expect(countSeats(2, '')).to.equal(4)
})

test('2 rows, reserved 1F 1G 1H 1J 2B 2C 2D 2E', () => {
    expect(countSeats(2, '1F 1G 1H 1J 2B 2C 2D 2E')).to.equal(2)
})

test('2 rows, reserved 1A 1B 1F 1G 1H 1J 2B 2C 2D 2E', () => {
    expect(countSeats(2, '1A 1B 1F 1G 1H 1J 2B 2C 2D 2E')).to.equal(1)
})


test('2 rows, reserved 1A 1B 1C 1E 1F 1G 1H 1J 2B 2C 2D 2E 2F 2G 2K', () => {
    expect(countSeats(2, '1A 1B 1C 1E 1F 1G 1H 1J 2B 2C 2D 2E 2F 2G 2K')).to.equal(0)
})

test('100 rows, reserved 99F', () => {
   expect(countSeats(100, '99F')).to.equal(199)
})

