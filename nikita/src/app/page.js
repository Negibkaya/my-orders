import Sidebar from "./sidebar";

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 flex justify-between h-full">
        <a className="font-bold text-xl">Извлекатель Эффекта</a>
      </header>

      <div className="flex flex-grow">
        <div className="w-48 p-4 bg-gray-200">
          <nav>
            <Sidebar />
          </nav>
        </div>

        <div className="p-8 w-full">
          <h1 className="text-4xl font-bold mt-4 mb-8">
            Извлечение Физических Эффектов из Текста
          </h1>

          <p className="text-gray-700 mb-4">
            Этот модуль использует глубокое обучение для определения описаний
            физических эффектов, таких как температура, давление, вибрация и
            т.д., из неструктурированных текстовых документов. Он может помочь
            анализировать явления, описываемые в научных статьях, отчетах,
            руководствах и т.д.
          </p>

          <a
            href="/data"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Начать Анализ
          </a>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Особенности</h2>

          <ul className="list-disc ml-8 text-gray-700">
            <li>Нейронная сеть, обученная на размеченных научных текстах</li>
            <li>Извлекает упоминания эффектов с точностью более 70%</li>
            <li>Определяет связанный контекст/материалы/измерения</li>
            <li>Предоставляет JSON-вывод для дальнейшего анализа</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Как пользоваться</h2>

          <ol className="list-decimal ml-8 text-gray-700">
            <li>Зарегистрируйтесь на сайте</li>
            <li>
              Загрузите документы или датасеты в формате JSON для обучения
              модели
            </li>
            <li>Укажите метки ожидаемых эффектов для обучения</li>
            <li>Нажмите кнопку "Загрузить и Провести Анализ"</li>
            <li>Посмотрите результаты извлечения эффектов из текста</li>
          </ol>
        </div>
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center">
        Физические явления - ключ к пониманию мира вокруг нас.
      </footer>
    </div>
  );
}
