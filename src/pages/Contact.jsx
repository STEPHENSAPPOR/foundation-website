import contactImage from '../assets/images/contact.jpeg'; // Make sure the path is correct

const Contact = () => {
  return (
    <div
      className="bg-gray-800 text-white py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      <div className="bg-black bg-opacity-70 py-16 rounded-lg shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
          {/* Left Section - Contact Info */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6 text-[#FF3D00]">Want to get involved?</h2>
            <div className="mb-6 space-y-4">
              <p className="flex items-center mb-2 text-lg">
                <svg
                  className="w-6 h-6 mr-2 text-[#FF3D00]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-13zM5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm3 1h2v4H8V5zm4 4h2v4h-2V9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="hover:text-[#FF3D00] transition duration-300">New York: 1800-2355-2356</span>
              </p>
              <p className="flex items-center mb-2 text-lg">
                <svg
                  className="w-6 h-6 mr-2 text-[#FF3D00]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2a1 1 0 01.993.883L15 3v14a1 1 0 01-.883.993L14 18H6a1 1 0 01-.993-.883L5 17V3a1 1 0 01.883-.993L6 2h8zM7 12a1 1 0 100 2h6a1 1 0 100-2H7zm0-4a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="hover:text-[#FF3D00] transition duration-300">contact@Chariti.theme</span>
              </p>
              <p className="text-lg hover:text-[#FF3D00] transition duration-300">
                Box 3233, 1810 Kings Way, King Street, 5th Avenue, New York
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              {['facebook-f', 'linkedin-in', 'skype', 'twitter', 'whatsapp'].map((icon) => (
                <a
                  href="#"
                  className="text-white hover:text-[#FF3D00] transition duration-300"
                  key={icon}
                >
                  <i className={`fab fa-${icon} text-2xl`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2 bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg mt-8 md:mt-0">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form>
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-1/2 p-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-1/2 p-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                />
              </div>
              <div className="flex space-x-4 mb-4">
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-1/2 p-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                />
                <input
                  type="text"
                  placeholder="Phone*"
                  className="w-1/2 p-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Subject*"
                  className="w-full p-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message*"
                  rows="5"
                  className="w-full p-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#FF3D00] text-white px-6 py-2 rounded-lg hover:[#FF3D00] transition duration-300 font-bold shadow-md transform hover:scale-105"
              >
                SUBMIT NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
