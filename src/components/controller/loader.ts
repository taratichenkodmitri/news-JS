import { CallbackNews, CallbackSource } from '../interfaces/types';
import { IDataNews, IDataSource } from '../interfaces/IData';

interface ILoader {
    baseLink: string;
    options?: {};
}

interface IURL {
    endpoint: string;
    options?: object;
}

class Loader implements ILoader {
    public baseLink: string;
    public options?: {};

    constructor(baseLink: string, options?: {}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp({ endpoint, options = {} }: IURL, callback: CallbackNews | CallbackSource): void {
        this.load('GET', endpoint, callback, options);
    }

    public errorHandler = (res: Response): Response | never => {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    };

    makeUrl(options: {}, endpoint: string): string {
        const urlOptions: {} = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${<string>urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: CallbackNews | CallbackSource, options: {} = {}): void | never {
        if (typeof callback === 'function') {
            fetch(this.makeUrl(options, endpoint), { method })
                .then(this.errorHandler)
                .then((res: Response) => res.json())
                .then((data: IDataNews | IDataSource) => callback(data))
                .catch((err) => console.error(err));
        } else {
            throw Error('No callback for GET response');
        }
    }
}

export default Loader;
