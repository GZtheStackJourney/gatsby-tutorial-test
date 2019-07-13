export const findDataTestAttr = (component: any, attr: any) => {
  return component.find(`[data-test='${attr}']`)
}
