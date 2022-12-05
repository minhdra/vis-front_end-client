export default function About() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div>
          <div className='font-bold text-2xl text-emerald-500'>
            About Vietnam Inspection Team
          </div>
          <p className='py-4'>
            Established in the context of the global economic crisis, Vietnam
            Inspection Team understands the difficulties in sales of customers
            and the delay in production of factories. We were born with the
            mission to help customers’ sales go smoothly as well as strictly and
            systematically control quality of customers' products based on
            objectivity, transparency and accuracy.
          </p>
          <p className='pb-4'>
            With a team of professional, qualified and experienced inspectors,
            we provide our customers with the best quality control solution in
            every service and are able to do the full inspection services
            including: Initial Production Check, During Production Check, Pre
            Shipment Inspection, Container Loading Supervision, Sample Drawing
            and Full Inspection.
          </p>
          <p className=''>
            Vietnam Inspection Team is a perfect choice for quality control.
          </p>
        </div>
        <div>
          <div className='w-full mb-4'>
            <img
              src={require('../../assets/img/others/about-bg.jpg')}
              alt=''
              className='object-cover w-full h-full'
            />
          </div>

          <div className='w-full'>
            <h2 className='text-2xl font-bold text-emerald-500'>
              Our Coverage
            </h2>
            <div className='pb-2'>
              <div className='flex items-center gap-2'>
                <div className='font-bold text-base '>Northern Vietnam:</div>
              </div>
              <ul className='list-item list-disc ml-8'>
                <li className='py-2'>
                  <span className='font-bold'>North East Vietnam:</span> Phu
                  Tho, Thai Nguyen, Tuyen Quang, Ha Giang, Cao Bang, Bac Kan,
                  Lang Son, Bac Giang, Quang Ninh
                </li>
                <li className='py-2'>
                  <span className='font-bold'>North West Vietnam:</span> Hoa
                  Binh, Son La, Dien Bien, Lai Chau, Lao Cai, Yen Bai
                </li>
                <li className='py-2'>
                  <span className='font-bold'>Red River Delta:</span> Hanoi,
                  Vinh Phuc, Bac Ninh, Hung Yen, Hai Duong, Hai Phong, Thai
                  Binh, Nam Dinh, Ninh Binh, Ha Nam
                </li>
              </ul>
            </div>
            <div className='pb-2'>
              <div className='flex items-center gap-2'>
                <div className='font-bold text-base '>Central Vietnam:</div>
              </div>
              <ul className='list-item list-disc ml-8'>
                <li className='py-2'>
                  <span className='font-bold'>North Central Coast:</span> Thanh
                  Hoa, Nghe An, Ha Tinh, Quang Binh, Quang Tri, Thua Thien Hue
                </li>
                <li className='py-2'>
                  <span className='font-bold'>Central Coast:</span> Da Nang
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
