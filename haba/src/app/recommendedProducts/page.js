import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function RecommendedProductsPage() {
  // Пример данных о рекомендованных товарах
  const recommendedProducts = [
    {
      id: 5,
      name: "Витамины",
      description:
        "Комплекс витаминов и минералов для поддержания общего здоровья.",
      price: 9.99,
      image: "/Vitamins.jpg",
    },
  ];

  return (
    <div>
      <Head>
        <title>Рекомендованные товары</title>
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
          <h2 className="text-2xl font-bold mb-4">Рекомендованные товары</h2>
          <div className="grid grid-cols-3 gap-4">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 shadow">
                <Link href="/product">
                  <div>
                    <a>
                      <div className="w-full h-100 mb-4 overflow-hidden flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={500}
                          height={500}
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p>{product.description}</p>
                      <p className="mt-2 font-bold">${product.price}</p>
                    </a>
                  </div>
                </Link>
                <button className="mt-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
                  Добавить в корзину
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
