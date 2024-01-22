// import { IFileObject } from '../interfaces'

export const fileServerPath = (name: string) => {
  return import.meta.env.VITE_API_URL + name;
};

export const getFileData = (
  file: any
  // : IFileObject
) => {
  let type: "video" | "image" = "image";

  if (!file) {
    return { url: "", type };
  }

  if (/^(video)\/.+/i.test(file.mime)) {
    type = "video";
  }

  if (/^(image)\/.+/i.test(file.mime)) {
    type = "image";
  }

  return {
    url: import.meta.env.VITE_API_URL + file.url,
    type,
  };
};
