# kislate / 个人手记

米黄色、暖棕色与陶土红的个人博客 demo。纯 HTML / CSS / JavaScript，无需安装或构建，可以直接在 GitHub 网页修改。

- 首页：个人介绍、身份、经历、精选项目。
- 项目集：一个明确标注的示例项目，包含代码、图片和视频占位。
- 手记：文章列表与一篇排版示范短文。

学校、职业、真实经历与项目成果都没有虚构，待本人补充。

## 只用 GitHub 网页上线

1. 旧仓库保留。若要沿用 `https://kislate.github.io/`，先在旧仓库 Settings → General 将仓库改名为 `kislate.github.io-legacy`（名称如被占用可另取），在旧仓库 Settings → Pages 停用发布，再将旧仓库归档。归档保留代码与提交历史。
2. 创建新的公开仓库 `kislate.github.io`。如改用 `personal-blog` 等其他仓库名，对应站点地址为 `https://kislate.github.io/personal-blog/`。
3. 在新仓库点击 Add file → Upload files，上传本目录里的网页和 `assets`、`projects`、`notes`、`media` 目录，网页文件应直接位于仓库根目录。单独确认空文件 `.nojekyll` 已加入。
4. 新仓库 Settings → Pages → Build and deployment：Source 选择 **Deploy from a branch**，Branch 选择 **main / (root)**，保存。
5. Pages 完成发布后，使用页面显示的 Visit site 链接查看。

以上是待执行的上线步骤，README 本身不代表旧仓库已停用或新站已发布。

GitHub 官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 网页编辑位置

| 想修改什么 | 文件 |
| --- | --- |
| 介绍、身份、经历、精选项目 | `index.html` |
| 项目目录 | `projects/index.html` |
| 项目详情、代码、视频 | `projects/first-project.html` |
| 手记目录 | `notes/index.html` |
| 示例文章 | `notes/a-beginning.html` |
| 导航、页脚 | `assets/site.js` |
| 配色、字体、间距 | `assets/style.css` |
| 图片与 MP4 文件 | `media/` |

进入文件 → 编辑 → Commit changes 即可更新。增加项目或文章时，复制一份对应详情文件，再在目录页加上链接即可。

在线时尝试加载 Noto Serif SC 字体；加载不到时自动使用系统宋体。插画是站点自带 SVG，不依赖外部图片服务。

## 本地预览（可选）

在本目录运行 `python3 -m http.server 4173`，打开 `http://localhost:4173`。
