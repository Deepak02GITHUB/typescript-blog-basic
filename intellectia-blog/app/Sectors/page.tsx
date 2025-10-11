// File: app/Sectors/page.tsx
import { NextPage } from "next";

const SectorsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Sectors</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Explore the different sectors we work with and how we provide solutions
        tailored for each industry.
      </p>
    </div>
  );
};

export default SectorsPage;
