import React from "react"
import { VictoryBar, VictoryContainer, VictoryBarProps } from "victory"
import { CellFC, CellFCDefault, CellDefaultColorScale } from "./"

export interface CellBarProps
  extends Pick<VictoryBarProps, "width" | "height" | "padding"> {
  domainY: [number, number]
  value: number
}

export const CellBar: CellFC<CellBarProps> = Object.assign(
  ({ width, height, padding, domainY = [0, 1], value }: CellBarProps) => {
    return (
      <td>
        <VictoryBar
          width={width}
          height={height}
          padding={padding}
          style={{
            data: {
              fill: CellDefaultColorScale(domainY)(value),
            },
          }}
          domain={{ y: domainY }}
          data={[{ x: "value", y: value }]}
          barRatio={1}
          horizontal
          alignment={"middle"}
          containerComponent={
            <VictoryContainer width={width} responsive={false} />
          }
        />
      </td>
    )
  },
  CellFCDefault
)
