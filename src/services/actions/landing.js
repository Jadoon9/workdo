import { noAuthApi } from "../api";

export const getEntertainments = async () => {
  const response = await noAuthApi.get("/list_feedback/");
  return response.data;
};

export const addNewsletter = async (email) => {
  const response = await noAuthApi.post("/create_newsletter_email/", email);
  return response.data;
};

export const getFaq = async () => {
  const response = await noAuthApi.get("/list_freq_ask_question/");
  return response.data;
};
