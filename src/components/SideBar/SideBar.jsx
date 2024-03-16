import PropTypes from 'prop-types';
import SideItem from '../SideItem/SideItem';
import SideItems2 from '../SideItems2/SideItems2';


const SideBar = ({ sideItems, handleCurrentlyCook, handleAddToCurrentlyCook, currentItems }) => {
    return (
        <div>
            <div className="w-[3/6] mx-auto">
                <h2 className="text-2xl font-semibold text-center">Want to cook:{sideItems.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table lg:table-auto table-fixed">
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
                                sideItems.map((sideItem, ind) => <SideItem key={sideItem.recipe_id} ind={ind} sideItem={sideItem}
                                    handleCurrentlyCook={handleCurrentlyCook}
                                    handleAddToCurrentlyCook={handleAddToCurrentlyCook}
                                ></SideItem>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="">
                <h2 className="text-2xl font-semibold text-center">Currently cooking:{currentItems.length}</h2>

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
                               currentItems.map((item,ind)=><SideItems2 key={item.recipe_id} ind={ind} item={item}></SideItems2>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
SideBar.propTypes = {
    sideItems: PropTypes.array,
    currentItems: PropTypes.array,
    handleCurrentlyCook: PropTypes.func,
    handleAddToCurrentlyCook: PropTypes.func
}


export default SideBar;