
'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // React Icons for navigation arrows
import CardNew from "./CardNew";
import { Carousel } from "react-responsive-carousel";

const CarouselNew = ({BlogPosts}:any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BlogPosts.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BlogPosts.length - 1 : prevIndex - 1
    );
  };
  console.log(currentIndex)
  return (
    <>
    <div className="carousel-container ">
   
    
    <div className="controls items-center flex flex-col md:flex-row transition-transform duration-500 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="hidden md:block">
    <button onClick={goPrev} className="control-prev transform -translate-y-1/2">
     <FaChevronLeft size={30} />
     </button>
    </div>
<div className="w-full md:w-auto">
      <CardNew BlogPosts={BlogPosts[currentIndex]} alt="Carousel Image" />
</div>
{BlogPosts[currentIndex + 1] && (
  <div className="w-full md:w-auto hidden md:block">
    <CardNew BlogPosts={BlogPosts[currentIndex + 1]} alt="Carousel Image" />
  </div>
)}
     <div className="hidden md:block">
     <button onClick={goNext} className="control-next transform -translate-y-1/2">
        <FaChevronRight size={30} />
     </button>
      </div>
      
      {/* Mobile navigation buttons */}
      <div className="flex justify-between w-full mt-4 md:hidden">
        <button onClick={goPrev} className="control-prev bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full">
          <FaChevronLeft size={20} />
        </button>
        <button onClick={goNext} className="control-next bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full">
          <FaChevronRight size={20} />
        </button>
      </div>
     </div>
      
    </div>
   
    <style>{`
        
        .carousel-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 0;
          }

        .carousel {
          width: 100%;
          max-width: 600px;
          height: 300px;
        }
        
        @media (max-width: 767px) {
          .carousel {
            height: 250px;
          }
        }

        .controls {
          
          top: 50%;
          left:40%;
         
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
        }
        
        @media (min-width: 768px) {
          .controls {
            padding: 40px 0;
          }
        }

        .control-prev, .control-next {
          position:relative;
          bottom:385px;
          width:40px;
          height: 40px;
          border: none;
          color: white;
          padding: 10px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.3s;
          border-radius: 50%;
        }
          .control-prev{
             left:8px;
          }
             .control-next{
             right:8px;
             }
        
        @media (min-width: 768px) {
          .control-prev, .control-next {
            width:50px;
            position:relative;
            bottom:0px;
            height: 50px;
            cursor: pointer;
            font-size: 18px;
            transition: background 0.3s;
            border-radius: 50%;
          }
            .control-prev{
             left:-13px;
          }
             .control-next{
             right:-13px;
             }
        }

        .control-prev:hover, .control-next:hover {
          background: rgba(0, 0, 0, 0.7);
        }
      `}</style></>
   
  );
};

export default CarouselNew;


// 'use client'

// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import CardNew from "./CardNew";

// const CarouselNew = ({ BlogPosts }: any) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % BlogPosts.length);
//   };

//   const goPrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? BlogPosts.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
//       <div className="carousel-container">

//         <div className="controls">

//           {/* Desktop View (Arrows + Cards Centered) */}
//           <div className="center-wrapper hidden md:flex">

//             <button onClick={goPrev} className="control-prev">
//               <FaChevronLeft size={28} />
//             </button>

//             <div className="card-wrapper">
//               <CardNew BlogPosts={BlogPosts[currentIndex]} alt="Carousel Image" />
//             </div>

//             {BlogPosts[currentIndex + 1] && (
//               <div className="card-wrapper">
//                 <CardNew BlogPosts={BlogPosts[currentIndex + 1]} alt="Carousel Image" />
//               </div>
//             )}

//             <button onClick={goNext} className="control-next">
//               <FaChevronRight size={28} />
//             </button>

//           </div>

//           {/* Mobile View */}
//           <div className="md:hidden w-full flex flex-col items-center">
//             <CardNew BlogPosts={BlogPosts[currentIndex]} alt="Carousel Image" />

//             <div className="flex justify-between w-full mt-4 px-6">
//               <button onClick={goPrev} className="control-prev mobile-nav">
//                 <FaChevronLeft size={20} />
//               </button>
//               <button onClick={goNext} className="control-next mobile-nav">
//                 <FaChevronRight size={20} />
//               </button>
//             </div>
//           </div>

//         </div>

//       </div>

//       {/* CLEAN CSS */}
//       <style>{`
//         .carousel-container {
//           width: 100%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 40px 0;
//         }

//         .controls {
//           width: 100%;
//           display: flex;
//           justify-content: center;
//         }

//         .center-wrapper {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 20px;
//         }

//         .card-wrapper {
//           width: 380px;
//         }

//         .control-prev,
//         .control-next {
//           background: black;
//           color: white;
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           cursor: pointer;
//           transition: background 0.3s;
//         }

//         .control-prev:hover,
//         .control-next:hover {
//           background: rgba(0, 0, 0, 0.7);
//         }

//         .mobile-nav {
//           width: 42px;
//           height: 42px;
//         }
//       `}</style>
//     </>
//   );
// };

// export default CarouselNew;
