import causesImage from '../assets/images/causes.jpg';
import featureImage from '../assets/images/feature.webp';
import kidsImage from '../assets/images/kids.webp';

// First section - Fundraiser Cards with Image on Left, Content on Right
const FundraiserSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 mb-8">
      {/* First Card */}
      <div className="max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mb-4 mt-24"> {/* Increased mt-24 here */}
        <img
          className="w-full h-48 md:w-1/2 object-cover" // Full width on mobile, half on larger screens
          src={featureImage}
          alt="Kids with camera"
        />
        <div className="w-full p-4 flex flex-col justify-between md:w-1/2">
          <div>
            <h2 className="text-gray-800 font-bold text-xl">Fundraiser for Kids</h2>
            <p className="text-sm text-gray-600 mt-2">Aug 25, 2018 | Ball Room New York</p>
            <p className="mt-2 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus...
            </p>
          </div>
          <div className="flex flex-col">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full mt-4">Donate Now</button>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">$56,880 Raised</span>
                <span className="text-gray-700 font-bold">$70,000 Goal</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: '83%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mb-4 mt-24"> {/* Increased mt-24 here */}
        <img
          className="w-full h-48 md:w-1/2 object-cover" // Full width on mobile, half on larger screens
          src={kidsImage}
          alt="Smiling girl"
        />
        <div className="w-full p-4 flex flex-col justify-between md:w-1/2">
          <div>
            <h2 className="text-gray-800 font-bold text-xl">Fundraiser for Kids</h2>
            <p className="text-sm text-gray-600 mt-2">Aug 25, 2018 | Ball Room New York</p>
            <p className="mt-2 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus...
            </p>
          </div>
          <div className="flex flex-col">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full mt-4">Donate Now</button>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">$56,880 Raised</span>
                <span className="text-gray-700 font-bold">$70,000 Goal</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: '83%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Second section - Existing Causes Component
const Causes = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 mt-4">
      <div className="p-4">
        <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">Education</span>
        <h2 className="mt-2 text-gray-800 font-bold text-xl">Education For African Children</h2>
        <p className="mt-2 text-gray-600 text-sm">Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">$10,000 Goal</span>
            <span className="text-gray-700 font-bold">$9,542 Raised</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-full h-48 object-cover"
          src={causesImage}
          alt="Children on swings"
        />
      </div>
    </div>
  );
};

// CausesSection component to display multiple Causes in a three-column layout
const CausesSection = () => {
  return (
    <div className="flex flex-wrap justify-between max-w-6xl mx-auto">
      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <Causes />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <Causes />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <Causes />
      </div>
    </div>
  );
};

// Main component rendering both sections
const MainComponent = () => {
  return (
    <div>
      <FundraiserSection />
      <CausesSection /> {/* Updated to include the new CausesSection */}
    </div>
  );
};

export default MainComponent;
