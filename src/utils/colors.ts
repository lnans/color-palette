import chroma from 'chroma-js'

// const lightnessMap = [0.18, 0.28, 0.38, 0.48, 0.57, 0.68, 0.79, 0.87, 0.95, 0.98, 0.99]
// const saturationMap = [1, 0.58, 0.43, 0.34, 0.4, 0.55, 0.87, 1, 1, 1, 1]

const lightnessMap = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.97]
const saturationMap = [1, 0.58, 0.5, 0.44, 0.39, 0.57, 0.77, 0.88, 0.95, 1]

export function ComputeColor(color: string, satVariation: number): string[] {
  generate(color)

  const chromaColor = chroma(color)

  const result: string[] = []

  lightnessMap.forEach((lightness, index) => {
    const colorHsl = chromaColor.hsl()
    colorHsl[1] = saturationMap[index] + satVariation
    colorHsl[2] = lightness

    const colorHex = chroma(colorHsl, 'hsl').hex()
    result.push(colorHex)
  })

  return result
}

// https://github.com/javisperez/tailwindcolorshades/blob/master/src/composables/colors.ts
const CMY_HUES = [180, 300, 60]
const RGB_HUES = [360, 240, 120, 0]

function roundToTwo(num: number) {
  return +(Math.round(Number(num + 'e+2')) + 'e-2')
}

function hueShift(hues: Array<number>, hue: number, intensity: number) {
  const closestHue = hues.sort((a, b) => Math.abs(a - hue) - Math.abs(b - hue))[0],
    hueShift = closestHue - hue
  return Math.round(intensity * hueShift * 0.5)
}

function lighten(hex: string, intensity: number): string {
  const [h, s, v] = chroma(hex).hsv()
  const hue = h + hueShift(CMY_HUES, h, intensity)
  const saturation = s - roundToTwo(s * intensity)
  const value = v + roundToTwo((1 - v) * intensity)

  return chroma([hue, saturation, value], 'hsv').hex()
}

function darken(hex: string, intensity: number): string {
  const inverseIntensity = 1 - intensity
  const [h, s, v] = chroma(hex).hsv()
  const hue = h + hueShift(RGB_HUES, h, inverseIntensity)
  const saturation = s + roundToTwo((1 - s) * inverseIntensity)
  const value = v - roundToTwo(v * inverseIntensity)

  return chroma([hue, saturation, value], 'hsv').hex()
}

function generate(color: string) {
  const result: {
    [key: number]: string
  } = {
    500: color,
  }

  const intensityMap: {
    [key: number]: number
  } = {
    50: 0.95,
    100: 0.9,
    200: 0.75,
    300: 0.6,
    400: 0.3,
    600: 0.9,
    700: 0.75,
    800: 0.6,
    900: 0.45,
    950: 0.29,
  }

  const tints = [50, 100, 200, 300, 400]
  tints.forEach((level) => {
    result[level] = lighten(color, intensityMap[level])
  })

  const shades = [600, 700, 800, 900, 950]
  shades.forEach((level) => {
    result[level] = darken(color, intensityMap[level])
  })

  console.log('res', result)
}
