"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!name.trim()) {
      alert("Please enter a valid name.");
      return;
    }
    router.push(`/info/${name}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Enter Your Name
        </h1>
        <form onSubmit={formHandler} className="flex flex-col space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Enter your name"
            className="px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md"
          >
            Get Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
