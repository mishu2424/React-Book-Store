const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-around gap-4 rounded-lg w-[70vw] mx-auto bg-gray-200 py-7">
            <div className="banner-details space-y-10">
                <h2 className="text-center lg:text-start text-2xl lg:text-5xl font-extrabold">Books to freshen <br /> up your bookshelf</h2>
                <button className="btn py-4 px-14 bg-[#23BE0A] text-white font-bold rounded-lg">View The List</button>
            </div>
            <div className="banner">
                <img className="w-42 md:w-full" src="/assets/bookbanner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;