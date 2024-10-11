import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen bg-custom-gradient">
      <div className="flex flex-col items-center justify-center p-8 w-1/2">
        <h1 className="mb-12 text-6xl text-black" style={{ lineHeight: "1.5" }}>
          Добро пожаловать <br /> в <b>UnphysCtrl!</b>
        </h1>

        <a href="/setting" className="button-custom">
          Настройки
        </a>

        <a href="/request" className="button-custom">
          Запрос
        </a>

        <a href="/camera" className="button-custom">
          Камера
        </a>

        <a href="/contact" className="button-custom">
          Справка
        </a>
      </div>

      <div className="flex items-center justify-center relative flex-1">
        <Image
          src="/main.jpg"
          alt="main"
          width={500}
          height={1000}
          className="image-rounded"
        />
      </div>
    </div>
  );
}
