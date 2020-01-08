/**
 * We can not directly `export { default as ComponentName } from "./ComponentPath"`
 * That will not support { ButtonGroup } to get exported. So instead we are
 * doing it in following way -
 */
import Tabs from "./Tabs"
export default Tabs
