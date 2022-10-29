import { useEffect } from 'react';
import Main from '../components/About/MainAbout';

const title = 'VN Inspection Team – Your Inspection Partner';

export default function About({ setTitle }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    setTitle(title);
  }, [setTitle]);
  
  return (
    <>
      <div className='lg:container mx-auto lg:px-6 px-4 py-6 relative'>
        <Main />
      </div>
    </>
  )
}