const defaultProps = {
  width: 120,
  height: 20,
  padding: { left: 10, right: 14 },
}

enum ComponentKind {
  Cell = "CELL",
}

export const CellFCDefault = {
  kind: ComponentKind.Cell,
  defaultProps: defaultProps,
}
export interface CellFC<P> extends React.FC<P> {
  readonly kind: ComponentKind.Cell
}

import * as scale from "d3-scale"

export const CellDefaultColorScale = (
  domain: Iterable<scale.NumberValue> = [0, 1]
) => {
  const colorRange = ["#e5e7d4", "#ffe570", "#ffa94c", "#ff845f", "#ff0000"]

  return (value: number): number | undefined => {
    return scale.scaleQuantize().domain(domain).range(colorRange)(value)
  }
}
