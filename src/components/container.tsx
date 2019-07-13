import * as React from "react"
import containerStyles from "./container.module.css"

export default ({ children }: any) => (
  <div data-test="container" className={containerStyles.container}>
    {children}
  </div>
)
