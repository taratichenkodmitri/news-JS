import News from './news/news';
import Sources from './sources/sources';
import { IDataNews, IDataSource, INews, ISource } from '../interfaces/IData';

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

    drawNews(data: IDataNews): void {
        const values: INews[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDataSource): void {
        const values: ISource[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
