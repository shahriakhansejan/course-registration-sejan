import PropTypes from 'prop-types';

const Credit = () => {
    return (
        <div className='w-1/3'>
            <div className='bg-white p-6 shadow-xl rounded-xl'>
            <h1 className='text-lg font-bold text-[#2F80ED] text-center my-4'>Credit Remaining:</h1>
            <hr />
            <div className='my-5'>
                <h1 className='text-lg font-bold my-4'>Course Name</h1>
                {
                    
                }
            </div>
            <hr />
            <h2 className='my-5 text-lg font-medium text-gray-700'>Total Credit Hour:</h2>
            <hr />
            <h2 className='my-5 text-lg font-semibold text-gray-700'>Total Price:</h2>
            </div>
        </div>
    );
};

Credit.propTypes = {
    Credit: PropTypes.func
};

export default Credit;