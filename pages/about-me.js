import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Acerca de mí</title>
      </Head>
      <h1>Acerca de mí</h1>
      <p>
        ¡Hola! Soy Juan Camilo Cadavid, desarrollador Frontend. Soy un
        apasionado del desarrollo web por lo que siempre estoy aprendiendo nuevas
        tecnologías. Tengo conocimientos sólidos en HTML, CSS, JavaScript y
        React. 
      </p>
      <h3>Objetivos profesionales</h3>
      <p>
        Mi objetivo profesional es convertirme en un desarrollador web
        experimentado. Quiero trabajar en proyectos desafiantes que me
        permitan crecer como desarrollador Full Stack.
      </p>
    </Layout>
  );
}
