export interface IDataNews {
    status: string;
    totalResults?: number;
    articles?: INews[];
}

export interface INews {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    tittle: string;
    description: string;
    url: string;
    urlToImage: string;
}

export interface IDataSource {
    status: string;
    sources?: ISource[];
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
