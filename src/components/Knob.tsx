import { TargetedEvent } from 'preact/compat'
import { useEffect, useState } from 'preact/hooks'

import { ComputeColor } from '../utils/colors'

type KnobProps = {
  onColorChange?: (colors: string[], satVariation: number) => void
}

function Knob({ onColorChange }: KnobProps) {
  const [color, setColor] = useState<string>('#3a4098')
  const [satVariation, setSatVariation] = useState<number>(0)

  const handleOnChangeColorInput = (e: TargetedEvent<HTMLInputElement, Event>) => {
    setColor(e.currentTarget.value)
  }

  const handleOnChangeSatVariationInput = (e: TargetedEvent<HTMLInputElement, Event>) => {
    setSatVariation(parseFloat(e.currentTarget.value) || 0)
  }

  useEffect(() => {
    onColorChange?.(ComputeColor(color), satVariation)
  }, [color, satVariation])

  return (
    <div className="w-full flex gap-6 p-6 border-solid border-gray-200 rounded-md border-[1px]">
      <div class="sm:col-span-2 sm:col-start-1">
        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">
          Color
        </label>
        <div class="mt-2 flex items-center gap-3">
          <input
            type="text"
            name="color"
            pattern="#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?"
            id="color"
            autocomplete="off"
            value={color}
            onInput={handleOnChangeColorInput}
            onChange={handleOnChangeColorInput}
            class="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
          />
          <input
            type="color"
            name="color"
            pattern="#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?"
            id="color"
            autocomplete="off"
            value={color}
            onChange={handleOnChangeColorInput}
            onInput={handleOnChangeColorInput}
            class="block rounded-md border-0 text-gray-900 shadow-sm "
          />
        </div>
      </div>
      <div class="sm:col-span-2 sm:col-start-1">
        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">
          Saturation variation
        </label>
        <div class="mt-2">
          <input
            type="number"
            name="city"
            step="0.01"
            pattern="#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?"
            id="color"
            autocomplete="off"
            value={satVariation}
            onInput={handleOnChangeSatVariationInput}
            onChange={handleOnChangeSatVariationInput}
            class="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  )
}

export default Knob
