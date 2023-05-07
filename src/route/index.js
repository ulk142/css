// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================



// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-7', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-7', {
    page: {
      title: "Example Page"
    },

    header: {
      brandName: "Logo",
      userOnline: 10,

      ad: {
        text: "Best service to Boost your priority faster",
        url: "www.example.com"
      },

      links: [
        {
          url: "www.example.com",
          text: "Home"
        },
        {
          url: "www.example.com/about",
          text: "About Us"
        },
        {
          url: "www.example.com/services",
          text: "Services"
        },
        {
          url: "www.example.com/contact",
          text: "Contact Us"
        },
        {
          url: "www.example.com/blog",
          text: "Blog"
        }
      ]
    },

    hero: {
      title: "The most professional service",
      description: "I am incredibly grateful for the outstanding work done by this team. Their promptness and attention to detail",
      button: {
        url: "www.example.com/buy",
        text: "Go to shop"
      }
    },

    about: {
      heading: "About shop",
      info: "Lorem Ipsum is not an actual shop, but rather a type of dummy text used as a placeholder in designs to simulate the appearance of written content. It's often used by designers and developers as a temporary substitute for actual text while they're working on a project. The Lorem Ipsum text is derived from a Latin passage by Cicero, but it's been modified and scrambled so that it's no longer legible. The purpose of using Lorem Ipsum is to give designers an idea of how their designs will look when filled with text, without being distracted by the actual content of the text itself."
    },

    articles: [
      {
        id: 1,
        photo: "https://picsum.photos/400/200",
        name: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id dolor eget sapien lobortis finibus. Fusce euismod, ipsum sit amet pulvinar imperdiet, sapien nunc viverra nulla, vel pulvinar velit leo sed velit."
      },
      {
        id: 2,
        photo: "https://picsum.photos/400/200",
        name: "Dolor Sit Amet",
        description: "Etiam luctus ante eget ante convallis iaculis. Nunc viverra quam vel libero accumsan, non malesuada neque vestibulum. Curabitur malesuada, velit ut pretium ullamcorper, lacus elit vehicula sapien, ut sollicitudin quam metus eget sapien."
      },
      {
        id: 3,
        photo: "https://picsum.photos/400/200",
        name: "Ipsum Dolor",
        description: "Sed euismod risus sit amet sapien fermentum, vitae scelerisque lectus hendrerit. Integer at velit tristique, varius dolor in, gravida est. Nunc sagittis justo vel velit tempor, eget faucibus nulla posuere."
      }
    ],

    footer: {
      copyright: "© Copyrights Shop 2022. All rights reserved",
      pages: [
        {
          path: "www.example.com/terms",
          name: "Terms of Use"
        },
        {
          path: "www.example.com/privacy",
          name: "Privacy Policy"
        },
        {
          path: "www.example.com/refund",
          name: "Refund Policy"
        }
      ]
    }
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
