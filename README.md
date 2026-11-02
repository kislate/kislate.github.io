# 李宗锴 / kislate

米黄色纸面、左侧目录与右侧展柜，三列整体居中。桌面采用较紧凑的默认尺寸，页面长度随内容自然延伸。

站点使用纯 HTML / CSS / JavaScript，无需安装依赖或构建，可以直接在 GitHub 网页编辑。提交后由 GitHub Pages 从 `main` 分支发布。

## 编辑内容

| 内容 | 位置 |
| --- | --- |
| 首页简介、教育、AIRHUST 与实践 | `index.html` |
| 项目目录 | `projects/index.html` |
| 每个项目的正文 | `projects/项目名/index.html` |
| 每个项目的代码 | `projects/项目名/code/` |
| 每个项目的图片与视频 | `projects/项目名/media/` |
| 手记 | `notes/` |
| 各页独立展柜 | 当前页面同目录的 `showcase.js`（单篇手记为 `a-beginning.showcase.js`） |
| 上传到展柜的附件 | `attachments/` |
| 侧边目录 | `assets/site.js` |
| 配色、字体、三列布局 | `assets/style.css` |

项目分别放在 `drone-racing`、`drone-delivery`、`micro-drone`、`aic-delivery`、`cyberdog`、`airhust-site` 六个文件夹。各自包含概述、工作内容、实现记录、代码和演示栏目；页面中保留了图片、视频和代码的编辑示例注释。

在 GitHub 网页打开对应 `index.html`，点击编辑即可继续扩充。上传素材到项目的 `media/`，再引用同目录相对路径；代码可放在 `code/`，也可以链接到实际维护代码的独立仓库。当前尚未添加实际源码或演示素材。

## 展柜

每个页面都有独立的展柜配置，修改一页不会改动其他页：

- 首页：`showcase.js`
- 项目总览：`projects/showcase.js`
- 每个项目：`projects/项目名/showcase.js`
- 手记总览：`notes/showcase.js`
- 当前单篇手记：`notes/a-beginning.showcase.js`

修改对应文件的 `note`、`links` 和 `attachments` 即可。附件路径以当前 HTML 为起点：例如项目附件可上传到该项目的 `media/` 后填写 `media/file.pdf`，首页附件则填写 `attachments/file.pdf`。

新建文章时，为它单独创建一个展柜配置，再在 HTML 中引用。不要让两篇文章引用同一份配置。

## 更新与缓存

样式、脚本和展柜配置的引用都带有 `?v=...` 版本标记。以后修改这些文件时，也把对应页面引用处的版本号改为一个新值，让浏览器请求更新文件。GitHub Pages 的响应允许缓存 10 分钟；遇到电脑仍显示旧版，可以在当前页面按 `Ctrl+Shift+R` 强制刷新。

## 图片与旧站

首页已移除旧站插画，手记文章中的图片及其原始文件继续保留。

旧仓库在 [kislate.github.io-legacy](https://github.com/kislate/kislate.github.io-legacy)，保存原有内容与提交历史。

## 本地预览

运行 `python3 -m http.server 4173`，打开 `http://localhost:4173`。直接用浏览器打开 HTML 文件也可以查看页面和展柜。
