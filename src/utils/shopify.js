const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2021-10/graphql.json`
  const gql = String.raw
  const productQuery = () => gql`
  query {
    shop {
      products( first: 10) {
        edges{
          node {
            id
            handle
            title
	
            variants(first: 10){
              edges{
                node{
                  title
              }
            }
          }
        }
      }  
    }
  }
}
`;

console.log("productQuery()")
console.log(productQuery())

  const GRAPHQL_BODY  = () => {
        return {
        'async': true,
        'crossDomain': true,
        'method': 'POST',
        'headers': {
            'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
            'Content-Type': 'application/graphql',
        },
        'body': productQuery()
        };
   }

   fetch(URL, GRAPHQL_BODY())
        .then(res => {
            console.log(res.statusText)
            return res.json()
        })
	.then(products => {
        const allProducts = products.data.shop.products.edges ? products.data.shop.products.edges : [];
        console.log(allProducts)
	})

  const options = {
    endpoint: URL,
    method: "POST",
    'async': true,
	'crossDomain': true,
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Content-Type": "application/json",
    },
    body: GRAPHQL_BODY()
  }

  try {
    console.log(options)
    const data = await fetch(URL, options).then(response => {
        console.log("response response")
        console.log(response.status)
        return response.json()
    });

    return data
  } catch (error) {
    console.log(error)
    throw new Error("Products not fetched")
  }
}

export async function getAllProducts() {
    const gql = String.raw
    const query = `
    query shop {
        shop {
            name
        }
    }
    `

    const response = await ShopifyData(query)
    console.log(response)
    const allProducts = response.data.products.edges ? response.data.products.edges : []

    return allProducts
}