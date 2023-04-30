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
router.get('/template-4', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-4', {
    page: {
      title: "Example Page"
    },
    
    header: [
      {
        text: "Features",
        url: "https://example.com/home"
      },
      {
        text: "Enterprise",
        url: "https://example.com/about"
      },
      {
        text: "Support",
        url: "https://example.com/services"
      }
    ],

    main: {
      heading: "Oh yeah, it’s that good. See for yourself.",
      descriotion: "Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.",
      image: "https://picsum.photos/500/500",
      button: "View details",
      href: "https://example.com/",
    },

    featured: [
      {
        heading: "Featured title",
        info: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
        linkText: "Call to action",
        linkUrl: "https://example.com/",
        photo: "https://picsum.photos/64/64"
      },
      {
        heading: "Featured title",
        info: "This is a wider card with supporting text below as a natural lead-in to additional content",
        linkText: "Call to action",
        linkUrl: "https://example.com/",
        photo:  "https://picsum.photos/64/64"
      },
      {
        heading: "Featured title",
        info: "This is a wider card with supporting text below as a natural lead-in to additional content",
        linkText: "Call to action",
        linkUrl: "https://example.com/",
        photo:  "https://picsum.photos/64/64"
      }
    ],

    actions: [
      {
        heading: "Checkout form",
        text: "Checkout",
        url: "https://example.com/"
      },
      {
        heading: "Login form",
        text: "Login",
        url: "https://example.com/"
      },
      {
        heading: "Sign up form",
        text: "Sign up",
        url: "https://example.com/"
      },
    ],
    
    footer: [
      {
        title: "Features",
        links: [
          {
            text: "Cool stuff",
            url: "https://example.com/cool-stuff"
          },
          {
            text: "Random feature",
            url: "https://example.com/random-feature"
          },
          {
            text: "Team feature",
            url: "https://example.com/team-feature"
          },
          {
            text: "Stuff for developers",
            url: "https://example.com/stuff-for-developers"
          }
        ]
      },
      {
        title: "Resources",
        links: [
          {
            text: "Resource name",
            url: "https://example.com/resource-name"
          },
          {
            text: "Another resource",
            url: "https://example.com/another-resource"
          },
          {
            text: "Final resource",
            url: "https://example.com/final-resource"
          }
        ]
      },
      {
        title: "About",
        links: [
          {
            text: "Team",
            url: "https://example.com/team"
          },
          {
            text: "Locations",
            url: "https://example.com/locations"
          },
          {
            text: "Privacy",
            url: "https://example.com/privacy"
          },
          {
            text: "Terms",
            url: "https://example.com/terms"
          }
        ]
      }
    ]
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
