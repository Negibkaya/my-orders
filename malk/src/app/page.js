import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
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
                  Образовательная игра
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
        <h1 className="text-3xl font-bold mb-4">
          Адаптивные игры для людей с ограниченными умственными возможностями
        </h1>

        <p className="max-w-xl text-gray-600 text-center mb-8">
          Наш сайт посвящен созданию адаптивных игр, специально разработанных
          для улучшения доступности и развития умственных возможностей людей с
          ограничениями. Мы стремимся предоставить простой и понятный интерфейс,
          который адаптируется к потребностям каждого пользователя.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-3xl w-full">
          <div className="rounded overflow-hidden shadow-lg">
            <Image
              className="w-full"
              src="/adaptive.png"
              alt="Изображение интерфейса 1"
              width={500}
              height={300}
            />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Адаптивные игры</div>

              <p className="text-gray-600 text-base">
                Наш сайт предлагает широкий выбор адаптивных игр, которые
                помогут развивать умственные возможности людей с ограничениями.
                Игры адаптируются к уровню сложности и потребностям каждого
                пользователя.
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <Link
                href="/contact"
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                Перейти к контактам
              </Link>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg">
            <Image
              className="w-full"
              src="/interface.png"
              alt="Изображение интерфейса 2"
              width={500}
              height={300}
            />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Адаптивный интерфейс</div>

              <p className="text-gray-600 text-base">
                Наш интерфейс разработан с учетом потребностей людей с
                ограниченными умственными возможностями. Он обеспечивает простую
                и интуитивно понятную навигацию, чтобы каждый пользователь мог
                легко использовать сайт и наслаждаться играми.
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <Link
                href="/customizeInterface"
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                Перейти к интерфейсу
              </Link>
            </div>
          </div>
        </div>

        <Link
          href="/educationGame"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Перейти к игре
        </Link>
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
