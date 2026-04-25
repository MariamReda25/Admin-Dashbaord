import { randomNumber } from "../utils/helper";
import supabase, { supabaseUrl } from "./supabase";

export const uploadImage = async function (imageFile, bucketName) {
  const imageName = `${randomNumber()}-${imageFile[0].name}`;
  const { error: bucketError } = await supabase.storage
    .from(bucketName)
    .upload(imageName, imageFile[0], {
      contentType: imageFile[0].type,
    });

  if (bucketError) {
    console.error(bucketError);
    throw new Error("image could not be created");
  }
  const imageURL = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${imageName}`;

  return imageURL;
};
