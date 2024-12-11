import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchDocumentos = async (page = 1) => {
  const response = await axios.get(`${API_BASE_URL}/documentos/?page=${page}`);
  return response.data;
};

export const fetchNormatividad = async (page = 1) => {
  const response = await axios.get(`${API_BASE_URL}/normatividad/?page=${page}`);
  return response.data;
};
