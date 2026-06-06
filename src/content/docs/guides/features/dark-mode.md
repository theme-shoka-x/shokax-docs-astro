---
title: 暗黑模式
description: 自动/手动切换暗黑模式，自定义主题色板
---

ShokaX 内置了完整的暗黑模式支持，基于 CSS 变量驱动，可在亮色/暗色主题之间平滑切换。

## 使用暗黑模式

### 切换方式

在网站导航栏右侧，点击 :sun: / :moon: 主题切换按钮即可手动切换。

### 自动跟随系统

首次访问时，主题会**自动检测**操作系统的主题偏好：
- 系统为暗色 → 自动使用暗黑模式
- 系统为亮色 → 使用亮色模式

### 偏好持久化

你的主题选择会保存在浏览器 `localStorage` 中（key：`shokax-color-scheme`），下次访问时自动恢复。

## 实现原理

### CSS 变量驱动

ShokaX 的所有颜色都通过 CSS 自定义属性（变量）定义。以文字颜色为例：

```css
/* 亮色模式（默认） */
:root {
  --text-color: #333;
  --bg-color: #fff;
}

/* 暗色模式 */
:root[data-theme="dark"] {
  --text-color: #ddd;
  --bg-color: #1a1a2e;
}
```

切换主题时，只需修改 `<html>` 元素的 `data-theme` 属性，所有颜色自动切换。

### 代码高亮的暗色适配

ShokaX 使用 Shiki 代码高亮，内置了亮色和暗色两套代码主题：

- **亮色模式**：`github-light`
- **暗色模式**：`github-dark`

代码块会跟随全局主题自动切换配色。

### 过渡动画

主题切换时会使用 View Transition API 实现平滑的过渡动画，避免闪烁。

## 自定义主题色

如果你觉得默认配色不满意，可以修改 `src/styles/palette.css` 中的 CSS 变量：

```css title="src/styles/palette.css"
:root {
  --color-primary: #4a90d9;   /* 主题色 */
  --color-link: #4a90d9;       /* 链接颜色 */
  --color-bg: #ffffff;         /* 背景色 */
  --color-text: #333333;       /* 文字颜色 */
}

:root[data-theme="dark"] {
  --color-primary: #6ea8fe;
  --color-link: #6ea8fe;
  --color-bg: #1a1a2e;
  --color-text: #e0e0e0;
}
```

## 常见问题

### Q: 如何默认使用暗黑模式？

目前不支持通过配置项设置默认模式。主题始终优先检测系统偏好。如果你有需要，可以在 [GitHub Issues](https://github.com/theme-shoka-x/astro-blog-shokax/issues) 中提出。

### Q: 为什么某些自定义 CSS 在暗黑模式下不生效？

确保你的自定义样式也通过 CSS 变量或 `[data-theme="dark"]` 选择器来适配暗色模式。硬编码的颜色值（如 `color: #333`）不会自动切换。

### Q: 如何完全禁用暗黑模式？

修改 `src/styles/palette.css`，删除 `:root[data-theme="dark"]` 块，并移除导航栏中的主题切换按钮。
