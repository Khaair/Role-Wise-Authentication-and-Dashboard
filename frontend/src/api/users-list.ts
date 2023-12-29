import axios from "axios";
import { baseUrl } from "../utils/api-url";
import { getPage } from "../utils/getPage";

export const fetchUserListHandler = async (locationsearch: string) => {

  const res = await axios.get(
    `${baseUrl}?page=${getPage(locationsearch) || 1
    }`
  );

  return res;
};


