(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const setMenu = (open) => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    toggle.querySelector(".menu-label").textContent = open ? "Close" : "Menu";
  };
  if (toggle && nav) {
    toggle.hidden = false;
    toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
    });
    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
    });
    window.matchMedia("(min-width: 621px)").addEventListener("change", (event) => { if (event.matches) setMenu(false); });
  }
  const group = document.querySelector(".filter-group");
  const items = [...document.querySelectorAll(".research-item")];
  const status = document.querySelector("#filter-status");
  if (group && items.length) {
    group.hidden = false;
    const buttons = [...group.querySelectorAll("button")];
    buttons.forEach((button) => button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      let count = 0;
      items.forEach((item) => {
        const show = filter === "all" || item.dataset.category.split(" ").includes(filter);
        item.hidden = !show;
        if (show) count++;
      });
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      const additional = document.querySelector(".additional-work");
      if (additional) additional.hidden = ![...additional.querySelectorAll(".research-item")].some((item) => !item.hidden);
      if (status) status.textContent = "Showing " + count + " selected work" + (count === 1 ? "" : "s") + (filter === "all" ? "." : " in " + button.textContent.trim() + ".");
    }));
  }
  if ("IntersectionObserver" in window && nav) {
    const links = [...nav.querySelectorAll("a[href^='#']")];
    const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          if (link.getAttribute("href") === "#" + entry.target.id) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }
})();
