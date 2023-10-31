import chroma from 'chroma-js'
import classNames from 'classnames'
import classes from './Palette.module.scss'

type PaletteProps = {
  colors: string[]
}

function Palette({ colors }: PaletteProps) {
  const hslColors = colors.map((color) => chroma(color).hsl())

  return (
    <div className="w-full flex p-6 border-solid border-gray-200  shadow-sm rounded-md border-[1px] justify-center">
      {hslColors.map((color, index) => (
        <div
          key={index}
          className={classNames(
            'flex flex-col items-center justify-center py-2 w-24 h-40 first:rounded-l-md last:rounded-r-md text-base font-bold',
            classes.color
          )}
          style={{ backgroundColor: colors[index] }}
        >
          <span>h: {(color[0] || 0).toFixed(0)}</span>
          <span>s: {(color[1] * 100).toFixed(0)}%</span>
          <span>l: {(color[2] * 100).toFixed(0)}%</span>
          <div className="flex-1"></div>
          <span class="text-xs font-semibold uppercase">{colors[index]}</span>
          <span>T{index * 100}</span>
        </div>
      ))}
    </div>
  )
}

export default Palette
