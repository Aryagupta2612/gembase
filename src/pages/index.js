import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Solution from './solution';
import Business from './business';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page using Next.js" />
      </Head>

      <Header />
      <Hero />
      <Business />
      <Solution/>
      <Footer />

      
    </div>
  );
}
