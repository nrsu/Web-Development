export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  link: string;
  stars: number;
}

export const products = [
  {
    id: 104253279,
    name: 'Samsung Galaxy A13',
    price: 90130,
    description: '4GB/128GB Black',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
    link:'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy3dylsEP_ZEPLbqlFwZyOJjDUoTDbn37mF0ef0jFhOrMqZK_UAU8sxoCibEQAvD_BwE#!/item',
    stars: 7
  },
  {
    id: 104348541,
    name: 'Samsung Galaxy A23',
    price: 104565,
    description: '6GB/128GB Black',
    photo:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h83/49792685178910/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    link:'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy3dylsEP_ZEPLbqlFwZyOJjDUoTDbn37mF0ef0jFhOrMqZK_UAU8sxoCibEQAvD_BwE#!/item',
    stars: 7.5
  },
  {
    id: 102298404,
    name: 'IPhone 13',
    price: 373330,
    description: '128GB Black',
    photo:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy3dylsEP_ZEPLbqlFwZyOJjDUoTDbn37mF0ef0jFhOrMqZK_UAU8sxoCibEQAvD_BwE#!/item',
    stars: 8
  },
  {
    id: 106363342,
    name: 'Iphone 14 Pro Max',
    price: 695300,
    description: '256GB Purple',
    photo:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    link:'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy3dylsEP_ZEPLbqlFwZyOJjDUoTDbn37mF0ef0jFhOrMqZK_UAU8sxoCibEQAvD_BwE#!/item',
    stars: 8.5
  },
  {
    id: 106363150,
    name: 'Iphone 14',
    price: 421100,
    description: '128GB Blue',
    photo:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/hb3/63073057144862/apple-iphone-14-128gb-goluboj-106363150-1.jpg',
    link:'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy3dylsEP_ZEPLbqlFwZyOJjDUoTDbn37mF0ef0jFhOrMqZK_UAU8sxoCibEQAvD_BwE#!/item',
    stars: 7.5
  },
  {
    id: 107221005,
    name: 'Xiaomi Redmi Note 10 Pro',
    price: 128350,
    description: '8GB/256GB Grey',
    photo:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/hcf/64487157956638/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    link:'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy3dylsEP_ZEPLbqlFwZyOJjDUoTDbn37mF0ef0jFhOrMqZK_UAU8sxoCibEQAvD_BwE#!/item',
    stars: 7
  },
  {
    id: 104227418,
    name: 'Poco X4 Pro',
    price: 177000,
    description: '8GB/256GB Black',
    photo:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h7a/49566151966750/poco-x4-pro-8-256gb-cernyj-104227418-1.jpg',
    link:'https://kaspi.kz/shop/p/poco-x4-pro-8-gb-256-gb-chernyi-104227418/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy3dylsEP_ZEPLbqlFwZyOJjDUoTDbn37mF0ef0jFhOrMqZK_UAU8sxoCibEQAvD_BwE#!/item',
    stars: 6.5
  },
  {
    id: 107420168,
    name: 'OPPO A17',
    price: 71969,
    description: '4GB/64GB Black',
    photo:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/hf2/65327281864734/oppo-a17-4-gb-64-gb-chernyi-107420168-1.jpg',
    link:'https://kaspi.kz/shop/p/oppo-a17-4-gb-64-gb-chernyi-107420168/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy3dylsEP_ZEPLbqlFwZyOJjDUoTDbn37mF0ef0jFhOrMqZK_UAU8sxoCibEQAvD_BwE#!/item',
    stars: 6
  },
  {
    id: 106866405,
    name: 'Xiaomi 12T',
    price: 245000,
    description: '8GB/256GB Black',
    photo:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h98/63228133408798/xiaomi-12t-8-gb-256-gb-cernyj-106866405-1.jpg',
    link:'https://kaspi.kz/shop/p/xiaomi-12t-8-gb-256-gb-chernyi-106866405/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy3dylsEP_ZEPLbqlFwZyOJjDUoTDbn37mF0ef0jFhOrMqZK_UAU8sxoCibEQAvD_BwE#!/item',
    stars: 8
  },
  {
    id: 107346069,
    name: 'TECNO Pova 4 NFC',
    price: 98124,
    description: '8GB/128GB Grey',
    photo:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbe/h01/65085963304990/smartfon-tecno-pova-4-8-128gb-uranolith-grey-107346069-1.jpg',
    link:'https://kaspi.kz/shop/p/tecno-pova-4-nfc-8-gb-128-gb-seryi-107346069/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy3dylsEP_ZEPLbqlFwZyOJjDUoTDbn37mF0ef0jFhOrMqZK_UAU8sxoCibEQAvD_BwE#!/item',
    stars: 5
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/