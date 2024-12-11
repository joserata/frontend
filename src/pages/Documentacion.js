import React, { useEffect, useState } from "react";
import { getDocumentos } from "../services/apiService"; // Importar la función

const DocumentacionPage = () => {
  const [documentos, setDocumentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocumentos = async () => {
      try {
        const data = await getDocumentos();
        setDocumentos(data);
        setLoading(false);
      } catch (error) {
        setError("Hubo un error al cargar los documentos.");
        setLoading(false);
      }
    };

    fetchDocumentos();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Documentación</h1>
      <div className="card-container">
        {documentos.map((documento) => (
          <div key={documento.id} className="card">
            <h3>{documento.titulo}</h3>
            <p>{documento.descripcion}</p>
            {documento.enlace && (
              <a href={documento.enlace} target="_blank" rel="noopener noreferrer">
                Ver más
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentacionPage;
