import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { CellSparkline, CellSparklineProps } from "./CellSparkline"

export default {
  title: "Example/Cell/CellSparkline",
  component: CellSparkline,
  argTypes: {},
} as Meta

const Template: Story<CellSparklineProps> = args => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <CellSparkline {...args} />
        </tr>
        <tr>
          <CellSparkline {...args} />
        </tr>
      </tbody>
    </table>
  )
}

const range: number[] = [...Array(10).keys()]
export const Basic = Template.bind({})

Basic.args = {
  domain: { y: [0, 1] },
  scale: "linear",
  data: range.map(element => ({ x: element, y: element * 0.1 })),
}