import { uploadImage } from "./apiBuckets";
import supabase from "./supabase";

export const login = async function (user) {
  const { data, error } = await supabase.auth.signInWithPassword(user);

  if (error) {
    console.error(error);
    throw new Error("Invalid login credentials");
  }
  return { data };
};
export const getCurrentUser = async function () {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data } = await supabase.auth.getUser();

  return data?.user;
};

export const logout = async function () {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    throw new Error("Could not logout");
  }
};

export const updateUser = async function (dataToUpdate) {
  if (dataToUpdate?.avatar) {
    const avatarUrl = await uploadImage(dataToUpdate.avatar, "avatars");
    dataToUpdate = {
      data: {
        avatar: avatarUrl,
      },
    };
  }
  console.log(dataToUpdate);
  const { data, error } = await supabase.auth.updateUser(dataToUpdate);

  if (error) {
    console.error(error);
    throw new Error("User could not be updated");
  }
  return data;
};

export const signup = async function (user) {
  const { avatar, email, password, username } = user;
  let dataToUpload = {
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  };

  if (avatar.length > 0) {
    const avatarUrl = await uploadImage(avatar, "avatars");
    dataToUpload = {
      ...dataToUpload,
      options: {
        data: { username, avatar: avatarUrl },
      },
    };
  }
  const { data, error } = await supabase.auth.signUp(dataToUpload);
  if (error) {
    console.error(error);
    throw new Error("User could not be updated");
  }
  return data;
};
