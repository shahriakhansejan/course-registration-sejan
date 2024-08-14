import PropTypes from 'prop-types';

const Credit = ({name, hour, totalPrice, credit}) => {



    return (
        <div className='w-1/3'>
            <div className='bg-white p-6 shadow-xl rounded-xl'>
                <h1 className='text-lg font-bold text-[#2F80ED] text-center my-4'>Credit Remaining: {credit}</h1>
                <hr />
                <div className='my-5'>
                    <h1 className='text-lg font-bold my-4'> Course Name:</h1>
                    <ul className='font-semibold'>
                        {name.map((courseName, index) => (
                            <li key={index + 1}>{index +1 }. {courseName}</li>
                        ))}
                    </ul>
                </div>
                <hr />
                <h2 className='my-5 text-lg font-medium text-gray-700'>Total Credit Hour: {hour}</h2>
                <hr />
                <h2 className='my-5 text-lg font-semibold text-gray-700'>Total Price: {totalPrice} usd</h2>
            </div>
        </div>
    );
};

Credit.propTypes = {
    name:PropTypes.object.isRequired,
    hour:PropTypes.object.isRequired,
    totalPrice:PropTypes.object.isRequired,
    credit:PropTypes.object.isRequired
};

export default Credit;