// Массив поставщиков
const suppliersSource = [
  {
    id: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3',
    first_name: 'Sharla',
    last_name: 'Neilson',
    email: 'sneilson0@opensource.org',
    username: 'sneilson0'
  },
  {
    id: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5',
    first_name: 'Bernarr',
    last_name: 'Lanaway',
    email: 'blanaway1@ustream.tv',
    username: 'blanaway1'
  },
  {
    id: '19ade27e-becf-42c1-bf16-32500d135e0a',
    first_name: 'Dale',
    last_name: 'Shernock',
    email: 'dshernock2@tuttocitta.it',
    username: 'dshernock2'
  },
  {
    id: 'c4fa3c23-5f0d-46d6-a36f-fcd744b6c37b',
    first_name: 'Burlie',
    last_name: 'Fenning',
    email: 'bfenning3@topsy.com',
    username: 'bfenning3'
  },
  {
    id: '2027a222-1545-4f69-ab95-784dd6cb1901',
    first_name: 'Fallon',
    last_name: 'Scneider',
    email: 'fscneider4@mediafire.com',
    username: 'fscneider4'
  },
  {
    id: '5b7ba755-e408-42cf-8d49-fc5e38e2108e',
    first_name: 'Constanta',
    last_name: 'Dumper',
    email: 'cdumper5@tamu.edu',
    username: 'cdumper5'
  },
  {
    id: '78e00d1f-4a67-4ec9-82c3-c65a76715680',
    first_name: 'Fiorenze',
    last_name: 'Densumbe',
    email: 'fdensumbe6@jimdo.com',
    username: 'fdensumbe6'
  },
  {
    id: '9985a2cc-007b-4f36-8ab1-4b68825d8df9',
    first_name: 'Sheppard',
    last_name: 'Kilduff',
    email: 'skilduff7@i2i.jp',
    username: 'skilduff7'
  },
  {
    id: '35536963-3b46-48ca-bbe8-ccbfb84936e7',
    first_name: 'Bertram',
    last_name: 'Tryme',
    email: 'btryme8@csmonitor.com',
    username: 'btryme8'
  },
  {
    id: '2f38b0ce-d56d-4509-83ac-1b9c9dd30a8b',
    first_name: 'Barthel',
    last_name: 'Nunn',
    email: 'bnunn9@uol.com.br',
    username: 'bnunn9'
  }
];

// Массив домов
const housesSurce = [
  { id: '0143505d-441b-4c45-8d27-aeb6a48c31da', city: 'Shabqadar', address: '3 Petterle Street', supplierId: '5b7ba755-e408-42cf-8d49-fc5e38e2108e', floors: 22, year: 2019 },
  { id: '8238887e-20e0-4beb-a0c8-6817bc6dbe0f', city: 'Changxingbao', address: '61509 Mariners Cove Hill', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 24, year: 2017 },
  { id: '18b97d4b-b181-4f90-9847-bbdfd7616277', city: 'Lengkongsari', address: '57295 Melby Terrace', supplierId: 'c4fa3c23-5f0d-46d6-a36f-fcd744b6c37b', floors: 23, year: 2011 },
  { id: 'fa825fdd-67a3-4500-8a16-676a9316de51', city: 'Padina', address: '5 Ramsey Street', supplierId: '78e00d1f-4a67-4ec9-82c3-c65a76715680', floors: 24, year: 2018 },
  { id: '97533d44-fcb1-468f-a6d2-9329805929ce', city: 'Le Mans', address: '01066 Shasta Way', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 21, year: 2016 },
  { id: 'dc05baee-602c-44cd-a727-f88661258df1', city: 'Bugarama', address: '60256 Evergreen Pass', supplierId: '2027a222-1545-4f69-ab95-784dd6cb1901', floors: 17, year: 2017 },
  { id: 'b19890fe-7650-409f-8870-6a721ca35b08', city: 'Emar', address: '3746 Red Cloud Drive', supplierId: 'c4fa3c23-5f0d-46d6-a36f-fcd744b6c37b', floors: 20, year: 2017 },
  { id: '29ba0a0b-c24c-46d2-8e2f-34983fc9826b', city: 'Iguape', address: '68 Cascade Alley', supplierId: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5', floors: 29, year: 2017 },
  { id: '37099b25-b21a-4753-98ee-9f7e11f49930', city: 'Konin', address: '342 Oak Valley Parkway', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 17, year: 2017 },
  { id: '916822ab-3e3d-4b9b-853c-15bb822a0503', city: 'Volosovo', address: '463 Manley Street', supplierId: '78e00d1f-4a67-4ec9-82c3-c65a76715680', floors: 23, year: 2014 },
  { id: 'e3231cef-0575-42b6-bffe-253465c54516', city: 'Khadzhalmakhi', address: '76 Northfield Circle', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 28, year: 2015 },
  { id: 'af70d2de-5359-4536-8cd9-43e89c2d60ba', city: 'Punta Hermosa', address: '02583 Anhalt Plaza', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 22, year: 2014 },
  { id: 'b1b7d273-97b3-479d-86c7-8e9f32cb1e3c', city: 'Mandala', address: '00 Morning Street', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 15, year: 2010 },
  { id: '8e16b9d6-8cb3-41b7-8576-bcd090a1762c', city: 'Yeniköy', address: '49829 Elgar Place', supplierId: '2027a222-1545-4f69-ab95-784dd6cb1901', floors: 16, year: 2019 },
  { id: 'dff11ed9-9fb7-4e16-b85e-dda2a16637be', city: 'Bahay Pare', address: '53 Pearson Avenue', supplierId: '78e00d1f-4a67-4ec9-82c3-c65a76715680', floors: 16, year: 2016 },
  { id: '12843767-f18e-4e56-a69e-1b24b7307170', city: 'Vetrino', address: '1588 Graceland Way', supplierId: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5', floors: 20, year: 2014 },
  { id: 'b1c43125-1447-4f2e-ae55-6ba991bd3216', city: 'Nueva Ocotepeque', address: '1468 Park Meadow Lane', supplierId: '5b7ba755-e408-42cf-8d49-fc5e38e2108e', floors: 26, year: 2017 },
  { id: '6de1f6a6-72ed-44cb-9c95-05f683e8ca09', city: 'Saguing', address: '66964 Forest Run Trail', supplierId: '9985a2cc-007b-4f36-8ab1-4b68825d8df9', floors: 17, year: 2011 },
  { id: 'bbe91683-6590-481f-ac45-ddef0ca79447', city: 'Żarów', address: '795 Saint Paul Lane', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 23, year: 2018 },
  { id: 'ab84a412-f8f8-497c-bbcd-f391a948efa6', city: 'Hongguang', address: '2528 Crowley Place', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 26, year: 2011 },
  { id: '0fa9a8d5-15f7-4af7-b55b-f0ef8dac3da7', city: 'Jinhe', address: '85 Kinsman Alley', supplierId: '5b7ba755-e408-42cf-8d49-fc5e38e2108e', floors: 22, year: 2013 },
  { id: '6ba66d23-4f4f-41ad-916f-ac0ffc29cdf7', city: 'Charleston', address: '659 Wayridge Drive', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 25, year: 2016 },
  { id: 'befb10d2-df54-43af-b102-a0c5d94bc869', city: 'Pļaviņas', address: '11 Charing Cross Point', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 25, year: 2010 },
  { id: '53c1bd0e-0e2c-482e-a15d-9a05f3910637', city: 'Jhang Sadr', address: '052 Dawn Street', supplierId: 'c4fa3c23-5f0d-46d6-a36f-fcd744b6c37b', floors: 15, year: 2013 },
  { id: 'c881f2ac-6a1b-4de2-b0e8-cc9f397909ec', city: 'Kazanlŭk', address: '587 Sauthoff Hill', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 26, year: 2012 },
  { id: '38d66e52-2b8c-4e4d-91f0-908ca3521e04', city: 'Az Zubaydāt', address: '60278 Warner Plaza', supplierId: '9985a2cc-007b-4f36-8ab1-4b68825d8df9', floors: 29, year: 2019 },
  { id: 'e3c3b83f-d87b-4b99-95c2-442cb9196872', city: 'Dalakovo', address: '45680 Mayfield Court', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 28, year: 2017 },
  { id: '13bcdc32-489f-4687-aa13-cd97573ee747', city: 'Wujing', address: '3493 Northport Terrace', supplierId: '2f38b0ce-d56d-4509-83ac-1b9c9dd30a8b', floors: 15, year: 2010 },
  { id: '7f59e237-d102-4260-a331-c08cdf7fbd4b', city: 'Tangkolo', address: '8 Ludington Crossing', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 20, year: 2012 },
  { id: 'a0d9f2c4-cf3f-424c-bbf9-4d565bf7c45d', city: 'Amadora', address: '69518 Red Cloud Court', supplierId: '78e00d1f-4a67-4ec9-82c3-c65a76715680', floors: 27, year: 2017 },
  { id: '7f45b88d-8581-40f0-8cbe-031c7f3bff0a', city: 'Newark', address: '9 Lyons Court', supplierId: '9985a2cc-007b-4f36-8ab1-4b68825d8df9', floors: 28, year: 2012 },
  { id: 'd2f754fd-6cde-40f9-940e-04a4c436846e', city: 'Lianghekou', address: '5 Main Pass', supplierId: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5', floors: 15, year: 2011 },
  { id: '6c652aa1-603b-4b9c-903d-0fbcacc28aef', city: 'Bohumín', address: '09891 Pawling Drive', supplierId: '2f38b0ce-d56d-4509-83ac-1b9c9dd30a8b', floors: 17, year: 2016 },
  { id: '6ea75674-a0e0-4d19-a58f-9c2b4347e1a7', city: 'Sukomulyo', address: '6573 Pennsylvania Trail', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 19, year: 2010 },
  { id: '5436d1c4-16fa-458a-baec-c6d8f72783bb', city: 'Lahān', address: '7 Onsgard Way', supplierId: '78e00d1f-4a67-4ec9-82c3-c65a76715680', floors: 26, year: 2017 },
  { id: '8b1d75d1-9fb2-4479-b109-ad4ea1ea40ff', city: 'Ode', address: '0 Village Green Center', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 26, year: 2019 },
  { id: 'd9b40cf0-d50d-4ed6-a048-a035a1a30bce', city: 'Moss', address: '66 Hazelcrest Way', supplierId: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5', floors: 23, year: 2017 },
  { id: '976620f8-f00e-4313-8b58-e0aa09bcbc00', city: 'Drosiá', address: '8357 Ryan Hill', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 25, year: 2014 },
  { id: 'cba0340b-4216-4b25-a96c-d1680ee65f07', city: 'Longquan', address: '04 Pankratz Alley', supplierId: 'c4fa3c23-5f0d-46d6-a36f-fcd744b6c37b', floors: 29, year: 2011 },
  { id: 'cf7bce48-490b-4171-92ce-6a4a24132e9a', city: 'Valky', address: '3 Troy Junction', supplierId: '9985a2cc-007b-4f36-8ab1-4b68825d8df9', floors: 17, year: 2018 },
  { id: 'ad0df9b0-0b77-42df-b6e5-c3774b3f2df7', city: 'Prómachoi', address: '49767 4th Road', supplierId: '2f38b0ce-d56d-4509-83ac-1b9c9dd30a8b', floors: 25, year: 2017 },
  { id: 'a07763fb-af85-4b83-9675-8d38838ccf21', city: 'Pavlohrad', address: '613 North Hill', supplierId: '2027a222-1545-4f69-ab95-784dd6cb1901', floors: 26, year: 2010 },
  { id: 'f4082951-f4e9-4949-9125-75070e69925d', city: 'Linpu', address: '194 Manley Court', supplierId: '5b7ba755-e408-42cf-8d49-fc5e38e2108e', floors: 16, year: 2013 },
  { id: 'ac63266c-f8f7-42aa-80f4-5d7ac2900d84', city: 'Barlinek', address: '6 Kingsford Point', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 29, year: 2015 },
  { id: '59efd3b7-7391-44ec-ba42-6afb82faa4e4', city: 'Torbeck', address: '7 Blue Bill Park Parkway', supplierId: '9985a2cc-007b-4f36-8ab1-4b68825d8df9', floors: 16, year: 2011 },
  { id: '9826444d-6a18-4a23-b162-b94472bdef7c', city: 'Insua', address: '2029 Coleman Center', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 26, year: 2011 },
  { id: '32e8a454-e875-45f0-a5dd-27d153e68dd5', city: 'Grigoropolisskaya', address: '27 Manitowish Circle', supplierId: '2f38b0ce-d56d-4509-83ac-1b9c9dd30a8b', floors: 27, year: 2019 },
  { id: '1e7126fe-3313-4001-a961-925d589a0868', city: 'Tiaodeng', address: '0818 Vermont Place', supplierId: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5', floors: 24, year: 2018 },
  { id: 'f2fc425b-a4f5-48df-b990-f4ab78134fd5', city: 'Béreldange', address: '861 Northland Lane', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 26, year: 2010 },
  { id: '6139b79b-7c5c-4f67-bdd9-0626b99cc8e7', city: 'Nūr', address: '50693 Homewood Terrace', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 16, year: 2011 }
];

module.exports = {
  suppliers: suppliersSource,
  houses: housesSurce
};
