import Image from "next/image";

export default function Camera() {
  return (
    <div className="h-screen bg-custom-image2">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="mb-8 text-6xl font-bold text-black">Камера</h1>

        <div className="bg-gray-200 square-rounded flex items-center justify-center">
          <Image src="/camera.svg" alt="camera" width={125} height={125} />
        </div>

        <p className="text-2xl mt-8">
          Убедитесь, что хотя бы одна камера подключена
        </p>

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
