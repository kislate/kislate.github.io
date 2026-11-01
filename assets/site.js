const root = document.body.dataset.root || './';
const current = document.body.dataset.page;

document.querySelector('#sidebar').innerHTML = `
  <a class="sidebar-name" href="${root}">李宗锴</a>
  <div class="sidebar-alias">kislate</div>
  <div class="contents-label">目录</div>
  <nav class="contents" aria-label="页面目录">
    <a href="${root}" ${current === 'home' ? 'aria-current="page"' : ''}><span class="number">01</span>关于我</a>
    <a href="${root}projects/" ${current === 'projects' ? 'aria-current="page"' : ''}><span class="number">02</span>项目</a>
    <a href="${root}notes/" ${current === 'notes' ? 'aria-current="page"' : ''}><span class="number">03</span>手记</a>
  </nav>
  <div class="sidebar-links">
    <a href="https://github.com/kislate" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    <a href="https://airhust.cn/" target="_blank" rel="noopener noreferrer">AIRHUST ↗</a>
    <a href="https://github.com/kislate/kislate.github.io-legacy" target="_blank" rel="noopener noreferrer">旧站存档 ↗</a>
  </div>
  <div class="sidebar-footnote">个人网站 · 初稿<br>2026 年 11 月</div>`;
