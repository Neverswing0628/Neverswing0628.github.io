(function () {
  var P = window.PROFILE || {};

  // GitHub / Email 버튼: 값이 비어 있으면 숨김
  document.querySelectorAll('.js-github').forEach(function (a) {
    if (P.github) a.href = P.github; else a.classList.add('is-hidden');
  });
  document.querySelectorAll('.js-email').forEach(function (a) {
    if (P.email) a.href = 'mailto:' + P.email; else a.classList.add('is-hidden');
  });

  // 이미지 확대 보기
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

// 프로젝트 단계 네비게이션: 스크롤 위치에 따라 상황 > 해결과제 > 액션 > 결과 강조
(function () {
  var navs = [].slice.call(document.querySelectorAll('.steps'));
  if (!navs.length) return;
  var data = navs.map(function (nav) {
    var links = [].slice.call(nav.querySelectorAll('a'));
    return { links: links, targets: links.map(function (a) { return document.querySelector(a.getAttribute('href')); }) };
  });
  var ticking = false;
  function update() {
    ticking = false;
    var line = window.innerHeight * 0.35;
    data.forEach(function (d) {
      var cur = 0;
      var tops = d.targets.map(function (t) { return t ? t.getBoundingClientRect() : null; });
      // 상황·해결과제 카드가 나란히 있으면 카드를 대부분 지나야 '해결과제'로 넘어감
      if (tops[0] && tops[1] && Math.abs(tops[0].top - tops[1].top) < 4) tops[1] = { top: tops[1].top + tops[1].height * 0.85 };
      tops.forEach(function (r, i) { if (r && r.top <= line) cur = i; });
      d.links.forEach(function (a, i) {
        a.classList.toggle('on', i === cur);
        a.classList.toggle('done', i < cur);
        if (i === cur) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current');
      });
    });
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
