/* Monta o catálogo a partir de assets/kits.js.
   Página central: <body data-page="home">  ·  Página de categoria: <body data-page="categoria" data-cat="slug" data-base="../"> */
(function () {
  var C = window.CATALOGO;
  if (!C) { return; }
  var body = document.body;
  var base = body.getAttribute('data-base') || '';
  var line = function (d) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>'; };
  var ICON = {
    casamento: line('<circle cx="9" cy="14.5" r="5.5"/><circle cx="15" cy="14.5" r="5.5"/><path d="M13.4 5.2 15 3.6l1.6 1.6L15 6.8z"/>'),
    'cha-de-bebe': line('<path d="M14 3.5a7.5 7.5 0 0 1 7.5 7.5H14z"/><path d="M2.5 11h19a6 6 0 0 1-6 6h-7a6 6 0 0 1-6-6z"/><path d="M2.5 11 1 8"/><circle cx="7.5" cy="20" r="1.6"/><circle cx="16.5" cy="20" r="1.6"/>'),
    aniversarios: line('<path d="M12 2.8a6.2 6.2 0 0 1 6.2 6.2c0 4.2-3.6 7.4-6.2 7.4S5.8 13.2 5.8 9A6.2 6.2 0 0 1 12 2.8z"/><path d="m10.9 16.4 1.1 1.4 1.1-1.4"/><path d="M12 17.8c-1.2 1.4 1.2 2.4 0 4.4"/><path d="M9 6.5a3.2 3.2 0 0 1 2-1.6"/>'),
    'chas-da-noiva': line('<path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M12 18s-3-1.9-3-3.9a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 2-3 3.9-3 3.9z"/>'),
    batismo: line('<path d="M2.5 13.5c3.2 0 5.4-2.2 6.3-5.6 1 3 3.2 4.3 6.2 4.3l5.5-3.3-2.1 5.5c-1.2 3.1-4.2 5.1-8.2 5.1-3.3 0-5.8-2-7.7-6z"/><path d="M15 12.2c.9-2.3 2.6-3.6 4.6-4"/><circle cx="17.6" cy="9.4" r=".5" fill="currentColor"/>'),
    infantil: line('<path d="M6 19.5 12 4l6 15.5"/><path d="M6 19.5c2 1.3 10 1.3 12 0"/><path d="M8.4 13.3c1.6.8 5.6.8 7.2 0M10.2 8.6c.9.4 2.7.4 3.6 0"/><circle cx="12" cy="3" r="1.6" fill="currentColor"/><circle cx="3.5" cy="8" r=".6" fill="currentColor"/><circle cx="20.5" cy="7" r=".6" fill="currentColor"/><path d="M19.5 12.5l1.5.6M3 13.5l1.6-.4"/>'),
    diversos: line('<path d="m11 3 1.9 5.4L18.3 10l-5.4 1.9L11 17.3l-1.9-5.4L3.7 10l5.4-1.6z"/><path d="m18.5 14.5.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>')
  };
  var CAMERA = line('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.4"/>');
  var SHARE = line('<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="M12 3v12M8 7l4-4 4 4"/>');
  var WA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 1 1 6.98 3.86zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29z"/></svg>';

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function waLink(msg) { return 'https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(msg); }
  function catUrl(cat) { return base + cat.slug + '/'; }
  function img(src) { return base + 'assets/img/kits/' + src; }
  function plural(n, s, p) { return n + ' ' + (n === 1 ? s : p); }
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return [].slice.call((el || document).querySelectorAll(s)); }
  function capaOf(cat) {
    if (cat.capa) { return base + cat.capa; }
    for (var i = 0; i < cat.kits.length; i++) { if (cat.kits[i].fotos && cat.kits[i].fotos.length) { return img(cat.kits[i].fotos[0]); } }
    return '';
  }

  // Shared bits: generic WhatsApp links, Instagram, city, year, header shadow
  var generic = waLink('Olá! Vim pelo catálogo da Sua Festa, Nossos Sonhos e quero saber mais sobre os kits 💛');
  $$('[data-wa="geral"]').forEach(function (a) { a.href = generic; a.insertAdjacentHTML('afterbegin', WA); });
  $$('[data-insta]').forEach(function (a) { if (C.instagram) { a.href = C.instagram; } else { a.hidden = true; } });
  $$('[data-cidade]').forEach(function (el) { el.textContent = C.cidade; });
  $$('[data-ano]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  var header = $('.site-header');
  var onScroll = function () { if (header) { header.classList.toggle('is-scrolled', window.pageYOffset > 8); } };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  if (body.getAttribute('data-page') === 'home') { renderHome(); } else { renderCategory(body.getAttribute('data-cat')); }
  reveal();
  fixLocalLinks();

  /* Opened straight from the computer (file://), a folder link like "casamento/" shows the
     folder's file list instead of the page. Point those links at index.html. On a real server
     (Vercel) nothing changes and the clean addresses keep working. */
  function fixLocalLinks() {
    if (location.protocol !== 'file:') { return; }
    $$('a[href]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (/^(https?:|mailto:|tel:|#)/.test(h)) { return; }
      var parts = h.split(/(?=[?#])/), path = parts.shift() || './';
      if (path === '' ) { path = './'; }
      if (/\/$/.test(path)) { a.setAttribute('href', path + 'index.html' + parts.join('')); }
    });
  }

  /* ───────── Home ───────── */
  function renderHome() {
    var box = $('#events');
    if (box) {
      box.innerHTML = C.categorias.map(function (cat) {
        return '<a class="event reveal" data-tint="' + cat.slug + '" href="' + catUrl(cat) + '">' +
          '<div class="event__arch"><div class="ph">' + (ICON[cat.slug] || '') + '</div></div>' +
          '<span class="event__count">' + (cat.kits.length ? plural(cat.kits.length, 'kit', 'kits') : 'Em breve') + '</span>' +
          '<div class="event__body"><h3 class="event__name">' + esc(cat.nome).replace(/&amp;/g, '<span class="amp">&amp;</span>') + '</h3><span class="event__go" aria-hidden="true">→</span></div></a>';
      }).join('');
    }
    // Hero arches: covers of the first three categories (icons until photos arrive)
    $$('.collage__arch').forEach(function (arch, i) {
      var cat = C.categorias[i];
      if (!cat) { return; }
      arch.setAttribute('data-tint', cat.slug);
      var capa = capaOf(cat);
      arch.innerHTML = capa ? '<img src="' + esc(capa) + '" alt="' + esc(cat.nome) + '">' : '<div class="ph">' + (ICON[cat.slug] || '') + '</div>';
    });
    var total = C.categorias.reduce(function (n, c) { return n + c.kits.length; }, 0);
    $$('[data-total]').forEach(function (el) { el.textContent = total; });
  }

  /* ───────── Category ───────── */
  function renderCategory(slug) {
    var cat = C.categorias.filter(function (c) { return c.slug === slug; })[0];
    if (!cat) { return; }
    body.setAttribute('data-tint', slug);
    body.classList.add('has-helpbar');

    var icon = $('#cat-icon'); if (icon) { icon.innerHTML = ICON[slug] || ''; }
    var count = $('#cat-count');

    // Event navigation
    var chips = $('#chips');
    if (chips) {
      chips.innerHTML = '<a class="chip" href="' + base + '">✦ Todos os eventos</a>' + C.categorias.map(function (c) {
        return '<a class="chip' + (c.slug === slug ? ' is-active" aria-current="page' : '') + '" href="' + catUrl(c) + '">' + (ICON[c.slug] || '') + esc(c.nome) + '</a>';
      }).join('');
      var act = $('.chip.is-active', chips);
      if (act) { chips.scrollLeft = act.offsetLeft - 24; }
    }

    // Sub-filters, preselected with ?tipo=
    var params = {};
    location.search.replace(/[?&]([^=&]+)=([^&]*)/g, function (m, k, v) { params[k] = decodeURIComponent(v); });
    var current = 'todos';
    var filters = $('#filters');
    if (cat.filtros && filters) {
      cat.filtros.forEach(function (f) { if (f.id === params.tipo) { current = f.id; } });
      filters.hidden = false;
      var drawFilters = function () {
        filters.innerHTML = [{ id: 'todos', nome: 'Todos' }].concat(cat.filtros).map(function (f) {
          var n = f.id === 'todos' ? cat.kits.length : cat.kits.filter(function (k) { return k.tipo === f.id; }).length;
          return '<button type="button" class="' + (f.id === current ? 'is-active' : '') + '" data-f="' + f.id + '" aria-pressed="' + (f.id === current) + '">' + esc(f.nome) + '<span>' + n + '</span></button>';
        }).join('');
      };
      drawFilters();
      filters.addEventListener('click', function (e) {
        var b = e.target.closest('[data-f]');
        if (!b) { return; }
        current = b.getAttribute('data-f');
        drawFilters(); drawKits();
        if (history.replaceState) { history.replaceState(null, '', current === 'todos' ? location.pathname : '?tipo=' + current); }
      });
    }

    var grid = $('#kits');
    var visible = [];
    function kitMsg(k) { return 'Olá! Vi no catálogo o kit "' + k.nome + '" (' + k.codigo + ') de ' + cat.nome + ' e quero saber se tem disponibilidade 💛'; }
    function drawKits() {
      visible = cat.kits.filter(function (k) { return current === 'todos' || k.tipo === current; });
      if (count && !cat.kits.length) { count.innerHTML = '<b>✦</b>Novos kits chegando em breve'; }
      else if (count) { count.innerHTML = '<b>' + visible.length + '</b>' + (visible.length === 1 ? 'kit para você escolher' : 'kits para você escolher'); }
      grid.innerHTML = visible.map(function (k, idx) {
        var fotos = k.fotos || [];
        var photo = fotos.length
          ? '<img src="' + esc(img(fotos[0])) + '" alt="' + esc(k.nome) + '" loading="lazy">' + (fotos.length > 1 ? '<span class="kit__more">+' + (fotos.length - 1) + '</span>' : '')
          : '<span class="kit__ph">' + CAMERA + 'Foto em breve</span>';
        return '<article class="kit reveal" id="kit-' + esc(k.codigo) + '">' +
          '<button type="button" class="kit__photo" data-kit="' + idx + '"' + (fotos.length ? '' : ' disabled') + ' aria-label="Ver fotos de ' + esc(k.nome) + '">' + photo + '<span class="kit__tag">' + esc(k.codigo) + '</span></button>' +
          '<h2 class="kit__name">' + esc(k.nome) + '</h2>' +
          (k.descricao ? '<p class="kit__desc">' + esc(k.descricao) + '</p>' : '') +
          '<a class="kit__btn" href="' + waLink(kitMsg(k)) + '" target="_blank" rel="noopener">' + WA + 'Quero este kit</a></article>';
      }).join('') || '<div class="empty"><span class="empty__icon" aria-hidden="true">' + (ICON[slug] || '') + '</span><h2>Em breve por aqui ✦</h2><p>Estamos preparando as fotos desta categoria. Enquanto isso, chama a Mariana no WhatsApp que ela te mostra as opções.</p><a class="btn btn--wa" href="' + waLink('Olá! Vi no catálogo que os kits de ' + cat.nome + ' estão chegando e quero ver as opções 💛') + '" target="_blank" rel="noopener">' + WA + 'Ver opções no WhatsApp</a></div>';
      reveal();
    }
    drawKits();

    // Lightbox with "Quero este kit" inside
    var lb = $('#lightbox'), lbKit = null, lbIdx = 0;
    function show() {
      var fotos = lbKit.fotos;
      $('img', lb).src = img(fotos[lbIdx]);
      $('img', lb).alt = lbKit.nome;
      $('.lb-title', lb).innerHTML = esc(lbKit.nome) + '<small>' + esc(lbKit.codigo) + (fotos.length > 1 ? ' · FOTO ' + (lbIdx + 1) + '/' + fotos.length : '') + '</small>';
      $('.lb-want', lb).href = waLink(kitMsg(lbKit));
      $('.lb-prev', lb).hidden = $('.lb-next', lb).hidden = fotos.length < 2;
    }
    function open(k) {
      if (!lb || !k || !k.fotos || !k.fotos.length) { return false; }
      lbKit = k; lbIdx = 0; show(); lb.hidden = false; document.documentElement.classList.add('lb-open');
      return true;
    }
    function close() { lb.hidden = true; document.documentElement.classList.remove('lb-open'); }
    grid.addEventListener('click', function (e) { var b = e.target.closest('[data-kit]'); if (b) { open(visible[+b.getAttribute('data-kit')]); } });
    if (lb) {
      $('.lb-want', lb).insertAdjacentHTML('afterbegin', WA);
      $('.lb-close', lb).addEventListener('click', close);
      $('.lb-prev', lb).addEventListener('click', function () { lbIdx = (lbIdx - 1 + lbKit.fotos.length) % lbKit.fotos.length; show(); });
      $('.lb-next', lb).addEventListener('click', function () { lbIdx = (lbIdx + 1) % lbKit.fotos.length; show(); });
      lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb-stage')) { close(); } });
      document.addEventListener('keydown', function (e) {
        if (lb.hidden) { return; }
        if (e.key === 'Escape') { close(); }
        if (e.key === 'ArrowRight' && lbKit.fotos.length > 1) { $('.lb-next', lb).click(); }
        if (e.key === 'ArrowLeft' && lbKit.fotos.length > 1) { $('.lb-prev', lb).click(); }
      });
    }

    // Deep link to one kit: ?kit=REV-01 — highlights it and opens its photos
    if (params.kit) {
      var target = cat.kits.filter(function (k) { return k.codigo.toLowerCase() === params.kit.toLowerCase(); })[0];
      if (target) {
        if (target.tipo && current !== 'todos' && target.tipo !== current) { current = 'todos'; if (filters && cat.filtros) { $('[data-f="todos"]', filters).click(); } }
        var el = document.getElementById('kit-' + target.codigo);
        if (el) {
          el.classList.add('is-target', 'is-in');
          setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 250);
          setTimeout(function () { open(target); }, 700);
        }
      }
    }

    // Share this page (WhatsApp on phones, copy link on desktop)
    var share = $('#share');
    if (share) {
      share.insertAdjacentHTML('afterbegin', SHARE);
      share.addEventListener('click', function () {
        var url = location.href.split('#')[0];
        if (navigator.share) { navigator.share({ title: document.title, url: url }).catch(function () {}); return; }
        if (navigator.clipboard) { navigator.clipboard.writeText(url).then(function () { toast('Link copiado ✦'); }); }
      });
    }

    // Mobile help bar appears after the first scroll
    var bar = $('.helpbar');
    if (bar) {
      var a = $('a', bar); a.href = waLink('Olá! Estou vendo os kits de ' + cat.nome + ' no catálogo e quero tirar uma dúvida 💛'); a.insertAdjacentHTML('afterbegin', WA);
      var showBar = function () { bar.classList.toggle('is-in', window.pageYOffset > 260); };
      window.addEventListener('scroll', showBar, { passive: true }); showBar();
    }
  }

  function toast(msg) {
    var t = $('.toast') || body.appendChild(Object.assign(document.createElement('div'), { className: 'toast' }));
    t.textContent = msg; t.classList.add('is-in');
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('is-in'); }, 2200);
  }

  function reveal() {
    var els = $$('.reveal:not(.is-in)');
    if (!window.IntersectionObserver) { els.forEach(function (el) { el.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }
})();
