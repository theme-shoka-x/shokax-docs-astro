---
title: 数学公式
description: 使用 KaTeX 在文章中渲染数学公式
---

ShokaX 内置了 KaTeX 数学公式渲染支持，可以在 Markdown 和 MDX 中直接编写 LaTeX 数学公式。

## 行内公式

使用单个 `$` 包裹行内公式：

```md
质能方程：$E = mc^2$

欧拉公式：$e^{i\pi} + 1 = 0$
```

效果：公式会嵌入在文字行中，与周围的文字保持对齐。

## 块级公式

使用双 `$$` 包裹块级公式，公式会单独成行并居中显示：

```md
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
$$
```

## 常用公式示例

### 分数与根式

```md
$$
\frac{a}{b} \quad \sqrt{x} \quad \sqrt[n]{x}
$$
```

### 上下标

```md
$$
x^2 + y_1 - z_{ij}^3
$$
```

### 矩阵

```md
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\qquad
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$
```

### 求和与积分

```md
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

$$
\int_a^b f(x) \, dx
$$
```

### 希腊字母

```md
$$
\alpha, \beta, \gamma, \delta, \epsilon, \theta, \lambda, \mu, \pi, \sigma, \omega
$$
```

### 分段函数

```md
$$
f(x) = \begin{cases}
x^2, & x \geq 0 \\
-x, & x < 0
\end{cases}
$$
```

## 转义问题

如果文章中的 `$` 符号不是公式分隔符，需要进行转义：

```md
这件商品的价格是 \$19.99，而不是公式。
```

## 完整 LaTeX 参考

KaTeX 支持绝大多数 LaTeX 数学符号。完整列表请参考 [KaTeX 官方文档](https://katex.org/docs/supported.html)。

## 常见问题

### Q: 公式显示不正常？

检查以下几点：
1. 公式的 `$` 或 `$$` 是否配对正确
2. LaTeX 语法是否有拼写错误
3. 行内公式中是否包含了换行（行内公式不能换行）

### Q: 可以自定义 KaTeX 的渲染选项吗？

KaTeX 的渲染配置在 `astro.config.mjs` 中。如果需要自定义（如修改分隔符），可以编辑 `rehype-katex` 的配置。
