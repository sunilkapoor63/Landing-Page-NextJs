import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import DevelopmentStages from '../components/DevelopmentStages';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="Welcome to my landing page. Discover our amazing features." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-16 mx-auto container px-4">
      <Header />
        <Hero />
        <Services />
        <Industries />
        <Projects />
        <ContactForm />
        <DevelopmentStages />
        <Team />
        <FAQ />
      <Footer />
      </main>
    </div>
  );
}
