import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const loadRecipes = async () => {
            const res = await fetch('recipe.json');
            const data = await res.json();
            setRecipes(data);
        }
        loadRecipes();
    }, [])
    return (
        <div>
            <div className="">
                <h2 className="text-4xl text-center font-extrabold">Our Recipes</h2>
                <p className="mt-8 text-center">
                    Dive into the world of Our Recipes, where culinary creativity meets culinary expertise. From timeless classics to bold innovations, our diverse collection promises to tantalize your taste buds and elevate every dining experience to new heights of deliciousness
                </p>
            </div>
            <div className="
            ">
                <div className="">
{
    recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe}></Recipe>)
}
                </div>
               <div className="">
                    {/* side bar */}
                </div>
            </div>
        </div>
    );
};

export default Recipes;