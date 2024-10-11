import Sidebar from "../sidebar";

export default function Register() {
  const data = [
    {
      title: "Отчет о тестировании материалов",
      effects: ["Трение", "тепло", "напряжение", "вибрация"], // Разделяйте эффекты запятыми
      contexts:
        "Трение наблюдалось во время испытаний на скольжение, тепло генерировалось при постоянной нагрузке, ультразвуковая вибрация не выдержала при высокой амплитуде...",
    },
    {
      title: "Статья A234",
      effects: ["Теплопроводность", "излучение"], // Разделяйте эффекты запятыми
      contexts:
        "Моделирование теплопроводности через композитную плиту, измерение интенсивности излучения...",
    },
  ];

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
          <h1 className="text-4xl font-bold mt-4 mb-8">Результаты Анализа</h1>

          <p className="mb-8 text-gray-700">
            Физические эффекты, извлеченные из загруженных документов после
            прохождения через модель глубокого обучения.
          </p>

          {data.map((item, index) => (
            <div
              key={index}
              className="bg-grey-lighter p-8 mb-8 rounded shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="mb-2">
                <span className="font-bold">Найденные эффекты:</span>
                {item.effects.map((effect, index) => (
                  <a
                    href="/item"
                    className="text-blue-600 hover:underline"
                    key={index}
                  >
                    {" "}
                    {effect}{" "}
                  </a>
                ))}
              </p>
              <p>
                <span className="font-bold">Ключевые контексты:</span>{" "}
                {item.contexts}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center">
        Физические явления - ключ к пониманию мира вокруг нас.
      </footer>
    </div>
  );
}
