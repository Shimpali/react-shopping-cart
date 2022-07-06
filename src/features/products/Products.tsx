import { useEffect, useState } from 'react';
import { getProducts, Product } from '../../app/api';

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(products => {
      setProducts(products);
    });
  }, []);

  return (
    <main className='page'>
      <ul className='grid grid-cols-3 gap-4 p-0 m-2 list-none'>
        {products.map(product => (
          <li key={product.id} className='text-left border-2 border-orange-100 rounded-md p1'>
            <article className='flex flex-row gap-4 overflow-hidden'>
              <figure className='m-1'>
                <img src={product.imageURL} alt={product.imageAlt} className='w-100' />
                <figcaption className='text-xs'>{product.imageCredit}</figcaption>
              </figure>
              <div className='flex flex-col items-start justify-evenly h-60'>
                <h1 className='font-bold text-md'>{product.name}</h1>
                <p className='h-60'>{product.description}</p>
                <p className='font-bold text-md'>${product.price}</p>
                <button className='p-2 my-4 rounded-md bg-slate-300 border-slate-400 w-max'>Add to Cart 🛒</button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
