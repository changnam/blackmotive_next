import { gql } from "@/util/gql";

const getProduct = async (id) => {
    const res = await fetch(process.env.GRAPHQL_ADMIN_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.ADMIN_API_ACCESS_TOKEN
      },
      body: JSON.stringify({
        query: gql`
            query SingleProductQuery($id: ID!) {
                product(id: $id) {
                    id
                    title

                }
            }
        `,
        variables: {
            id: `gid://shopify/Product/${id}`
        }
      })
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

  export default async function SingleProductPage({ params }) {
    console.log("id @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2"+params.id);
    const json = await getProduct(params.id);
    console.log("json "+JSON.stringify(json));
    const { product } = json.data;
  
    return (
      <div>
        <h1>View page for: {product.title}</h1>
      </div>
    );
  }
