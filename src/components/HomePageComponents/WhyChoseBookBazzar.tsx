// const WhyChoseBookBazzar = () => {
//   return (
//     <div className=" pt-20 lg:flex hidden lg:flex-row flex-col justify-center items-center  text-white bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31]">
//       <div className="lg:block flex items-center">
//         <div>
//           <h2 className="lg:text-6xl text-3xl hidden lg:block font-normal lg:font-semibold w-40 lg:w-[425px] mb-4">
//             Discover Your Next Favorite Read
//           </h2>
//           <p className="text-[#F3F3F4] hidden lg:block text-lg font-normal w-[525px] mb-8">
//             Welcome to your personal book sanctuary, where finding the perfect
//             book is effortless and enjoyable. With our curated collection and
//             seamless browsing experience, your next literary adventure is just a
//             click away.
//           </p>
//         </div>
//         <div>
//           <button className="text-xl lg:text-2xl text-white font-normal rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] py-4 lg:px-9 px-6 flex items-center">
//             Buy now
//           </button>
//         </div>
//       </div>
      

//       <div className="lg:ml-36 lg:mt-0 mt-7 ml-0 space-y-24">
//         <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
//           {/* Hover button */}
//           <button className="lg:text-5xl text-2xl mb-7 origin-center rotate-[-8deg] text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 lg:px-14 px-10 flex items-center">
//             Explore Our Collection
//           </button>
//           {/* Hover Text */}
//           <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100">
//             <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
//               Dive into our curated collection of books tailored for every <br />
//               reader. Whether you love fiction, non-fiction, or academic <br />
//               resources, we have something special for you.
//             </p>
//             <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
//           </div>
//         </div>

//         <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
//           {/* Hover button */}
//           <button className="lg:text-5xl text-2xl font-medium origin-center rotate-[4deg] text-white rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 lg:px-14 px-10 flex items-center">
//             Free Shipping
//           </button>
//           {/* Hover Text */}
//           <div className="absolute -bottom-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-24 group-hover:opacity-100">
//             <p className="rounded-md -z-10 bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
//               Enjoy free shipping on all orders above $50. We ensure a fast and <br />
//               secure delivery system right to your doorstep.
//             </p>
//             <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
//           </div>
//         </div>

//         <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
//           {/* Hover button */}
//           <button className="lg:text-5xl text-2xl mb-7 origin-center rotate-[-8deg] text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 lg:px-14 px-10 flex items-center">
//             Shop Now
//           </button>
//           {/* Hover Text */}
//           <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100">
//             <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
//               Start your book-buying journey with us and discover exclusive <br />
//               discounts and deals every week.
//             </p>
//             <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
//           </div>
//         </div>

//         <div className="group relative mx-auto flex h-10 w-max cursor-pointer justify-center">
//           {/* Hover button */}
//           <button className="lg:text-5xl text-2xl text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(90deg,_#5C258D_0%,_#4389A2_100%)] py-10 lg:px-14 px-10 flex items-center">
//             Hassle-Free Returns
//           </button>
//           {/* Hover Text */}
//           <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100">
//             <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
//               Not satisfied with your purchase? Our hassle-free return policy <br />
//               ensures you get the best service every time. 
//             </p>
//             <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChoseBookBazzar;


"use client"

import { useState } from "react"
import { ShoppingBag, Truck, RotateCcw, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"

const WhyChooseBookBazzar = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: BookOpen,
      title: "Explore Our Collection",
      description:
        "Dive into our curated collection of books tailored for every reader. Whether you love fiction, non-fiction, or academic resources, we have something special for you.",
      gradient: "from-purple-500 to-blue-500",
      rotation: "-rotate-2",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description:
        "Enjoy free shipping on all orders above ৳500. We ensure a fast and secure delivery system right to your doorstep.",
      gradient: "from-blue-500 to-cyan-500",
      rotation: "rotate-1",
    },
    {
      icon: ShoppingBag,
      title: "Shop Now",
      description: "Start your book-buying journey with us and discover exclusive discounts and deals every week.",
      gradient: "from-cyan-500 to-purple-500",
      rotation: "-rotate-1",
    },
    {
      icon: RotateCcw,
      title: "Hassle-Free Returns",
      description:
        "Not satisfied with your purchase? Our hassle-free return policy ensures you get the best service every time.",
      gradient: "from-purple-500 to-pink-500",
      rotation: "rotate-2",
    },
  ]

  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Discover Your Next Favorite Read
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8">
                Welcome to your personal book sanctuary, where finding the perfect book is effortless and enjoyable.
                With our curated collection and seamless browsing experience, your next literary adventure is just a
                click away.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={"/all-product"} className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-3xl  text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-center items-center">
                Buy Now
              </Link>
              <Link to={"/all-product"} className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-semibold px-8 py-4 rounded-3xl  text-lg transition-all duration-300 flex justify-center items-center">
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${feature.rotation} hover:rotate-0`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Main Card */}
                  <div
                    className={`bg-gradient-to-br ${feature.gradient} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-center text-sm">Click to learn more</p>
                  </div>

                  {/* Hover Tooltip */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center z-10 animate-in fade-in duration-300">
                      <div className="text-center">
                        <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "5K+", label: "Books Available" },
            { number: "50+", label: "Categories" },
            { number: "24/7", label: "Customer Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseBookBazzar
