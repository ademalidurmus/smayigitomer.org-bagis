function copyToClipboard(id) {
  try {
    var copyText = document.getElementById(id);
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    showAlert(`Kopyalanan metin: <span class="font-monospace">${textArea.value}</span>`, 'success');
  } catch {
    showAlert(`Metin kopyalanamadı! Lütfen ekrandan kopyalayınız.`, 'danger');
  }
}

const showAlert = (message, type) => {
  const alertPlaceholder = document.getElementById('alertBox');
  alertPlaceholder.innerHTML = [
    `<div class="container fixed-bottom alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Kapat"></button>',
    '</div>'
  ].join('');
}
