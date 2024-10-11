import Image from "next/image";
import {
  FaHeadphones,
  FaCheck,
  FaClock,
  FaHome,
  FaCog,
  FaGamepad,
  FaPhone,
  FaUserPlus,
} from "react-icons/fa";

export default function EducationalGame() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <nav className="bg-purple-600 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-4 justify-start">
                <a href="/" className="text-white">
                  <FaHome className="inline-block mr-2" />
                  Главная
                </a>
                <a href="/customizeInterface" className="text-white">
                  <FaCog className="inline-block mr-2" />
                  Настроить интерфейс
                </a>
                <a href="/educationGame" className="text-white">
                  <FaGamepad className="inline-block mr-2" />
                  Образовательная Игра
                </a>
                <a href="/contact" className="text-white">
                  <FaPhone className="inline-block mr-2" />
                  Контакты
                </a>
              </div>
              <div className="flex space-x-4 justify-end">
                <a href="/register" className="text-white">
                  <FaUserPlus className="inline-block mr-2" />
                  Регистрация
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Образовательная Игра</h1>

        <div className="bg-white shadow overflow-hidden rounded-lg max-w-3xl w-full">
          <div className="px-6 py-4">
            <h2 className="text-lg font-medium mb-2">Экран Игры</h2>

            <Image
              src="/game.png"
              alt="Скриншот Игры"
              width={500}
              height={300}
            />
          </div>

          <hr className="border-gray-300" />

          <div className="px-6 py-4">
            <h2 className="text-lg font-medium mb-4">Как играть</h2>

            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>
                <FaHeadphones className="inline-block mr-2" />
                Внимательно слушайте аудиоинструкции
              </li>
              <li>
                <FaCheck className="inline-block mr-2" />
                Выберите изображение, соответствующее инструкциям
              </li>
              <li>
                <FaClock className="inline-block mr-2" />У вас есть 30 секунд
                для выбора
              </li>
            </ul>
          </div>

          <hr className="border-gray-300" />

          <div className="px-6 py-4 pb-6 flex justify-between items-center">
            <h2 className="text-lg font-medium">Настройки Игры</h2>

            <div>
              <a
                href="/customizeInterface"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Настроить
              </a>
              <a
                href="/educationGame"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Играть снова
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-purple-600 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <p className="text-white">
              © 2023 Все права защищены. Веб-сайт для людей с умственными
              ограничениями.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
