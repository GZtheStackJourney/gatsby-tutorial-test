import Typography from "typography"
import kirkhamViewTheme from "typography-theme-kirkham"

const typography = new Typography(kirkhamViewTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
