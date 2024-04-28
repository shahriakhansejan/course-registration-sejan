import PropTypes from 'prop-types';

const Card = ({card}) => {
    const {Image, Title, Description, Price,Time} = card;
    return (
        <div className='bg-white p-4 shadow-xl rounded-xl'>
            <img src={Image} alt="" />
            <h1 className='pt-3 text-lg font-semibold'>{Title}</h1>
            <p className='py-3 text-gray-600'>{Description}</p>
            <p className='text-lg text-gray-600 font-medium'><span className='mr-5'>Price: {Price}</span> <span>Credit: {Time}</span>hrs</p>

            <div className=''>
            <button className='bg-[#2F80ED] w-full rounded-lg py-2 text-white font-semibold text-lg mt-7 hover:bg-white hover:text-[#2F80ED] hover:border'>Select</button>
            </div>
            
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
    
};

export default Card;