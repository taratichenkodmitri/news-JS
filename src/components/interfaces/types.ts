import { IDataSource, IDataNews } from './IData';

export type CallbackNews = (data: IDataNews) => void;
export type CallbackSource = (data: IDataSource) => void;
