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

export default function CustomizeInterface() {
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
        <h1 className="text-3xl font-bold">Настроить интерфейс игры</h1>

        <p className="max-w-xl text-gray-600 mb-8">
          Настройте интерфейс игры и сложность в соответствии с возможностями
          пользователя.
        </p>

        <div className="bg-white w-full max-w-3xl rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-lg font-medium mb-4">Настройки интерфейса</h2>

            <div className="mb-4">
              <label className="text-gray-700 font-medium">Размер текста</label>
              <select className="w-full border rounded p-2 text-gray-700">
                <option>Маленький</option>
                <option>Средний</option>
                <option>Большой</option>
                <option>Очень большой</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="text-gray-700 font-medium">
                Размер значков
              </label>
              <select className="w-full border rounded p-2 text-gray-700">
                <option>Маленький</option>
                <option>Средний</option>
                <option>Большой</option>
              </select>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div className="px-6 py-4">
            <h2 className="text-lg font-medium mb-4">Сложность игры</h2>

            <div className="mb-4 flex items-center">
              <input
                id="easy"
                name="difficulty"
                type="radio"
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <label htmlFor="easy" className="ml-2 text-gray-700 font-medium">
                Легко
              </label>
            </div>

            <div className="mb-4 flex items-center">
              <input
                id="medium"
                name="difficulty"
                type="radio"
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <label
                htmlFor="medium"
                className="ml-2 text-gray-700 font-medium"
              >
                Средне
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="hard"
                name="difficulty"
                type="radio"
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <label htmlFor="hard" className="ml-2 text-gray-700 font-medium">
                Трудно
              </label>
            </div>
          </div>

          <div className="px-6 py-4">
            <a
              href="/customizeInterface"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            >
              Сохранить настройки
            </a>
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
