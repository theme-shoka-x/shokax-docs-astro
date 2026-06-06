---
title: 评论系统配置
description: 集成 Waline 评论系统，为你的博客添加评论功能
---

ShokaX 内置了 [Waline](https://waline.js.org/) 评论系统的支持，只需简单配置即可为博客添加评论功能。

## 快速开始

Waline 是一款基于 LeanCloud / Vercel / CloudBase 的轻量评论系统。你需要先部署 Waline 服务端。

### 步骤 1：部署 Waline 服务端

参考 [Waline 官方文档](https://waline.js.org/guide/get-started.html) 完成服务端部署，获取一个类似 `https://comments.example.com` 的服务地址。

### 步骤 2：配置主题

在 `src/theme.config.ts` 中启用评论并填入你的 Waline 服务地址：

```ts title="src/theme.config.ts"
export default defineConfig({
  comments: {
    enable: true,
    waline: {
      serverURL: "https://comments.example.com",
    },
  },
});
```

配置完成后，每篇文章底部会自动显示评论区。

## 配置选项

### 评论语言

`lang` 用于指定评论界面的显示语言：

```ts title="src/theme.config.ts"
export default defineConfig({
  comments: {
    enable: true,
    waline: {
      serverURL: "https://comments.example.com",
      lang: "zh-CN", // 中文界面
    },
  },
});
```

:::tip
如果不设置 `lang`，Waline 会根据浏览器语言自动选择。
:::

### 暗黑模式

Waline 支持自动跟随网站的暗黑模式：

```ts title="src/theme.config.ts"
export default defineConfig({
  comments: {
    enable: true,
    waline: {
      serverURL: "https://comments.example.com",
      dark: "auto", // 自动跟随系统
    },
  },
});
```

`dark` 支持的取值：

| 值 | 说明 |
| :--- | :--- |
| `false` | 始终使用亮色模式 |
| `true` | 始终使用暗色模式 |
| `"auto"` | 自动跟随系统偏好 |

### 自定义评论路径

默认情况下，Waline 使用当前页面路径作为评论标识。如果遇到多语言或 URL 尾斜杠等场景需要统一路径，可以手动指定：

```ts title="src/theme.config.ts"
export default defineConfig({
  comments: {
    enable: true,
    waline: {
      serverURL: "https://comments.example.com",
      path: "/posts/my-article", // 自定义评论路径
    },
  },
});
```

## 页脚评论小部件

开启评论后，你还可以在页脚启用「最新评论」小部件：

```ts title="src/theme.config.ts"
export default defineConfig({
  widgets: {
    recentComments: true,
    recentCommentsLimit: 5, // 最多显示 5 条
  },
});
```

## 关闭评论

如果暂时不需要评论功能，设置 `enable: false` 即可：

```ts title="src/theme.config.ts"
export default defineConfig({
  comments: {
    enable: false,
  },
});
```

:::note
关闭评论后，页脚的最新评论小部件也会自动停用。
:::

## 配置项速查

| 字段 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `comments.enable` | `boolean` | `false` | 是否启用评论系统 |
| `comments.waline.serverURL` | `string` | `""` | Waline 服务端地址 |
| `comments.waline.lang` | `string` | — | 评论界面语言（如 `"zh-CN"`） |
| `comments.waline.dark` | `boolean` `|` `string` | — | 暗黑模式（`false`/`true`/`"auto"`） |
| `comments.waline.path` | `string` | — | 自定义评论路径（可选） |

## 完整配置示例

```ts title="src/theme.config.ts"
export default defineConfig({
  siteName: "我的博客",

  comments: {
    enable: true,
    waline: {
      serverURL: "https://comments.example.com",
      lang: "zh-CN",
      dark: "auto",
    },
  },

  widgets: {
    recentComments: true,
    recentCommentsLimit: 10,
  },
});
```

## 常见问题

### Q: 如何获取 Waline 服务端地址？

推荐使用 Vercel 免费部署，参考 [Waline 文档 - Vercel 部署](https://waline.js.org/guide/deploy/vercel.html)。部署完成后会得到一个类似 `https://your-waline.vercel.app` 的地址。

### Q: 评论数据存储在哪里？

Waline 支持多种后端，包括 LeanCloud、CloudBase、MySQL 等。建议新手使用 LeanCloud 国际版（免费额度充足）。

### Q: 可以不使用 Waline 换其他评论系统吗？

ShokaX 目前仅内置了 Waline 支持。如果想使用其他评论系统（如 Giscus、Twikoo），需要自行修改 `src/components/post/WalineComments.svelte`。
