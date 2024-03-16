
import PropTypes from 'prop-types';

const SideItem = ({ sideItem }) => {
    const { recipe_name, preparing_time, calories } =sideItem
    return (
        <tr>
        <th>1</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
      </tr>
    );
};

SideItem.propTypes = {
    sideItem: PropTypes.object
};

export default SideItem;