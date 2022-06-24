import { Constants } from '../interfaces/constants';
import { ISource } from '../interfaces/IData';
import Sources from '../view/sources/sources';
import './pagination.css';

export class PaginationSources {
    public currentPage: number;
    public sources: Sources;
    public data: ISource[];

    constructor(data: ISource[]) {
        this.currentPage = Constants.startPage;
        this.sources = new Sources();
        this.data = data;
    }

    init() {
        console.log(Constants.step);
        const right = <HTMLDivElement>document.querySelector('.pagination__button_right');
        right.addEventListener('click', () => {
            if (this.currentPage === 0) {
                const left = <HTMLDivElement>document.querySelector('.pagination__button_left');
                left.classList.remove('pagination__button_disabled');
                left.classList.add('hover');
            }
            if (this.currentPage === Math.floor(this.data.length / Constants.step) - 1) {
                right.classList.add('pagination__button_disabled');
                right.classList.remove('hover');
            }
            if (this.currentPage === Math.floor(this.data.length / Constants.step)) {
                right.classList.add('pagination__button_disabled');
                return;
            }
            this.currentPage++;
            const sourceItems: NodeListOf<HTMLDivElement> = document.querySelectorAll('.source__item');
            sourceItems.forEach((item) => {
                item.style.right = `calc(${100 * this.currentPage}% - 5px)`;
            });
        });

        const left = <HTMLDivElement>document.querySelector('.pagination__button_left');
        left.addEventListener('click', () => {
            if (this.currentPage === Math.floor(this.data.length / Constants.step)) {
                const right = <HTMLDivElement>document.querySelector('.pagination__button_right');
                right.classList.remove('pagination__button_disabled');
                right.classList.add('hover');
            }
            if (this.currentPage === 0) {
                return;
            }
            if (this.currentPage === 1) {
                left.classList.add('pagination__button_disabled');
                left.classList.remove('hover');
            }
            this.currentPage--;
            const sourceItems: NodeListOf<HTMLDivElement> = document.querySelectorAll('.source__item');
            sourceItems.forEach((item) => {
                item.style.right = `calc(${100 * this.currentPage}% - 5px)`;
            });
        });

        this.draw();
    }

    draw(): void {
        this.sources.draw(this.data);
    }
}
