export async function getHomePageData() {
    // graphql query
    // const url = new URL("/api/home-page", baseUrl);
  
    // url.search = qs.stringify({
    //   populate: {
    //     blocks: {
    //       on: {
    //         "layout.hero-section": {
    //           populate: {
    //             image: {
    //               fields: ["url", "alternativeText"],
    //             },
    //             link: {
    //               populate: true,
    //             },
    //           },
    //         },
    //         "layout.features-section": {
    //           populate: {
    //             feature: {
    //               populate: true,
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // });
  
    // return await fetchData(url.href);

    const shopifyData = {
        "data": {
          "blocks": [
            {
              __component: "layout.hero-section",
              id: 3,
              heading: "Epic Next.js Tutorial",
              subHeading: "It's awesome just like you.",
              image: {
                id: 1,
                documentId: "fzwtij74oqqf9yasu9mit953",
                url: "/uploads/blackmotiv.jpg",
                alternativeText: null,
              },
              link: { id: 3, url: "/collections", text: "Shop all", isExternal: false },
            },
            {
              __component: "layout.features-section",
              id: 2,
              title: "Features",
              description: "Checkout our cool features.",
              feature: [
                {
                  id: 4,
                  heading: "Save Time",
                  subHeading:
                    "No need to watch the entire video. Get the summary and save time.",
                  icon: "CLOCK_ICON",
                },
                {
                  id: 5,
                  heading: "Accurate Summaries",
                  subHeading:
                    "Our AI-powered tool provides accurate summaries of your videos.",
                  icon: "CHECK_ICON",
                },
                {
                  id: 6,
                  heading: "Cloud Based",
                  subHeading: "Access your video. summaries from anywhere at any time.",
                  icon: "CLOUD_ICON",
                },
              ],
            },
          ]
        }
      }

    return shopifyData;
  }

  export async function getGlobalData() {
    // header and footer data
    // const url = new URL("/api/global", baseUrl);
  
    // url.search = qs.stringify({
    //   populate: [
    //     "header.logoText",
    //     "header.ctaButton",
    //     "footer.logoText",
    //     "footer.socialLink",
    //   ],
    // });
  
    // return await fetchData(url.href);

    const shopifyData = {
        data: {
          id: 2,
          documentId: 'fyj7ijjnkxy75h1cbusrafj2',
          title: 'Global Page',
          description: 'Responsible for our header and footer.',
          createdAt: '2024-10-02T18:44:37.585Z',
          updatedAt: '2024-10-02T18:44:37.585Z',
          publishedAt: '2024-10-02T18:44:37.594Z',
          locale: null,
          header: {
            id: 2,
            loginButton: { id: 11, url: '/login', text: 'Login', isExternal: false },
            ctaButton: { id: 11, url: '/signin', text: 'Signin', isExternal: false },
            searchButton: { id: 11, url: '/#', text: 'Search', isExternal: false },
            accountButton: { id: 11, url: '/account', text: 'Account', isExternal: false },
            cartButton: { id: 11, url: '/cart', text: 'Cart', isExternal: false },
            logoText: { id: 10, url: '/', text: 'Black Motiv', isExternal: false }
          },
          footer: {
            id: 2,
            text: 'Made by honsoft',
            socialLink: [
              {
                id: 13,
                url: 'www.youtube.com',
                text: 'YouTube',
                isExternal: true
              },
              {
                id: 14,
                url: 'www.twitter.com',
                text: 'Twitter',
                isExternal: true
              },
              {
                id: 15,
                url: 'www.github.com',
                text: 'github',
                isExternal: true
              }
            ],
            logoText: { id: 12, url: '/', text: 'Black Motiv', isExternal: false }
          }
        },
        meta: {}
      }

    return shopifyData;
  }