import { Link } from 'react-router-dom';

export function CartLink() {
  return (
    <Link to='/cart' className='ml-auto no-underline'>
      <span className='p-2 text-sm bg-white rounded-md text-slate-900'>🛒&nbsp;&nbsp;Cart</span>
    </Link>
  );
}
