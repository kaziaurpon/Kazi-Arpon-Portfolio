/* Renders content from data.js into the page. Shared by index.html and project.html. */
(function () {
  const P = PORTFOLIO;
  const $ = (id) => document.getElementById(id);

  // Small helper to build elements safely (no raw HTML from data).
  function el(tag, props, children) {
    const node = document.createElement(tag);
    Object.entries(props || {}).forEach(([k, v]) => {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    });
    (children || []).forEach((c) => c && node.appendChild(c));
    return node;
  }
  window.PF = { el, $ };

  /* ----- Navbar toggle (works on both pages) ----- */
  const toggle = $("navToggle");
  const links = $("navLinks");
  const navbar = $("navbar");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }
  const onScroll = () => navbar && navbar.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- Social buttons ----- */
  function renderSocials(container) {
    if (!container) return;
    P.socials.forEach((s) => {
      container.appendChild(
        el("a", { class: "social-btn", href: s.url, target: "_blank", rel: "noopener noreferrer", "aria-label": s.name }, [
          el("b", { text: s.short }),
          el("span", { text: s.name })
        ])
      );
    });
  }
  renderSocials($("heroSocials"));
  renderSocials($("footerSocials"));

  /* ----- Footer ----- */
  if ($("year")) $("year").textContent = new Date().getFullYear();
  if ($("footerName")) $("footerName").textContent = P.name;

  // Everything below only exists on index.html
  if (!$("heroName")) return;

  /* ----- Hero ----- */
  $("heroName").textContent = P.name;
  $("heroDesignation").textContent = P.designation;
  $("heroTagline").textContent = P.tagline;
  $("heroPhoto").src = P.photo;
  $("resumeBtn").href = P.resume;

  /* ----- About ----- */
  P.about.paragraphs.forEach((t) => $("aboutText").appendChild(el("p", { text: t })));
  P.about.facts.forEach((f) =>
    $("aboutFacts").appendChild(el("li", {}, [el("span", { text: f.label }), el("span", { text: f.value })]))
  );

  /* ----- Skills ----- */
  P.skills.forEach((cat) => {
    const card = el("div", { class: "skill-card reveal" }, [el("h3", { text: cat.title })]);
    cat.items.forEach((s) => {
      const fill = el("div", { class: "bar-fill" });
      fill.dataset.level = s.level;
      card.appendChild(
        el("div", { class: "skill" }, [
          el("div", { class: "skill-head" }, [el("span", { text: s.name }), el("span", { text: s.level + "%" })]),
          el("div", { class: "bar", role: "progressbar", "aria-valuenow": s.level, "aria-valuemin": 0, "aria-valuemax": 100 }, [fill])
        ])
      );
    });
    $("skillsGrid").appendChild(card);
  });

  /* ----- Education ----- */
  P.education.forEach((e) =>
    $("educationList").appendChild(
      el("div", { class: "t-item reveal" }, [
        el("span", { class: "t-period", text: e.period }),
        el("h3", { text: e.degree }),
        el("p", { class: "t-org", text: e.school }),
        el("p", { text: e.details })
      ])
    )
  );

  /* ----- Experience (hidden if empty) ----- */
  if (!P.experience || P.experience.length === 0) {
    $("experience").remove();
    const navExp = $("navExperience");
    if (navExp) navExp.remove();
  } else {
    P.experience.forEach((x) => {
      const ul = el("ul", {}, x.points.map((p) => el("li", { text: p })));
      $("experienceList").appendChild(
        el("div", { class: "t-item reveal" }, [
          el("span", { class: "t-period", text: x.period }),
          el("h3", { text: x.role }),
          el("p", { class: "t-org", text: x.org }),
          ul
        ])
      );
    });
  }

  /* ----- Projects ----- */
  P.projects.forEach((p) => {
    const img = el("img", { src: p.image, alt: p.name + " screenshot", loading: "lazy" });
    const tags = el("div", { class: "tags" }, p.stack.slice(0, 4).map((t) => el("span", { class: "tag", text: t })));
    $("projectsGrid").appendChild(
      el("article", { class: "project-card reveal" }, [
        img,
        el("div", { class: "project-body" }, [
          el("h3", { text: p.name }),
          el("p", { text: p.summary }),
          tags,
          el("a", { class: "btn btn-ghost", href: "project.html?id=" + encodeURIComponent(p.id), text: "View More / Details" })
        ])
      ])
    );
  });

  /* ----- Contact ----- */
  const c = P.contact;
  const cards = [
    { ic: "@", title: "Email", text: c.email, href: "mailto:" + c.email },
    { ic: "☎", title: "Phone", text: c.phone, href: "tel:" + c.phone.replace(/\s+/g, "") }
  ];
  if (c.whatsapp) {
    cards.push({ ic: "W", title: "WhatsApp", text: "+" + c.whatsapp, href: "https://wa.me/" + c.whatsapp, ext: true });
  }
  cards.forEach((k) => {
    const props = { class: "contact-card reveal", href: k.href };
    if (k.ext) { props.target = "_blank"; props.rel = "noopener noreferrer"; }
    $("contactGrid").appendChild(
      el("a", props, [el("div", { class: "ic", text: k.ic }), el("h3", { text: k.title }), el("p", { text: k.text })])
    );
  });

  /* ----- Scroll reveal + skill bar animation ----- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("visible");
        en.target.querySelectorAll(".bar-fill").forEach((b) => (b.style.width = b.dataset.level + "%"));
        revealObserver.unobserve(en.target);
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((n) => revealObserver.observe(n));

  /* ----- Active nav link on scroll ----- */
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
})();
