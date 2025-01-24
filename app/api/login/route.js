export async function GET(request) {  
    return new Response(JSON.stringify({ message: 'This is a GET request' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });

}

export async function POST(request) {  
    const body = await request.json(); // Parse JSON body
    const { email, password } = body;
    // const { email, password } = request.body;
  
    const mutation = `
      mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
          customerAccessToken {
            accessToken
            expiresAt
          }
          customerUserErrors {
            field
            message
          }
        }
      }
    `;
  
    const variables = {
      input: {
        email,
        password,
      },
    };
  
    try {
      const response = await fetch(process.env.GRAPHQL_STOREFRONT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_API_TOKEN, // Add this to .env.local
        },
        body: JSON.stringify({ query: mutation, variables }),
      });
  
      const result = await response.json();
      console.log("Result:", result);
      if (result.data.customerAccessTokenCreate.customerUserErrors.length > 0) {
        const errorMessage = result.data.customerAccessTokenCreate.customerUserErrors[0].message;
        return new Response(JSON.stringify({ success: false, error: errorMessage }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        // return res.status(400).json({ success: false, error: errorMessage });
      }
  
      const accessToken = result.data.customerAccessTokenCreate.customerAccessToken.accessToken;
      console.log("Access Token:", accessToken);
      return new Response(JSON.stringify({ success: true, accessToken }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    //   res.status(200).json({ success: true, accessToken });
    } catch (error) {
      console.error("Error logging in:", error);
      return new Response(JSON.stringify({ success: false, error: "Internal Server Error" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    //   res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}
  
  