import * as React from "react"
import { shallow } from "enzyme"
import Header from "../../src/components/header"
import { findDataTestAttr } from "../../utils"

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />)
  return component
}

describe("header component", () => {
  let component: any
  beforeEach(() => {
    component = setup()
  })

  it("should render without errors", () => {
    const wrapper = findDataTestAttr(component, "header")
    expect(wrapper.length).toBe(1)
  })
})
