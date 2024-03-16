import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

import Recipe from "../Recipe/Recipe";
import SideBar from "../SideBar/SideBar";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [sideItems, setSideItems] = useState([]);
    useEffect(() => {
        const loadRecipes = async () => {
            const res = await fetch('recipe.json');
            const data = await res.json();
            setRecipes(data);
        }
        loadRecipes();
    }, [])

    const handleWantToCook = (recipe) => {
       
        let recipeExists = false;

        for (const item of sideItems) {
            if (item.recipe_id === recipe.recipe_id) {
                recipeExists = true;
                break;
            }
        }
        if (!recipeExists) {
            const newSideItems = [...sideItems, recipe];
            setSideItems(newSideItems);
        } else {
            toast.error(`"${recipe.recipe_name}" already exists in the list.`);
        }
    }


    const handleCurrentlyCook=(sideItem)=>{
        const remainingBookMark = sideItems.filter(item=>item.recipe_id!==sideItem.recipe_id);
        setSideItems(remainingBookMark);
        toast.success(`${sideItem.recipe_name} removed successfully`)
    }
    return (
        <div>
            <div className="">
                <h2 className="text-4xl text-center font-extrabold">Our Recipes</h2>
                <p className="mt-8 text-center">
                    Dive into the world of Our Recipes, where culinary creativity meets culinary expertise. From timeless classics to bold innovations, our diverse collection promises to tantalize your taste buds and elevate every dining experience to new heights of deliciousness
                </p>
            </div>
            <div className="flex flex-col lg:flex-row  justify-center gap-10 w-full mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                    {
                        recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}
                            handleWantToCook={handleWantToCook}
                        ></Recipe>)
                    }

                </div>
                <div className="border h-[580px] p-4 rounded-2xl shadow-2xl">
                    <SideBar
                        sideItems={sideItems}
                        handleCurrentlyCook={handleCurrentlyCook}
                    ></SideBar>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 2000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 1500,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </div>
    );
};

export default Recipes;