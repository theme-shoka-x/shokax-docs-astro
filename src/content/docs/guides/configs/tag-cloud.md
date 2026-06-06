---
title: 标签云配置
description: 设置标签云的颜色渐变，让热门标签更醒目
---

标签云（Tag Cloud）是展示博客标签使用频率的可视化小部件。在 ShokaX 中，标签云出现在两个位置：

- **标签列表页**（`/tags/`）：完整的标签云，按使用频率显示不同字号
- **右侧附加栏**（三栏布局）：紧凑的标签云卡片

## 配置标签云配色

标签云的颜色根据标签使用频率自动生成渐变色。你可以通过 `tagCloud` 配置自定义渐变的起止色：

```ts title="src/theme.config.ts"
export default defineConfig({
  tagCloud: {
    startColor: "var(--grey-6)",   // 低频标签颜色（默认灰色）
    endColor: "var(--color-blue)", // 高频标签颜色（默认蓝色）
  },
});
```

### 配色逻辑

- 使用**最少的**标签 → 显示 `startColor`
- 使用**最多的**标签 → 显示 `endColor`
- 中间的标签 → 自动计算两个颜色之间的过渡色

### 自定义颜色

支持任意 CSS 颜色值：

```ts title="src/theme.config.ts"
export default defineConfig({
  tagCloud: {
    startColor: "#999",      // 六级制颜色
    endColor: "#ff6b6b",     // 六级制颜色
  },
});
```

也可以使用 CSS 变量引用主题色板：

```ts title="src/theme.config.ts"
export default defineConfig({
  tagCloud: {
    startColor: "var(--grey-5)",
    endColor: "var(--color-pink)",
  },
});
```

### 可用的主题色变量

| 变量 | 说明 |
| :--- | :--- |
| `var(--color-red)` | 红色 |
| `var(--color-pink)` | 粉色 |
| `var(--color-orange)` | 橙色 |
| `var(--color-yellow)` | 黄色 |
| `var(--color-green)` | 绿色 |
| `var(--color-aqua)` | 青色 |
| `var(--color-blue)` | 蓝色 |
| `var(--color-purple)` | 紫色 |
| `var(--grey-1)` ~ `var(--grey-9)` | 灰色梯度 |

## 控制标签云显示位置

### 标签列表页

标签列表页（`/tags/`）始终显示完整标签云，无需额外配置。

### 右侧附加栏

在三栏布局中控制标签云卡片的显示：

```ts title="src/theme.config.ts"
export default defineConfig({
  layout: {
    mode: "three-column",
    rightSidebar: {
      order: ["tagCloud", "search"], // 标签云排在最前面
    },
  },
});
```

详见 [布局配置](/guides/configs/layout/)。

## 配置项速查

| 字段 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `tagCloud.startColor` | `string` | `"var(--grey-6)"` | 低频标签颜色 |
| `tagCloud.endColor` | `string` | `"var(--color-blue)"` | 高频标签颜色 |

## 完整配置示例

```ts title="src/theme.config.ts"
export default defineConfig({
  siteName: "我的博客",

  tagCloud: {
    startColor: "var(--grey-5)",
    endColor: "var(--color-orange)",
  },

  layout: {
    mode: "three-column",
    rightSidebar: {
      order: ["search", "tagCloud", "randomPosts"],
    },
  },
});
```
