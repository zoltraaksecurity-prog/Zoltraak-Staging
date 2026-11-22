(function () {
  'use strict';

  // Replace with real company details.
  const CONTACT = {
    email: 'zoltraak.security@gmail.com',
    phone: '0945 710 5393',
    address: 'N/A'
  };

  const ICONS = {
    web: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></svg>',
    mobile: '<svg viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/></svg>',
    api: '<svg viewBox="0 0 24 24"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
    network: '<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M12 11.5 6.5 17M12 11.5l5.5 5.5"/></svg>',
    cloud: '<svg viewBox="0 0 24 24"><path d="M7 18h10.5a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.4 9.1 4.5 4.5 0 0 0 7 18Z"/></svg>',
    wifi: '<svg viewBox="0 0 24 24"><path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 16a5 5 0 0 1 6.8 0"/><circle cx="12" cy="19.3" r="0.9"/></svg>',
    ai: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>',
    desktop: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="1.5"/><path d="M8 21h8M12 17v4"/></svg>',
    redteam: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="0.8"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/></svg>'
  };

  const SERVICES = [
    {
      icon: 'web', name: 'Web Application Penetration Testing',
      short: 'In-depth testing of your web apps against the OWASP Top 10 and beyond.',
      desc: 'We combine manual testing with tooling to uncover business logic flaws, authentication and session weaknesses, injection, access-control bypasses and more.',
      points: ['OWASP Top 10 & ASVS coverage', 'Authentication & authorization testing', 'Business logic abuse', 'Session & input handling', 'File upload & server-side flaws']
    },
    {
      icon: 'mobile', name: 'Mobile Application Penetration Testing',
      short: 'Android and iOS assessments covering the app, its storage and its backend.',
      desc: 'We perform static and dynamic analysis of Android and iOS applications following OWASP MASVS, including the APIs that power them.',
      points: ['OWASP MASVS aligned', 'Insecure data storage', 'Reverse engineering & tampering', 'Certificate pinning & transport security', 'Backend & API testing']
    },
    {
      icon: 'api', name: 'API Security Testing', label: 'API',
      short: 'REST, GraphQL and SOAP APIs tested for authorization and data exposure flaws.',
      desc: 'APIs are the backbone of modern apps and a top attack target. We test for BOLA/IDOR, mass assignment, rate limiting gaps and excessive data exposure.',
      points: ['OWASP API Security Top 10', 'BOLA / IDOR testing', 'JWT & OAuth flaws', 'Rate limiting & abuse cases', 'Mass assignment & data exposure']
    },
    {
      icon: 'network', name: 'Network Penetration Testing',
      short: 'Internal and external infrastructure testing to uncover exploitable paths.',
      desc: 'We identify misconfigurations, vulnerable services and lateral movement paths across your external perimeter and internal network, including Active Directory.',
      points: ['External perimeter testing', 'Internal network & Active Directory', 'Privilege escalation paths', 'Segmentation validation', 'Vulnerable & outdated services']
    },
    {
      icon: 'cloud', name: 'Cloud Security Assessment', label: 'Cloud',
      short: 'Configuration reviews and attack-path analysis for AWS, Azure and GCP.',
      desc: 'We review your cloud environment against industry benchmarks and test for real attack paths through IAM, storage, compute and network controls.',
      points: ['IAM & privilege review', 'CIS benchmark alignment', 'Storage & secrets exposure', 'Kubernetes & container security', 'Logging & monitoring review']
    },
    {
      icon: 'wifi', name: 'Wireless / SSID Penetration Testing',
      short: 'Wi-Fi networks tested for weak encryption, rogue access points and network bypass.',
      desc: 'We assess your corporate and guest SSIDs on site, testing encryption, authentication and segmentation to confirm an attacker in range cannot reach your internal network.',
      points: ['WPA2/WPA3 & PSK strength testing', 'WPA-Enterprise (802.1X) attacks', 'Rogue AP & evil twin detection', 'Guest-to-corporate segmentation', 'Wireless coverage & signal leakage']
    },
    {
      icon: 'ai', name: 'AI / ML Penetration Testing', label: 'AI/ML',
      short: 'Adversarial testing of AI models, pipelines and LLM-integrated applications.',
      desc: 'We assess AI and ML systems for prompt injection, model inversion, training data extraction, adversarial inputs and insecure integrations — covering both custom models and LLM-powered products.',
      points: ['Prompt injection & jailbreaking', 'Model inversion & data extraction', 'Adversarial input attacks', 'LLM API & plugin security', 'RAG & vector store exposure']
    },
    {
      icon: 'desktop', name: 'Thick Client Penetration Testing', label: 'Thick Client',
      short: 'Desktop applications tested for insecure storage, protocol flaws and business logic issues.',
      desc: 'We test Windows and cross-platform thick clients using static and dynamic analysis, traffic interception and binary reversing to uncover vulnerabilities that web-only tests miss.',
      points: ['Binary analysis & reverse engineering', 'Traffic interception & manipulation', 'Insecure local storage & credentials', 'DLL hijacking & privilege escalation', 'Business logic & session handling']
    }
  ];

  // Offered alongside VAPT, but not part of it.
  const ADVANCED = [
    {
      icon: 'redteam', name: 'Red Teaming',
      short: 'Objective-based adversary simulation that tests your people, processes and technology.',
      desc: 'We emulate real threat actors end to end, from initial access to your crown jewels, to measure how well your organization prevents, detects and responds to a targeted attack.',
      points: ['Threat-intelligence-led adversary emulation', 'Initial access & phishing', 'Active Directory compromise & lateral movement', 'Persistence & objective validation', 'Detection & response (blue team) evaluation']
    }
  ];

  // To use an official badge, put the image in assets/certs/ and set logo, e.g. logo: 'assets/certs/oscp.png'.
  const CERTS = [
    { code: 'OSCP', name: 'OffSec Certified Professional', issuer: 'OffSec', tag: 'OFFSEC', logo: 'assets/certs/oscp.png' },
    { code: 'OSEP', name: 'OffSec Experienced Penetration Tester', issuer: 'OffSec', tag: 'OFFSEC', logo: 'assets/certs/osep.png' },
    { code: 'OSWP', name: 'OffSec Wireless Professional', issuer: 'OffSec', tag: 'OFFSEC', logo: 'assets/certs/oswp.png' },
    { code: 'GPEN', name: 'GIAC Penetration Tester', issuer: 'GIAC', tag: 'GIAC', logo: 'assets/certs/gpen.png' },
    { code: 'GWAPT', name: 'GIAC Web Application Penetration Tester', issuer: 'GIAC', tag: 'GIAC', logo: 'assets/certs/gwapt.png' },
    { code: 'CPTS', name: 'Certified Penetration Testing Specialist', issuer: 'Hack The Box', tag: 'HTB', logo: 'assets/certs/cpts.png' },
    { code: 'CWES', name: 'Certified Web Exploitation Specialist', issuer: 'Hack The Box', tag: 'HTB', logo: 'assets/certs/cwes.png' },
    { code: 'CRTP', name: 'Certified Red Team Professional', issuer: 'Altered Security', tag: 'ALTERED', logo: 'assets/certs/crtp.png' },
    { code: 'CRTO', name: 'Certified Red Team Operator', issuer: 'Zero-Point Security', tag: 'ZERO-POINT', logo: 'assets/certs/crto.png' },
    { code: 'CAPEN', name: 'Certified AppSec Pentester', issuer: 'The SecOps Group', tag: 'SECOPS', logo: 'assets/certs/capen.webp' },
    { code: 'CNPEN', name: 'Certified Network Pentester', issuer: 'The SecOps Group', tag: 'SECOPS', logo: 'assets/certs/cnpen.webp' },
    { code: 'C-AI/MLPen', name: 'Certified AI/ML Pentester', issuer: 'The SecOps Group', tag: 'SECOPS', logo: 'assets/certs/caimlpen.webp' },
    { code: 'PNPT', name: 'Practical Network Penetration Tester', issuer: 'TCM Security', tag: 'TCM', logo: 'assets/certs/pnpt.webp' },
    { code: 'PJPT', name: 'Practical Junior Penetration Tester', issuer: 'TCM Security', tag: 'TCM', logo: 'assets/certs/pjpt.webp' },
    { code: 'PT1', name: 'Junior Penetration Tester', issuer: 'TryHackMe', tag: 'THM', logo: 'assets/certs/pt1.png' },
    { code: 'CRTA', name: 'Certified Red Team Analyst', issuer: 'CyberWarFare Labs', tag: 'CWL', logo: 'assets/certs/crta.png' }
  ];

  const COINS = [
    { code: 'SEC560', cert: 'GPEN', name: 'Network Penetration Testing', issuer: 'SANS Institute', logo: 'assets/certs/sans-sec560-coin.png' },
    { code: 'SEC542', cert: 'GWAPT', name: 'Web App Penetration Testing', issuer: 'SANS Institute', logo: 'assets/certs/sans-sec542-coin.png' },
    { code: 'CB2026', name: 'CodeBreaker Challenge', issuer: 'RootCon 2026', logo: 'assets/certs/rootcon-codebreaker-2026.png' }
  ];

  function certEmblem(c) {
    if (c.logo) return `<img class="cert-emblem" src="${esc(c.logo)}" alt="${esc(c.code)} badge" loading="lazy">`;
    const size = c.code.length > 4 ? 19 : 23;
    return `<svg class="cert-emblem" viewBox="0 0 100 110" role="img" aria-label="${esc(c.code)}">
      <polygon class="hex-outer" points="50,4 94,29.5 94,80.5 50,106 6,80.5 6,29.5"/>
      <polygon class="hex-inner" points="50,13 86,34 86,76 50,97 14,76 14,34"/>
      <path class="hex-rule" d="M36 64h28"/>
      <text class="hex-code" x="50" y="58" font-size="${size}" text-anchor="middle">${esc(c.code)}</text>
      <text class="hex-tag" x="50" y="76" text-anchor="middle">${esc(c.tag)}</text>
    </svg>`;
  }

  let POSTS = [
    {
      slug: 'vulnerability-assessment-vs-penetration-testing',
      tag: 'Guide', date: '2026-09-18', read: '6 min',
      title: 'Vulnerability Assessment vs. Penetration Testing: What You Actually Need',
      excerpt: 'They are often used interchangeably, but they answer very different questions. Here is how to choose.',
      body: [
        ['p', 'A vulnerability assessment answers the question "what weaknesses might exist?" A penetration test answers "what can an attacker actually do with them?" Both are valuable, but they serve different purposes.'],
        ['h2', 'Vulnerability assessment'],
        ['p', 'A broad, largely automated sweep that identifies known weaknesses across many assets. It is fast, repeatable and ideal for continuous hygiene.'],
        ['h2', 'Penetration testing'],
        ['p', 'A focused, manual exercise in which skilled testers chain weaknesses together to show real-world impact. It finds logic flaws and attack paths that scanners miss.'],
        ['h2', 'Which one should you choose?'],
        ['ul', ['Run vulnerability assessments continuously for coverage.', 'Run penetration tests at least annually, and after major changes.', 'Combine both, which is VAPT, for the strongest assurance.']]
      ]
    },
    {
      slug: 'idor-the-quiet-killer',
      tag: 'Research', date: '2026-08-27', read: '5 min',
      title: 'IDOR: The Quiet Vulnerability Behind Major Data Leaks',
      excerpt: 'Insecure Direct Object References remain one of the most common and most damaging findings in our API tests.',
      body: [
        ['p', 'An Insecure Direct Object Reference (IDOR) occurs when an application exposes a reference to an object, such as an ID, without verifying that the user is allowed to access it.'],
        ['h2', 'Why scanners miss it'],
        ['p', 'IDOR is an authorization problem, not a syntax problem. The request looks perfectly valid, so detecting it requires understanding who should be allowed to see what.'],
        ['h2', 'How to prevent it'],
        ['ul', ['Enforce object-level authorization checks on every request.', 'Avoid relying on unpredictable IDs as a security control.', 'Write automated tests that request other users\' objects.']]
      ]
    },
    {
      slug: 'preparing-for-your-first-pentest',
      tag: 'Guide', date: '2026-07-30', read: '4 min',
      title: 'Preparing for Your First Penetration Test',
      excerpt: 'A short checklist to get maximum value from your engagement, from scoping to retest.',
      body: [
        ['p', 'A well-prepared engagement delivers more findings, fewer delays and a more useful report. Here is what to sort out before testing begins.'],
        ['h2', 'Before the test'],
        ['ul', ['Define a clear scope and list of in-scope assets.', 'Prepare test accounts for each user role.', 'Notify your hosting provider and internal teams.', 'Agree on testing windows and emergency contacts.']],
        ['h2', 'After the test'],
        ['p', 'Prioritize fixes by risk, assign owners, and schedule a retest so your final report reflects the remediated state.']
      ]
    }
  ];

  const _sb = supabase.createClient(
    'https://vvzrdtfruewamzdpixyt.supabase.co',
    'sb_publishable_ICn0-Ju8NQXPM75JbojdkA_p4fOignI'
  );

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmtDate = (d) => new Date(d + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  /* Theme */
  const root = document.documentElement;
  $('#themeToggle').addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('zs-theme', next); } catch (e) {}
    if (typeof initHexBanners === 'function') initHexBanners();
  });

  /* Mobile menu */
  const nav = $('#nav');
  const menuBtn = $('#menuToggle');
  const closeMenu = () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); };
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
  });

  /* Render content */
  $('#homeServices').innerHTML = SERVICES.map((s, i) => `
    <a href="#/services" class="mission-row">
      <span class="mission-no">${String(i + 1).padStart(2, '0')}</span>
      <div class="mission-icon">${ICONS[s.icon]}</div>
      <div class="mission-body">
        <h3>${esc(s.label || s.name.replace(' Penetration Testing', ''))}</h3>
        <p>${esc(s.short)}</p>
      </div>
      <span class="mission-engage">ENGAGE &gt;&gt;&gt;</span>
    </a>`).join('');

  $('#homeAdvanced').innerHTML = ADVANCED.map((s) => `
    <a href="#/services" class="card card-wide">
      <div class="card-icon">${ICONS[s.icon]}</div>
      <div><h3>${esc(s.name)}</h3><p class="muted">${esc(s.short)}</p></div>
    </a>`).join('');

  const serviceItems = (list, offset) => list.map((s, i) => `
    <article class="service-item">
      <span class="no">${String(offset + i + 1).padStart(2, '0')}</span>
      <div><h3>${esc(s.name)}</h3><p class="muted">${esc(s.desc)}</p></div>
      <ul>${s.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    </article>`).join('');
  $('#serviceList').innerHTML = serviceItems(SERVICES, 0);
  $('#advancedList').innerHTML = serviceItems(ADVANCED, SERVICES.length);

  function renderBlogList() {
    $('#blogList').innerHTML = POSTS.map((p) => `
      <a href="#/blog/${p.slug}" class="card blog-card">
        <div class="blog-meta"><span class="blog-tag">${esc(p.tag)}</span><span>${fmtDate(p.date)}</span><span>${esc(p.read)} read</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.excerpt)}</p>
        <span class="link-arrow">Read article</span>
      </a>`).join('');
  }
  renderBlogList();

  const certCards = (list) => list.map((c) => `
    <div class="cert-card">
      ${certEmblem(c)}
      <div><h3>${esc(c.code)}</h3><p>${esc(c.name)}</p><span class="cert-issuer">${esc(c.issuer)}</span></div>
    </div>`).join('');

  function coinCards(list) {
    return list.map((c) => `
      <div class="coin-card">
        <div class="coin-img-wrap">
          <img src="${esc(c.logo)}" alt="${esc(c.code)} Challenge Coin" class="coin-img" loading="lazy">
        </div>
        <span class="coin-code">${esc(c.code)}</span>
        <div class="coin-rule"></div>
        <p class="coin-name">${esc(c.name)}</p>
        <span class="coin-issuer-label">${esc(c.issuer)}</span>
      </div>`).join('');
  }

  $('#certGrid').innerHTML = certCards(CERTS);
  $('#coinGrid').innerHTML = coinCards(COINS);

  $('#homeCerts').innerHTML = CERTS.map((c) =>
    `<div class="cert-chip" title="${esc(c.code)}: ${esc(c.name)} (${esc(c.issuer)})">${certEmblem(c)}</div>`).join('');

  $('#cService').innerHTML = ['General inquiry', ...SERVICES.map((s) => s.name), ...ADVANCED.map((s) => s.name)]
    .map((n) => `<option>${esc(n)}</option>`).join('');

  $('#infoEmail').innerHTML = `<a href="mailto:${esc(CONTACT.email)}">${esc(CONTACT.email)}</a>`;
  $('#infoPhone').textContent = CONTACT.phone;
  $('#infoAddress').textContent = CONTACT.address;
  $('#year').textContent = new Date().getFullYear();

  function renderArticle(slug) {
    const p = POSTS.find((x) => x.slug === slug);
    if (!p) return false;
    const body = p.body.map(([t, c]) => {
      if (t === 'ul') return `<ul>${c.map((li) => `<li>${esc(li)}</li>`).join('')}</ul>`;
      if (t === 'code') return `<pre class="cmd-block"><code>${esc(c)}</code></pre>`;
      if (t === 'terminal') return `<div class="terminal-block"><div class="terminal-bar"><span class="tb-dot" style="background:#ff5f56"></span><span class="tb-dot" style="background:#ffbd2e"></span><span class="tb-dot" style="background:#27c93f"></span><span class="tb-title">terminal</span></div><pre><code>${esc(c)}</code></pre></div>`;
      if (t === 'image') return `<figure class="article-img"><img src="${esc(c.src)}" alt="${esc(c.alt)}" loading="lazy">${c.alt ? `<figcaption>${esc(c.alt)}</figcaption>` : ''}</figure>`;
      return `<${t}>${esc(c)}</${t}>`;
    }).join('');
    $('#article').innerHTML = `
      <a href="#/blogs" class="back">← Back to blogs</a>
      <div class="blog-meta"><span class="blog-tag">${esc(p.tag)}</span><span>${fmtDate(p.date)}</span><span>${esc(p.read)} read</span></div>
      <h1>${esc(p.title)}</h1>${body}`;
    document.title = `${p.title} | Zoltraak Security`;
    return true;
  }

  /* Router */
  const TITLES = { home: 'VAPT Services', services: 'Services', about: 'About Us', blogs: 'Blogs', verify: 'Report Verifier', contact: 'Contact' };

  function route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    let page = parts[0] || 'home';
    let navKey = page;

    if (page === 'blog' && renderArticle(parts[1])) {
      page = 'article';
      navKey = 'blogs';
    } else if (!TITLES[page]) {
      page = navKey = 'home';
    } else {
      document.title = `${TITLES[page]} | Zoltraak Security`;
    }

    if (page === 'blogs') renderBlogList();

    $$('.page').forEach((s) => { s.hidden = s.dataset.page !== page; });
    $$('[data-link]').forEach((a) => {
      const active = a.dataset.link === navKey;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    closeMenu();
    window.scrollTo(0, 0);
    setTimeout(function () { if (typeof initHexBanners === 'function') initHexBanners(); }, 0);
  }
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  // Render immediately with hardcoded posts, then update from Supabase
  renderBlogList();
  route();
  window.addEventListener('hashchange', route);

  _sb.from('posts').select('*').order('date', { ascending: false }).then(({ data }) => {
    if (data && data.length) {
      POSTS = data;
      renderBlogList();
      if (location.hash.startsWith('#/blog/')) route();
    }
  }).catch(() => {});

  /* Report verifier */
  $('#verifyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const idEl = $('#reportId');
    const codeEl = $('#verifyCode');
    const id = idEl.value.trim().toUpperCase();
    const code = codeEl.value.trim().toUpperCase();
    const err = $('#verifyError');
    idEl.classList.toggle('invalid', !id);
    codeEl.classList.toggle('invalid', !code);
    if (!id || !code) { err.textContent = 'Please enter both the Report ID and Verification Code.'; return; }
    err.textContent = '';

    const btn = e.target.querySelector('[type=submit]');
    const origText = btn.textContent;
    btn.disabled = true; btn.textContent = 'Verifying…';

    const out = $('#verifyResult');
    try {
      const { data, error } = await _sb.rpc('verify_report', { p_id: id, p_code: code });
      if (error) throw error;

      if (!data || !data.found) {
        out.innerHTML = `<div class="result">
          <span class="status bad">Not verified</span>
          <h3>No matching report found</h3>
          <p class="muted">We couldn't find a report matching ID <strong>${esc(id)}</strong> and this verification code. Check the values and try again, or contact us to confirm the report's authenticity.</p>
        </div>`;
      } else {
        const STATUS = {
          valid:   ['ok',   'Authentic &amp; valid',   'This report is genuine and was issued by Zoltraak Security.'],
          expired: ['warn', 'Authentic &amp; expired', 'This report is genuine, but its validity period has ended.'],
          revoked: ['bad',  'Revoked',                 'This report was issued by Zoltraak Security but has since been revoked.']
        }[data.status];
        out.innerHTML = `<div class="result">
          <span class="status ${STATUS[0]}">${STATUS[1]}</span>
          <h3>${esc(data.type)}</h3>
          <p class="muted">${STATUS[2]}</p>
          <dl>
            <dt>Report ID</dt><dd>${esc(id)}</dd>
            <dt>Client</dt><dd>${esc(data.client)}</dd>
            <dt>Assessment</dt><dd>${esc(data.type)}</dd>
            <dt>Issued</dt><dd>${fmtDate(data.issued)}</dd>
            <dt>Valid until</dt><dd>${fmtDate(data.valid_until)}</dd>
          </dl>
        </div>`;
      }
    } catch (_) {
      err.textContent = 'Verification failed. Please try again.';
    } finally {
      btn.disabled = false; btn.textContent = origText;
    }
  });

  /* Contact form */
  $('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const name = $('#cName'), email = $('#cEmail'), msg = $('#cMsg');
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    name.classList.toggle('invalid', !name.value.trim());
    email.classList.toggle('invalid', !emailOk);
    msg.classList.toggle('invalid', !msg.value.trim());
    const err = $('#contactError');
    if (!name.value.trim() || !emailOk || !msg.value.trim()) {
      err.textContent = 'Please fill in your name, a valid email, and a message.';
      return;
    }
    err.textContent = '';
    const submitBtn = form.querySelector('[type=submit]');
    const origText = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: 'ee50f9e8-d9a9-4beb-965b-d2390fd3cd7d',
        name:    name.value.trim(),
        email:   email.value.trim(),
        service: $('#cService').value,
        message: msg.value.trim()
      })
    }).then(r => r.json()).then((res) => {
      if (res.success) {
        form.reset();
        $('#contactSuccess').hidden = false;
      } else {
        $('#contactError').textContent = res.message || 'Submission failed. Please try again.';
      }
      submitBtn.textContent = origText;
      submitBtn.disabled = false;
    }).catch(() => {
      $('#contactError').textContent = 'Network error. Please try again.';
      submitBtn.textContent = origText;
      submitBtn.disabled = false;
    });
  });
  /* Tagline typewriter */
  (function () {
    const text = '"Not Just Certified. Battle-Tested."';
    const el = document.getElementById('taglineTyped');
    const cursor = document.querySelector('.tagline-cursor');
    if (!el) return;
    let i = 0;
    const timer = setInterval(function () {
      el.textContent = text.slice(0, ++i);
      if (i === text.length) {
        clearInterval(timer);
        setTimeout(function () { cursor.classList.add('done'); }, 600);
      }
    }, 45);
  })();

  /* Hex pattern — hero + page-hero banners */
  (function () {
    const R = 22;

    function drawHex(canvas) {
      const ctx = canvas.getContext('2d');
      const W = canvas.width  = canvas.offsetWidth;
      const H = canvas.height = canvas.offsetHeight;
      if (!W || !H) return;
      const colW = R * Math.sqrt(3);
      const rowH = R * 1.5;
      const cols = Math.ceil(W / colW) + 2;
      const rows = Math.ceil(H / rowH) + 2;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(200,168,75,0.10)';
      ctx.lineWidth = 1.2;
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++) {
          const cx = c * colW + (r % 2 ? colW / 2 : 0) - colW / 2;
          const cy = r * rowH - rowH / 2;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = Math.PI / 180 * (60 * i - 30);
            const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        }
    }

    window.initHexBanners = function () {
      const heroBg = document.getElementById('heroBg');
      if (heroBg) drawHex(heroBg);

      document.querySelectorAll('.page-hero').forEach(function (hero) {
        const page = hero.closest('.page');
        if (page && page.hidden) return;
        let c = hero.querySelector('.page-hero-canvas');
        if (!c) {
          c = document.createElement('canvas');
          c.className = 'page-hero-canvas';
          c.setAttribute('aria-hidden', 'true');
          hero.insertBefore(c, hero.firstChild);
        }
        drawHex(c);
      });
    }

    window.addEventListener('resize', window.initHexBanners);
    window.initHexBanners();
  })();

})();
