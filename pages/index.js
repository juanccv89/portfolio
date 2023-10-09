import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main>
        <section className={utilStyles.headingMd}>
          <p>¡Bienvenido a mi portafolio!</p>

          <p>
            Te invito a navegar esta sitio web donde encontrarás información
            sobre mi perfil profesional, proyectos, habilidades e información de
            contacto .
          </p>
          <p>¡Buen viaje!</p>

          <Link href='/about-me'>Acerca de mí</Link>
        </section>

        <section className={utilStyles.headingMd}>
          <h2>Proyectos</h2>
          <p>
            En esta sección podrás encontrar una selección de mis proyectos más
            recientes. Cada proyecto incluye una breve descripción y un enlace a
            la aplicación en vivo.
          </p>
        </section>

        <section className={utilStyles.headingMd}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <a href='https://juanccv89.github.io/swipe/' target='_blank'>
                <h3>Swipe</h3>
              </a>
              <p>Tec: CSS & HTML.</p>
              <a href='https://github.com/juanccv89/swipe.git' target='_blank'>
                <h6>Repositorio en GitHub</h6>
              </a>
            </div>

            <div className={styles.card}>
              <a href='https://juanccv89.github.io/hotels/' target='_blank'>
                <h3>Paradise!</h3>
              </a>
              <p>Tec: JavaScript.</p>
              <a href='https://github.com/juanccv89/hotels.git' target='_blank'>
                <h6>Repositorio en GitHub</h6>
              </a>
            </div>

            <div className={styles.card}>
              <a href='#' target='_blank'>
                <h3>Book It!</h3>
              </a>
              <p>Tec: React & Next.js.</p>
              <a
                href='https://github.com/juanccv89/front-end.git'
                target='_blank'
              >
                <h6>Repositorio en GitHub</h6>
              </a>
            </div>
          </div>
        </section>

        <section className={utilStyles.headingMd}>
          <h2>Habilidades técnicas</h2>
          <ul>
            <li>Lenguajes de marcado: HTML y CSS</li>
            <li>JavaScript</li>
            <li>Frameworks y librerías: React y Next.js</li>
            <li>
              Herramientas y tecnologías: Visual Studio Code, Git y GitHub
            </li>
          </ul>
        </section>

        <section className={utilStyles.headingMd}>
          <h2>Educación</h2>
          <ul>
            <li>Curso de Programación Básica || Platzi</li>
            <li>Campamento de Desarrollo Web Frontend || DevTools Academy</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href='#'
          target='_blank'
        >
          Email
        </a>

        <a
          href='#'
          target='_blank'
        >
          WhastApp
        </a>

        <a
          href='#'
          target='_blank'
        >
          LinkedIn
        </a>
      </footer>
    </Layout>
  );
}
