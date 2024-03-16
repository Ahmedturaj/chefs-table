import PropTypes from 'prop-types';
import { FaClock, FaFireAlt } from 'react-icons/fa';

const Recipe = ({ recipe, handleWantToCook}) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipe_image} alt="Picture of Recipe" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='mt-5 text-[#878787]'>{short_description}</p>
                    <hr />
                   
                   <div className='mt-2'>
                   Ingredients:{ingredients.length}
                    {
                        ingredients.map((ing, ind)=><li className='text-[#878787] text-base' key={ind}>{ing}</li>)
                    }
                   
                   </div>
                   <hr />
                   <div className='flex items-center gap-4 my-4'>
                    <div className="flex gap-2 text-base items-center text-[#878787]">
                        <FaClock></FaClock>
                        <span>{preparing_time} minutes</span>
                    </div>
                    <div className="flex gap-2 text-base items-center text-[#878787]">
                        <FaFireAlt></FaFireAlt>
                        <span>{calories} calories</span>
                    </div>
                   </div>
                    <div className="card-actions">
                        <button onClick={()=>handleWantToCook(recipe)}  style={{transition:'all 1s'}} className="btn rounded-full  ml-3 bg-[#0BE58A] hover:translate-x-1 hover:scale-105">Want To Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object,
    handleWantToCook:PropTypes.func
}
export default Recipe;