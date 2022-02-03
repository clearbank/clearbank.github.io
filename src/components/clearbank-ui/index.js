import React from 'react'
import loadable from '@loadable/component'

const SSR = () => <div></div>

let Alert = SSR
let Button = SSR
let Card = SSR
let Layout = SSR
let Loading = SSR
let Message = SSR
let MessageBox = SSR
let Notification = SSR
let Radio = SSR
let Dialog = SSR
let DialogBody = SSR
let Rate = SSR
let Progress = SSR
let Badge = SSR
let Tabs = SSR
let TabPane = SSR
let Tree = SSR
let Input = SSR
let Icon = SSR
let Menu = SSR
let SubMenu = SSR
let Steps = SSR
let Breadcrumb = SSR
let Tooltip = SSR
let InputNumber = SSR
let Checkbox = SSR
let CheckBoxGroup = SSR
let Slider = SSR
let Table = SSR
let Switch = SSR
let Form = SSR
let FormItem = SSR
let Upload = SSR
let Tag = SSR
let Select = SSR
let SelectOption = SSR
let Dropdown = SSR
let Popover = SSR
let Pagination = SSR
let AutoComplete = SSR
let TimeSelect = SSR
let TimePicker = SSR
let TimeRangePicker = SSR
let DatePicker = SSR
let DateRangePicker = SSR
let Carousel = SSR
let Collapse = SSR
let CollapseItem = SSR
let ColorPicker = SSR
let Cascader = SSR
let Transfer = SSR
// required
if (typeof window !== 'undefined') {
  // Loading = require("element-react/dist/npm/es6/src/loading").default
  Button = loadable(() => import('element-react/dist/npm/es6/src/button'))
  Tabs = loadable(() => import('element-react/dist/npm/es6/src/tabs'))
  TabPane = loadable(() =>
    import('element-react/dist/npm/es6/src/tabs/TabPane')
  )
  Collapse = loadable(() => import('element-react/dist/npm/es6/src/collapse'))
  CollapseItem = loadable(() =>
    import('element-react/dist/npm/es6/src/collapse/CollapseItem')
  )
  Select = loadable(() =>
    import('element-react/dist/npm/es6/src/select/Select')
  )
  SelectOption = loadable(() =>
    import('element-react/dist/npm/es6/src/select/Option')
  )
}

export {
  Alert,
  Button,
  Card,
  Layout,
  Loading,
  Message,
  MessageBox,
  Notification,
  Radio,
  Dialog,
  DialogBody,
  Rate,
  Progress,
  Badge,
  Tabs,
  TabPane,
  Tree,
  Input,
  Icon,
  Menu,
  SubMenu,
  Steps,
  Breadcrumb,
  Tooltip,
  InputNumber,
  Checkbox,
  CheckBoxGroup,
  Slider,
  Table,
  Switch,
  Form,
  FormItem,
  Upload,
  Tag,
  Select,
  SelectOption,
  Dropdown,
  Popover,
  Pagination,
  AutoComplete,
  TimeSelect,
  TimePicker,
  TimeRangePicker,
  DatePicker,
  DateRangePicker,
  Carousel,
  Collapse,
  CollapseItem,
  ColorPicker,
  Cascader,
  Transfer
}
