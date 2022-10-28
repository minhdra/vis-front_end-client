export default function Vision() {
  return (
    <>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-20 h-20 rounded-full object-cover shadow'
                src={require('../../assets/img/icon/2.PNG')}
                alt=''
              />
              <div className='font-semibold text-center text-md text-emerald-500'>
                Our mission
              </div>
              <div className='text-left italic'>
                Save your money, help your sales run smoothly and delete your
                quality worry
              </div>
            </div>
          </div>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-20 h-20 rounded-full object-cover shadow'
                src={require('../../assets/img/icon/1.PNG')}
                alt=''
              />
              <div className='font-semibold text-md text-emerald-500'>
                Our vision
              </div>
              <div className='text-left italic'>
                Be the most trustworthy inspection and audit service providing
                team in Vietnam.
              </div>
            </div>
          </div>
          <div className='py-2'>
            <div className='flex flex-col items-center gap-2 mb-2'>
              <img
                className='w-20 h-20 rounded-full object-cover shadow'
                src={require('../../assets/img/icon/3.PNG')}
                alt=''
              />
              <div className='font-semibold text-md text-emerald-500'>
                Our values
              </div>
              <ul className='list-item list-disc ml-4 italic'>
                <li className='py-2'>Objectiveness & Transparency</li>
                <li className='py-2'>Preciseness & Integrity</li>
                <li className='py-2'>Respect & Gratitude</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
