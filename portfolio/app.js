"use strict";

const portfolio = window.PORTFOLIO;
const byId = (id) => document.getElementById(id);
const setText = (id, value) => { byId(id).textContent = value; };

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value) node.textContent = value;
  return node;
}

function projectCover(project) {
  const cover = element("div", "cover");
  cover.style.setProperty("--cover", "linear-gradient(145deg," + project.colors + ")");
  cover.style.setProperty("--shape", project.shape);
  if (project.image) {
    const photo = element("img");
    photo.src = project.image;
    photo.alt = project.imageAlt || "";
    cover.append(photo);
  } else {
    cover.setAttribute("aria-hidden", "true");
    cover.append(element("span"));
  }
  return cover;
}

function renderProjects() {
  for (const project of portfolio.projects) {
    const card = element("article", "card");
    const body = element("div", "card-body");
    const link = element("a", "button soft", "View case study");
    link.href = "project.html?id=" + encodeURIComponent(project.id);
    link.setAttribute("aria-label", "View case study: " + project.title);
    body.append(element("p", "eyebrow", project.category), element("h2", "", project.title),
      element("p", "", project.summary), link);
    card.append(projectCover(project), body);
    byId("projects").append(card);
  }
}

function renderProject() {
  const id = new URLSearchParams(location.search).get("id");
  const project = portfolio.projects.find((item) => item.id === id);
  if (!project) {
    setText("case-title", "Project unavailable");
    setText("case-summary", "Open the project list to choose a case study.");
    return;
  }

  document.title = project.title + " | " + portfolio.name;
  setText("case-category", project.category);
  setText("case-title", project.title);
  setText("case-summary", project.summary);
  if (project.image) {
    const figure = element("figure", "project-figure");
    figure.append(projectCover(project));
    if (project.imageCaption) figure.append(element("figcaption", "", project.imageCaption));
    byId("case-cover").append(figure);
  }
  const section = element("section", "case-block project-description");
  section.append(element("h2", "", "Project description"), element("p", "", project.description));
  byId("case-body").append(section);
}

document.title = document.title.replace("Engineering Portfolio", portfolio.name + " | Engineering Portfolio");
setText("brand", portfolio.name);
setText("footer-name", portfolio.name);
setText("email", portfolio.email);
byId("email").href = "mailto:" + portfolio.email;

switch (document.body.dataset.page) {
  case "index":
    setText("role", portfolio.role);
    setText("headline", portfolio.headline);
    setText("intro", portfolio.intro);
    setText("bio", portfolio.bio);
    for (const skill of portfolio.skills) byId("skills").append(element("li", "", skill));
    break;
  case "work":
    renderProjects();
    break;
  case "resume":
    setText("resume-intro", portfolio.resumeIntro);
    byId("resume-link").href = portfolio.resumeUrl;
    break;
  case "project":
    renderProject();
    break;
}
