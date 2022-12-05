// import Breadcrumb from '../Shared/Breadcrumbs/Breadcrumbs';

import backgroundAbout from '../../assets/img/banners/banner-about.jpg';
import About from './About';
import Achieve from './Achieve';

// const breadcrumbs = [
//   {
//     title: 'About Us',
//   },
// ];

export default function Main() {
  return (
    <>
      <div className='lg:w-1/2 md:w-2/3 mx-auto w-full mb-6'>
        {/* <Breadcrumb breadcrumbs={breadcrumbs} /> */}
        <div
          className='w-full min-h-[180px] bg-slate-100 flex items-center justify-center p-4'
          style={{
            background: `url(${backgroundAbout}) no-repeat center center`,
            backgroundSize: 'cover',
          }}
        >
          <span className='text-3xl lg:text-4xl font-semibold text-white'>
            About Us
          </span>
        </div>

        <Achieve />

        <About />
        {/* <Vision />
        <div className='w-full h-[1px] bg-slate-200 my-8'></div>
        <WhyUs />
        <div className='w-full h-[1px] bg-slate-200 my-8'></div>
        <Coverage /> */}
      </div>
    </>
  );
}
