import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import ServiceSession from '../components/Home/ServiceSession';
import Slideshow from '../components/Home/Slideshow';

const title = 'VN-Inspection - Home';

export default function Home({ setTitle }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [services] = useOutletContext();
  
  useEffect(() => {
    setTitle(title);
  }, [setTitle]);
  
  return (
    <>
      <Slideshow />

      <ServiceSession services={services} />
    </>
  )
}