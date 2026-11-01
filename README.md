# 李宗锴 / kislate

个人网站的第一版 demo。米黄色 A4 纸张与侧边目录，用文字和图片排版呈现个人介绍、项目与手记。

站点使用纯 HTML / CSS / JavaScript，无需安装依赖、无需构建，可直接在 GitHub 网页编辑。

## 网页编辑

打开对应文件，点击编辑，完成后选择 Commit changes。GitHub Pages 会从 `main` 分支根目录发布。

| 内容 | 文件 |
| --- | --- |
| 首页：简介、AIRHUST、教育与实践 | `index.html` |
| 项目列表 | `projects/index.html` |
| 无人机竞速项目详情 | `projects/drone-racing.html` |
| 手记目录 | `notes/index.html` |
| 网站说明短文 | `notes/a-beginning.html` |
| 侧边目录与外链 | `assets/site.js` |
| 纸张、字体、间距、手机布局 | `assets/style.css` |
| 图片与视频 | `media/` |

增加项目或文章时，复制现有详情页，再在对应目录页加上链接。项目详情中已留好图片、视频和代码仓库链接的 HTML 注释示例。

首页专业经历按本人简历整理；兴趣与相册图片来自旧站；AIRHUST 介绍由本人补充。项目代码、现场图片与视频尚待整理。

## 旧站

旧仓库保留在 [kislate.github.io-legacy](https://github.com/kislate/kislate.github.io-legacy)，用于保存原有内容与提交历史。

## 本地预览

在本目录运行 `python3 -m http.server 4173`，打开 `http://localhost:4173`。
