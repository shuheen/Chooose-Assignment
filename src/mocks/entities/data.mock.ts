// Constants
import {DataI} from '../../interfaces/data';
import {APP_ENDPOINTS, MOCK_SERVER_ENDPOINT} from './../../constants/global';
import jsonFile from '../../data.json';

export const dataEndpoint = `${process.env.REACT_APP_SERVER === 'mock' ? MOCK_SERVER_ENDPOINT : APP_ENDPOINTS}data`;

export const dataMock: DataI[] = jsonFile;
