export default function Sidebar() {
  return (
    <div>
      <nav className="ml-2">
        <ul className="mt-16 text-sm">
          <li className="font-bold text-2xl mb-10">Страницы</li>
          <li>
            <a href="/" className="block py-4">
              Главная
            </a>
          </li>
          <li>
            <a href="/data" className="block py-4">
              Данные
            </a>
          </li>
          <li>
            <a href="/results" className="block py-4">
              Результаты
            </a>
          </li>
        </ul>

        <ul className="mt-16 text-sm">
          <li className="font-bold text-2xl mb-10">Аккаунт</li>
          <li>
            <a href="/register" className="block py-4">
              Регистрация
            </a>
          </li>
          <li>
            <a href="/register" className="block py-4">
              Логин
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
