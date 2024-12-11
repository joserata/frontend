import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api"; // URL base de tu API en Django

// Función para obtener documentos
export const getDocumentos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/documentos/`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los documentos:", error);
    throw error;
  }
};

// Función para obtener normatividad
export const getNormatividad = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/normatividad/`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la normatividad:", error);
    throw error;
  }
};
