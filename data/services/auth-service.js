import { getShopifyURL } from "@/lib/utils";

const baseUrl = getShopifyURL();

export async function registerStrapiUserService(userData) {
  
  const url = new URL("/api/auth/local/register", baseUrl);
  console.log("url", url);
  console.log("userData 전송 json ", JSON.stringify({ ...userData }));
  try {
    const response = await fetch('http://127.0.0.1:1337/api/auth/local/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
    });

    return response.json();
  } catch (error) {
    console.error("Registration Service Error:", error);
  }
  
}

export async function loginStrapiUserService(userData) {
  const url = new URL("/api/auth/local", baseUrl);

  try {
    const response = await fetch('http://127.0.0.1:1337/api/auth/local', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
    });

    return response.json();
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}

export async function registerShopifyUserService(userData) {
    const query = `
      mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          customer {
            id
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }
    `;
    
    const email = userData.email;
    const password = userData.password;
    const firstName = "changnam";
    const lastName = "go";

    try {
    const response = await fetch('https://blackmotiv.myshopify.com/api/2025-01/graphql.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_API_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables: {
          input: {
            email,
            password,
            firstName,
            lastName,
          },
        },
      }),
    });
  
    const data = response.json();
    console.log(data, "data");
    return data.data.customerCreate;
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}

export async function loginShopifyUserService(userData) {
  const url = new URL("/api/auth/local", baseUrl);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
    });

    return response.json();
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}