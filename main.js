/* ==========================================================
   main.js - builds the page from config.js and projects.js
   and handles all interactions. No libraries needed.
   ========================================================== */
"use strict";

/* ---------- Small helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// Escape text before putting it in HTML so edited data can never break the page
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// localStorage can be blocked (private mode), so always wrap it
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
};

/* ---------- Theme (dark default, saved in localStorage) ---------- */
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const btn = $("#themeToggle");
  btn.innerHTML = `<i class="fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}" aria-hidden="true"></i>`;
  btn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  $('meta[name="theme-color"]').content = theme === "dark" ? "#0a1128" : "#f5f8ff";
}
function initTheme() {
  applyTheme(store.get("theme") === "light" ? "light" : "dark");
  $("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    store.set("theme", next);
  });
}

/* ---------- Navbar: mobile menu + active link ---------- */
function initNav() {
  const menu = $("#navLinks"), toggle = $("#menuToggle");
  const setOpen = (open) => {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.innerHTML = `<i class="fa-solid ${open ? "fa-xmark" : "fa-bars"}" aria-hidden="true"></i>`;
  };
  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setOpen(false))); // close after choosing a link
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

  // Highlight the link of the section currently in view
  const links = $$("a", menu);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => {
        const on = a.getAttribute("href") === "#" + en.target.id;
        a.classList.toggle("active", on);
        if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  links.forEach((a) => { const s = $(a.getAttribute("href")); if (s) io.observe(s); });
}

/* ---------- Links that may not exist yet ---------- */
// Turns an <a> into a real link, or a clearly disabled one when the URL is empty
function setLink(a, url, label) {
  if (url) {
    a.href = url;
    if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
  } else {
    a.removeAttribute("href");
    a.setAttribute("aria-disabled", "true");
    a.classList.add("is-disabled");
    a.title = `${label} not added yet (edit js/config.js)`;
  }
}

/* ---------- Hero, contact links, footer ---------- */
function renderBasics() {
  const c = siteConfig;
  $$("[data-bind]").forEach((el) => { el.textContent = c[el.dataset.bind] || ""; });
  document.title = `${c.name} | Full-Stack Developer Portfolio`;

  // Profile photo, with a graceful fallback if the image is missing
  const img = $("#profileImg");
  img.addEventListener("error", () => { img.removeAttribute("src"); img.alt = "Profile photo not added yet"; }, { once: true });
  img.alt = `Portrait of ${c.name}`;
  img.src = c.profileImage;

  // Small code-style summary built only from your config
  $("#windowTitle").textContent = `${c.name.toLowerCase()}.js`;
  $("#codeLines").textContent = `const developer = {\n  name: "${c.name}",\n  stack: ["React", "Node", "MongoDB"],\n  learning: ["Java", "DSA"]\n};`;

  const mail = c.links.email ? "mailto:" + c.links.email : "";
  $$("[data-link]").forEach((a) => {
    const key = a.dataset.link;
    setLink(a, key === "email" ? mail : c.links[key], key.charAt(0).toUpperCase() + key.slice(1));
  });
  $$("[data-text]").forEach((s) => {
    const key = s.dataset.text, v = c.links[key];
    s.textContent = v ? v.replace(/^https?:\/\/(www\.)?/, "") : `${key.charAt(0).toUpperCase() + key.slice(1)} not added yet`;
  });
  $("#year").textContent = new Date().getFullYear();
}

/* ---------- About, skills, education, achievements ---------- */
function renderAbout() {
  $("#aboutText").innerHTML = siteConfig.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#aboutCards").innerHTML = siteConfig.about.cards.map((c) => `
    <article class="card reveal"><div class="ic"><i class="fa-solid ${esc(c.icon)}" aria-hidden="true"></i></div>
    <h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></article>`).join("");
}
function renderSkills() {
  $("#skillGrid").innerHTML = siteConfig.skills.map((g) => `
    <article class="card reveal"><div class="ic"><i class="fa-solid ${esc(g.icon)}" aria-hidden="true"></i></div>
    <h3>${esc(g.category)}</h3>
    <ul class="badges">${g.items.map((i) => `<li class="badge">${esc(i)}</li>`).join("")}</ul></article>`).join("");
}
function renderEducation() {
  $("#eduList").innerHTML = siteConfig.education.map((e) => `
    <li class="reveal"><article class="card"><h3>${esc(e.degree)}</h3>
    <p>${esc(e.institution)}</p>${e.department ? `<p>Department: ${esc(e.department)}</p>` : ""}
    <p>${esc(e.year)}${e.extra ? `, ${esc(e.extra)}` : ""}</p></article></li>`).join("");
}
function renderExperience() {
  $("#expList").innerHTML = siteConfig.experience.map((x) => `
    <li class="reveal"><article class="card"><h3>${esc(x.title)}</h3><p>${esc(x.period)}</p>
    <ul class="bullets">${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
    <ul class="badges">${x.tech.map((t) => `<li class="badge">${esc(t)}</li>`).join("")}</ul></article></li>`).join("");
}
function renderAchievements() {
  const list = siteConfig.achievements;
  if (!list.length) return; // section stays hidden until real items are added
  $("#achievements").hidden = false;
  $("#achList").innerHTML = list.map((a) => `
    <article class="card reveal"><h3>${esc(a.title)}</h3>
    <p>${esc([a.type, a.issuer, a.date].filter(Boolean).join(", "))}</p>
    ${a.url ? `<p><a href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">View credential</a></p>` : ""}</article>`).join("");
}

/* ---------- Resume ---------- */
function renderResume() {
  const r = siteConfig.resume, box = $("#resumeAction"), hero = $("#heroResume");
  if (r.available) {
    box.innerHTML = `<a class="btn btn-primary" href="${esc(r.path)}" download><i class="fa-solid fa-download" aria-hidden="true"></i> Download Resume</a>`;
    hero.href = r.path; hero.setAttribute("download", "");
  } else {
    // No fake file: explain what to do instead (hero button scrolls to this note)
    box.innerHTML = `<p class="note">Resume not added yet. Save your PDF as <code>${esc(r.path)}</code> and set <code>resume.available</code> to <code>true</code> in <code>js/config.js</code>.</p>`;
  }
}

/* ---------- Projects + modal ---------- */
// One button/link: real link when a URL exists, otherwise a "Coming Soon" label
function projectLink(url, label, soon, icon) {
  return url
    ? `<a class="btn btn-sm" href="${esc(url)}" target="_blank" rel="noopener noreferrer"><i class="${icon}" aria-hidden="true"></i> ${label}</a>`
    : `<span class="btn btn-sm is-disabled" aria-disabled="true"><i class="${icon}" aria-hidden="true"></i> ${soon}: Coming Soon</span>`;
}
function projectActions(p) {
  return projectLink(p.demoUrl, "View Project", "Project", "fa-solid fa-arrow-up-right-from-square") +
         projectLink(p.repoUrl, "GitHub Repository", "Repository", "fa-brands fa-github");
}
function projectVisual(p) {
  // Placeholder always exists; the optional image sits on top and removes itself if it fails to load
  return `<div class="proj-visual" style="--h:${Number(p.hue) || 220}">
    <i class="fa-solid ${esc(p.icon || "fa-code")}" aria-hidden="true"></i>
    ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)} preview" loading="lazy" onerror="this.remove()">` : ""}
    ${p.status ? `<span class="proj-status">${esc(p.status)}</span>` : ""}</div>`;
}
function renderProjects() {
  const grid = $("#projectGrid");
  grid.innerHTML = projects.map((p, i) => `
    <article class="card project reveal" data-index="${i}">
      ${projectVisual(p)}
      <div class="proj-body">
        <h3>${esc(p.title)}</h3><p>${esc(p.short)}</p>
        <ul class="badges">${p.tech.map((t) => `<li class="badge">${esc(t)}</li>`).join("")}</ul>
        <div class="proj-actions">
          <button class="btn btn-sm" type="button" data-details="${i}"><i class="fa-solid fa-circle-info" aria-hidden="true"></i> Details</button>
          ${projectActions(p)}
        </div>
      </div>
    </article>`).join("");

  // Click anywhere on a card (except its links) or press "Details" to open the modal
  grid.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const card = e.target.closest(".project");
    if (card) openModal(projects[card.dataset.index]);
  });
}
function openModal(p) {
  const dlg = $("#projectModal");
  $("#modalBody").innerHTML = `
    <button class="icon-btn modal-close" type="button" aria-label="Close project details"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
    <h3 id="modalTitle">${esc(p.title)}</h3>
    ${p.status ? `<p><strong>Status:</strong> ${esc(p.status)}</p>` : ""}
    <p style="margin-top:.6rem">${esc(p.description)}</p>
    <h4>Features</h4><ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
    <h4>Technologies</h4><ul class="badges" style="list-style:none;padding:0">${p.tech.map((t) => `<li class="badge">${esc(t)}</li>`).join("")}</ul>
    <div class="proj-actions">${projectActions(p)}</div>`;
  $(".modal-close", dlg).addEventListener("click", () => dlg.close());
  dlg.showModal();
  document.body.style.overflow = "hidden"; // stop background scrolling
}
function initModal() {
  const dlg = $("#projectModal");
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); }); // click outside to close
  dlg.addEventListener("close", () => { document.body.style.overflow = ""; });
}

/* ---------- Contact form validation ---------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function validateForm(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = "Enter your name.";
  if (!data.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_RE.test(data.email.trim())) errors.email = "Enter a valid email address, like name@example.com.";
  if (!data.subject.trim()) errors.subject = "Enter a subject.";
  if (data.message.trim().length < 10) errors.message = "Write a message of at least 10 characters.";
  return errors;
}
function initContact() {
  const form = $("#contactForm"), status = $("#formStatus");
  const show = (type, text) => { status.className = "form-status " + type; status.textContent = text; };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const errors = validateForm(data);
    ["name", "email", "subject", "message"].forEach((f) => {
      $("#err-" + f).textContent = errors[f] || "";
      $("#" + f).setAttribute("aria-invalid", errors[f] ? "true" : "false");
    });
    const firstBad = Object.keys(errors)[0];
    if (firstBad) { show("bad", "Please fix the highlighted fields."); $("#" + firstBad).focus(); return; }

    // No backend or email service configured: be honest, do not pretend to send
    if (!siteConfig.formEndpoint) {
      show("info", "Your details look valid, but no email service is connected yet, so nothing was sent. Use the email link above, or see the README to connect a service.");
      return;
    }
    try {
      show("info", "Sending...");
      const res = await fetch(siteConfig.formEndpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      show("ok", "Message sent. Thank you, I will reply soon.");
    } catch (err) {
      show("bad", "The message could not be sent. Please try again later or use the email link.");
    }
  });
}

/* ---------- Scroll reveal + back to top ---------- */
function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((i) => i.classList.add("visible")); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  items.forEach((i) => io.observe(i));
}
function initBackToTop() {
  const btn = $("#toTop");
  window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 600), { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Start everything ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderBasics();
  renderAbout();
  renderSkills();
  renderProjects();
  renderEducation();
  renderExperience();
  renderAchievements();
  renderResume();
  initNav();
  initModal();
  initContact();
  initReveal(); // after rendering so dynamic cards are observed too
  initBackToTop();
});
