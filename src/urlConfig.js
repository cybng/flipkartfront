// const baseUrl = "https://flipkart-rest-server.herokuapp.com";
// const baseUrl = "http://localhost:2000";
const baseUrl = "http://ecommapi.workitspace.com:2000";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
