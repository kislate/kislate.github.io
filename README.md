# 李宗锴 / kislate

米黄色纸面、左侧目录与右侧展柜。正文宽度适合阅读，长度随内容自然延伸。

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
| 右侧展柜的短文、链接与附件列表 | `assets/showcase.js` |
| 上传到展柜的附件 | `attachments/` |
| 侧边目录 | `assets/site.js` |
| 配色、字体、三列布局 | `assets/style.css` |

项目分别放在 `drone-racing`、`drone-delivery`、`micro-drone`、`aic-delivery`、`cyberdog`、`airhust-site` 六个文件夹。各自包含概述、工作内容、实现记录、代码和演示栏目；页面中保留了图片、视频和代码的编辑示例注释。

在 GitHub 网页打开对应 `index.html`，点击编辑即可继续扩充。上传素材到项目的 `media/`，再引用同目录相对路径；代码可放在 `code/`，也可以链接到实际维护代码的独立仓库。当前尚未添加实际源码或演示素材。

## 展柜

编辑 `assets/showcase.js` 可修改短文字与链接。增加附件时，先上传到 `attachments/`，再在 `attachments` 数组填写文件标题、路径和简短说明。设置文件中有示例，不需要改页面布局。

## 图片与旧站

首页已移除旧站插画，手记文章中的图片及其原始文件继续保留。

旧仓库在 [kislate.github.io-legacy](https://github.com/kislate/kislate.github.io-legacy)，保存原有内容与提交历史。

## 本地预览

运行 `python3 -m http.server 4173`，打开 `http://localhost:4173`。直接用浏览器打开 HTML 文件也可以查看页面和展柜。
