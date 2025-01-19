import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-gray-900">
            MyAppShop
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
