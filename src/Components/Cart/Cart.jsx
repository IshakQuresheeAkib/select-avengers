import PropTypes from 'prop-types';


const Cart = ({carts,cost,remaining}) => {


    return (
        <div className='bg-emerald-300 px-7 mx-auto w-72 h-fit pb-10 '>
            <h1 className='text-3xl font-bold my-3'>Total Actors: {carts.length}</h1>
            <h1 className=''>Total Budget: $30,000</h1>
            <h1 className='my-3 '>Total Cost: ${cost}</h1>
            <h1 className='mb-6 '>Remaining: ${remaining}</h1>
            <div className='space-y-2'>
                {
                    carts.map(cart => <li key={cart.id}>{cart.name}</li>)
                }
            </div>
        </div>
    );
};

export default Cart;

Cart.propTypes = {
    carts: PropTypes.array.isRequired,
    cost: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
  };
  