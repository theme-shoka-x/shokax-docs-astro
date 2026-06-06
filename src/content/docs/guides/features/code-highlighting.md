---
title: 代码高亮与展示
description: Shiki 代码高亮、彩色括号、差异标注等增强功能
---

ShokaX 使用 [Shiki](https://shiki.style/) 提供代码高亮，并内置了多个增强 Transformer，让代码展示更专业。

## 基础代码高亮

在 Markdown 中使用三个反引号包裹代码块：

````md
```javascript
function hello() {
  console.log("Hello, ShokaX!");
}
```
````

代码块会自动根据语言进行语法高亮。

## 增强功能

### 彩色括号

匹配的括号会自动用不同颜色标记，让嵌套结构一目了然。

```javascript
function process(data) {        // { ── 蓝色
  return data.map((item) => {   // { ── 绿色    ( ── 橙色
    return item.value;           //
  });                            // } ── 绿色    ) ── 橙色
}                                // } ── 蓝色
```

此功能由 `@shikijs/colorized-brackets` 提供，**默认启用**，无需配置。

### 差异对比（Diff）

使用 `// [!code ++]` 和 `// [!code --]` 标注新增和删除的行：

````md
```javascript
function add(a, b) {
  return a + b;         // [!code --]
  const result = a + b; // [!code ++]
  return result;        // [!code ++]
}
```
````

- 删除行显示红色背景和 `-` 标记
- 新增行显示绿色背景和 `+` 标记

### 高亮指定行

使用 `// [!code highlight]` 高亮特定行：

````md
```javascript
function setup() {
  const config = loadConfig();
  validateConfig(config);    // [!code highlight]
  return config;
}
```
````

### 聚焦指定行

使用 `// [!code focus]` 聚焦特定行（其他行会变暗）：

````md
```javascript
function complexFunction() {
  step1();
  step2();
  step3();  // [!code focus]
  step4();  // [!code focus]
  step5();
}
```
````

### 错误/警告标注

使用 `// [!code error]` 和 `// [!code warning]` 标注问题行：

````md
```javascript
const x = 1;
x = 2;        // [!code error]   — 红色波浪下划线
console.log(x) // [!code warning] — 黄色背景
```
````

### 元数据高亮

在代码块的语言标注后添加行号范围来高亮：

````md
```javascript {2,4-5}
function example() {
  const a = 1;     // 第 2 行高亮
  const b = 2;
  const c = a + b; // 第 4 行高亮
  return c;        // 第 5 行高亮
}
```
````

## 复制按钮

每个代码块的右上角都有一个**复制按钮**，点击即可复制代码内容。复制成功后按钮会短暂显示 ✓ 图标。

## 代码块标题

你可以在代码块的元数据中添加 `title` 来显示文件名：

````md
```typescript title="src/utils/helper.ts"
export function add(a: number, b: number): number {
  return a + b;
}
```
````

## 暗黑模式适配

代码高亮会根据当前主题自动切换配：

- **亮色模式**：`github-light` 主题
- **暗色模式**：`github-dark` 主题

切换主题时，代码块配色无缝过渡。

## 全部 Transformer 一览

| Transformer | 功能 | 用法 |
| :--- | :--- | :--- |
| Diff | 差异对比 | `// [!code ++]` / `// [!code --]` |
| Highlight | 行高亮 | `// [!code highlight]` |
| Focus | 行聚焦 | `// [!code focus]` |
| Error Level | 错误/警告 | `// [!code error]` / `// [!code warning]` |
| Meta Highlight | 元数据高亮 | ` ```js {1,3-5}` |
| Colorized Brackets | 彩色括号 | 自动启用 |
