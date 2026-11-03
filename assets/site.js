const root = document.body.dataset.root || './';
const current = document.body.dataset.page;
const project = document.body.dataset.project;
const projects = [
  ['drone-racing', '自主飞行竞速'],
  ['intelligent-race', '智能赛 · 初次参赛'],
  ['drone-delivery', '识别与快递运输'],
  ['micro-drone', '微型无人机'],
  ['aic-delivery', '无人机配送'],
  ['cyberdog', 'CyberDog'],
  ['airhust-site', 'AIRHUST 网站'],
];
const expanded = current === 'projects' && matchMedia('(min-width: 841px)').matches;

document.querySelector('#sidebar').innerHTML = `
  <a class="sidebar-name" href="${root}">李宗锴</a>
  <div class="sidebar-alias">kislate</div>
  <div class="contents-label">目录</div>
  <nav class="contents" aria-label="页面目录">
    <a href="${root}" ${current === 'home' ? 'aria-current="page"' : ''}><span class="number">01</span>关于我</a>
    <details class="project-folder ${current === 'projects' ? 'active' : ''}" ${expanded ? 'open' : ''}>
      <summary><span class="number">02</span><span>项目</span><span class="toggle-mark" aria-hidden="true">⌄</span></summary>
      <div class="project-subnav">
        <a href="${root}projects/" ${current === 'projects' && !project ? 'aria-current="page"' : ''}>全部项目</a>
        ${projects.map(([slug, name]) => `<a href="${root}projects/${slug}/" ${project === slug ? 'aria-current="page"' : ''}>${name}</a>`).join('')}
      </div>
    </details>
    <a href="${root}notes/" ${current === 'notes' ? 'aria-current="page"' : ''}><span class="number">03</span>手记</a>
  </nav>
  <div class="sidebar-links">
    <a href="https://github.com/kislate" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    <a href="https://airhust.cn/" target="_blank" rel="noopener noreferrer">AIRHUST ↗</a>
    <a href="https://github.com/kislate/kislate.github.io-legacy" target="_blank" rel="noopener noreferrer">旧站存档 ↗</a>
  </div>
  <div class="sidebar-footnote">个人网站 · 初稿<br>2026 年 11 月</div>`;

const displayCase = document.querySelector('#showcase');
displayCase.innerHTML = `
  <header class="showcase-head"><h2>展柜</h2><p>旁注与附件</p></header>
  <section class="showcase-section"><h3>短笺</h3><p>${showcaseContent.note}</p></section>
  ${showcaseContent.links.length ? `<section class="showcase-section"><h3>链接</h3>
    ${showcaseContent.links.map(item => `<a class="showcase-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title} ↗<small>${item.note}</small></a>`).join('')}
  </section>` : ''}
  ${showcaseContent.attachments.length ? `<section class="showcase-section"><h3>附件</h3>
    <ul class="showcase-files">${showcaseContent.attachments.map(item => `<li><a href="${new URL(item.path, document.baseURI).href}" target="_blank" rel="noopener noreferrer">${item.title} ↗</a><p class="empty-attachment">${item.note}</p></li>`).join('')}</ul>
  </section>` : ''}`;
