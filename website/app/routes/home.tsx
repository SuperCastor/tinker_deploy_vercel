import { useLoaderData } from "@remix-run/react";


export const loader = async () => {
  return process.env;
};


export default function Home() {
  const data = useLoaderData();
  return (
    <div className="font-sans p-4">
      <h1>Ceci est un test de déploiement avec variable d'environnement </h1>
      <h2>NODE_ENV: {data.NODE_ENV}</h2>
      <h2>NOM_DE_LA_COMPETENCE: {data.NOM_DE_LA_COMPETENCE}</h2>
      <h2>LIEN_DU_REPO: {data.LIEN_DU_REPO}</h2>
    </div>
  );
}