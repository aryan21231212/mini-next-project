import React from "react";

const getPredAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  if (!res.ok) throw new Error("Failed to fetch age");
  return res.json();
};

const getPredGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  if (!res.ok) throw new Error("Failed to fetch gender");
  return res.json();
};

const getPredCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  if (!res.ok) throw new Error("Failed to fetch country");
  return res.json();
};

interface PageProps {
  params: {
    name: string;
  };
}

const InfoPage = async ({ params:params }) => {
  const [ageData, genderData, countryData] = await Promise.all([
    getPredAge(params.name),
    getPredGender(params.name),
    getPredCountry(params.name),
  ]);

  const age = ageData.age;
  const gender = genderData.gender || "Unknown";
  const country = countryData.country[0]?.country_id || "Unknown";

  return (
    <div className="flex min-h-screen items-center justify-center  p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Predicted Data for{" "}
          <span className="text-indigo-600 capitalize">{params.name}</span>
        </h1>

        <div className="space-y-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700">Age</h2>
            <p className="text-2xl font-bold text-indigo-600">{age}</p>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700">Gender</h2>
            <p className="text-2xl font-bold text-pink-600">{gender}</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700">Country</h2>
            <p className="text-2xl font-bold text-green-600">{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
