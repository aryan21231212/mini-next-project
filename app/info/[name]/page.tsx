import React from "react";

const getPredAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch age");
  return res.json();
};

const getPredGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch gender");
  return res.json();
};

const getPredCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch country");
  return res.json();
};

type PageProps = {
  params: Promise<{
    name: string;
  }>;
};

export default async function InfoPage({ params }: PageProps) {
  // Await the params promise first
  const { name } = await params;
  
  const [ageData, genderData, countryData] = await Promise.all([
    getPredAge(name),
    getPredGender(name),
    getPredCountry(name),
  ]);

  const age = ageData?.age ?? "Unknown";
  const gender = genderData?.gender ?? "Unknown";
  const country = countryData?.country?.[0]?.country_id ?? "Unknown";

  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Predicted Data for{" "}
          <span className="text-indigo-600 capitalize">{name}</span>
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
}