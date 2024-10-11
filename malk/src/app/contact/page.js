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

export default function Contact() {
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
        <h1 className="text-3xl font-bold mb-4">Свяжитесь с нами</h1>

        <div className="bg-white w-full max-w-3xl rounded-lg shadow overflow-hidden border border-gray-300">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold mb-4">Свяжитесь с нами</h2>

            <p className="mb-4">
              Есть вопросы по поводу нашего адаптивного интерфейса для лиц с
              умственными ограничениями? Хотите предложить обратную связь для
              улучшения? Пожалуйста, заполните форму ниже или свяжитесь с нами
              напрямую.
            </p>

            <div className="text-gray-700 mb-8">
              <div className="font-medium">Телефон:</div>
              <div>(555) 123-4567</div>

              <div className="font-medium mt-3">Эл. почта:</div>
              <div>info@adaptableinterface.com</div>
            </div>
          </div>

          <hr className="border-gray-300 " />

          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold mb-4">Форма обратной связи</h2>

            <form>
              <div className="mb-4">
                <label className="text-gray-700 font-medium">Имя</label>
                <input
                  className="mt-2 w-full border rounded p-2 text-gray-700"
                  type="text"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-700 font-medium">Эл. почта</label>
                <input
                  className="mt-2 w-full border rounded p-2 text-gray-700"
                  type="email"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-700 font-medium">Сообщение</label>
                <textarea className="mt-2 w-full border rounded p-2 text-gray-700 h-32"></textarea>
              </div>

              <a
                href="/contact"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
              >
                Отправить сообщение
              </a>
            </form>
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
