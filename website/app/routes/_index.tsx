import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export const loader = async () => {
  return process.env;
};


export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Ceci est un test de déploiement avec variable d&apos;environnement </h1>
      <br/>
      <h2>NODE_ENV: {data.NODE_ENV}</h2>
      <h2>NOM_DE_LA_COMPETENCE: {data.NOM_DE_LA_COMPETENCE}</h2>
      <h2>LIEN_DU_REPO: {data.LIEN_DU_REPO}</h2>
    </div>
  );
}