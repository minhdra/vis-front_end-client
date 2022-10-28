export default function WhyUs() {
  return (
    <>
      <div className='w-full'>
        <h2 className='text-xl font-semibold'>Why us?</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-20 h-20 rounded-full object-cover shadow'
                src={require('../../../assets/img/icon/4.PNG')}
                alt=''
              />
              <div className='font-semibold text-center text-md text-emerald-500'>
                Professional and experienced Vietnamese inspectors
              </div>
              <div className='text-left italic'>
                Our team has inspectors who specialize in hardlines, softlines and
                EE as well as have worked in famous inspection service companies.
              </div>
            </div>
          </div>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-20 h-20 rounded-full object-cover shadow'
                src={require('../../../assets/img/icon/5.PNG')}
                alt=''
              />
              <div className='font-semibold text-md text-emerald-500'>
                Good price, good services
              </div>
              <div className='text-left italic'>
                Vietnamese have a sentence “The cheapest is dearest”.
                <br />
                We only give you our best services
                with your satisfaction price.
              </div>
            </div>
          </div>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-20 h-20 rounded-full object-cover shadow'
                src={require('../../../assets/img/icon/6.PNG')}
                alt=''
              />
              <div className='font-semibold text-md text-emerald-500'>
                Instant report
              </div>
              <div className='text-left italic'>
                Our clients will get report within 12 hours after finishing
                inspection. <br/>
                Insert thousands of photos into a report in a short time. Get report within 12 hours after finishing inspection.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
