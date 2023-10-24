import BaseProxy from './proxy';
import { SERVER_URL } from './constants';

export * from './constants';
export * from './helpers';
export const ProductsProxy = new BaseProxy(SERVER_URL);
