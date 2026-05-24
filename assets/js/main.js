// 工具盒 ToolKitHub - 公共 JS
console.log('🧰 工具盒 ToolKitHub loaded');

// 通用复制功能
function copyText(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✅ 已复制';
    setTimeout(() => { btn.textContent = orig; }, 1500);
  }).catch(() => {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    const orig = btn.textContent;
    btn.textContent = '✅ 已复制';
    setTimeout(() => { btn.textContent = orig; }, 1500);
  });
}

// 显示/隐藏错误
function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.add('show'); }
}
function hideError(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('show');
}
