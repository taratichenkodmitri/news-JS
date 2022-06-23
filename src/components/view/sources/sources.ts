import './sources.css';
import { ISource } from '../../interfaces/IData';

class Sources {
    public data?: ISource[];
    public page: number = 0;

    draw(data: ISource[]) {
        this.data = data;
        const sources = data.length >= 5 ? data.filter((_item, idx) => idx < 5) : data;
        console.log("sources");
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        sources.forEach((item) => {
            const sourceClone = <DocumentFragment>sourceItemTemp.content.cloneNode(true);

            const sourceCloneItemName = <HTMLSpanElement>sourceClone.querySelector('.source__item-name');
            sourceCloneItemName.textContent = item.name;

            const sourceCloneItem = <HTMLDivElement>sourceClone.querySelector('.source__item');
            sourceCloneItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sectionMainSources = <HTMLDivElement>document.querySelector('.sources');
        sectionMainSources.append(fragment);
    }
}

export default Sources;
