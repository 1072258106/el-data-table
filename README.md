# el-data-table

使用`axios`自动发送请求，支持树形结构，支持分页，支持自定义查询, 让 RESTFul 风格的 CRUD 更简单 👏

## 前提

本组件依赖`element-ui`以及开源组件`el-form-renderer`

## 安装

推荐使用[yarn](https://yarnpkg.com/en/docs/install#mac-stable)安装

```sh
yarn add el-data-table
```

## 使用

### 全局注册

为减小打包体积, 组件内并不注册外部依赖, 因此鼓励在项目内使用全局注册组件的方式

```js
import Vue from 'vue'

// 全局注册组件及loading指令
import ElDataTable from 'el-data-table'
import ElFormRenderer from 'el-form-renderer'
import {
  Button,
  Dialog,
  Form,
  FormItem,
  Loading,
  Pagination,
  Table,
  TableColumn
} from 'element-ui'

Vue.use(ElDataTable)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Loading.directive)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.component('el-form-renderer', ElFormRenderer)
```

### template

```vue
<template>
  <el-data-table></el-data-table>
</template>
```

## example

### basic

```vue
<!-- template -->
<el-data-table
  :url="url"
  :columns="columns"
>
</el-data-table>
```

```js
// script
export default {
  data() {
    return {
      url: '/api/v1/users',
      columns: [
        {prop: 'id', label: '主键'},
        {prop: 'username', label: '用户名'},
        {prop: 'fullname', label: '全名'},
        {prop: 'email', label: 'email'},
        {prop: 'department.id', label: 'department.id'},
        {prop: 'department.name', label: 'department.name'}
      ]
    }
  }
}
```

> 后面的示例将省略 template 及 script 的部分内容

### new/edit dialog form

```js
form: [
  {
    rules: [{message: '请输入email', required: true, trigger: 'blur'}],
    $el: {placeholder: '请输入'},
    label: 'email',
    $id: 'email',
    $type: 'input'
  }
]
```

### search

```js
      searchForm: [
        {
          $el: {placeholder: '请输入'},
          label: '用户名',
          $id: 'username',
          $type: 'input'
        },
        {
          $el: {placeholder: '请输入'},
          label: '全名',
          $id: 'fullname',
          $type: 'input'
        },
        {
          $el: {placeholder: '请输入'},
          label: 'email',
          $id: 'email',
          $type: 'input'
        }
      ],
```

## doc

[full documentation](https://femessage.github.io/el-data-table/)
