import './sources.css';
import { ISource } from '../../interfaces/IData';

class Sources {
    draw(data: ISource[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <DocumentFragment>sourceItemTemp.content.cloneNode(true);

            const sourceCloneItemName = <HTMLSpanElement>sourceClone.querySelector('.source__item-name');
            sourceCloneItemName.textContent = item.name;

            const sourceCloneItem = <HTMLDivElement>sourceClone.querySelector('.source__item');
            sourceCloneItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sources = <HTMLDivElement>document.querySelector('.sources');
        sources.append(fragment);
    }
}

export default Sources;
