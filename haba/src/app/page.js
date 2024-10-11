import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Протеиновый порошок",
    description: "Отличный источник белка для восстановления после тренировок.",
    price: 29.99,
    image: "/protein-powder.jpg",
  },
  {
    id: 2,
    name: "BCAA",
    description:
      "Помогает уменьшить мышечное разрушение и ускоряет восстановление.",
    price: 19.99,
    image: "/BCAA.png",
  },
  {
    id: 3,
    name: "Креатин",
    description: "Повышает силовые показатели и способствует росту мышц.",
    price: 14.99,
    image: "/Creatine.png",
  },
];

export default function Home() {
  const renderProducts = () => {
    return products.map((product) => (
      <div
        key={product.id}
        className="border border-gray-200 rounded-md overflow-hidden shadow-lg"
      >
        <div className="w-full h-100 mb-4 overflow-hidden flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-green-600 font-semibold">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Head>
        <title>ЗаЗдоровье - Правильное питание</title>
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
          <h2 className="text-2xl font-bold mb-4">О наших продуктах</h2>
          <p className="text-lg mt-4">
            ЗаЗдоровье - это не просто магазин продуктов. Это центр, где каждая
            упаковка представляет собой заЗдоровье и заЗарядку энергии для вашей
            жизни. Мы стремимся вдохновлять вас на путь к здоровому образу жизни
            через правильное питание.
          </p>
          <p className="text-lg mt-4">
            Наши продукты тщательно отобраны и разработаны, чтобы обеспечить ваш
            организм всем необходимым для активной и здоровой жизни. От
            протеиновых порошков до органических закусок - мы предлагаем только
            лучшее для вашего заЗдоровья.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Примеры товаров</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderProducts()}
          </div>
        </section>
      </main>
    </div>
  );
}
