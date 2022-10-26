import { formatDateTime } from '../../utils/formatDate';
import FooterClient from '../Shared/Footers/FooterClient';

export default function Main({ data }) {
  return (
    <>
      <div className='min-h-[50vh] lg:w-2/3 w-full lg:pr-4 lg:border-r border-slate-200'>
        <h1 className='text-3xl font-semibold pb-4'>{data?.name}</h1>
        <span className='text-slate-400 pb-4 inline-block'>
          {formatDateTime(data?.updatedAt)} {'  '}{' '}
          <i className='fa-regular fa-clock'></i>
        </span>
        <div className='w-full h-[200px] overflow-hidden'>
          <img
            className='w-full h-full object-cover transition duration-500 hover:scale-110'
            src={data?.thumbnail}
            alt=''
          />
        </div>
        <div
          className='leading-[2] py-4 text-md'
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>

        <FooterClient />
      </div>
    </>
  );
}
