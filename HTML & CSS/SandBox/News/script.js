document.addEventListener('DOMContentLoaded', function() {
    const newsData = [
        { category: 'politics', title: 'Título da Notícia Política 1', image: 'politics1.jpg', content: 'Conteúdo da notícia política 1.' },
        { category: 'tech', title: 'Título da Notícia de Tecnologia 1', image: 'tech1.jpg', content: 'Conteúdo da notícia de tecnologia 1.' },
        { category: 'sports', title: 'Título da Notícia de Esportes 1', image: 'sports1.jpg', content: 'Conteúdo da notícia de esportes 1.' },
        // Adicione mais notícias conforme necessário
    ];

    const filterButtons = document.querySelectorAll('#filterNav button');
    const newsList = document.getElementById('newsList');

    function displayNews(category) {
        newsList.innerHTML = '';

        newsData.filter(news => category === 'all' || news.category === category).forEach(news => {
            const articleElement = document.createElement('article');
            articleElement.classList.add('article');

            const imageElement = document.createElement('img');
            imageElement.src = news.image;
            articleElement.appendChild(imageElement);

            const titleElement = document.createElement('h2');
            titleElement.textContent = news.title;
            articleElement.appendChild(titleElement);

            const contentElement = document.createElement('p');
            contentElement.textContent = news.content;
            articleElement.appendChild(contentElement);

            newsList.appendChild(articleElement);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            displayNews(this.getAttribute('data-category'));
        });
    });

    displayNews('all');
});
