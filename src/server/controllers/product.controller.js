import {
  getProductDetails,
  searchProductsByQuery,
} from "../services/product.service.js";

export const searchProducts = async (
  req,
  res,
  next
) => {
  const query = req.query.q 
  if (!query) {
    return res.status(400).json({ message: "Missing query parameter" });
  }

  try {
    const products = await searchProductsByQuery(query);
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req,
  res,
  next
) => {
  const id = req.params.id 
  if (!id) {
    return res.status(400).json({ message: "Missing id parameter" });
  }

  try {
    const product = await getProductDetails(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
};
