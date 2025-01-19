const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="mt-6 text-center border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} MyAppShop. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
