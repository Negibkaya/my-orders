import Head from "next/head";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Вход</title>
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
        <div className="max-w-md mx-auto bg-white p-8 shadow">
          <h2 className="text-xl font-bold mb-4">Вход в аккаунт</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Пароль
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Войти
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-gray-500 text-sm">
            Нету аккаунта?{" "}
            <Link
              href="/register"
              className="font-medium text-green-500 hover:text-green-600"
            >
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
