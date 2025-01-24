const mutation = `
    mutation CreateCustomer($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
            customer {
            id
            email
            firstName
            lastName
            }
            userErrors {
            field
            message
            }
        }
    }
`;
const variables = {
    "input": {
      "email": "testuser@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "password": "securePassword123"
    }
};

// fetch("https://blackmotiv.myshopify.com/admin/api/2025-01/graphql.json", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "X-Shopify-Access-Token": process.env.ADMIN_API_ACCESS_TOKEN,
//   },
//   body: JSON.stringify({
//     query: mutation,
//     variables,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     if (data.errors) {
//       console.error("GraphQL Errors:", data.errors);
//     } else {
//       console.log("Customer Created:", data.data.customerCreate.customer);
//     }
//   })
//   .catch((err) => {
//     console.error("Request Error:", err);
//   });

const createCustomer = async () => {
    const res = await fetch(process.env.GRAPHQL_ADMIN_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.ADMIN_API_ACCESS_TOKEN
      },
      body: JSON.stringify({
        query: mutation,
        variables,
      }),
    });
  
    if (!res.ok) {
      const text = await res.text(); // get the response body for more information
  
      throw new Error(`
        Failed to fetch data
        Status: ${res.status}
        Response: ${text}
      `);
    }
  
    return res.json();
  };


  export default async function CreateCustomerPage() {
    const json = await createCustomer();
    console.log(json);

    return (
      <div>
        <h1>Create Customer</h1>
        <p>Check the console for the result of the mutation.</p>
      </div>
    );
  }