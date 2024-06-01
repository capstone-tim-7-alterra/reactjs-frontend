export default function HeroSection () {
    return (
        <div className="hero min-h-screen bg-gray-100 flex flex-col justify-center items-center">
          <div className="text-center pb-8">
            <h1 className="text-4xl font-bold text-gray-800">Kreasi Nusantara</h1>
          </div>
          <div className="text-xl text-gray-600 px-8">
            <p>Embrace Local Creativity with Kreasi Nusantara</p>
          </div>
          <div className="flex justify-center items-center pt-6">
            <div className="text-gray-800 font-semibold px-4 mr-2">
              <p>Home</p>
            </div>
            <div className="text-gray-800 font-semibold px-4 mr-2">
              <p>Benefit</p>
            </div>
            <div className="text-gray-800 font-semibold px-4 mr-2">
              <p>Product</p>
            </div>
            <div className="text-gray-800 font-semibold px-4 mr-2">
              <p>Testimoni</p>
            </div>
          </div>
          <div className="flex justify-center pt-16">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download Now →
            </button>
          </div>
          <div className="flex justify-center pt-16">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-gray-800 font-semibold">Jones Adam</p>
              <p className="text-sm text-gray-500">
                The perfect opp for discovering and supporting local ortan
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 px-16">
              <p className="text-gray-800 font-semibold">Jenny Wilson</p>
              <p className="text-sm text-gray-500">
                This app is a must have! Its my go-to for local art events.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-gray-800 font-semibold">Ronald Richards</p>
              <p className="text-sm text-gray-500">
                One of the best local culture apps I have ever come across.
              </p>
            </div>
          </div>
        </div>
      );
}




  

