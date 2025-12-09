// Needs manual updates (modify as per posted articles)
const blogs = [
  {
    id: 1,
    title: "My First Blog",
    image: "assets/img1.png", //image location
    summary: "Short intro summary for blog 1...",
    body: "<p>This is the full blog body for article 1.</p>"
  },
  {
    id: 2,
    title: "Security Research",
    image: "assets/img2.png",
    summary: "Summary for blog 2...",
    body: "<p>Full blog content for article 2.</p>"
  },
  {
    id: 3,
    title: "Open Source Journey",
    image: "assets/img3.png",
    summary: "Summary for blog 3...",
    body: "<p>Full blog content for article 3.</p>"
  }
];

/* ---------- Homepage: inject the 3 previews ---------- */
const homepagePreviews = document.getElementById("homepage-previews");
if (homepagePreviews) {
  blogs.slice(0, 3).forEach(b => {
    homepagePreviews.innerHTML += `
      <div class="blog-preview">
        <img class="preview-img" src="${b.image}" onclick="openArticle(${b.id})">
        <div class="preview-summary">
          <h3>${b.title}</h3>
          <p>${b.summary}</p>
        </div>
      </div>
    `;
  });
}

/* ---------- Blogs Listing Page ---------- */
const blogsList = document.getElementById("blogs-list");
if (blogsList) {
  blogs.forEach(b => {
    blogsList.innerHTML += `
      <div class="blog-row">
        <img class="blog-img" src="${b.image}" onclick="openArticle(${b.id})">
        <div class="blog-summary">
          <h2>${b.title}</h2>
          <p>${b.summary}</p>
        </div>
      </div>
    `;
  });
}

/* ---------- Blog Article Page ---------- */
function openArticle(id) {
  localStorage.setItem("articleId", id);
  window.location = "article.html";
}

const articleId = localStorage.getItem("articleId");
if (articleId && document.getElementById("article-title")) {
  const post = blogs.find(b => b.id == articleId);
  document.getElementById("article-title").innerText = post.title;
  document.getElementById("article-image").src = post.image;
  document.getElementById("article-body").innerHTML = post.body;
}
