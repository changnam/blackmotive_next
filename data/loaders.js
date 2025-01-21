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