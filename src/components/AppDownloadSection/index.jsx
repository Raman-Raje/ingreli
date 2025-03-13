import Image from 'next/image';
import Link from 'next/link';

const AppDownloadSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-8">

        {/* Mobile App Image (Left Side on Desktop) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-72 md:w-80 lg:w-96">
            <Image
              src="/app-image.png"
              alt="Carbon Budget App"
              width={400}
              height={800}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Content (Right Side on Desktop) */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Get the App
          </h2>
          <p className="text-lg text-gray-600">
            Download for free, without ads and no tracking.
          </p>

          {/* App Store Buttons - Centered on Mobile & Desktop */}
          <div className="flex flex-row justify-center md:justify-start gap-3">
            <Link href="https://play.google.com/store" className="inline-block">
              <Image
                src="/google-play.svg"
                alt="Get it on Google Play"
                width={180}
                height={53}
                className="w-40 md:w-48"
              />
            </Link>
            <Link href="https://apps.apple.com" className="inline-block">
              <Image
                src="/apple-store.svg"
                alt="Download on the App Store"
                width={180}
                height={53}
                className="w-40 md:w-48"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;