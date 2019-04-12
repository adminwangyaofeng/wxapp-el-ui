# rule-页底提示

页底提示

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-rule": "component/_rule/rule"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| rule | Object | {} | 配置 | 0.0.4 |
| title | String | "" | 标题，优先于rule.title | 0.0.4 |

##### rule的属性:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| title | 内容 | 0.0.4 |
| lines.color | 线条颜色 | 0.0.4 |
| lines.width | 线条长度 | 0.0.4 |
| lines.height | 线条粗细 | 0.0.4 |
| font.color | 字体颜色 | 0.0.4 |
| font.margin | 横线与字体间距 | 0.0.4 |
| font.size | 字体大小 | 0.0.4 |

### 使用

```html
<el-rule title='标题文本' rule='{{rule}}'></el-rule>
```

```js
Page({
  data: {
    rule: {
      lines: {
        color: "#E3E3E3",
        width: 20,
        height: 1
      },
      font: {
        color: "#555",
        margin: 10,
        size: 15
      }
    }
  }
})
```


