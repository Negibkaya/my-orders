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

export default function Auth() {
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
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Зарегистрируйтесь для получения аккаунта
            </h2>
          </div>

          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Адрес электронной почты
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Адрес электронной почты"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Пароль
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Пароль"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Запомнить меня
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Забыли пароль?
                </a>
              </div>
            </div>

            <div>
              <a
                href="/register"
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Зарегистрироваться
              </a>
            </div>
          </form>

          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Или войдите{" "}
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                здесь
              </a>
            </span>
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
