import { noAuthApi } from "../api";

export const addEvent = async (data) => {
  const response = await noAuthApi.post("/create_event/", data);
  return response.data;
};
