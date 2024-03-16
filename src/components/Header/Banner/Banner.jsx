

const Banner = () => {
    return (
        <div className="my-14">
            <div className="hero min-h-screen  bg-gradient-to-r from-[#150B2B] to-[#5E2750]" style={{ backgroundImage: 'url(https://cdn.shopify.com/s/files/1/2353/0977/files/chefs-cover-their-tattoos-with-tattoo-cover-up-sleeves.jpg?v=1513725916)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold">Indulge in savory aromas, exquisite flavors, and delightful textures of our signature gourmet dish, a culinary masterpiece.</h1>
                        <p className="my-8 text-xl">Savor the delectable fusion of spices and fresh ingredients in our signature dish, a culinary symphony that will leave you craving for more.</p>
                        <button style={{transition:'all 1s'}} className="btn rounded-full bg-[#0BE58A] hover:translate-x-1 hover:scale-105">Explore Now</button>
                        <button style={{transition:'all 1s'}} className="btn rounded-full btn-outline ml-3 text-white hover:translate-x-1 hover:scale-105">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;