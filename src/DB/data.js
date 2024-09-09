import web from "../assets/web dev.svg";
import seo from "../assets/seo.svg";
import social from "../assets/social media.svg";
import mobile from "../assets/mobile app.svg";
import amb1 from "../assets/archer.svg";
import amb3 from "../assets/riseup.svg";
import amb4 from "../assets/glycon.svg";
import amb5 from "../assets/sponsor1.svg";
import what6 from '../assets/Rectangle4268 (1).svg'
import what2 from '../assets/Rectangle 4263.svg'
import what5 from '../assets/Rectangle4268 (2).svg'
import what4 from '../assets/Rectangle4268 (3).svg'
import what3 from '../assets/Rectangle4268 (4).svg'
import what1 from '../assets/Rectangle4268 (5).svg'
import toystoreimagedesktop from "../assets/toy store.svg";
import webstoreimage from "../assets/fashion store.svg";
import gadgetstoreimage from "../assets/gadget store.svg";
import foodstoreimagedesktop from "../assets/food delivery.svg";
import shoestoreimagedesktop from '../assets/fashion store.svg'
import fruitstoreimagedesktop from '../assets/FruitStore.svg'
import bookstoreimage from '../assets/BookShop.svg'
import shoestoreimagemobile from '../assets/cardmobile1.svg'
import fruitstoreimagemobile from '../assets/cardmobile2.svg'
import foodstoreimagemobile from '../assets/cardmobile3.svg'
import toystoreimagemobile from '../assets/cardmobile4.svg'

export const services = [
    {
      Image: web,
      title: "Web Development",
      content:
        "Crafting visually stunning and user-friendly websites that elevate your online presence and drive business growth.",
    },
    {
      Image: mobile,
      title: "Mobile Application",
      content:
        "Designing and developing intuitive and engaging mobile apps that connect you with your audience and enhance your brand experience.",
    },
    {
      Image: social,
      title: "Social Media Management",
      content:
        "Expertly managing your social media presence to build brand awareness, engage your audience, and drive website traffic and sales.",
    },
    {
      Image: seo,
      title: "SEO Optimization",
      content:
        "Crafting visually stunning and user-friendly websites that elevate your online presence and drive business growth",
    },
  ];


export const sponsor = [
    { img: amb5 },
    { img: amb4 },
    { img: amb3 },
    { img: amb1 },
    { img: amb5 },
    { img: amb3 },
  ];


export const whatwedo =[
  {
    img: what1,
    title: 'Website Development',
    desc: 'Crafting visually stunning and user-friendly websites that elevate your online presence and drive business growth.'
  },
  {
    img: what2,
    title: 'Mobile Application',
    desc: 'Designing and developing intuitive and engaging mobile apps that connect you with your audience and enhance your brand experience.'
  },
  {
    img: what3,
    title: 'Search Engine Optimization',
    desc: 'Employing advanced SEO techniques to boost your website’s search engine rankings. By focusing on both on-page and off-page strategies, we and improve your online visibility.'
  },
  {
    img: what4,
    title: 'Social Media Management',
    desc: 'Expertly managing your social media presence to build brand awareness, engage your audience, and drive website traffic and sales.'
  },
  {
    img: what5,
    title: 'Branding & Identity',
    desc: 'Build a strong, cohesive brand identity that stands out in the market. From logo design to brand guidelines, we’ll help you create a lasting impression'
  },
  {
    img: what6,
    title: 'E-commerce Page Creation',
    desc: 'Launch a seamless online store with our e-commerce solutions. We design and develop e-commerce pages that are easy to navigate, secure, and built to convert.'
  },
]


// Recent Works
export const ourWorks = [
      {
        id: 1,
        image: {
          mobile:shoestoreimagemobile,
        desktop:shoestoreimagedesktop },
        altText: "FitZone Mobile App",
        title: "Mobile App",
        type: "Toy Store",
        name: "FitZOne",
        features: "Product Catalog, Interactive features for kids",
        outcome:
          " 4.5-star rating on the app store, 50,000 downloads in the first month",
      },
      {
        id: 2,
        image: {
          mobile:foodstoreimagemobile,
        desktop:foodstoreimagedesktop},
        altText: "StyleHub Web store",
        title: "Web Store",
        type: "Fashion Store",
        name: "StyleHub",
        features: "User accounts, product reviews, promo codes",
        outcome: "30% increase in online sales, 25% growth in customer base",
      },
      {
        id: 3,
        image: {
          mobile:fruitstoreimagemobile,
        desktop:fruitstoreimagedesktop},
        altText: "TechTove web store",
        title: "Web Design",
        type: "Gadget Store",
        name: "TechTrove",
        features: "Product Comparison tool, trade in Program",
        outcome: "40% increase in website traffic, 25% rise in Sales of Gadgets",
      },
      {
        id: 4,
        image: {
          mobile:fruitstoreimagemobile,
        desktop:fruitstoreimagedesktop},
        altText: "Food delivery Mobile App",
        title: "Mobile App",
        type: "Food Store",
        name: "Fortune Food",
        features: "Restaurant listings, menu ordering",
        outcome:
          "4.5-star rating in the app store,20,000 downloads in the first month",
      },
      {
        id: 5,
        image: {
          mobile:fruitstoreimagemobile,
        desktop:fruitstoreimagedesktop},
        altText: "Books Shop SEO Optimization",
        title: "SEO Optimization",
        type: "Books Shop",
        name: "Bookcraft & Co.",
        features: "Keyword Optimization, Content Marketing",
        outcome:
          "Higher Search Rankings, Steady Flow Of Visitors",
      },
      {
        id: 6,
        image: {
          mobile:toystoreimagemobile,
        desktop:toystoreimagedesktop},
        altText: "Toy Store Mobile App",
        title: "Mobile App",
        type: "Toy Store",
        name: "Toy Box",
        features: "Regular Content Updates, High Quality Contents",
        outcome:
          "Outcome- Increased Website Traffic and Online sales",
      },
      {
        id: 7,
        image: {
          mobile:fruitstoreimagemobile,
        desktop:fruitstoreimagedesktop},
        altText: "Fruit store Mobile App",
        title: "Mobile App",
        type: "Fruit Store",
        name: "Soft Greens",
        features: "Keyword Optimization, Content Marketing",
        outcome:
          "Higher Search Rankings, Steady Flow Of Visitors",
      },
      {
        id: 8,
        image: {
          mobile:fruitstoreimagemobile,
        desktop:fruitstoreimagedesktop},
        altText: "Fruit store Mobile App",
        title: "Mobile App",
        type: "Fruit Store",
        name: "Soft Greens",
        features: "Keyword Optimization, Content Marketing",
        outcome:
          "Higher Search Rankings, Steady Flow Of Visitors",
      },
      {
        id: 9,
        image: {
          mobile:toystoreimagemobile,
        desktop:toystoreimagedesktop},
        altText: "Fruit store Mobile App",
        title: "Mobile App",
        type: "Fruit Store",
        name: "Soft Greens",
        features: "Keyword Optimization, Content Marketing",
        outcome:
          "Higher Search Rankings, Steady Flow Of Visitors",
      },
      {
        id: 10,
        image: {
          mobile:fruitstoreimagemobile,
        desktop:fruitstoreimagedesktop},
        altText: "Fruit store Mobile App",
        title: "Mobile App",
        type: "Fruit Store",
        name: "Soft Greens",
        features: "Keyword Optimization, Content Marketing",
        outcome:
          "Higher Search Rankings, Steady Flow Of Visitors",
      },
      {
        id: 11,
        image: {
          mobile:shoestoreimagemobile,
        desktop:shoestoreimagedesktop},
        altText: "Fruit store Mobile App",
        title: "Mobile App",
        type: "Fruit Store",
        name: "Soft Greens",
        features: "Keyword Optimization, Content Marketing",
        outcome:
          "Higher Search Rankings, Steady Flow Of Visitors",
      },
      {
        id: 12,
        image: {
          mobile:fruitstoreimagemobile,
        desktop:fruitstoreimagedesktop},
        altText: "Fruit store Mobile App",
        title: "Mobile App",
        type: "Fruit Store",
        name: "Soft Greens",
        features: "Keyword Optimization, Content Marketing",
        outcome:
          "Higher Search Rankings, Steady Flow Of Visitors",
      },
      
      // {
      //   id: 19,
      //   image: bookstoreimage,
      //   altText: "Food delivery Mobile App",
      //   title: "Mobile App",
      //   type: "Food Store",
      //   name: "Fortune Food",
      //   features: "Restaurant listings, menu ordering",
      //   outcome:
      //     "4.5-star rating in the app store,20,000 downloads in the first month",
      // },
      // {
      //   id: 20,
      //   image: toystoreimage,
      //   altText: "Food delivery Mobile App",
      //   title: "Mobile App",
      //   type: "Food Store",
      //   name: "Fortune Food",
      //   features: "Restaurant listings, menu ordering",
      //   outcome:
      //     "4.5-star rating in the app store,20,000 downloads in the first month",
      // },
      // {
      //   id: 21,
      //   image: gadgetstoreimage,
      //   altText: "Food delivery Mobile App",
      //   title: "Mobile App",
      //   type: "Food Store",
      //   name: "Fortune Food",
      //   features: "Restaurant listings, menu ordering",
      //   outcome:
      //     "4.5-star rating in the app store,20,000 downloads in the first month",
      // },
      // {
      //   id: 22,
      //   image: bookstoreimage,
      //   altText: "Food delivery Mobile App",
      //   title: "Mobile App",
      //   type: "Food Store",
      //   name: "Fortune Food",
      //   features: "Restaurant listings, menu ordering",
      //   outcome:
      //     "4.5-star rating in the app store,20,000 downloads in the first month",
      // },
      // {
      //   id: 23,
      //   image: toystoreimage,
      //   altText: "Food delivery Mobile App",
      //   title: "Mobile App",
      //   type: "Food Store",
      //   name: "Fortune Food",
      //   features: "Restaurant listings, menu ordering",
      //   outcome:
      //     "4.5-star rating in the app store,20,000 downloads in the first month",
      // },
      // {
      //   id: 24,
      //   image: gadgetstoreimage,
      //   altText: "Food delivery Mobile App",
      //   title: "Mobile App",
      //   type: "Food Store",
      //   name: "Fortune Food",
      //   features: "Restaurant listings, menu ordering",
      //   outcome:
      //     "4.5-star rating in the app store,20,000 downloads in the first month",
      // },
    ]