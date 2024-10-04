import './App.css';
import Component from './components/component';

function App() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      <div className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-m font-semibold text-gray-700">Welcome 🤠</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          my name is <span style={{ color: '#d742f5' }}>ACM Hack</span> 🚀
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          aka the best club at UCLA 😎
        </p>
      </div>

      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-25rem)] aspect-[1155/678] w-[80rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-50rem)] sm:w-[110rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src='/images/image0.jpg'
                    alt="cool acm hack image"
                    className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10 w-full h-full object-cover"
                    style={{ padding: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">What are we?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Workshops, hackathons, a community, and so much more!
            </p>
          </div>
        </div>

        <ul className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <Component
            adjective="Awesome"
            title="Workshops!"
            description="Interactive workshops to learn and gain hands-on experience!"
            imgSrc="/images/image1.jpg"
          />
          <Component
            adjective="Beginner Friendly"
            title="Hackathons!"
            description="Hackathons that help you learn, grow, and create cool things!"
            imgSrc="/images/image2.jpg"
          />
          <Component
            adjective="Amazing"
            title="Community!"
            description="A group of coding enthusiasts who inspire and thrive together!"
            imgSrc="/images/image3.png"
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
