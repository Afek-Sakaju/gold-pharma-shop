import BaseProxy from './proxy';
import { SERVER_URL } from './consts';

export * from './consts';
export * from './helpers';
export const ProductsProxy = new BaseProxy(SERVER_URL);
