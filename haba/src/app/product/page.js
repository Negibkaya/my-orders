import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function ProductPage() {
  // Пример данных о товаре
  const product = {
    id: 1,
    name: "Протеиновый порошок",
    description: "Отличный источник белка для восстановления после тренировок.",
    price: 29.99,
    image: "/protein-powder.jpg",
  };

  return (
    <div>
      <Head>
        <title>{product.name}</title>
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
        <div className="flex">
          <div className="w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2 px-8">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-bold mb-4">${product.price}</p>
            <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
              Добавить в корзину
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
