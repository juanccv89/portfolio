import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>¡Bienvenido a mi portafolio!</p>
        <p>
          Soy desarrollador Front-End, apasionado por el aprendizaje de nuevas
          tecnologías. Tengo conocimientos sólidos en HTML, CSS, JavaScript y
          React.
        </p>
        <p>
          Te invito a navegar esta sitio web donde encontrarás información sobre
          mi perfil profesional, habilidades y proyectos.
        </p>
        <p>¡Buen viaje!</p>
      </section>
    </Layout>
  );
}
