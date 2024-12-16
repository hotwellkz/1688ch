import { DeliveryOption } from '../types/delivery';

export const deliveryOptions: DeliveryOption[] = [
  {
    iconType: 'train',
    title: 'Железная дорога',
    description: 'ДЕШЕВО И МЕДЛЕННО',
    duration: 'от 60 дней',
    price: 'от 1,1$ за кг'
  },
  {
    iconType: 'truck',
    title: 'Быстрое авто',
    description: 'СРЕДНИЙ ПО СКОРОСТИ И ЦЕНЕ',
    duration: 'от 10 дней',
    price: 'от 2,7$ за кг',
    recommended: true
  },
  {
    iconType: 'truck',
    title: 'Медленное авто через Уссурийск',
    description: 'НЕДОРОГО, НО МЕДЛЕННЕЕ',
    duration: 'от 20 дней',
    price: 'от 1$ за кг'
  },
  {
    iconType: 'plane',
    title: 'Авиатранспорт',
    description: 'МАКСИМАЛЬНО БЫСТРО, НО ДОРОГО',
    duration: 'от 3-5 дней',
    price: 'от 18$ за кг'
  },
  {
    iconType: 'ship',
    title: 'Доставка в контейнере по морю через Владивосток',
    description: 'ДЕШЕВЛЕ КАРГО И С ОФИЦИАЛЬНЫМИ ДОКУМЕНТАМИ',
    duration: 'от 35 дней',
    price: 'от 0,5$ за кг'
  }
];