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
          <a href="/results" className="font-bold hover:underline">
            &lt; Назад к Результатам
          </a>

          <h1 className="text-4xl font-bold mt-8 mb-8">Трение</h1>

          <div className="text-gray-700 flex-grow">
            <p className="mb-8">
              Трение - это физический эффект, описывающий силу,
              противодействующую движению между двумя поверхностями в контакте.
              Извлеченные упоминания предоставляют информацию о свойствах трения
              материалов в текстовых документах.
            </p>

            <h3 className="text-xl font-bold mb-8">Контексты</h3>

            <p className="italic mb-4">
              "Коэффициент трения измерен при 0,7 для стали на полиэтилене при
              нормальной силе 100 фунтов..."
            </p>

            <p className="italic mb-16">
              "Значительное нагревание трения наблюдалось во время механического
              тестирования..."
            </p>

            <h3 className="text-xl font-bold mb-8 mt-4">Связанные Материалы</h3>

            <ul className="list-disc ml-8 text-gray-700">
              <li className="mb-8">Сталь</li>
              <li className="mb-8">Полиэтилен</li>
              <li className="mb-8">Медный сплав</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center">
        Физические явления - ключ к пониманию мира вокруг нас.
      </footer>
    </div>
  );
}
