

const Cart = () => {
    return (
        <div className="col-span-1 ml-10 bg-white mt-10 rounded-xl space-y-3 p-5 mb-40">
            <h1 className="text-[#2F80ED] font-bold ">Credit Hour Remaining {} hr</h1>
            <hr className="my-2 border"/>
            <h1 className="text-[#1C1B1B] text-lg font-bold ">Course Name</h1>

            <hr className="my-2 border"/>
            <h1 className="font-medium text-sm">Total Credit Hour :{} </h1>
            <hr className="my-2 border"/>
            <h1 className="font-semibold text-sm">Total Price : {} USD</h1>
        </div>
    );
};

export default Cart;