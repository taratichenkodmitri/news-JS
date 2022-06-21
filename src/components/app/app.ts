import AppController from '../controller/controller';
import { AppView } from '../view/appView';

interface IApp {
    controller: AppController;
    view: AppView;
}

class App implements IApp {
    public controller;
    public view;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sources = <HTMLDivElement> document.querySelector('.sources');

        sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }

}

export default App;
