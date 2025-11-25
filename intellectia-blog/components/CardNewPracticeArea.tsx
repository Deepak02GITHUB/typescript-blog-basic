// 'use client'
// import React from 'react';
// import Link from 'next/link';

// const CardNew = ({ BlogPosts }: any ) => {
// const imageUrl = "http://localhost:1337" + BlogPosts.attributes.PracticeAreaImage.data.attributes.url;
// const title = BlogPosts.attributes.title;
// const desc = BlogPosts.attributes.Description;
//   return (
    
//     <div className="card-container">
      
//       <div className="card3">

//         <img
//           src={imageUrl}
//           alt="Card Image"
//           className="card-image"
//         />
//         <div className="card-content">
//           <h2 className="card-title">{title}</h2>
//           <p className="card-description font-dm-sans">
//             {desc}
//           </p>
//           <Link href={`/Practices/${BlogPosts.id}`}>
//             <button className="card-button">Read More</button>
//           </Link>
//         </div>
//       </div>
          
//       <style jsx>{`
//         .card-container {
//           display: flex;
//           justify-content: center;
        
//           margin-left: 16px;
        
//         }

//         .card3 {
//           background-color: white;
//           border-radius: 8px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           width:250px;
          
//           padding: 16px;
//           text-align: center;
//           max-width: 900px;
//           transition: transform 0.3s ease;
//         }

//         .card:hover {
//           transform: scale(1.05);
//         }

//         .card-image {
//           width: 80%;
//           height: 30%;
//           object-fit: cover;
//           padding:40px 20px 20px 20px;
//         }

//         .card-content {
//           padding: 20px;
//         }

//         .card-title {
//           font-size: 24px;
//           font-weight: bold;
//           margin-bottom: 10px;
//           color: #666;
//         }

//         .card-description {
//           font-size: 16px;
//           margin-bottom: 20px;
//           color: #666;
//         }

//         .card-button {
//           padding: 10px 20px;
//           font-size: 16px;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }

//         .card-button:hover {
//           background-color: #0056b3;
//         }

//         /* Responsive Design */
//         @media (max-width: 768px) {
//           .card {
//             max-width: 100%;
//           }

//           .card-title {
//             font-size: 20px;
//           }

//           .card-description {
//             font-size: 14px;
//           }

//           .card-button {
//             font-size: 14px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CardNew;

// 'use client'
// import React from 'react';
// import Link from 'next/link';

// const CardNew = ({ BlogPosts }: any) => {

//   const imagePath =
//     BlogPosts?.attributes?.PracticeAreaImage?.data?.attributes?.url ??
//     "/placeholder.png"; // fallback image

//   const imageUrl = imagePath.startsWith("http")
//     ? imagePath
//     : "http://localhost:1337" + imagePath;

//   const title = BlogPosts.attributes.title;
//   const desc = BlogPosts.attributes.Description;

//   return (
//     <div className="card-container">
//       <div className="card3">
//         <img
//           src={imageUrl}
//           alt="Card Image"
//           className="card-image"
//         />

//         <div className="card-content">
//           <h2 className="card-title">{title}</h2>
//           <p className="card-description font-dm-sans">{desc}</p>

//           <Link href={`/Practices/${BlogPosts.id}`}>
//             <button className="card-button">Read More</button>
//           </Link>
//         </div>
//       </div>

//       <style jsx>{`
//         .card-container {
//           display: flex;
//           justify-content: center;
//           margin-left: 16px;
//         }

//         .card3 {
//           background-color: white;
//           border-radius: 8px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           width: 250px;
//           height:250px;
//           padding: 16px;
//           text-align: center;
//           transition: transform 0.3s ease;
//         }

//         .card-image {
//           width: 80%;
//           height: 30%;
//           object-fit: cover;
//           padding: 40px 20px 20px 20px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CardNew;

'use client'
import React from 'react';
import Link from 'next/link';

const CardNew = ({ BlogPosts }: any) => {
  const imagePath =
    BlogPosts?.attributes?.PracticeAreaImage?.data?.attributes?.url ??
    "/placeholder.png";

    const rawImage = BlogPosts?.attributes?.PracticeAreaImage?.data?.attributes?.url;

    const imageUrl = rawImage
      ? rawImage.startsWith("http")
        ? rawImage // Cloudinary image
        : "http://localhost:1337" + rawImage // Local dev image
      : "/placeholder.png";


  // const imageUrl = imagePath.startsWith("http")
  //   ? imagePath
  //   : "http://localhost:1337" + imagePath;

  const title = BlogPosts.attributes.title;
  const desc = BlogPosts.attributes.Description;

  return (
    <>
      <div className="card-wrapper">
        <div className="card3">

          <div className="image-wrapper">
            <img src={imageUrl} alt={title} className="card-image" />
          </div>

          <div className="card-content">
            <h2 className="card-title">{title}</h2>

            <p className="card-description font-dm-sans">{desc}</p>

            <Link href={`/Practices/${BlogPosts.id}`}>
              <button className="card-button">Read More</button>
            </Link>
          </div>

        </div>
      </div>

      <style jsx>{`
        .card-wrapper {
          display: flex;
          justify-content: center;
          padding: 10px;
        }

        .card3 {
          background: white;
          border-radius: 12px;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 340px;
          min-height: 360px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .card3:hover {
          transform: translateY(-6px);
        }

        .image-wrapper {
          width: 100%;
          height: 180px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f8f8f8;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-content {
          padding: 16px 20px 20px 20px;
          text-align: center;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .card-description {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 16px;
          height: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-button {
          background: #0a2647;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.9rem;
          transition: 0.3s ease;
          border: none;
        }

        .card-button:hover {
          background: #08325f;
        }

        /* Responsive */
        @media (max-width: 480px) {
          .card3 {
            max-width: 90%;
          }

          .card-title {
            font-size: 1.2rem;
          }

          .card-description {
            height: auto;
          }
        }
      `}</style>
    </>
  );
};

export default CardNew;
