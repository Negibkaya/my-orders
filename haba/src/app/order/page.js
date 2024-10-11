import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function CheckoutPage() {
  const cartItemCount = 5;
  const products = [
    {
      id: 1,
      name: "Протеиновый порошок",
      description:
        "Отличный источник белка для восстановления после тренировок.",
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
    {
      id: 4,
      name: "Энергетический гель",
      description:
        "Быстрое пополнение энергии во время тренировок и соревнований.",
      price: 2.99,
      image: "/Energy_Gel.png",
    },
    {
      id: 5,
      name: "Витамины",
      description:
        "Комплекс витаминов и минералов для поддержания общего здоровья.",
      price: 9.99,
      image: "/Vitamins.jpg",
    },
    {
      id: 6,
      name: "Гейнер",
      description: "Помогает набрать мышечную массу и увеличить силу.",
      price: 34.99,
      image: "/Gainer.jpg",
    },
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

  return (
    <div>
      <Head>
        <title>Оформление заказа</title>
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
        <section className="flex">
          <div className="w-1/2 pr-4">
            <h2 className="text-2xl font-bold mb-4">
              Выберите продукты из вашей корзины:
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="p-4 border border-gray-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full mb-2"
                  />
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="mt-2">
                    <input type="checkbox" id={`product-${product.id}`} />
                    <label htmlFor={`product-${product.id}`} className="ml-2">
                      Добавить в заказ
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-2xl font-bold mb-4">Оформление заказа:</h2>
            <form className="mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block font-bold mb-2">
                  Адрес доставки
                </label>
                <textarea
                  id="address"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block font-bold mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600"
              >
                Оформить заказ
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
