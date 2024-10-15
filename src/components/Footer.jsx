const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Us Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Heaven Waves Foundation</h3>
            <p className="text-gray-400">
              We are dedicated to supporting children and communities with care, education, and empowerment for a better tomorrow.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-white transition duration-200">Home</a></li>
              <li><a href="/about" className="hover:text-white transition duration-200">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition duration-200">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="text-gray-400">+233 53 777 9509 <br />
              +233 50 955 0849</li>
              <li className="text-gray-400">Email: info@heavenwaves.org</li>
              <li className="text-gray-400">Address: P.O.BOX,  SW 445
              Agona Swedru, Central Region</li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex flex-wrap space-x-4">
              <a href="#" className="hover:text-white transition duration-200">
                <svg className="w-6 h-6 fill-current text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18.5 2h-13A3.5 3.5 0 002 5.5v13A3.5 3.5 0 005.5 22h13a3.5 3.5 0 003.5-3.5v-13A3.5 3.5 0 0018.5 2zM9.75 17h-2.5v-6.75h2.5V17zm-1.25-7.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM17.5 17h-2.5v-3.75c0-.69-.56-1.25-1.25-1.25h-.01c-.69 0-1.24.56-1.24 1.25V17h-2.5v-6.75h2.5v.92a3.498 3.498 0 013.25-1.67 3.5 3.5 0 013.5 3.5V17z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                <svg className="w-6 h-6 fill-current text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43 1a9.03 9.03 0 01-2.88 1.1A4.51 4.51 0 0016.61 0c-2.5 0-4.5 2-4.5 4.5a4.48 4.48 0 001.11 2.85A12.8 12.8 0 012.9 1.77a4.48 4.48 0 00-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.48 4.48 0 01-2.03-.56v.06a4.5 4.5 0 003.61 4.42 4.5 4.5 0 01-2.03.08 4.51 4.51 0 004.21 3.12 9.07 9.07 0 01-6.63 1.85 12.8 12.8 0 006.93 2.03c8.31 0 12.85-6.9 12.85-12.86 0-.2 0-.39-.01-.59A9.24 9.24 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                <svg className="w-6 h-6 fill-current text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM12 20.25a8.25 8.25 0 110-16.5 8.25 8.25 0 010 16.5zM12 10.5A2.25 2.25 0 109.75 12 2.25 2.25 0 0012 10.5z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Heaven Waves Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
