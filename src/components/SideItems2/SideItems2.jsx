
import PropTypes from 'prop-types';

const SideItems2 = ({ item, ind }) => {
    const { recipe_name, preparing_time, calories } = item;
    return (
       <>
        <tr>
            <th>{ind + 1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
        </tr>
       </>

    );
};

SideItems2.propTypes = {
    item: PropTypes.object,
    ind: PropTypes.number
};

export default SideItems2;