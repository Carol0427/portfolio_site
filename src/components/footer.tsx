const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <p className="text-center text-gray-700">
            &copy; {CURRENT_YEAR} Made with{" "}
            <a 
              href="https://www.material-tailwind.com" 
              target="_blank"
              className="text-gray-900 hover:text-gray-700 transition-colors"
            >
              Material Tailwind
            </a>{" "}
            by{" "}
            <a 
              href="https://www.creative-tim.com" 
              target="_blank"
              className="text-gray-900 hover:text-gray-700 transition-colors"
            >
              Creative Tim
            </a>
            .
          </p>
          <ul className="flex flex-wrap items-center gap-8">
            {LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
            <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
              Subscribe
            </button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
