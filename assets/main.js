(function () {
  var P = window.PROFILE || {};
  document.querySelectorAll('.js-github').forEach(function (a) {
    if (P.github) a.href = P.github; else a.classList.add('is-hidden');
  });
  document.querySelectorAll('.js-email').forEach(function (a) {
    if (P.email) a.href = 'mailto:' + P.email; else a.classList.add('is-hidden');
  });
  var lb = document.getElementById('lightbox');
  var lbImg = lb.querySelector('img');
  document.querySelectorAll('.zoom').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      lbImg.src = btn.dataset.src;
      lbImg.alt = img ? img.alt : '';
      if (lb.showModal) lb.showModal(); else window.open(btn.dataset.src, '_blank');
    });
  });
  lb.addEventListener('click', function () { lb.close(); });
})();
