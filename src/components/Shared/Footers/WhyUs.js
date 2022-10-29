export default function WhyUs() {
  return (
    <>
      <div className='w-full'>
        <h2 className='text-2xl font-bold'>Why Us?</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-14 h-14 rounded-full object-cover shadow'
                src={require('../../../assets/img/icon/4.PNG')}
                alt=''
              />
              <div className='font-semibold text-center text-xl text-emerald-500'>
                Professional and experienced local inspectors
              </div>
              <div className='text-left italic'>
                Our team members who have worked in famous inspection service companies specialize in hardlines, softlines and E&E.
              </div>
            </div>
          </div>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-14 h-14 rounded-full object-cover shadow'
                src={require('../../../assets/img/icon/5.PNG')}
                alt=''
              />
              <div className='font-semibold text-xl text-emerald-500'>
                Good price, good services
              </div>
              <div className='text-left italic'>
                Vietnamese have a sentence “The cheapest is dearest”.
                <br />
                We give you our best services
                with your satisfaction price.
              </div>
            </div>
          </div>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-14 h-14 rounded-full object-cover shadow'
                src={require('../../../assets/img/icon/6.PNG')}
                alt=''
              />
              <div className='font-semibold text-xl text-emerald-500'>
                Powerful report
              </div>
              <div className='text-justify italic'>
                We have our own reports for all products. <br/>
                Insert thousands of photos into a report in a short time. <br />
                Get report within 12 hours after finishing inspection.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
