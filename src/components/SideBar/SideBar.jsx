import PropTypes from 'prop-types';
import SideItem from '../SideItem/SideItem';


const SideBar = ({sideItems}) => {
    return (
        <div>
            <div className="">
                <h2 className="text-2xl font-semibold text-center">Want to cook:{sideItems.length}</h2>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Times</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {
        sideItems.map(sideItem=><SideItem key={sideItem.recipe_id} sideItem={sideItem}></SideItem>)
      }
    </tbody>
  </table>
</div>
            </div>
            <div className="">
            <h2 className="text-2xl font-semibold text-center">Currently cooking:</h2>
            </div>
        </div>
    );
};
SideBar.propTypes={
    sideItems:PropTypes.array
}


export default SideBar;