import homeImage from '../assets/images/home.jpg';
import donateImage from '../assets/images/donate.jpg';
import About from './About';
import Services from './Services';

const Home = () => {
  return (
    <div className='mb-10'>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeImage})`,
            filter: 'brightness(0.5)', // Optional: Darken the image slightly for better text visibility
          }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-4">
          <div className="mb-8 mt-40">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Children Need <span className="text-[#FF014F]">Your Help</span>
            </h1>
            {/* Subheading */}
            <p className="text-lg md:text-2xl mb-6">
              We build strength, stability, and self-reliance through shelter.
            </p>
          </div>
          {/* Act Now Button */}
          <button className="bg-[#FF014F] hover:bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg transition">
            Act Now
          </button>
        </div>
      </div>

      {/* New Call-to-Action Section */}
      <div className="mt-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Block 1 */}
          <div className="bg-[#FF014F] text-white py-8 px-4 text-center">
            <h3 className="text-xl font-bold mb-4">
              We’ve been tackling poverty in communities to build better lives
            </h3>
            <a
              href="#"
              className="inline-block text-white underline font-medium text-lg"
            >
              Learn More →
            </a>
          </div>
          {/* Block 2 */}
          <div className="bg-gray-900 text-white py-8 px-4 text-center">
            <h3 className="text-xl font-bold mb-4">
              The great journey to end poverty for good begins with a child.
            </h3>
            <a
              href="#"
              className="inline-block text-white underline font-medium text-lg"
            >
              Donate Now →
            </a>
          </div>
          {/* Block 3 */}
          <div className="bg-green-400 text-white py-8 px-4 text-center">
            <h3 className="text-xl font-bold mb-4">
              Join our community to help bring clean and safe drinking water
            </h3>
            <a
              href="#"
              className="inline-block text-white underline font-medium text-lg"
            >
              Become A Volunteer →
            </a>
          </div>
        </div>
      </div>

      <About />

      {/* Testimonial Section */}
      <div className="my-16 px-4 text-center">
        <p className="bg-orange-100 text-orange-600 inline-block rounded-full px-3 py-1 mb-4 text-sm font-medium">
          Testimonial
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Trusted By Thousands Of People And Nonprofits
        </h2>
        <div className="flex justify-center">
          <div className="text-center">
            {/* User Image */}
            <img
              className="rounded-full border-4 border-orange-500 mx-auto w-24 h-24 object-cover mb-6"
              src={homeImage} // Replace with the actual image path
              alt="Testimonial"
            />
            {/* Testimonial Text */}
            <p className="text-gray-700 max-w-xl mx-auto mb-6">
              Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
              duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
              erat magna elitr erat sit sit erat at rebum justo sea clita.
            </p>
            {/* Donor Name and Profession */}
            <p className="font-bold text-lg">Doner Name</p>
            <p className="text-orange-500">Profession</p>
          </div>
        </div>
      </div>

      {/* New Section (Clone of Uploaded UI) */}
      <div className="text-black py-16 px-6 md:px-16">
        <div className="md:flex items-center">
          {/* Text Content on the left */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We love to help all the children that have problems in the world.
              After 15 years we have many goals achieved.
            </h2>
            <p className="text-gray-400 mb-4">
              Dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Lorem ipsum dolor sit amet.
            </p>
          </div>

          {/* Child Image on the right */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={donateImage} // Replace with the actual image path
              alt="Child"
              className="w-full max-w-md mx-auto md:mx-0 rounded-lg"
            />
          </div>
        </div>

        {/* Progress Bar and Donation Stats under the image */}
        <div className="mt-8">
          {/* Donation Stats */}
          <div className="flex justify-between items-center mb-4">
            <span>Raised: $56,880</span>
            <span>Goal: $70,000</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full rounded-full h-4 mb-4">
            <div className="bg-[#FF014F] h-4 rounded-full" style={{ width: '83%' }}></div>
          </div>

          {/* Percentage Text */}
          <div className="flex justify-between items-center">
            <span className="text-[#FF014F] font-bold">83%</span>
          </div>

          {/* Donate Button */}
          <button className="mt-6 bg-[#FF014F] hover:bg-green-500 text-white px-6 py-3 rounded-full font-bold">
            Donate Now
          </button>
        </div>
      </div>

      <Services />
    </div>
  );
};

export default Home;
