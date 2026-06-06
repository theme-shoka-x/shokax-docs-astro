---
title: 布局配置
description: 双栏/三栏布局切换与右侧附加栏配置
---

ShokaX 支持两种页面布局模式，你可以根据偏好自由切换。所有布局配置都在 `src/theme.config.ts` 的 `layout` 字段中。

## 快速开始：切换布局模式

`layout.mode` 控制整体页面结构：

```ts title="src/theme.config.ts"
export default defineConfig({
  layout: {
    mode: "three-column", // 三栏布局（默认）
  },
});
```

### 两种模式对比

| 模式 | 结构 | 适用场景 |
| :--- | :--- | :--- |
| `"two-column"` | 左侧边栏 + 主内容 | 简单清爽，移动端友好 |
| `"three-column"` | 左侧边栏 + 主内容 + 右侧附加栏 | 信息密度高，适合展示搜索/标签云等小部件 |

:::tip
两种模式在移动端表现一致——右侧附加栏会自动隐藏，保持阅读体验。
:::

## 配置右侧附加栏（仅三栏布局）

当 `mode: "three-column"` 时，右侧会显示一个附加信息栏。你可以精确控制显示哪些卡片以及它们的顺序。

### 可用的卡片类型

| 卡片 | 说明 |
| :--- | :--- |
| `announcement` | 站点公告（内容来自 `src/content/announcement.md`） |
| `search` | 全站搜索入口（点击弹出 Pagefind 搜索） |
| `calendar` | 日历占位卡片 |
| `recentMoments` | 最新一条动态/说说 |
| `randomPosts` | 随机文章推荐 |
| `tagCloud` | 热门标签云 |

### 自定义卡片顺序

使用 `layout.rightSidebar.order` 数组来控制卡片的显示顺序和可见性：

```ts title="src/theme.config.ts"
export default defineConfig({
  layout: {
    mode: "three-column",
    rightSidebar: {
      // 按你想要的顺序列出卡片——没写的不会显示
      order: ["search", "randomPosts", "tagCloud"],
    },
  },
});
```

未出现在 `order` 中的卡片**不会被显示**。

### 单独开关卡片

你也可以通过布尔值单独控制每张卡片的显示：

```ts title="src/theme.config.ts"
export default defineConfig({
  layout: {
    mode: "three-column",
    rightSidebar: {
      announcement: true,  // 显示公告
      search: true,        // 显示搜索
      calendar: false,     // 隐藏日历
      recentMoments: true, // 显示最近动态
      randomPosts: false,  // 隐藏随机文章
      tagCloud: true,      // 显示标签云
    },
  },
});
```

:::note[order vs 布尔开关]
当同时设置了 `order` 和布尔开关时，`order` 优先级更高。推荐只用 `order`，简洁明了。
:::

## 配置项速查

| 字段 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `layout.mode` | `"two-column"` `|` `"three-column"` | `"three-column"` | 页面布局模式 |
| `layout.rightSidebar.order` | `string[]` | `["announcement", "search", "calendar", "recentMoments", "randomPosts", "tagCloud"]` | 右侧栏卡片顺序 |
| `layout.rightSidebar.announcement` | `boolean` | `true` | 是否显示公告卡片 |
| `layout.rightSidebar.search` | `boolean` | `true` | 是否显示搜索卡片 |
| `layout.rightSidebar.calendar` | `boolean` | `true` | 是否显示日历卡片 |
| `layout.rightSidebar.recentMoments` | `boolean` | `true` | 是否显示最近动态 |
| `layout.rightSidebar.randomPosts` | `boolean` | `true` | 是否显示随机文章 |
| `layout.rightSidebar.tagCloud` | `boolean` | `true` | 是否显示标签云 |

## 设置站点公告

公告内容存储在 `src/content/announcement.md` 文件中：

```md title="src/content/announcement.md"
欢迎来到我的博客！🎉 这里会不定期更新技术文章和生活记录。
```

修改此文件即可更新右侧栏的公告卡片内容。

## 完整配置示例

```ts title="src/theme.config.ts"
export default defineConfig({
  siteName: "我的博客",

  layout: {
    mode: "three-column",
    rightSidebar: {
      order: ["announcement", "search", "tagCloud", "randomPosts"],
    },
  },
});
```

效果：右侧栏从上到下依次显示公告 → 搜索 → 标签云 → 随机文章。
