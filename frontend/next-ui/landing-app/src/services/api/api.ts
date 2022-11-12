import axios from "axios";

const BASE_URL: string | undefined = process.env.SERVER_URL;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {};

const API_ROUTES = {
  workers: "/home/get-workers",
  projects: `/home/get-projects`,
  facts: "/home/get-facts",
  technologies: "/home/get-technologies",
  testimonials: "/home/get-testimonials",
  slogan: `/home/get-slogan`,
  articles: "/blog/",
  article: "/blog/",
  similarArticles: "/blog/similar-articles/",
};

export const getData = async (route: string, id?: string | undefined) => {
  try {
    const { data } = await axios.get(API_ROUTES[route] + (id ? id : ""));
    const response = data.response;
    return response;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
};
