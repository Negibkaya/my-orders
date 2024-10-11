import Sidebar from "../sidebar";

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 flex justify-between h-full">
        <a className="font-bold text-xl">Извлекатель Эффекта</a>
      </header>

      <div className="flex flex-grow">
        <div className="w-44 p-4 bg-gray-200">
          <nav>
            <Sidebar />
          </nav>
        </div>

        <div className="p-8 w-full max-w-md mx-auto flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-8">Зарегистрироваться</h1>

          <form className="flex flex-col justify-center items-center">
            <div className="mb-4">
              <label className="block font-bold mb-2">Имя</label>
              <input type="text" className="border p-2 w-full rounded" />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2">Электронная почта</label>
              <input type="email" className="border p-2 w-full rounded" />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2">Пароль</label>
              <input type="password" className="border p-2 w-full rounded" />
            </div>

            <a
              href="/register"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Зарегистрироваться
            </a>
          </form>

          <div className="mt-4 text-sm text-gray-700">
            Уже есть аккаунт?
            <a
              href="/register"
              className="font-medium text-indigo-500 hover:text-indigo-600"
            >
              {" "}
              Войти
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center">
        Физические явления - ключ к пониманию мира вокруг нас.
      </footer>
    </div>
  );
}
