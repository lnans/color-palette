import classNames from 'classnames'

import { CSSProperties, useState } from 'preact/compat'
import classes from './Examples.module.scss'

type ExamplesProps = {
  colors: string[]
}

function Examples({ colors }: ExamplesProps) {
  const [scale, setScale] = useState<number>(1)

  const filled = {
    '--color-bg': colors[4],
    '--color-bd': colors[4],
    '--color': 'white',
    '--color-hover-bg': colors[3],
    '--color-hover-bd': colors[3],
    '--color-hover': 'white',
  } as CSSProperties

  const outlined = {
    '--color-bg': 'transparent',
    '--color-bd': colors[4],
    '--color': colors[4],
    '--color-hover-bg': colors[10],
    '--color-hover-bd': colors[3],
    '--color-hover': colors[3],
  } as CSSProperties

  const ghost = {
    '--color-bg': 'transparent',
    '--color-bd': 'transparent',
    '--color': colors[4],
    '--color-hover-bg': colors[10],
    '--color-hover-bd': colors[10],
    '--color-hover': colors[3],
  } as CSSProperties

  return (
    <div className="w-full flex flex-col gap-6 p-6 border-solid border-gray-200 rounded-md border-[1px]">
      <div className="w-full flex justify-end gap-6 ">
        <button
          className="relative w-6 h-6 text-white font-bold flex items-center justify-center outline-none border-none rounded-md bg-gray-400 active:translate-y-[1px] transition-all"
          onClick={() => setScale((prev) => prev - 0.1)}
        >
          -
        </button>
        <span className="text-base font-medium">Scale: {(scale * 100).toFixed(0)}%</span>
        <button
          className="relative w-6 h-6 text-white font-bold flex items-center justify-center outline-none border-none rounded-md bg-gray-400 active:translate-y-[1px] transition-all"
          onClick={() => setScale((prev) => prev + 0.1)}
        >
          +
        </button>
      </div>
      <div className="w-fulle flex justify-center gap-6 p-6">
        <button
          className={classNames(classes.root)}
          style={{ ...filled, height: 44 * scale, fontSize: 16 * scale, paddingInline: 16 * scale }}
        >
          Filled
        </button>
        <button
          className={classNames(classes.root)}
          style={{
            ...outlined,
            height: 44 * scale,
            fontSize: 16 * scale,
            paddingInline: 16 * scale,
          }}
        >
          Outlined
        </button>
        <button
          className={classNames(classes.root)}
          style={{ ...ghost, height: 44 * scale, fontSize: 16 * scale, paddingInline: 16 * scale }}
        >
          Ghost
        </button>
      </div>
    </div>
  )
}

export default Examples
