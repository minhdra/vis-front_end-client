import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Main from '../components/Product/MainProduct';
import Sidebar from '../components/Shared/Sidebar/Sidebar';
import { getByPath } from '../services/product';

const title = 'VN-Inspection - Products';

export default function Product({ setTitle }) {
  const { products }  = useOutletContext();
  const params = useParams();
  const [data, setData] = useState();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  useEffect(() => {
    setTitle(title);
  }, [setTitle]);

  useEffect(() => {
    if (params)
      getByPath(params.slug).then(res => setData(res));
  }, [params]);

  return (
    <>
      <div className='flex flex-wrap lg:container mx-auto lg:px-6 px-4 py-6 relative'>
        <Main data={data} /> 
        <Sidebar products={products} />
      </div>
    </>
  )
}