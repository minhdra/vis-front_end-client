export default function Sidebar() {
  return (
    <>
      <div className='lg:pl-4 lg:w-1/3 w-full border-t pt-4 lg:border-t-0 lg:pt-0 mb-8'>
        <div className='text-center text-slate-400'>
          Need help or have a question?
        </div>
        <div className='pt-4 pb-6 border-b-2 border-emerald-600'>
          <a
            href='tel:0979702787'
            className='py-4 px-6 bg-emerald-400 inline-flex items-center gap-2 justify-center w-full text-lg font-semibold text-slate-700 hover:bg-emerald-500 hover:text-white transition rounded'
          >
            <i className='fa-solid fa-circle-phone text-3xl'></i> +84 97 970
            2787
          </a>
        </div>
        <div className='pt-6'>
          <h2 className='text-2xl font-semibold'>Need More Information?</h2>
          <span className='pt-2 inline-block'>We'll response within about 12 hours.</span>
          <form className='p-2 bg-slate-100 rounded my-4'>
            <input
              type='text'
              placeholder='First Name'
              name='first_name'
              className='border-0 px-3 py-3 mb-4 placeholder-slate-400 text-slate-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
            />
            <input
              type='text'
              placeholder='Last Name'
              name='last_name'
              className='border-0 px-3 py-3 mb-4 placeholder-slate-400 text-slate-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
            />
            <input
              type='text'
              placeholder='Company'
              name='company'
              className='border-0 px-3 py-3 mb-4 placeholder-slate-400 text-slate-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
            />
            <input
              type='email'
              placeholder='Email'
              name='email'
              className='border-0 px-3 py-3 mb-4 placeholder-slate-400 text-slate-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
            />
            <input
              type='text'
              placeholder='Telephone'
              name='telephone'
              className='border-0 px-3 py-3 mb-4 placeholder-slate-400 text-slate-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
            />

            <button type='submit' className='bg-emerald-400 text-slate-700 py-2 px-6 w-full font-semibold text-lg rounded hover:bg-emerald-500 hover:text-white transition'>
              Send Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
