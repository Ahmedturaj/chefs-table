
import PropTypes from 'prop-types';

const SideItem = ({ sideItem, ind, handleCurrentlyCook,handleAddToCurrentlyCook }) => {
    const { recipe_name, preparing_time, calories } =sideItem
    return (
        <tr>
        <th>{ind+1}</th>
        <td className='text-xs lg:text-base'>{recipe_name}</td>
        <td className='text-xs lg:text-base'>{preparing_time}</td>
        <td className='text-xs lg:text-base'>{calories}</td>
        <td>
    <button  onClick={() => { handleAddToCurrentlyCook(sideItem); handleCurrentlyCook(sideItem); }} style={{ transition: 'all 1s' }} className="btn rounded-full bg-[#0BE58A] hover:translate-x-1 hover:scale-105 text-xs lg:text-base">
        Preparing
    </button>
</td>

      </tr>
    );
};

SideItem.propTypes = {
    sideItem: PropTypes.object,
    ind:PropTypes.number,
    handleCurrentlyCook:PropTypes.func,
    handleAddToCurrentlyCook:PropTypes.func
};

export default SideItem;