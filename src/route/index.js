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
      info: {
        title: "Vertically centered hero sign-up form",
        description: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation"
      },
      form: {
        inputs: [
          {
            id: 1,
            name: "emailAddress",
            placeholder: "Email address",
            type: "email"
          },
          {
            id: 2,
            name: "userPassword",
            placeholder: "Password",
            type: "password"
          }
        ],
        checkbox: {
          label: "Remember me",
          name: "remember"
        },
        button: "Sign in",
        info: "By clicking Sign up, you agree to the terms of use."
      },
      updates: {
        title: "Recent updates",
        list: [
          {
            nickname: "Techie",
            description: "The latest software update includes several new features and performance improvements, making it faster and easier to use..."
          },
          {
            nickname: "Traveler",
            description: "We've added new destinations to our travel packages, including exotic locations and off-the-beaten-path adventures..."
          },
          {
            nickname: "Foodie",
            description: "Our new menu features a variety of delicious dishes inspired by cuisines from around the world, with options for every taste and dietary preference..."
          }
        ],
        show_all: {
          text: "All updates",
          url: "https://example.com/updates"
        }
      },
      expirience: {
        title: "We have a lot of experience",
        badge: "hot!",
        list: [
          {
            name: "John Doe",
            details: "In the last month, the site received a total of 10,000 unique visitors. The majority of the traffic came from search engines, with Google being the top source. The bounce rate was 45%, which is within the acceptable range."
          },
          {
            name: "Jane Smith",
            details: "The site's average page load time was 3.5 seconds, which is slower than the recommended 2 seconds. The site's performance score is 80 out of 100, which is good but could be improved. There were no major errors or issues identified during the analysis."
          },
          {
            name: "Bob Johnson",
            details: "The site's SSL certificate is valid and up-to-date. There were no known security vulnerabilities or issues found during the analysis. All user data is encrypted and protected using industry-standard methods."
          }
        ]
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
