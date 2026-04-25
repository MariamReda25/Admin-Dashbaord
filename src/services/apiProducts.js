// import { randomNumber } from "../utils/helper";
import { uploadImage } from "./apiBuckets";
import supabase from "./supabase";

export const getProducts = async function (options) {
  const { filter, sortBy, page } = options;
  let query = supabase.from("products").select("*", { count: "exact" });

  if (filter !== null) query = query[filter.method](filter.field, filter.value);

  if (sortBy !== null)
    query = query.order(sortBy.field, { ascending: sortBy.ascending });

  if (page !== null) query = query.range(page.start, page.end);

  const { data, count, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }
  return { data, count };
};

export const createProduct = async function (product) {
  const { image } = product;

  const imageURL = await uploadImage(image, "product_image");

  const { data, error } = await supabase
    .from("products")
    .insert({ ...product, image: imageURL })
    .select();

  if (error) {
    console.error(error);
    throw new Error("Products could not be created");
  }

  return data;
};

export const updateProduct = async function (product) {
  const { image } = product;
  let imageURL = image;

  if (typeof image !== "string" && image !== null) {
    imageURL = await uploadImage(image, "product_image");
  }

  const { data, error } = await supabase
    .from("products")
    .update({ ...product, image: imageURL })
    .eq("id", product.id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Product could not be updated");
  }

  return data;
};

export const deleteProduct = async function (id) {
  const { data, error } = await supabase
    .from("products")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Product could not be updated");
  }

  return data;
};
// const uploadImage = async function (imageFile) {
//   const imageName = `${randomNumber()}-${imageFile[0].name}`;
//   const { error: bucketError } = await supabase.storage
//     .from("product_image")
//     .upload(imageName, imageFile[0], {
//       contentType: imageFile[0].type,
//     });

//   if (bucketError) {
//     console.error(bucketError);
//     throw new Error("Products could not be created");
//   }
//   const imageURL = `${supabaseUrl}/storage/v1/object/public/product_image/${imageName}`;

//   return imageURL;
// };
