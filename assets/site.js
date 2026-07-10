// Ram Ready Financial Futures — Shared Site Shell
// Header/nav rendering, mobile menu, guest/account indicator, footer.

import { loadState } from "./profile-engine.js";
import { initSkipLink } from "./accessibility.js";
import { isAccountModeAvailable, getSession } from "./auth-sync.js";

const NAV_ITEMS = [
  { href: "index.html", label: "Home" },
  { href: "foundations.html", label: "Financial Foundations" },
  { href: "wealth-quest.html", label: "Wealth Quest" },
  { href: "journey.html", label: "My Journey" },
  { href: "achievements.html", label: "Achievements" },
  { href: "sources.html", label: "Sources" },
  { href: "instructor-guide.html", label: "Instructor Guide" }
];

export function basePath() {
  // Works whether hosted at domain root or under /Financial-Literacy-Course/
  const path = window.location.pathname;
  return path.slice(0, path.lastIndexOf("/") + 1);
}

export function renderHeader(activeHref) {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;
  const base = basePath();

  const nav = NAV_ITEMS.map((item) => {
    const isActive = activeHref === item.href;
    return `<a href="${base}${item.href}"${isActive ? ' aria-current="page"' : ""}>${item.label}</a>`;
  }).join("");

  header.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <div class="site-header__bar">
      <a class="site-header__brand" href="${base}index.html">
        <span class="brand-mark" aria-hidden="true"></span>
        Ram Ready Financial Futures
      </a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
      <nav id="site-nav" class="site-nav" aria-label="Primary">
        ${nav}
        <a href="${base}profile.html" class="site-nav__profile" data-account-indicator>Guest</a>
      </nav>
    </div>
  `;

  const toggle = header.querySelector(".nav-toggle");
  const nav_el = header.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav_el.classList.toggle("site-nav--open");
  });

  updateAccountIndicator();
}

async function updateAccountIndicator() {
  const indicator = document.querySelector("[data-account-indicator]");
  if (!indicator) return;
  const available = await isAccountModeAvailable();
  if (!available) {
    indicator.textContent = "Guest mode";
    return;
  }
  const session = await getSession();
  indicator.textContent = session ? (session.user.email || "Account") : "Guest";
}

export function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;
  const base = basePath();
  footer.innerHTML = `
    <p>
      Ram Ready Financial Futures is an independent, open-source educational pilot.
      It is not official Angelo State University credit, financial advice, or a
      financial-aid resource. See <a href="${base}disclaimer.html">full disclaimer</a>
      and <a href="${base}privacy.html">privacy model</a>.
    </p>
    <p>
      <a href="${base}BRANDING-NOTICE.md">Branding notice</a> ·
      <a href="https://github.com/BREXAtlas/Financial-Literacy-Course" target="_blank" rel="noopener noreferrer">Source on GitHub</a>
    </p>
  `;
}

export function initPage(activeHref) {
  initSkipLink();
  renderHeader(activeHref);
  renderFooter();
}

export function currentProfile() {
  return loadState().profile;
}
