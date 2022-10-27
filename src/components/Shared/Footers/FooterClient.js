export default function FooterClient() {
  return (
    <>
      <div className='w-full'>
        <h2 className='text-xl font-semibold'>Why us?</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='py-2'>
            <div className='flex items-center gap-2 mb-2'>
              <div className='font-semibold text-md text-emerald-500'>
                Professional and experienced Vietnamese inspectors
              </div>
              <img
                className='w-12 h-12 rounded-full object-cover shadow'
                src={require('../../../assets/img/icon/4.PNG')}
                alt=''
              />
            </div>
            <div>
              Our team has inspectors who specialize in hardlines, softlines and
              EE as well as have worked in famous inspection service companies.
            </div>
          </div>
          <div className='py-2'>
            <div className='flex items-center gap-2 mb-2'>
              <div className='font-semibold text-md text-emerald-500'>
                Good price, good services
              </div>
              <img
                className='w-12 h-12 rounded-full object-cover shadow'
                src={require('../../../assets/img/icon/5.PNG')}
                alt=''
              />
            </div>
            <div>
              Vietnamese have a sentence “The cheapest is dearest”. We don’t
              provide services based on price. We only give you our best services
              with your satisfaction price.
            </div>
          </div>
          <div className='py-2'>
            <div className='flex items-center gap-2 mb-2'>
              <div className='font-semibold text-md text-emerald-500'>
                Instant report
              </div>
              <img
                className='w-12 h-12 rounded-full object-cover shadow'
                src={require('../../../assets/img/icon/6.PNG')}
                alt=''
              />
            </div>
            <div>
              Our clients will get report within 12 hours after finishing
              inspection
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
