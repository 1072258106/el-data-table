import {storiesOf} from '@storybook/vue'
import 'element-ui/lib/theme-chalk/index.css'
import Basic from './basic.vue'
import Search from './search.vue'
import Tree from './tree.vue'
import CustomFormDataTable from './custom-form-data-table.vue'
import CustomButtons from './custom-buttons.vue'

storiesOf('ElDataTable', module)
  .add('基本CRUD', basic)
  .add('基本查询', search)
  .add('树形结构', tree)
  .add('自定义表单', customFormTable)
  .add('自定义按钮', customButtons)

function basic() {
  return {
    components: {Basic},
    template: `<basic/>`
  }
}
function tree() {
  return {
    components: {Tree},
    template: `<tree/>`
  }
}
function search() {
  return {
    components: {Search},
    template: `<search></search>`
  }
}
function customFormTable() {
  return {
    components: {CustomFormDataTable},
    template: `<custom-form-data-table/>`
  }
}
function customButtons() {
  return {
    components: {CustomButtons},
    template: `<custom-buttons/>`
  }
}
