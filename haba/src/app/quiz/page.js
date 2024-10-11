import Head from "next/head";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function QuizPage() {
  return (
    <div>
      <Head>
        <title>Подбор продуктов</title>
      </Head>
      <header className="bg-green-500 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Добро пожаловать в мир ЗаЗдоровье!
          </h1>
          <p className="text-lg text-white">
            Вдохновляем вас на путь к здоровому образу жизни через правильное
            питание.
          </p>
          <nav className="mt-6 text-lg text-white font-bold">
            <div className="flex justify-between">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <li>
                  <Link href="/catalog">Каталог</Link>
                </li>
                <li>
                  <Link href="/quiz">Тесты</Link>
                </li>
                <li>
                  <Link href="/recommendedProducts">Рекомендуемые товары</Link>
                </li>
                <li>
                  <Link href="/order">Оформить заказ</Link>
                </li>
              </ul>
              <ul className="flex space-x-6">
                <li className="ml-auto">
                  <Link href="/login">
                    <FaGoogle
                      size={30}
                      className="border border-white rounded-full p-1"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Подбор продуктов</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="workoutType" className="font-bold mb-2">
                Тип тренировок:
              </label>
              <select
                id="workoutType"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              >
                <option value="">Выберите тип тренировок</option>
                <option value="Силовые тренировки">Силовые тренировки</option>
                <option value="Кардио тренировки">Кардио тренировки</option>
                <option value="Функциональные тренировки">
                  Функциональные тренировки
                </option>
              </select>
            </div>
            <div className="mb-4">
              <label className="font-bold">Цели:</label>
              <div className="flex flex-col">
                <label htmlFor="massGain" className="mr-4">
                  <input type="checkbox" id="massGain" value="Набор массы" />{" "}
                  Набор массы
                </label>
                <label htmlFor="fatLoss" className="mr-4">
                  <input type="checkbox" id="fatLoss" value="Сжигание жира" />{" "}
                  Сжигание жира
                </label>
                <label htmlFor="endurance" className="mr-4">
                  <input
                    type="checkbox"
                    id="endurance"
                    value="Повышение выносливости"
                  />
                  Повышение выносливости
                </label>
                <label htmlFor="muscleTone" className="mr-4">
                  <input
                    type="checkbox"
                    id="muscleTone"
                    value="Укрепление мышц"
                  />
                  Укрепление мышц
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="font-bold">Индивидуальные предпочтения:</label>
              <div className="flex flex-col">
                <label htmlFor="vegetarian" className="mr-4">
                  <input
                    type="checkbox"
                    id="vegetarian"
                    value="Вегетарианство"
                  />
                  Вегетарианство
                </label>
                <label htmlFor="allergies" className="mr-4">
                  <input type="checkbox" id="allergies" value="Аллергии" />{" "}
                  Аллергии
                </label>
                <label htmlFor="glutenFree" className="mr-4">
                  <input type="checkbox" id="glutenFree" value="Без глютена" />{" "}
                  Без глютена
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="budget" className="font-bold mb-2">
                Бюджет:
              </label>
              <input
                type="text"
                id="budget"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <Link href="/recommendedProducts">
              <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
                Найти продукты
              </button>
            </Link>
          </form>
        </section>
      </main>
    </div>
  );
}
