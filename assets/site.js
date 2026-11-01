const root = document.body.dataset.root || './';
const current = document.body.dataset.page;
document.querySelector('#site-header').innerHTML = `
  <a class="wordmark" href="${root}" aria-label="kislate 首页"><span class="seed" aria-hidden="true"></span><strong>kislate</strong></a>
  <nav class="nav" aria-label="主导航">
    <a href="${root}" ${current === 'home' ? 'aria-current="page"' : ''}>关于</a>
    <a href="${root}projects/" ${current === 'projects' ? 'aria-current="page"' : ''}>项目</a>
    <a href="${root}notes/" ${current === 'notes' ? 'aria-current="page"' : ''}>手记</a>
    <a class="external" href="https://github.com/kislate" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
  </nav>`;
document.querySelector('#site-footer').innerHTML = `
  <div><div class="footer-sign">慢慢探索，慢慢生长。</div><div class="footer-small">© 2026 KISLATE · 个人博客 / 初稿</div></div>
  <div class="footer-links"><a href="https://github.com/kislate/kislate.github.io-legacy" target="_blank" rel="noopener noreferrer">旧站存档 ↗</a><a href="#top">回到顶部 ↑</a></div>`;
const copyButton = document.querySelector('[data-copy]');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(document.querySelector('#example-code').textContent);
      copyButton.textContent = '已复制 ✓';
    } catch {
      copyButton.textContent = '请选中代码复制';
    }
    setTimeout(() => { copyButton.textContent = '复制代码'; }, 2500);
  });
}
