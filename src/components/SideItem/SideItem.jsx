
import PropTypes from 'prop-types';

const SideItem = ({ sideItem, ind, handleCurrentlyCook }) => {
    const { recipe_name, preparing_time, calories } =sideItem
    return (
        <tr className='w-[]'>
        <th>{ind+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td><button onClick={()=>handleCurrentlyCook(sideItem)} style={{transition:'all 1s'}} className="btn rounded-full bg-[#0BE58A] hover:translate-x-1 hover:scale-105">Preparing</button></td>
      </tr>
    );
};

SideItem.propTypes = {
    sideItem: PropTypes.object,
    ind:PropTypes.number,
    handleCurrentlyCook:PropTypes.func
};

export default SideItem;