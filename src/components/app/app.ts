import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IDataNews, IDataSource } from '../interfaces/IData';

interface IApp {
    controller: AppController;
    view: AppView;
}

class App implements IApp {
    public controller: AppController;
    public view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sources = <HTMLDivElement>document.querySelector('.sources');
        sources.addEventListener('click', (e: MouseEvent): void =>
            this.controller.getNews(e, (data: IDataNews): void => this.view.drawNews(data))
        );
        this.controller.getSources((data: IDataSource): void => this.view.drawSources(data));
    }
}

export default App;
