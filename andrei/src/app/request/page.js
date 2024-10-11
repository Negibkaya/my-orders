import Image from "next/image";

export default function Request() {
  return (
    <div className="h-screen bg-custom-image">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="mb-8 text-6xl font-bold text-black">Справка</h1>
        <div className="text-container flex items-center p-16">
          <input
            type="text"
            placeholder="Ваш запрос"
            className="w-full px-4 py-2 border rounded-3xl text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="flex items-center">
            <button className="p-2 text-gray-500 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
          </div>
        </div>
        <Image src="/keyboard.svg" alt="keyboard" width={400} height={150} />
        <a
          href="/"
          className="bg-purple-400 text-4xl rounded-2xl py-2 px-4 fixed bottom-6"
        >
          Назад
        </a>
      </div>
    </div>
  );
}
