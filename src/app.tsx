import { useState } from 'preact/hooks'
import Examples from './components/Examples'
import Knob from './components/Knob'
import Palette from './components/Palette'

export function App() {
  const [colors, setColors] = useState<string[]>([])

  return (
    <div className="h-full w-full overflow-auto flex flex-col gap-6 p-6 bg-white">
      <h2 className="text-3xl font-bold">Color pallette</h2>
      <Knob onColorChange={setColors} />

      <Palette colors={colors} />
      <Examples colors={colors} />
      <div class="prose">
        <h4>JSON values</h4>
        <pre>
          <code>{JSON.stringify(colors, undefined, 2)}</code>
        </pre>
      </div>
    </div>
  )
}
