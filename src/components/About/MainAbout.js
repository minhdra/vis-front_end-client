export default function Main() {
  return (
    <>
      <div className='lg:w-1/2 lg:mx-auto w-full mb-6'>
        <h2 className='text-xl font-semibold'>Why us?</h2>
        <div className='py-2'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='font-semibold text-md text-emerald-500'>
              Professional and experienced Vietnamese inspectors
            </div>
            <img
              className='w-12 h-12 rounded-full object-cover shadow'
              src={require('../../assets/img/icon/4.PNG')}
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
              src={require('../../assets/img/icon/5.PNG')}
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
              src={require('../../assets/img/icon/6.PNG')}
              alt=''
            />
          </div>
          <div>
            Our clients will get report within 12 hours after finishing
            inspection
          </div>
        </div>
      </div>

      <div className='lg:w-1/2 lg:mx-auto w-full mb-6'>
        <h2 className='text-xl font-semibold'>Why us?</h2>
        <div className='py-2'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='font-semibold text-md text-emerald-500'>
              Our mission
            </div>
            <img
              className='w-12 h-12 rounded-full object-cover shadow'
              src={require('../../assets/img/icon/2.PNG')}
              alt=''
            />
          </div>
          <div>
            Save your money, help your sales run smoothly and delete your
            quality worry
          </div>
        </div>
        <div className='py-2'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='font-semibold text-md text-emerald-500'>
              Our vision
            </div>
            <img
              className='w-12 h-12 rounded-full object-cover shadow'
              src={require('../../assets/img/icon/1.PNG')}
              alt=''
            />
          </div>
          <div>
            Be the most trustworthy inspection and audit service providing team
            in Vietnam.
          </div>
        </div>
        <div className='py-2'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='font-semibold text-md text-emerald-500'>
              Our values
            </div>
            <img
              className='w-12 h-12 rounded-full object-cover shadow'
              src={require('../../assets/img/icon/3.PNG')}
              alt=''
            />
          </div>
          <ul className='list-item list-disc ml-4'>
            <li className='py-2'>Objectiveness & Transparency</li>
            <li className='py-2'>Preciseness & Integrity</li>
            <li className='py-2'>Respect & Gratitude</li>
          </ul>
        </div>
      </div>

      <div className='lg:w-1/2 lg:mx-auto w-full mb-6'>
        <h2 className='text-xl font-semibold'>Our coverage</h2>
        <div className='py-2'>
          <img
            className='w-full object-cover'
            src={require('../../assets/img/Our coverage/our-coverage.jpg')}
            alt=''
          />
        </div>
        <div className='py-2'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='font-semibold text-md text-emerald-500'>
              Northern Vietnam:
            </div>
          </div>
          <ul className='list-item list-disc ml-8'>
            <li className='py-2'>
              North East Vietnam – 9 provinces: Phu Tho, Thai Nguyen, Tuyen
              Quang, Ha Giang, Cao Bang, Bac Kan, Lang Son, Bac Giang, Quang
              Ninh
            </li>
            <li className='py-2'>
              North West Vietnam – 6 provinces: Hoa Binh, Son La, Dien Bien, Lai
              Chai, Lao Cai, Yen Bai
            </li>
            <li className='py-2'>
              Red River Delta – 10 provinces and city: Hanoi, Vinh Phuc, Bac
              Ninh, Hung Yen, Hai Duong, Hai Phong, Thai Binh, Nam Dinh, Ninh
              Binh, Ha Nam
            </li>
          </ul>
        </div>
        <div className='py-2'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='font-semibold text-md text-emerald-500'>
              Vietnam Central:
            </div>
          </div>
          <ul className='list-item list-disc ml-8'>
            <li className='py-2'>
              North Central Coast – 6 provinces: Thanh Hoa, Nghe An, Ha Tinh,
              Quang Binh, Quang Tri, Thua Thien Hue
            </li>
            <li className='py-2'>Central Coast: Da Nang</li>
          </ul>
        </div>
      </div>
    </>
  );
}
