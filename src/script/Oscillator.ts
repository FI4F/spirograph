export const PI = 3.1415926535897932384626433832795
export const RADIANS_TO_DEGREES = 180 / PI
export const DEGREES_TO_RADIANS = PI / 180

export type Oscillator = {
  radius: number
  phase : number
  value : number
  delta : number
  units : "Degrees" | "Radians"
}

export default Oscillator