import axios from "axios";

const BASE_URL: string | undefined = "https://landing-ssr.vercel.app/";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {};
axios.defaults.headers.post["Content-Type"] = "application/json";

const API_ROUTES = {
  facts: "/fact/",
  slogan: "/slogan/",
  worker: "/worker/",
  project: "/project/",
  article: "/article/",
  technology: "/technology/",
  featuredTechnology: "/featured-technology/",
  testimonial: "/testimonial/",
  blogTag: "/blog-tag/",
  file: "/file/",
  fileUpload: "/file/upload",
};

export const login = async () => {
  const user = {
    username: "admin",
    password: "admin",
  };

  try {
    const { data } = await axios.post("/auth/login", user);
    const token = data.response.accessToken;
    return token;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export const getAdminData = async (route: string) => {
  try {
    const { data } = await axios.get(API_ROUTES[route]);
    const response = data.response;
    return response;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export const createAdminData = async (route: string, obj: any) => {
  try {
    const { data } = await axios.post(API_ROUTES[route], JSON.stringify(obj), {
      headers: { "Content-Type": "application/json" },
    });
    const response = data.response;
    return response;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export const uploadImage = async (file: any) => {
  try {
    let formData = new FormData();

    formData.append("file", file);
    const { data } = await axios.post("/file/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const response = data.response;
    return response;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export const updateAdminData = async (route: string, id: string, obj: any) => {
  try {
    const res = await axios.put(API_ROUTES[route] + id, JSON.stringify(obj), {
      headers: { "Content-Type": "application/json" },
    });

    const response = res.data.response;

    return response;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export const deleteAdminData = async (route: string, id: string) => {
  try {
    const { data } = await axios.delete(API_ROUTES[route] + id);
    const response = data.response;
    return response;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};
