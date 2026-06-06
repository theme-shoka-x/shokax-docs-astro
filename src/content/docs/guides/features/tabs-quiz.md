---
title: Tabs 选项卡与 Quiz 测验组件
description: 使用 Tabs 组织内容、Quiz 创建交互式测验
---

ShokaX 提供了 **Tabs 选项卡** 和 **Quiz 交互式测验系列组件**（8 个），无需导入即可在 MDX 文章中直接使用。

## Tabs 选项卡

`<Tabs>` 和 `<Tab>` 组件用于创建选项卡式内容区域，适合展示多版本代码、多种方案的对比等场景。

### 基本用法

```mdx
<Tabs defaultValue="npm">
  <Tab label="npm" value="npm">
    npm install my-package
  </Tab>
  <Tab label="bun" value="bun">
    bun add my-package
  </Tab>
  <Tab label="pnpm" value="pnpm">
    pnpm add my-package
  </Tab>
</Tabs>
```

### 组件属性

| 组件 | 属性 | 类型 | 说明 |
| :--- | :--- | :--- | :--- |
| `<Tabs>` | `defaultValue` | `string` | **必填**。默认选中的 Tab 的 `value` |
| `<Tab>` | `label` | `string` | **必填**。Tab 标签文字 |
| `<Tab>` | `value` | `string` | **必填**。Tab 的唯一标识 |

### 嵌套复杂内容

Tab 内部支持 Markdown 和其他 MDX 组件：

```mdx
<Tabs defaultValue="intro">
  <Tab label="介绍" value="intro">

  ## 关于这个功能

  这是<Highlight color="blue">一个很棒的功能</Highlight>。

  <Note type="info">支持嵌套其他组件</Note>

  </Tab>
  <Tab label="代码示例" value="code">

  这里是 JavaScript 代码：
  
  const greeting = "Hello, ShokaX!";
  console.log(greeting);

  </Tab>
</Tabs>
```

---

## Quiz 测验组件

ShokaX 提供了 8 个 Quiz 组件，支持在文章中创建交互式测验题。

### 组件一览

| 组件 | 用途 |
| :--- | :--- |
| `<QuizGroup>` | 测验组容器，包裹一组题目 |
| `<Quiz>` | 单个题目（支持单选/多选/判断/填空） |
| `<QuizOptions>` | 选项列表容器 |
| `<QuizOption>` | 单个选项 |
| `<QuizAnswer>` | 显示正确答案 |
| `<QuizGap>` | 填空题的空位 |
| `<QuizMistake>` | 常见错误提示 |

### 单选题

使用 `type="single"` 创建单选题，正确答案添加 `correct` 属性：

```mdx
<QuizGroup>
  <Quiz type="single" question="JavaScript 中声明变量的关键字是？">

  <QuizOptions>
    <QuizOption>A. var</QuizOption>
    <QuizOption correct>B. let</QuizOption>
    <QuizOption>C. const</QuizOption>
    <QuizOption>D. 以上都是</QuizOption>
  </QuizOptions>

  <QuizAnswer>
    let 和 const 都可以声明变量。
    但 const 用于常量声明，let 更通用。
  </QuizAnswer>

  </Quiz>
</QuizGroup>
```

### 多选题

使用 `type="multiple"`，多个选项可以同时标记 `correct`：

```mdx
<QuizGroup>
  <Quiz type="multiple" question="以下哪些是 JavaScript 原始类型？">

  <QuizOptions>
    <QuizOption correct>A. string</QuizOption>
    <QuizOption correct>B. number</QuizOption>
    <QuizOption>C. object</QuizOption>
    <QuizOption correct>D. boolean</QuizOption>
  </QuizOptions>

  <QuizAnswer>
    string、number、boolean 是原始类型。
    object 是引用类型。
  </QuizAnswer>

  </Quiz>
</QuizGroup>
```

### 判断题

使用 `type="true-false"`：

```mdx
<QuizGroup>
  <Quiz type="true-false" question="TypeScript 是 JavaScript 的超集。">

  <QuizOptions>
    <QuizOption correct>正确</QuizOption>
    <QuizOption>错误</QuizOption>
  </QuizOptions>

  <QuizAnswer>
    正确。TypeScript 完全兼容 JavaScript，并在其基础上增加了类型系统。
  </QuizAnswer>

  </Quiz>
</QuizGroup>
```

### 填空题

使用 `type="fill-in"`，`<QuizGap>` 标记填空位置：

```mdx
<QuizGroup>
  <Quiz type="fill-in" question="补全下面的代码：">

  const arr = <QuizGap>[...]</QuizGap>
  arr.push(1)

  <QuizAnswer>
    正确答案是 [] 或 new Array()。
    用于创建一个空数组。
  </QuizAnswer>

  <QuizMistake>
    常见错误：写成 {}（那是空对象，不是数组）
  </QuizMistake>

  </Quiz>
</QuizGroup>
```

`<QuizMistake>` 用于提示常见错误，帮助读者避免踩坑。

### Quiz 属性速查

| 属性 | 类型 | 适用组件 | 说明 |
| :--- | :--- | :--- | :--- |
| `type` | `"single"` `\|` `"multiple"` `\|` `"true-false"` `\|` `"fill-in"` | `<Quiz>` | 题目类型 |
| `question` | `string` | `<Quiz>` | 题目文字 |
| `correct` | `boolean` | `<QuizOption>` | 标记为正确答案 |

:::note
所有 Quiz 组件都必须包裹在 `<QuizGroup>` 中，否则可能无法正常渲染。
:::
