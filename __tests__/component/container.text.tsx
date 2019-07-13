import * as React from "react"
import { shallow } from "enzyme"
import Container from "../../src/components/container"
import { findDataTestAttr } from "../../utils"

const setup = (props = {}) => {
  const component = shallow(<Container {...props} />)
  return component
}

describe("container component", () => {
  let component: any
  beforeEach(() => {
    component = setup()
  })

  it("should render without errors", () => {
    const wrapper = findDataTestAttr(component, "container")
    expect(wrapper.length).toBe(1)
  })
})
