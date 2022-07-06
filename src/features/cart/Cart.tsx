export function Cart() {
  return (
    <main className='w-100'>
      <h1 className='mx-auto my-6 text-lg font-bold text-center'>Shopping Cart</h1>
      <table className='w-60% mx-auto my-0 p-20 bg-slate-50 rounded-sm border-spacing-01 border border-slate-600'>
        <thead>
          <tr>
            <th className='p-4 border border-slate-600'>Product</th>
            <th className='p-4 border border-slate-600'>Quantity</th>
            <th className='p-4 border border-slate-600'>Total</th>
            <th className='p-4 border border-slate-600'>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr className='p-2 '>
            <td className='p-4 border border-slate-600'>Magnifying Glass</td>
            <td className='p-4 border border-slate-600'>
              <input type='text' className='text-md w-100' defaultValue={21} />
            </td>
            <td className='p-4 border border-slate-600'>$44.44</td>
            <td className='flex p-4 border border-slate-600'>
              <button
                aria-label='Remove Football Cleats from Shopping Cart'
                className='p-1 mx-auto text-white border rounded-sm bg-slate-400'
              >
                X
              </button>
            </td>
          </tr>
          <tr>
            <td className='p-4 border border-slate-600'>Football Cleats</td>
            <td className='p-4 border border-slate-600'>
              <input type='text' className='text-md w-100' defaultValue={17} />
            </td>
            <td className='p-4 border border-slate-600'>$25.99</td>
            <td className='flex p-4 border border-slate-600'>
              <button
                aria-label='Remove Football Cleats from Shopping Cart'
                className='p-1 mx-auto text-white border rounded-sm bg-slate-400'
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className='p-4 font-bold border border-slate-600'>Total</td>
            <td className='p-4 border border-slate-600'></td>
            <td className='p-4 font-bold text-teal-600 border border-slate-600'>${0.0}</td>
            <td className='p-4 border border-slate-600'></td>
          </tr>
        </tfoot>
      </table>
      <form className='flex w-100'>
        <button className='p-4 mx-auto my-10 text-lg rounded-sm bg-slate-200' type='submit'>
          Checkout
        </button>
      </form>
    </main>
  );
}
