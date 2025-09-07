<!DOCTYPE html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GitHub Profile — YusupKakuu</title>
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="https://github.com/bukannpc.png" />
    <!-- Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- DaisyUI CDN -->
    <link
      href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <!-- Tailwind Config -->
    <script>
      window.tailwind = window.tailwind || {};
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              display: ["Inter", "ui-sans-serif", "system-ui"],
            },
          },
        },
      };
    </script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap"
      rel="stylesheet"
    />
    <!-- Custom Styles -->
    <style>
      html {
        scroll-behavior: smooth;
      }
      .prose img {
        border-radius: 12px;
      }
      @media (max-width: 640px) {
        .table thead th, .table tbody td, .table tbody th {
          font-size: 0.85rem;
          padding: 0.5rem;
        }
      }
    </style>
  </head>
  <body class="min-h-screen font-display bg-base-100 text-base-content">
    <!-- Navbar -->
    <div
      class="navbar bg-base-200/60 backdrop-blur supports-[backdrop-filter]:bg-base-200/60 sticky top-0 z-50"
    >
      <div class="flex-1">
        <a href="#top" class="btn btn-ghost text-xl">@BukanNPC</a>
      </div>
      <div class="flex-none gap-2">
        <label class="swap swap-rotate">
          <input id="theme-toggle" type="checkbox" />
          <!-- Sun icon -->
          <svg
            class="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Light mode</title>
            <path
              d="M5.64 17l-1.41 1.41-1.41-1.41L4.23 15.6 5.64 17zm0-10L4.23 5.6 
              2.82 7.01l1.41 1.41L5.64 7zM12 4V1h-1v3h1zm7.36 
              3l1.41-1.41-1.41-1.41L17.95 5.6 19.36 7zM4 
              13H1v-1h3v1zm16 0h3v-1h-3v1zM12 
              23v-3h-1v3h1zm6.36-6l1.41 1.41 
              1.41-1.41-1.41-1.41L18.36 17zM12 
              7a5 5 0 100 10A5 5 0 0012 7z"
            />
          </svg>
          <!-- Moon icon -->
          <svg
            class="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Dark mode</title>
            <path d="M21.64 13A9 9 0 1111 2.36 7 7 0 0021.64 13z" />
          </svg>
        </label>
      </div>
    </div>

    <!-- Hero / Banner -->
    <section id="top" class="container mx-auto px-4 pt-8">
      <div class="hero rounded-2xl bg-base-200 border border-base-300">
        <div class="hero-content flex-col lg:flex-row gap-8">
          <img
            src="https://i.pinimg.com/originals/97/41/f0/9741f0c6151635b29300e6f7656e1644.gif"
            class="max-w-sm w-full rounded-2xl shadow-2xl"
            alt="Animated banner"
          />
          <div>
            <h1 class="text-4xl font-extrabold leading-tight">
              Account Information
            </h1>
            <p class="py-4 opacity-80 max-w-2xl">
              My goal in creating this GitHub account is to express my ideas
              about coding. Usually, this is a hobby. I often code Node.js,
              JavaScript, HTML, CSS, and so on!
            </p>
            <div class="flex flex-wrap gap-2">
              <a href="#skills" class="btn btn-outline">Skills</a>
              <a href="#stats" class="btn btn-outline">Stats</a>
              <a href="#music" class="btn btn-outline">Music</a>
              <a href="#visitors" class="btn btn-outline">Visitors</a>
              <a href="#projects" class="btn btn-outline">Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visitors -->
    <section id="visitors" class="container mx-auto px-4 pt-10">
      <div
        class="collapse collapse-arrow bg-base-200 rounded-2xl border border-base-300"
      >
        <input type="checkbox" checked />
        <div class="collapse-title text-xl font-semibold text-center">
          ↓ Total Profile Visitors ↓
        </div>
        <div class="collapse-content flex justify-center py-4">
          <a
            href="https://www.instagram.com/yusupk._"
            class="tooltip"
            data-tip="Follow on Instagram"
          >
            <img
              alt="Cute Count"
              class="rounded-xl shadow"
              src="https://count.getloli.com/get/@NeofetchNpc?theme=rule34"
            />
          </a>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="container mx-auto px-4 pt-10">
      <div class="card bg-base-200 border border-base-300 rounded-2xl">
        <div class="card-body">
          <h2 class="card-title">Tech Stack</h2>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 items-center"
          >
            <img
              src="https://img.shields.io/badge/html%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML badge"
              class="rounded"
            />
            <img
              src="https://img.shields.io/badge/css%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS badge"
              class="rounded"
            />
            <img
              src="https://img.shields.io/badge/TypeScript-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript badge"
              class="rounded"
            />
            <img
              src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"
              alt="Node.js badge"
              class="rounded"
            />
            <img
              src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="JavaScript badge"
              class="rounded"
            />
            <img
              src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"
              alt="Git badge"
              class="rounded"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- GitHub Summary -->
    <section id="stats" class="container mx-auto px-4 pt-10">
      <div class="card bg-base-200 border border-base-300 rounded-2xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title">GitHub Profile Summary</h2>
          <figure class="mt-4">
            <img
              class="rounded-xl"
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=BukanNPC&theme=nightowl"
              alt="GitHub Summary for BukanNPC"
            />
          </figure>
        </div>
      </div>
    </section>

    <!-- Music -->
    <section id="music" class="container mx-auto px-4 pt-10 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="card bg-base-200 border border-base-300">
          <div class="card-body items-center text-center">
            <h2 class="card-title">Spotify Profile</h2>
            <img
              class="rounded-xl"
              src="https://spotify-github-profile.kittinanx.com/api/view?uid=31clwo7edqwwy7heid576bz6xuue&cover_image=true&theme=natemoo-re&show_offline=true&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false"
              alt="Spotify widget"
            />
          </div>
        </div>
        <div class="card bg-base-200 border border-base-300">
          <div class="card-body items-center text-center">
            <h2 class="card-title">Recently Played</h2>
            <img
              class="rounded-xl"
              src="https://spotify-recently-played-readme.vercel.app/api?user=31clwo7edqwwy7heid576bz6xuue&width=600&count=10"
              alt="Spotify Recently Played"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="container mx-auto px-4 pt-10">
      <div class="card bg-base-200 border border-base-300 rounded-2xl">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">My Projects</h2>
          <div class="overflow-x-auto w-full">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Description</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>API Service</td>
                  <td>My personal API with various endpoints hosted on Vercel.</td>
                  <td>
                    <a
                      href="https://api.ness.biz.id/"
                      target="_blank"
                      class="link link-primary"
                      >api.ness.biz.id</a>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Anime Streaming</td>
                  <td>Website to watch anime with Indonesian subtitles.</td>
                  <td>
                    <a
                      href="https://ani.ness.biz.id/"
                      target="_blank"
                      class="link link-primary"
                      >ani.ness.biz.id</a>
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>File Uploader</td>
                  <td>Upload and share files on NessID CDN without time limit.</td>
                  <td>
                    <a
                      href="https://up.ness.biz.id/"
                      target="_blank"
                      class="link link-primary"
                      >up.ness.biz.id</a>
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>osu! Profile Signature</td>
                  <td>Dynamic signature with osu! profile details.</td>
                  <td>
                    <a
                      href="https://osu.ness.biz.id/"
                      target="_blank"
                      class="link link-primary"
                      >osu.ness.biz.id</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer footer-center p-10 bg-base-200 text-base-content border-t border-base-300 mt-10">
      <aside>
        <p>© <span id="year"></span> @BukanNPC — Built with Tailwind CSS & DaisyUI</p>
        <div class="flex gap-4 text-2xl mt-3">
          <!-- GitHub -->
          <a href="https://github.com/BukanNPC" target="_blank" class="hover:text-primary" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.311.469-2.382 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.222 0 4.61-2.803 5.624-5.475 5.921.43.37.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <!-- Instagram -->
          <a href="https://instagram.com/yusupk._" target="_blank" class="hover:text-primary" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <title>Instagram</title>
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3a5.25 5.25 0 110 10.5A5.25 5.25 0 0112 6.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm6.25-1.25a1 1 0 110 2 1 1 0 010-2z"/>
            </svg>
          </a>
          <!-- Discord -->
          <a href="https://discord.gg/radtFA8s8X" target="_blank" class="hover:text-primary" title="Discord">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <title>Discord</title>
              <path d="M20.317 4.369A19.791 19.791 0 0016.885 3c-.207.363-.433.845-.593 1.225a18.31 18.31 0 00-5.566 0A12.96 12.96 0 009.115 3a19.736 19.736 0 00-3.432 1.369C2.755 7.134 2.024 9.79 2 12.413c0 3.19 1.617 5.732 4.833 8.571 1.978 1.777 4.126 2.79 5.167 2.79 1.04 0 3.189-1.013 5.165-2.789C21.381 18.145 23 15.603 23 12.413c-.024-2.622-.755-5.279-2.683-8.044zm-8.317 13.83c-.835 0-2.694-.797-4.302-2.305-.535-.522-.827-.976-1.236-1.601.977.258 1.923.413 2.841.426.039-.002.076-.017.113-.017s.074.015.113.017c.917-.013 1.864-.168 2.841-.426-.409.625-.701 1.079-1.236 1.601-1.608 1.508-3.467 2.305-4.302 2.305zm-2.563-7.03c-.211 0-.381-.17-.381-.381 0-.21.17-.381.381-.381.21 0 .381.171.381.381 0 .211-.171.381-.381.381zm8.563 3.25a1.375 1.375 0 11-2.75 0 1.375 1.375 0 012.75 0zm1.938-3.25c-.211 0-.381-.17-.381-.381 0-.21.17-.381.381-.381.21 0 .381.171.381.381 0 .211-.171.381-.381.381z"/>
            </svg>
          </a>
          <!-- YouTube -->
          <a href="https://youtube.com/@YUSUP909" target="_blank" class="hover:text-primary" title="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <title>YouTube</title>
              <path d="M23.498 6.186a2.974 2.974 0 00-2.094-2.105C19.367 3.5 12 3.5 12 3.5s-7.367 0-9.404.581A2.974 2.974 0 00.502 6.186C0 8.23 0 12 0 12s0 3.77.502 5.814a2.974 2.974 0 002.094 2.105C4.633 20.5 12 20.5 12 20.5s7.367 0 9.404-.581a2.974 2.974 0 002.094-2.105C24 15.77 24 12 24 12s0-3.77-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/>
            </svg>
          </a>
        </div>
      </aside>
    </footer>

    <!-- Scripts -->
    <script>
      // Theme toggle
      document.getElementById("year").textContent = new Date().getFullYear();
      const toggle = document.getElementById("theme-toggle");
      const root = document.documentElement;
      const saved = localStorage.getItem("theme");

      if (saved) {
        root.setAttribute("data-theme", saved);
        toggle.checked = saved !== "dark";
      }

      toggle.addEventListener("change", () => {
        const next = toggle.checked ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
      });

      // Year
      document.getElementById("year").textContent = new Date().getFullYear();
    </script>
  </body>
</html>
