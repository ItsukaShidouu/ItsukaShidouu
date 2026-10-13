const GITHUB_USERNAME = "itsukashidouu";
const year = document.querySelector("#year");
const themeButton = document.querySelector(".theme-toggle");
const root = document.documentElement;
const progress = document.querySelector(".scroll-progress");
const glow = document.querySelector(".cursor-glow");
if (year) year.textContent = new Date().getFullYear();

const githubRequest = async (path) => {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!response.ok) throw new Error(`GitHub API ${response.status}`);
  return response.json();
};
const escapeHTML = (value = "") =>
  String(value).replace(
    /[&<>'"]/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        char
      ],
  );
const loadGithubProfile = async () => {
  try {
    const [profile, repositories] = await Promise.all([
      githubRequest(`/users/${GITHUB_USERNAME}`),
      githubRequest(`/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`),
    ]);
    const set = (id, value) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value ?? "—";
    };
    set("profile-name", profile.name || profile.login);
    set("profile-status", profile.bio || "Available for ideas");
    set("github-followers", profile.followers);
    set("github-repos", profile.public_repos);
    set("github-location", profile.location || "Indonesia");
    set("github-gists", profile.public_gists);
    ["profile-avatar", "hero-avatar"].forEach((id) => {
      const image = document.getElementById(id);
      if (image) {
        image.src = profile.avatar_url;
        image.alt = `Foto profil ${profile.login}`;
      }
    });
    const projectList = document.getElementById("github-projects");
    if (projectList)
      projectList.innerHTML = repositories.length
        ? repositories
            .map(
              (repo, index) =>
                `<a class="project-card" href="${escapeHTML(repo.html_url)}" target="_blank" rel="noreferrer"><span class="project-number">${String(index + 1).padStart(2, "0")}</span><div><h3>${escapeHTML(repo.name)}</h3><p>${escapeHTML(repo.description || "Project open source dari GitHub.")}</p></div><span class="project-arrow">↗</span></a>`,
            )
            .join("")
        : '<p class="muted">Belum ada repository publik.</p>';
  } catch (error) {
    const projectList = document.getElementById("github-projects");
    if (projectList)
      projectList.innerHTML =
        '<p class="muted">Informasi GitHub belum dapat dimuat.</p>';
    console.warn("[portfolio] GitHub API unavailable", error);
  }
};
loadGithubProfile();
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        navLinks.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          ),
        );
    }),
  { rootMargin: "-25% 0px -65% 0px" },
);
sections.forEach((section) => observer.observe(section));
const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }),
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((item) => revealObserver.observe(item));
const updateScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
};
window.addEventListener("scroll", updateScroll, { passive: true });
updateScroll();
window.addEventListener(
  "pointermove",
  (event) => {
    document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
    document.documentElement.style.setProperty("--my", `${event.clientY}px`);
  },
  { passive: true },
);
let light = false;
themeButton?.addEventListener("click", () => {
  light = !light;
  root.dataset.theme = light ? "light" : "dark";
  themeButton.textContent = light ? "☾" : "☼";
  themeButton.setAttribute(
    "aria-label",
    light ? "Aktifkan mode gelap" : "Aktifkan mode terang",
  );
});
window.addEventListener(
  "scroll",
  () => document.body.classList.toggle("is-scrolling", window.scrollY > 10),
  { passive: true },
);

// Small tilt interaction for project cards on pointer devices.
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(pointer:coarse)").matches) return;
    const box = card.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    card.style.transform = `perspective(700px) rotateX(${y * -2}deg) rotateY(${x * 2}deg)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document
    .querySelectorAll(".hero-actions .button")
    .forEach((button, index) => {
      button.style.animation = `rise .7s ${0.25 + index * 0.1}s both`;
    });
}
