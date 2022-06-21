import './news.css';

class News {
    draw(data) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement> document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = <DocumentFragment> newsItemTemp.content.cloneNode(true);

            const newsCloneItem = <HTMLDivElement> newsClone.querySelector('.news__item')
            if (idx % 2) newsCloneItem.classList.add('alt');

            const newsClonePhoto = <HTMLDivElement> newsClone.querySelector('.news__meta-photo');
            newsClonePhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;

            const newsCloneAuthor = <HTMLLIElement> newsClone.querySelector('.news__meta-author');
            newsCloneAuthor.textContent = item.author || item.source.name;

            const newsCloneDate = <HTMLLIElement> newsClone.querySelector('.news__meta-date');
            newsCloneDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            const newsCloneDescTittle = <HTMLHeadingElement> newsClone.querySelector('.news__description-title')
            newsCloneDescTittle.textContent = item.title;

            const newsCloneDescSource = <HTMLHeadingElement> newsClone.querySelector('.news__description-source')
            newsCloneDescSource.textContent = item.source.name;

            const newsCloneDescContent = <HTMLParagraphElement> newsClone.querySelector('.news__description-content')
            newsCloneDescContent.textContent = item.description;

            const newsCloneReadMoreRef = <HTMLAnchorElement> newsClone.querySelector('.news__read-more a')
            newsCloneReadMoreRef.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsDiv = <HTMLDivElement> document.querySelector('.news');
        newsDiv.innerHTML = '';
        newsDiv.appendChild(fragment);
    }
}

export default News;
