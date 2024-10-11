import Sidebar from "../sidebar";

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
            Загрузка Данных (документы/датасеты)
          </h1>

          <p className="mb-4 text-gray-700">
            Загрузите документы или датасеты в формате JSON для анализа с
            помощью нашей модели по извлечению эффектов физических. Оба вида
            данных и метки ожидаемых эффектов обязательны.
          </p>

          <div className="bg-grey-lighter p-8 mb-8 rounded shadow">
            <form>
              <div className="mb-4">
                <label className="block font-bold">
                  Документы или Датасет (.json)
                </label>
                <input type="file" className="border p-2 rounded w-full" />
              </div>

              <div className="mb-4">
                <label className="block font-bold">Метки (.json)</label>
                <input type="file" className="border p-2 rounded w-full" />
              </div>

              <a
                href="/results"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Загрузить и Провести Анализ
              </a>
            </form>
          </div>

          <h2 className="text-2xl font-semibold mb-4 mt-8">
            Ранее Загруженные Данные
          </h2>

          <p className="mb-4 text-gray-700">
            Ранее загруженные документы или датасеты.
          </p>

          <div className="overflow-x-auto italic underline">Пока пусто</div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center">
        Физические явления - ключ к пониманию мира вокруг нас.
      </footer>
    </div>
  );
}
