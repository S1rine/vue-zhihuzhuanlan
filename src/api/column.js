import { getAction } from './base';

const getColumnList = params => getAction('/columns', params);

export { getColumnList };
