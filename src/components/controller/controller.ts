import AppLoader from './appLoader';
import * as Events from 'events';

class AppController extends AppLoader {
    getSources(callback) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: MouseEvent, callback): void {
        let target = <HTMLDivElement>e.target;
        const newsContainer = <HTMLDivElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = <string>target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLDivElement>target.parentNode;
        }
    }
}

export default AppController;
