import chroma from 'chroma-js'

const lightnessMap = [0, 0.18, 0.28, 0.38, 0.48, 0.57, 0.68, 0.79, 0.87, 0.95, 0.98, 0.99, 1]
const saturationMap = [0, 1, 0.58, 0.43, 0.34, 0.4, 0.55, 0.87, 1, 1, 1, 1, 0]

export function ComputeColor(color: string, satVariation: number): string[] {
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
