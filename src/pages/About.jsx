import aboutImage from '../assets/images/about.png';
import portraitImage from '../assets/images/portrait.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faWater, faDove, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between mt-6">
        {/* Left section with image */}
        <div className="md:w-1/2 relative">
          <img src={aboutImage} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Right section with content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How we work</h2>
          
          <div className="space-y-6">
            {/* Community centers */}
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#FF3D00] rounded-full flex justify-center items-center text-white mr-4">
                <FontAwesomeIcon icon={faHandsHelping} size="lg" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold">Community centers</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Charity law within the UK varies among England and Wales, Scotland and Northern Ireland, but the fundamental principles are the same.
                </p>
              </div>
            </div>

            {/* Data-driven approach */}
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#FF3D00] rounded-full flex justify-center items-center text-white mr-4">
                <FontAwesomeIcon icon={faWater} size="lg" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold">Data-driven approach</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Charity law within the UK varies among England and Wales, Scotland and Northern Ireland, but the fundamental principles are the same.
                </p>
              </div>
            </div>

            {/* Focused support */}
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#FF3D00] rounded-full flex justify-center items-center text-white mr-4">
                <FontAwesomeIcon icon={faDove} size="lg" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold">Focused support</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Charity law within the UK varies among England and Wales, Scotland and Northern Ireland, but the fundamental principles are the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-16 bg-gray-50 py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Monthly Visitors */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">1M</h3>
            <p className="text-gray-500">Monthly Visitors</p>
          </div>
          
          {/* Volunteers Connected */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">20M</h3>
            <p className="text-gray-500">Volunteers Connected</p>
          </div>
          
          {/* Countries Worldwide */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">80</h3>
            <p className="text-gray-500">Countries Worldwide</p>
          </div>

          {/* Volunteers Needed */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">2M</h3>
            <p className="text-gray-500">Volunteers Needed</p>
          </div>
        </div>
      </div>

      {/* New Section - Exact Layout */}
      <div className="mt-16 bg-white py-16 items-center justify-center flex">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left-Aligned Text */}
          <div className="md:w-1/2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              We love to help all the children that have problems in the world.
            </h2>
            <p className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              After 15 years we have many goals achieved.
            </p>
            <p className="text-gray-500">
              Dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Lorem ipsum dolor sit amet.
            </p>
          </div>

          {/* Statistics with Icons */}
          <div className="md:w-1/2 flex flex-wrap items-center justify-center mt-8 md:mt-0">
            {/* Children helped */}
            <div className="text-center w-1/3 md:w-auto mb-4">
              <FontAwesomeIcon icon={faHandsHelping} size="3x" className="text-[#FF3D00] mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold">120K</h3>
              <p className="text-gray-500">Children helped</p>
            </div>

            {/* Water wells */}
            <div className="text-center w-1/3 md:w-auto mb-4">
              <FontAwesomeIcon icon={faWater} size="3x" className="text-[#FF3D00] mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold">79</h3>
              <p className="text-gray-500">Water wells</p>
            </div>

            {/* Volunteers */}
            <div className="text-center w-1/3 md:w-auto mb-4">
              <FontAwesomeIcon icon={faDove} size="3x" className="text-[#FF3D00] mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold">253</h3>
              <p className="text-gray-500">Volunteers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 bg-gray-100 py-16 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="text-gray-400 mb-4" />
            <p className="text-gray-600 mb-6">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex items-center">
              <img src={portraitImage} alt="Person 1" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-lg">Roger Scott</h4>
                <p className="text-gray-500">Marketing Manager</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 bg-[#FF3D00] text-white rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="mb-4" />
            <p className="mb-6">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex items-center">
              <img src={portraitImage} alt="Person 2" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-lg">Roger Scott</h4>
                <p className="text-white">Marketing Manager</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="text-gray-400 mb-4" />
            <p className="text-gray-600 mb-6">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex items-center">
              <img src={portraitImage} alt="Person 3" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-lg">Roger Scott</h4>
                <p className="text-gray-500">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
