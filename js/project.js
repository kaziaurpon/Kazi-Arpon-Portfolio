/* Renders the project detail page from ?id=<project id> */
(function () {
  const { el, $ } = window.PF;
  const root = $("projectRoot");
  const id = new URLSearchParams(window.location.search).get("id");
  const p = PORTFOLIO.projects.find((x) => x.id === id);

  const back = el("a", { class: "back-link", href: "index.html#projects", text: "← Back to Projects" });

  if (!p) {
    document.title = "Project not found | " + PORTFOLIO.name;
    root.appendChild(back);
    root.appendChild(el("h1", { text: "Project not found" }));
    root.appendChild(el("p", { text: "That project does not exist. Please go back and choose one from the list." }));
    return;
  }

  document.title = p.name + " | " + PORTFOLIO.name;

  const list = (items) => el("ul", {}, items.map((t) => el("li", { text: t })));
  const block = (title, content) => el("section", { class: "detail-block" }, [el("h2", { text: title }), content]);

  const actions = el("div", { class: "detail-actions" }, [
    el("a", { class: "btn btn-primary", href: p.live, target: "_blank", rel: "noopener noreferrer", text: "Live Project" }),
    el("a", { class: "btn btn-ghost", href: p.github, target: "_blank", rel: "noopener noreferrer", text: "GitHub Repository (Client)" })
  ]);

  root.appendChild(back);
  root.appendChild(el("h1", { text: p.name }));
  root.appendChild(el("p", { class: "t-org", text: p.summary }));
  root.appendChild(el("img", { class: "detail-cover", src: p.image, alt: p.name + " screenshot" }));
  root.appendChild(actions);
  root.appendChild(
    el("div", { class: "detail-grid" }, [
      block("Main Technology Stack", el("div", { class: "tags" }, p.stack.map((t) => el("span", { class: "tag", text: t })))),
      block("Brief Description", el("p", { text: p.description })),
      block("Challenges Faced", list(p.challenges)),
      block("Potential Improvements & Future Plans", list(p.improvements))
    ])
  );
})();
