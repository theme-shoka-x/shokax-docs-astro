---
title: 音乐播放器
description: 配置 nyx-player 嵌入式音乐播放器，为你的博客添加背景音乐
---

ShokaX 内置了 [nyx-player](https://github.com/theme-shoka-x/nyx-player) 嵌入式音乐播放器，支持网易云音乐和 QQ 音乐歌单。

## 快速启用

在 `src/theme.config.ts` 中配置播放器：

```ts title="src/theme.config.ts"
export default defineConfig({
  nyxPlayer: {
    enable: true,
    urls: [
      {
        name: "我的歌单",
        url: "https://music.163.com/#/playlist?id=2943811283",
      },
    ],
  },
});
```

配置完成后，页面底部会出现一个迷你音乐播放器。

## 配置选项

### 歌单配置

`urls` 数组支持添加多个歌单，播放器顶部会出现歌单切换标签：

```ts title="src/theme.config.ts"
export default defineConfig({
  nyxPlayer: {
    enable: true,
    urls: [
      {
        name: "工作时听",
        url: "https://music.163.com/#/playlist?id=123456789",
      },
      {
        name: "休息时听",
        url: "https://music.163.com/#/playlist?id=987654321",
      },
    ],
  },
});
```

:::note
目前仅支持网易云音乐和 QQ 音乐的歌单链接。支持两种 URL 格式：
- `https://music.163.com/#/playlist?id=XXXXX`
- `https://y.qq.com/n/ryqq/playlist/XXXXX`
:::

### 预设主题

`preset` 控制播放器的视觉风格：

| 值 | 说明 |
| :--- | :--- |
| `"shokax"`（默认） | ShokaX 原生风格，与博客主题配色协调 |
| `"nyx"` | nyx-player 默认主题 |

```ts title="src/theme.config.ts"
export default defineConfig({
  nyxPlayer: {
    enable: true,
    preset: "nyx",
    urls: [
      {
        name: "歌单",
        url: "https://music.163.com/#/playlist?id=2943811283",
      },
    ],
  },
});
```

### 暗黑模式适配

播放器会自动跟随网站主题切换配色。你可以指定暗黑模式的选择器：

```ts title="src/theme.config.ts"
export default defineConfig({
  nyxPlayer: {
    enable: true,
    darkModeTarget: ':root[data-theme="dark"]',
    urls: [],
  },
});
```

默认值就是 `:root[data-theme="dark"]`，一般不需要修改。

## 关闭播放器

如果不想使用播放器，设置 `enable: false` 或完全不配置 `nyxPlayer`：

```ts title="src/theme.config.ts"
export default defineConfig({
  nyxPlayer: {
    enable: false,
  },
});
```

## 配置项速查

| 字段 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `nyxPlayer.enable` | `boolean` | `false` | 是否启用播放器 |
| `nyxPlayer.urls` | `Array<{name, url}>` | `[]` | 歌单列表 |
| `nyxPlayer.urls[].name` | `string` | — | 歌单显示名称 |
| `nyxPlayer.urls[].url` | `string` | — | 歌单链接（网易云/QQ音乐） |
| `nyxPlayer.preset` | `"nyx"` `|` `"shokax"` | `"shokax"` | 播放器主题 |
| `nyxPlayer.darkModeTarget` | `string` | `':root[data-theme="dark"]'` | 暗色模式选择器 |

## 完整配置示例

```ts title="src/theme.config.ts"
export default defineConfig({
  siteName: "我的博客",

  nyxPlayer: {
    enable: true,
    preset: "shokax",
    darkModeTarget: ':root[data-theme="dark"]',
    urls: [
      {
        name: "默认歌单",
        url: "https://music.163.com/#/playlist?id=2943811283",
      },
    ],
  },
});
```

## 常见问题

### Q: 为什么歌单加载不出来？

网易云音乐的 API 可能偶尔不稳定，或某些歌单有版权限制。建议测试你的歌单链接是否能正常播放。

### Q: 可以播放本地音乐文件吗？

目前不支持本地文件播放。nyx-player 依赖网易云/QQ音乐的在线 API。

### Q: 可以调整播放器的位置吗？

播放器默认固定在页面底部。如需调整位置，可以修改播放器的 CSS 样式或注入位置。
