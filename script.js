// simple scroll animation placeholder

console.log("abhishek.ai loaded")

document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const isOpen = content.style.display === "block";

    content.style.display = isOpen ? "none" : "block";
    btn.textContent = isOpen ? "View Details" : "Hide Details";
  });
});

let articles = [
  {
    title: "Designing Enterprise RAG Systems",
    link: "https://medium.com/"
  },
  {
    title: "Agentic AI in Financial Services",
    link: "https://medium.com/"
  }
];

function renderArticles() {
  const container = document.getElementById("articles");
  container.innerHTML = "";

  articles.forEach(article => {
    const div = document.createElement("div");
    div.className = "article-card";

    div.innerHTML = `
      <div class="article-title">${article.title}</div>
      <a href="${article.link}" target="_blank" class="article-link">Read →</a>
    `;

    container.appendChild(div);
  });
}

function addArticle() {
  const title = document.getElementById("title").value;
  const link = document.getElementById("link").value;

  if (!title || !link) return;

  articles.unshift({ title, link });
  renderArticles();

  document.getElementById("title").value = "";
  document.getElementById("link").value = "";
}

renderArticles();


fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abhishekjunnarkar")
  .then(res => res.json())
  .then(data => {
    articles = data.items.map(item => ({
      title: item.title,
      link: item.link
    }));
    renderArticles();
  });