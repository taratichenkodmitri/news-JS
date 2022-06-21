import News from './news/news';
import Sources from './sources/sources';

interface IAppView {
    news: News;
    sources: Sources;
}

export class AppView implements IAppView {
    public news: News;
    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
