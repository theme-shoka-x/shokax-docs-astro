---
title: 统计仪表盘
description: 文章发布趋势、分类分布与标签统计的可视化图表
---

ShokaX 内置了基于 ECharts 的统计仪表盘页面，访问 `/statistics/` 即可查看你的博客数据概览。

## 功能概览

统计页面包含以下图表：

| 图表 | 说明 |
| :--- | :--- |
| 📈 月度发文趋势 | 柱状图，展示每月发布的文章数量 |
| 🏷️ 分类分布 | 饼图，展示各分类的文章占比 |
| 📊 标签分布 | 饼图，展示热门标签的文章占比 |

所有数据在**构建时自动计算**，无需手动维护。

## 访问统计页

统计页面默认已在导航栏中配置：

```ts title="src/theme.config.ts"
export default defineConfig({
  nav: [
    // ...
    {
      text: "统计",
      href: "/statistics/",
      icon: "i-ri-bar-chart-box-line",
    },
  ],
});
```

如果你想隐藏统计页，只需从导航栏中移除该项配置即可。

## 数据来源

统计数据来自你的文章内容：

- **发文趋势**：根据所有文章（`draft: false`）的 `date` 字段按月聚合
- **分类分布**：根据所有文章的 `categories` 字段统计
- **标签分布**：根据所有文章的 `tags` 字段统计，按使用频率降序排列

:::note
草稿文章（`draft: true`）不会计入统计数据。
:::

## 统计数据的实时性

统计数据是在**构建时**生成的。这意味着：

- 添加新文章后，需要**重新构建**（`bun run build`）才能反映最新数据
- 开发模式下（`bun run dev`），每次修改文章内容后会自动更新

## 常见问题

### Q: 为什么统计图表不显示？

检查以下几点：
1. 是否有已发布的文章（非草稿）
2. 文章是否包含有效的 `date`、`categories` 和 `tags` 字段
3. 是否执行了完整的构建（`bun run build`）

### Q: 可以自定义图表样式吗？

图表使用 ECharts 渲染，可以修改 `src/components/statistics/ArticleStatisticsCharts.svelte` 来调整样式和交互。

### Q: 统计数据是否包含加密文章？

加密文章（`encrypted: true`）的标题和统计会正常计入，但正文内容不会暴露。
