import React from "react";

function Home() {
  return (
    <>
      <main className="container mx-auto text-center mt-10 p-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Master State Management with Zustand
        </h2>
        <p className="mt-4 text-gray-600">
          Zustand is a small, fast, and scalable bearbones state-management
          solution. Learn how to use Zustand in your React applications
          effectively.
        </p>
        <a
          href="#tutorials"
          className="mt-6 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Get Started
        </a>
      </main>

      <section
        id="tutorials"
        className="mt-10 bg-white shadow-md p-6 rounded-lg mb-4"
      >
        <h3 className="text-2xl font-semibold text-gray-800">Tutorials</h3>
        <ul className="mt-4 list-disc list-inside text-left text-gray-600">
          <li>
            <a
              href="/tutorials/intro"
              className="text-blue-600 hover:underline"
            >
              Introduction to Zustand
            </a>
          </li>
          <li>
            <a
              href="/tutorials/advanced"
              className="text-blue-600 hover:underline"
            >
              Advanced Zustand Patterns
            </a>
          </li>
          <li>
            <a
              href="/tutorials/integration"
              className="text-blue-600 hover:underline"
            >
              Integrating Zustand with React
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Home;
