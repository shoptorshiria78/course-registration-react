
import PropTypes from 'prop-types'
const Cart = ({tPrice,tHour,tTitle, rHour}) => {

    return (
        <div className="col-span-1 ml-10 bg-white mt-10 rounded-xl space-y-3 p-5 mb-40">
            <h1 className="text-[#2F80ED] font-bold ">Credit Hour Remaining {rHour} hr</h1>
            <hr className="my-2 border"/>
            <h1 className="text-[#1C1B1B] text-lg font-bold ">Course Name</h1>
              <div className='text-[#1C1B1B99] text-sm font-medium space-y-2'>
              {tTitle.map((title ,idx)=> <p key={idx}> {idx+1}. {title} </p>
                )}
              </div>
            <hr className="my-2 border"/>
            <h1 className="font-medium text-sm">Total Credit Hour :{tHour} </h1>
            <hr className="my-2 border"/>
            <h1 className="font-semibold text-sm">Total Price : {tPrice} USD</h1>
        </div>
    );
};

Cart.propTypes ={
    tPrice: PropTypes.number.isRequired,
    tHour: PropTypes.number.isRequired,
    rHour: PropTypes.number.isRequired,
    tTitle: PropTypes.object.isRequired
}
export default Cart;