import supabase from "./supabase";

export const getSettings = async function () {
  let { data, error } = await supabase.from("settings").select("*");

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded");
  }
  return { data };
};
export const updateSettings = async function (settingToUpdate) {
  const { data, error } = await supabase
    .from("settings")
    .update(settingToUpdate)
    .eq("id", 1)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded");
  }
  return { data };
};
