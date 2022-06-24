import News from './news/news';
import Sources from './sources/sources';
import { IDataNews, IDataSource, INews, ISource } from '../interfaces/IData';
import { PaginationSources } from '../pagination/paginationSources';

interface IAppView {
    news: News;
    paginationSources?: PaginationSources;
}

export class AppView implements IAppView {
    public news: News;
    public paginationSources?: PaginationSources;

    constructor() {
        this.news = new News();
    }

    drawNews(data: IDataNews): void {
        const values: INews[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDataSource): void {
        const values: ISource[] = data?.sources ? data?.sources : [];
        this.paginationSources = new PaginationSources(values);
        console.log(values);
        this.paginationSources.init();
    }
}

export default AppView;
