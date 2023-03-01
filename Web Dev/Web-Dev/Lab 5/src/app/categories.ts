import {Product, products} from "./products";

export interface Category{
  name: string,
  products : Product[]
}

export const categories = [
  {
    name: "tech (10)",
    products: products
  },
  {
    name: "for animals (5)",
    products: [
      {
        id: 1,
        name: 'Friskies кусочки в желе утка 85 г 1 шт',
        rating: 5,
        description: 'Нежные кусочки в желе с сочным филе утки',
        url: 'https://kaspi.kz/shop/p/friskies-kusochki-v-zhele-utka-85-g-1-sht-100218969/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3d/h6c/46689632813086/friskies-utka-v-zele-85-g-100218969-1-Container.jpg',
        likes: 0,
        category: 'for-animals'
      },{
        id: 2,
        name: 'Природный бентонит комкующийся 15 кг',
        rating: 5,
        description: 'Наполнитель лотка для кошек',
        url: 'https://kaspi.kz/shop/p/prirodnyi-bentonit-komkujuschiisja-15-kg-100124865/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc6/h1e/50063052308510/no-name-komkuusijsa-15-kg-100124865-1-Container.jpg',
        likes: 0,
        category: 'for-animals'
      },{
        id: 3,
        name: 'Пакеты для выгула собак КАКЕТИКИ, 64 шт',
        rating: 5,
        description: 'Пакеты для выгула собак',
        url: 'https://kaspi.kz/shop/p/pakety-dlja-vygula-sobak-kaketiki-64-sht-4-rulona-po-16-paketov-24x36-sm-chernyi-104942022/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1c/he8/50905000771614/kaketiki-kak4222-cernyj-64-st-104942022-1.jpg',
        likes: 0,
        category: 'for-animals'
      },{
        id: 4,
        name: 'WC Cat/Kitten 4870005941921 складной серый',
        rating: 5,
        description: 'Коврик резиновый для лотков и мисок',
        url: 'https://kaspi.kz/shop/p/wc-cat-kitten-4870005941921-skladnoi-seryi-103703874/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd2/h59/48753780883486/wc-cat-kitten-4870005941921-seryi-103703874-1.jpg',
        likes: 0,
        category: 'for-animals'
      },{
        id: 5,
        name: 'Китайская игрушка Кричащая Курица 8991 желтый',
        rating: 5,
        description: 'Игрушка пищялка для собак и кошек',
        url: 'https://kaspi.kz/shop/p/kitaiskaja-igrushka-krichaschaja-kuritsa-8991-zheltyi-105707308/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc7/h20/52282942586910/kitajskaa-igruska-kricasaa-kurica-8991-zeltyj-105707308-1.jpg',
        likes: 0,
        category: 'for-animals'
      }
    ]
  },
  {
    name: "beauty and health (5)",
    products: [
      {
        id: 1,
        name: 'Kirkland Миноксидил 5% для роста бороды и волос 60 мл',
        rating: 5,
        description: 'Сыворотка для роста бороды не являеться лекарственным средством',
        url: 'https://kaspi.kz/shop/p/kirkland-minoksidil-5-dlja-rosta-borody-i-volos-60-ml-3-sht-105521928/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hdf/h53/51927814406174/kirkland-minoksidil-5-dla-rosta-borody-i-volos-60-ml-3-st-105521928-1.jpg',
        likes: 0,
        category: 'beauty and health'
      },{
        id: 2,
        name: 'Beard Care BG-312 набор для бороды и усов',
        rating: 5,
        description: 'Акционный набор для мужчин к 23 февраля',
        url: 'https://kaspi.kz/shop/p/beard-care-bg-312-nabor-dlja-borody-i-usov-108228086/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h6a/h68/67318049243166/beard-care-bg-312-nabor-dlya-borody-i-usov-108228086-1.jpg',
        likes: 0,
        category: 'beauty and health'
      },{
        id: 3,
        name: 'The Act Соляной антицеллюлитный скраб',
        rating: 5,
        description: 'Скраб для ухода за кожей',
        url: 'https://kaspi.kz/shop/p/the-act-soljanoi-antitselljulitnyi-skrab-dlja-tela-s-kokosovoi-struzhkoi-i-maslom-shi-300-ml-104104022/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha7/h4e/49353612361758/solanoj-anticellulitnyj-skrab-dla-tela-s-kokosovoj-struzkoj-i-maslom-si-104104022-1.jpg',
        likes: 0,
        category: 'beauty and health'
      },{
        id: 4,
        name: 'COSRX точечные Acne Pimple Master Patch для лица 24 шт',
        rating: 5,
        description: 'Патчи для омложения',
        url: 'https://kaspi.kz/shop/p/cosrx-tochechnye-acne-pimple-master-patch-dlja-litsa-24-sht-100368434/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he9/hf1/49919203082270/cosrx-acne-pimple-master-patch-100368434-1-Container.jpg',
        likes: 0,
        category: 'beauty and health'
      },{
        id: 5,
        name: 'Images гидрогелевые Golden Seaweet Moisturizing ',
        rating: 5,
        description: 'Гидрогелевые патчи для глаз',
        url: 'https://kaspi.kz/shop/p/cosrx-tochechnye-acne-pimple-master-patch-dlja-litsa-24-sht-100368434/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he9/hf1/49919203082270/cosrx-acne-pimple-master-patch-100368434-1-Container.jpg',
        likes: 0,
        category: 'beauty and health'
      }

    ]
  },{
   name:"food (5)",
   products:[
     {
       id: 1,
       name: 'Go Green Ready to eat салат итальянский 100 г',
       rating: 5,
       description: 'Итальянский салат для блюд выращено с любовью',
       url: 'https://kaspi.kz/shop/p/go-green-ready-to-eat-salat-ital-janskii-100-g-102838520/?c=750000000',
       image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8a/h8c/50475717558302/go-green-ready-to-eat-salat-italanskij-100-g-102838520-1.jpg',
       likes: 0,
       category: 'beauty and health'
     },{
       id: 2,
       name: 'Грибы MAGNUM свежие шампиньоны Казахстан',
       rating: 5,
       description: 'Итальянский салат для блюд выращено с любовью',
       url: 'https://kaspi.kz/shop/p/griby-magnum-svezhie-shampin-ony-kazahstan-104957552/?c=750000000',
       image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h38/h21/50934796058654/griby-sampinony-polsa-kg-104957552-1.jpg',
       likes: 0,
       category: 'beauty and health'
     },{
       id: 3,
       name: 'Султан спагетти 400 г',
       rating: 5,
       description: 'Спагетти от компаний "СУЛТАН"',
       url: 'https://kaspi.kz/shop/p/sultan-spagetti-400-g-100212199/?c=750000000',
       image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h30/hba/46066578423838/sultan-spagetti-400-g-100212199-1-Container.jpg',
       likes: 0,
       category: 'beauty and health'
     },{
       id: 4,
       name: 'Йогурт Foodmaster Био-С ваниль 3.2% 1000 г',
       rating: 5,
       description: 'Foodmaster все для здорового йогурта',
       url: 'https://kaspi.kz/shop/p/iogurt-foodmaster-bio-s-vanil-3-2-1000-g-100231108/?c=750000000',
       image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hce/h9f/46693307678750/foodmaster-bio-s-kefir-3-2-1000-ml-100231108-1.jpg',
       likes: 0,
       category: 'beauty and health'
     },{
       id: 5,
       name: 'Петропавловское молоко 3.2% 900 мл',
       rating: 5,
       description: 'Итальянский салат для блюд выращено с любовью',
       url: 'https://kaspi.kz/shop/p/petropavlovskoe-moloko-3-2-900-ml-100815879/?c=750000000',
       image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h88/h5e/46585887850526/petropavlovskoe-ultrapasterizovannoe-3-2-0-9-l-100815879-1-Container.jpg',
       likes: 0,
       category: 'beauty and health'
     }
   ]
  }
]
