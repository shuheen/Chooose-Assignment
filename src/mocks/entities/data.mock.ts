// Constants
import {DataI} from '../../interfaces/data';
import {APP_ENDPOINTS, MOCK_SERVER_ENDPOINT} from './../../constants/global';

export const dataEndpoint = `${process.env.REACT_APP_SERVER === 'mock' ? MOCK_SERVER_ENDPOINT : APP_ENDPOINTS}data`;

export const dataMock: DataI[] = [
  {
    title: 'European Quest',
    countries_count: 8,
    days_count: 21,
    emission_offset: '810 Kg CO2e',
    rating: 4.5,
    background: process.env.PUBLIC_URL + 'img/dessert.jpg',
  },
  {
    title: 'Autumn Roadtrip',
    countries_count: 1,
    days_count: 14,
    rating: 2,
    emission_offset: '356 t CO2e',
    background: process.env.PUBLIC_URL + 'img/road.jpg',
  },
  {
    title: 'Diving Adventure in Egypt',
    countries_count: 1,
    days_count: 5,
    rating: 4.7,
    emission_offset: '692 t CO2e',
    background: process.env.PUBLIC_URL + 'img/deep-sea.jpg',
  },
];
