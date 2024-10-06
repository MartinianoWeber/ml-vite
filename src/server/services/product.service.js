import { Condition } from "../enum/condition.enum.js";

const authorData = {
  name: "Martiniano",
  lastname: "Weber",
};
export const searchProductsByQuery = async (query) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      author: authorData,
      categories:
        data.filters[0]?.values[0]?.path_from_root.map(
          (category) => category.name
        ) || [],
      items: data.results
        .slice(0, 4)
        .map(
          ({
            id,
            title,
            price,
            thumbnail,
            condition,
            shipping: { free_shipping },
          }) => ({
            id,
            title,
            price: {
              currency: "ARS",
              amount: Math.floor(price),
              decimals: Math.round((price % 1) * 100)
                .toString()
                .padEnd(2, "0"),
            },
            picture: thumbnail,
            condition: Condition[condition],
            free_shipping,
          })
        ),
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductDetails = async (id) => {
  try {
    const productResponse = await fetch(
      `https://api.mercadolibre.com/items/${id}`
    );
    if (!productResponse.ok) {
      throw new Error(
        `Error fetching product details: ${productResponse.statusText}`
      );
    }
    const productData = await productResponse.json();

    const descriptionResponse = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    if (!descriptionResponse.ok) {
      throw new Error(
        `Error fetching product description: ${descriptionResponse.statusText}`
      );
    }
    const descriptionData = await descriptionResponse.json();

    const authorData = {
      name: "Martiniano",
      lastname: "Weber",
    };

    return {
      author: authorData,
      item: {
        id: productData.id,
        title: productData.title,
        price: {
          currency: productData.currency_id,
          amount: Math.floor(productData.price),
          decimals: Math.round((productData.price % 1) * 100)
            .toString()
            .padEnd(2, "0"),
        },
        picture: productData.pictures[0]?.secure_url || productData.thumbnail,
        condition: Condition[productData.condition],
        free_shipping: productData.shipping.free_shipping,
        sold_quantity: productData.sold_quantity,
        description: descriptionData.plain_text,
      },
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};
