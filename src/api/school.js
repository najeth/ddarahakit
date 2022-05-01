import client from "./client";

export const listSchool = ({}) => {
  return client.get(`/school/`);
};
