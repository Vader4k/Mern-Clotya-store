import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import {
  Breadcrums, 
  Headtags, 
  Description, 
  Details, 
  AddInfo,
  Reviews,
  RelatedProducts,
} from '../components';

const ProductDetails = () => {
  const { allProducts } = useContext(ShopContext);
  const { id } = useParams();
  
  const [product, setProduct] = useState(null);
  const [active, setActive] = useState('desc');
  
  useEffect(() => {
    const foundProduct = allProducts?.find((e) => e.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [allProducts, id]);

  if (!product) {
    return <div>Loading...</div>; // or a more sophisticated loading indicator
  }

  return (
    <section className='w-full max-w-[1300px] mx-auto px-3 flex flex-col gap-5'>
      <Headtags pageTitle={`${product.name}`} />
      <Breadcrums props={product} />
      <Details props={product} />
      <div className='w-full flex items-center gap-4 mt-8 pb-5 md:text-[1.3rem] border-b'>
        <h1
          className={`cursor-pointer ${active === 'desc' ? 'text-black' : 'text-gray-400'}`}
          onClick={() => setActive('desc')}
        >
          Description
        </h1>
        <h1
          className={`cursor-pointer ${active === 'info' ? 'text-black' : 'text-gray-400'}`}
          onClick={() => setActive('info')}
        >
          Additional information
        </h1>
        <h1
          className={`cursor-pointer ${active === 'review' ? 'text-black' : 'text-gray-400'}`}
          onClick={() => setActive('review')}
        >
          Reviews ({product.reviews})
        </h1>
      </div>
      <div className='mb-10'>
        {active === 'desc' && <Description props={product} />}
        {active === 'info' && <AddInfo props={product} />}
        {active === 'review' && <Reviews props={product} />}
      </div>
      <div className='mb-10'>
        <RelatedProducts props={product} />
      </div>
    </section>
  );
};

export default ProductDetails;