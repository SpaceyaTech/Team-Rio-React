import sampleImage from '../../assets/images/blog-post-sample-image.png';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${sampleImage})`, zIndex: -1 }}
      className="relative bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-4 sm:px-6 justify-center lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-center">
          <h1 className="text-xl font-bold text-white">Featured story</h1>

          <p className="mt-4 max-w-lg text-4xl text-white sm:leading-relaxed">
            The Big Question. Is coffee what keeps techies awake?
          </p>

          <div className="mt-8 flex justify-center gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded px-12 py-3 text-sm font-medium border border-white text-white shadow hover:bg-green-300 sm:w-auto"
            >
              Read Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
