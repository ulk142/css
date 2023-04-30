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
router.get('/template-3', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-3', {
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

    hero: {
      title: "First featurette heading. It’ll blow your mind.",
      text: "Some great placeholder content for the first featurette here. Imagine some exciting prose here.",
      photo: "https://picsum.photos/500/500"
    },

    blog: [
      {
        title: "Latest post",
        text: "This is a wider card with supporting text below as a natural lead-in to additional content",
        button: "View details",
        href: "https://example.com/",
        img: "https://picsum.photos/140/140"
      },
      {
        title: "Featured story",
        text: "This is a wider card with supporting text below as a natural lead-in to additional content",
        button: "View details",
        href: "https://example.com/",
        img: "https://picsum.photos/140/140"
      },
      {
        title: "Popular post",
        text: "This is a wider card with supporting text below as a natural lead-in to additional content",
        button: "View details",
        href: "https://example.com/",
        img: "https://picsum.photos/140/140"
      }
    ],

    form: {
      title: "Sign up form",
      info: "Some placeholder content in a paragraph below the heading and date.",
      button: "Sign up",
      href: "https://example.com/"
    },
  
    
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
