// Load bunch of articles, generates snippets

function loadArticles (articles) {
    const container = document.getElementById("snippets__container")

    articles.forEach((article) => {
        fetch(article)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const snippet = generateSnippetMarkup(data)
                container.innerHTML+=snippet;
            })
    })
}

// Generates snippet with its markup

const generateSnippetMarkup = (article) => {
    const {author, date, poster, link, title} = article

    return (`
        <div class="snippet flex align__stretch">
            <div class="row flex align__stretch gap">
                <img class="poster" src="${poster}" />
                <div class="content__row row flex column align__start">
                    <h3>${title}</h3>
                    <span class="author">${author}</span>
                    <span>${date}</span>
                    <a href="${link}">Read more</a>
                </div>
            </div>
        </div>
    `)
};

// Load article from json to specific page

function loadArticle (article) {
    const posterContainer = document.getElementById("poster")
    const articleContent = document.getElementById("article__content")

    fetch(article)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const {author, date, poster, link, title, content} = data
            posterContainer.setAttribute('src', poster)
            articleContent.innerHTML = content;
        })
}
