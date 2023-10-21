import { useState } from 'preact/hooks'
import Examples from './components/Examples'
import Knob from './components/Knob'
import Palette from './components/Palette'

export function App() {
  const [colors, setColors] = useState<string[]>([])
  const [satVariation, setSatVariation] = useState<number>(0)

  return (
    <div className="h-full w-full overflow-auto flex flex-col gap-6 p-6 bg-white">
      <h2 className="text-3xl font-bold">Color pallette</h2>
      <Knob
        onColorChange={(colors, satVariation) => {
          setColors(colors)
          setSatVariation(satVariation)
        }}
      />

      <Palette colors={colors} />
      <Examples colors={colors} />
      <div class="prose">
        <h4>JSON values</h4>
        <pre>
          <code>
            {JSON.stringify(
              {
                name: '<name>',
                comment: `generate with: ${colors[3]}, sat +${satVariation.toFixed(2)} `,
                shades: colors,
              },
              undefined,
              2
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}
