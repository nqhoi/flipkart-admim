const baseUrl = "localhost"
  ? "http://localhost:9000"
  : "https://flipkart-rest-server.herokuapp.com";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
