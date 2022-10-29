export default function Footer() {
  return (
    <>
      <footer className='relative bg-slate-700 pt-8 pb-6'>
        <div
          className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20'
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-slate-700 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap text-center lg:text-left'>
            <div className='w-full lg:w-1/2 px-4'>
              <h4 className='text-3xl font-semibold text-slate-50 mb-1'>
                Let us provide the best services for you
              </h4>
              <h5 className='text-lg mt-0 mb-2 text-slate-50'>
                Please don’t hesitate to contact us if you have any questions, we'll respond within 12 hours.
              </h5>
              <div className='mt-6 lg:mb-0 mb-6 flex items-center lg:justify-start justify-center'>
                <a
                  href='tel:0979702787'
                  className='bg-translate text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Phone Number'
                >
                  <img
                    className='w-full h-full rounded-full object-cover'
                    src={require('../../../assets/img/icon/7.PNG')}
                    alt='phone'
                  />
                </a>
                <a
                  href='https://zalo.me/0979702787'
                  className='bg-translate text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Zalo'
                >
                  <img
                    className='w-full h-full rounded-full object-cover'
                    src={require('../../../assets/img/icon/9.PNG')}
                    alt='phone'
                  />
                </a>
                <div className='bg-translate text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 relative group'>
                  <div
                    className='absolute top-full left-0 py-2 px-4 bg-white rounded group-hover:block hidden w-32'
                  >
                    ID: vninspect
                  </div>
                  <a
                    href='https://www.wechat.com/'
                    className='bg-translate text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                    type='button'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      className='w-full h-full rounded-full object-cover'
                      src={require('../../../assets/img/icon/8.PNG')}
                      alt='Wechat'
                    />
                  </a>
                </div>
                <div className='bg-translate text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 relative group'>
                  <div className='absolute top-full left-0 py-2 px-4 bg-white rounded group-hover:block hidden'>
                    0979702787
                  </div>
                  <a
                    href='https://www.whatsapp.com/'
                    className='bg-translate text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                    type='button'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      className='w-full h-full rounded-full object-cover'
                      src={require('../../../assets/img/icon/10.PNG')}
                      alt='Whatsapp'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='flex flex-wrap items-top mb-6 justify-end'>
                <div className='w-full lg:w-5/12 px-4'>
                  <span className='block uppercase text-slate-400 text-sm font-semibold mb-2'>
                    Contact
                  </span>
                  <ul className='list-unstyled'>
                    <li className='text-slate-100 flex items-center gap-2 text-sm font-semibold lg:justify-start justify-center'>
                      <i className='fa-solid fa-house'></i>
                      <span className='py-2'>Hanoi</span>
                    </li>
                    <li className='text-slate-100 flex items-center gap-2 text-sm font-semibold lg:justify-start justify-center'>
                      <i className='fa-solid fa-envelope'></i>
                      <a
                        href='mailto:info@vninspect.com'
                        className='hover:text-slate-200 hover:underline py-2'
                      >
                        info@vninspect.com
                      </a>
                    </li>
                    <li className='text-slate-100 flex items-center gap-2 text-sm font-semibold lg:justify-start justify-center'>
                      <i className='fa-solid fa-phone'></i>
                      <a
                        href='tel:0979702787'
                        className='hover:text-slate-200 hover:underline py-2'
                      >
                        +84 979 702 787
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-slate-200' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm text-slate-400 font-semibold py-1'>
                Copyright © {new Date().getFullYear()}{' '}
                <a
                  href='https://vninspect.com'
                  className='text-slate-100 hover:text-slate-200'
                >
                  VN INSPECTION TEAM
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
