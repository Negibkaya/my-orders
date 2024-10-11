import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const products = [
  {
    id: 7,
    name: "Клетчатка",
    description:
      "Поддерживает нормальное функционирование пищеварительной системы.",
    price: 8.99,
    image: "/fiber.png",
  },
  {
    id: 8,
    name: "Омега-3",
    description: "Способствует здоровью сердца и сосудов.",
    price: 12.99,
    image: "/omega.png",
  },
  {
    id: 9,
    name: "Коэнзим Q10",
    description: "Повышает энергию и улучшает общий тонус организма.",
    price: 17.99,
    image: "/conezim.png",
  },
];

export default function CartPage() {
  const renderProducts = () => {
    return products.map((product) => (
      <tr key={product.id}>
        <td className="py-2">
          <div className="flex items-center ml-4">
            <div className="w-16 h-16 mr-4">
              <Image
                src={product.image}
                alt={product.name}
                width={64}
                height={64}
                objectFit="cover"
              />
            </div>
            <div>
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        </td>
        <td className="py-2 text-center">
          <p className="font-bold">${product.price.toFixed(2)}</p>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <Head>
        <title>Корзина</title>
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
        <h2 className="text-2xl font-bold mb-4">Корзина</h2>
        {products.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Товар</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>{renderProducts()}</tbody>
            </table>
          </div>
        ) : (
          <p>Ваша корзина пуста.</p>
        )}
        <div className="mt-4">
          <Link href="/order">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Оформить заказ
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
