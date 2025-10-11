
// import CardNew from "@/components/CardNew";
// import CardNewPracticeArea from "@/components/CardNewPracticeArea";
// import FAQs from "@/components/FAQs";
// import Footer from "@/components/Footer/Footer";
// import Nav from "@/components/nav";

// import { motion } from "framer-motion";
// import { NextPage } from "next";
// import Link from "next/link";

// export type PracticeContainerType = {
//     className?: string;
  
//   };

//     async function getStrapiData(url: string) {
//         const baseURL = "https://strapi-backend-connect.onrender.com";
//         try {
//           const response = await fetch(baseURL + url, { cache: 'no-cache' });
//           const data = await response.json();
//           console.log(data)
      
//           return data;
//         } catch (error) {
//           console.error(error);
//         }
//       }
// const Practice: NextPage<PracticeContainerType> = async () => {
//     const strapiHomeData = await getStrapiData("/api/home-page?populate=*");
//   const strapipracticearea = await getStrapiData("/api/practice-areas?populate=*");
//   const strapiFAQs = await getStrapiData("/api/faqs?populate=*");
//   //const {strapiAboutUs}= await getStrapiData("/api/about-us");
//   console.log("hujioj",strapiFAQs.data );
//   const { Title, MissionLine, desc,Logo} = strapiHomeData.data.attributes;
//   const logoURL="https://strapi-backend-connect.onrender.com"+Logo.data.attributes.url

//     return (  
//         <>
//         <Nav  logoURL={logoURL} />
//         <div className="flex flex-wrap justify-center gap-[20px] p-4 px-20" >
//         {/* <div className="container flex flex-wrap justify-center gap-[20px] p-4 px-20" > */}
//         {strapipracticearea?.data?.map((teamMember: any) => (
        
//           <CardNewPracticeArea key={teamMember.id} BlogPosts={teamMember} />
     
        
//           ))}
//           </div>
//           <div className="px-50">
//           <div className="max-w-2xl mx-auto px-50 faqcss dark:bg-gray-800">
//       <h1 className="text-2xl font-bold mb-4 text-gray-700 dark:text-white li-bulletremove">FAQs</h1>
//           <FAQs faqs={strapiFAQs.data}/>
//     </div>
//     </div>
//     <Footer />
 
//           </>
          
//     );
// }

// export default Practice;
// app/Practices/page.tsx
// app/Practices/page.tsx
import CardNewPracticeArea from "@/components/CardNewPracticeArea";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/nav";
import { NextPage } from "next";

export const dynamic = 'force-dynamic';

const STRAPI_BASE = "https://strapi-backend-connect.onrender.com";

// ✅ Safe fetch helper
async function getStrapiData(endpoint: string) {
  try {
    const res = await fetch(STRAPI_BASE + endpoint, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch (err) {
    console.error("Strapi fetch error:", err);
    return null;
  }
}

const Practice: NextPage = async () => {
  // ✅ Fetch all data in parallel
  const [homeData, practiceData, faqData] = await Promise.all([
    getStrapiData("/api/home-page?populate=*"),
    getStrapiData("/api/practice-areas?populate=*"),
    getStrapiData("/api/faqs?populate=*"),
  ]);

  // ✅ Extract home attributes safely
  const homeAttributes =
    homeData?.[0]?.attributes ?? homeData?.attributes ?? null;

  // ✅ Safe logo URL
  const logoURL =
    homeAttributes?.Logo?.data?.attributes?.url
      ? STRAPI_BASE + homeAttributes.Logo.data.attributes.url
      : "";

  const practiceAreas = practiceData ?? [];
  const faqs = faqData ?? [];

  return (
    <>
      <Nav logoURL={logoURL} />

      <div className="flex flex-wrap justify-center gap-6 p-4 sm:px-20">
        {practiceAreas.length > 0 ? (
          practiceAreas.map((practice: any) => (
            <CardNewPracticeArea key={practice.id} BlogPosts={practice} />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300">
            No practice areas available.
          </p>
        )}
      </div>

      <div className="px-4 sm:px-20 mt-10">
        <div className="max-w-2xl mx-auto faqcss dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-gray-700 dark:text-white li-bulletremove">
            FAQs
          </h1>
          {faqs.length > 0 ? (
            <FAQs faqs={faqs} />
          ) : (
            <p className="text-gray-600 dark:text-gray-300">
              No FAQs available.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Practice;

