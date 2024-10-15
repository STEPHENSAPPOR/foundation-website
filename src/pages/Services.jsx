import oneImage from '../assets/images/one.webp';
import twoImage from '../assets/images/two.webp';
import threeImage from '../assets/images/three.webp';
import canImage from '../assets/images/can.webp';
import willImage from '../assets/images/will.webp';
import doneImage from '../assets/images/done.webp';
import homeImage from '../assets/images/home.jpg';


const Services = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Service Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-[#FF3D00] mb-4">
              {/* Icon for Child Education */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 7v-5l-9-5m18 0l-9 5v5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Child Education</h3>
            <p className="text-gray-500 mt-2 mb-4">
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
            </p>
            <a
              href="#"
              className="text-white bg-[#FF3D00] hover:bg-orange-600 px-4 py-2 rounded inline-flex items-center"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4V8a1 1 0 112 0v6a1 1 0 11-2 0zm1-7a1 1 0 110-2 1 1 0 010 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-[#FF3D00] mb-4">
              {/* Icon for Medical Treatment */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h4.293a1 1 0 01.707.293l7.707 7.707A1 1 0 0120 11.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Medical Treatment</h3>
            <p className="text-gray-500 mt-2 mb-4">
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
            </p>
            <a
              href="#"
              className="text-white bg-[#FF3D00] hover:bg-orange-600 px-4 py-2 rounded inline-flex items-center"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4V8a1 1 0 112 0v6a1 1 0 11-2 0zm1-7a1 1 0 110-2 1 1 0 010 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-[#FF3D00] mb-4">
              {/* Icon for Pure Drinking Water */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8h18M5 10v5a5 5 0 0010 0v-5h4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Pure Drinking Water</h3>
            <p className="text-gray-500 mt-2 mb-4">
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
            </p>
            <a
              href="#"
              className="text-white bg-[#FF3D00] hover:bg-orange-600 px-4 py-2 rounded inline-flex items-center"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4V8a1 1 0 112 0v6a1 1 0 11-2 0zm1-7a1 1 0 110-2 1 1 0 010 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* New Section: Upcoming Events and Featured Cause */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming Events */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <div className="space-y-6">
              {/* Event 1 */}
              <div className="flex space-x-4">
                <img
                  src={oneImage}
                  alt="Event 1"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Fundraiser for Kids</h3>
                  <p className="text-gray-500">Aug 25, 2018 | Ball Room New York</p>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="text-[#FF3D00]">Read More</a>
                </div>
              </div>

              {/* Event 2 */}
              <div className="flex space-x-4">
                <img
                  src={twoImage}
                  alt="Event 2"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Bring water to the children</h3>
                  <p className="text-gray-500">Aug 25, 2018 | Ball Room New York</p>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="text-[#FF3D00]">Read More</a>
                </div>
              </div>

              {/* Event 3 */}
              <div className="flex space-x-4">
                <img
                  src={threeImage}
                  alt="Event 3"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Bring water to the children</h3>
                  <p className="text-gray-500">Aug 25, 2018 | Ball Room New York</p>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="text-[#FF3D00]">Read More</a>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Cause */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Cause</h2>
            <img
              src={homeImage}
              alt="Featured Cause"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Fundraiser for Kids</h3>
            <p className="text-gray-500">Aug 25, 2018 | Ball Room New York</p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div className="bg-[#FF3D00] h-4 rounded-full" style={{ width: '83%' }}></div>
            </div>
            <p className="text-gray-600">Raised: $56,880 / $70,000</p>
            <button className="mt-4 text-white bg-[#FF3D00] hover:bg-orange-600 px-4 py-2 rounded w-full">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Fundraising Campaigns</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Fundraising Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={canImage} alt="Campaign 1" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold text-gray-800 mt-4">Education for All</h3>
            <p className="text-gray-500 mt-2">Helping children in rural areas access quality education.</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
              <div className="bg-[#FF3D00] h-4 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between text-gray-600 mt-2">
              <p>Raised: $45,000</p>
              <p>Goal: $60,000</p>
            </div>
          </div>

          {/* Fundraising Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={willImage} alt="Campaign 2" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold text-gray-800 mt-4">Clean Water Initiative</h3>
            <p className="text-gray-500 mt-2">Providing clean water to communities in need for domestic use</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
              <div className="bg-[#FF3D00] h-4 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between text-gray-600 mt-2">
              <p>Raised: $36,000</p>
              <p>Goal: $60,000</p>
            </div>
          </div>

          {/* Fundraising Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={doneImage} alt="Campaign 3" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold text-gray-800 mt-4">Medical Relief Fund</h3>
            <p className="text-gray-500 mt-2">Supporting medical relief efforts for families in crisis.</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
              <div className="bg-[#FF3D00] h-4 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <div className="flex justify-between text-gray-600 mt-2">
              <p>Raised: $24,000</p>
              <p>Goal: $60,000</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  
    </div>
  );
};

export default Services;
