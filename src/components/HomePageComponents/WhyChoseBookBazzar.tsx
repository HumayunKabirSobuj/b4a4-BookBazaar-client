const WhyChoseBookBazzar = () => {
  return (
    <div className="mt-20 flex lg:flex-row flex-col justify-center items-center  text-white">
      <div className="lg:block flex items-center">
        <div>
          <h2 className="lg:text-6xl text-3xl hidden lg:block font-normal lg:font-semibold w-40 lg:w-[425px] mb-4">
            Discover Your Next Favorite Read
          </h2>
          <p className="text-[#F3F3F4] hidden lg:block text-lg font-normal w-[525px] mb-8">
            Welcome to your personal book sanctuary, where finding the perfect
            book is effortless and enjoyable. With our curated collection and
            seamless browsing experience, your next literary adventure is just a
            click away.
          </p>
        </div>
        <div>
          <button className="text-xl lg:text-2xl text-white font-normal rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] py-4 lg:px-9 px-6 flex items-center">
            Buy now
          </button>
        </div>
      </div>
      

      <div className="lg:ml-36 lg:mt-0 mt-7 ml-0 space-y-24">
        <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
          {/* Hover button */}
          <button className="lg:text-5xl text-2xl mb-7 origin-center rotate-[-8deg] text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 lg:px-14 px-10 flex items-center">
            Explore Our Collection
          </button>
          {/* Hover Text */}
          <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100">
            <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
              Dive into our curated collection of books tailored for every <br />
              reader. Whether you love fiction, non-fiction, or academic <br />
              resources, we have something special for you.
            </p>
            <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
          </div>
        </div>

        <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
          {/* Hover button */}
          <button className="lg:text-5xl text-2xl font-medium origin-center rotate-[4deg] text-white rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 lg:px-14 px-10 flex items-center">
            Free Shipping
          </button>
          {/* Hover Text */}
          <div className="absolute -bottom-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-24 group-hover:opacity-100">
            <p className="rounded-md -z-10 bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
              Enjoy free shipping on all orders above $50. We ensure a fast and <br />
              secure delivery system right to your doorstep.
            </p>
            <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
          </div>
        </div>

        <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
          {/* Hover button */}
          <button className="lg:text-5xl text-2xl mb-7 origin-center rotate-[-8deg] text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 lg:px-14 px-10 flex items-center">
            Shop Now
          </button>
          {/* Hover Text */}
          <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100">
            <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
              Start your book-buying journey with us and discover exclusive <br />
              discounts and deals every week.
            </p>
            <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
          </div>
        </div>

        <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
          {/* Hover button */}
          <button className="lg:text-5xl text-2xl text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 lg:px-14 px-10 flex items-center">
            Hassle-Free Returns
          </button>
          {/* Hover Text */}
          <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100">
            <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
              Not satisfied with your purchase? Our hassle-free return policy <br />
              ensures you get the best service every time. 
            </p>
            <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseBookBazzar;
