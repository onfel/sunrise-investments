export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-950 dark:to-stone-900">
      <div className="max-w-5xl mx-auto px-12 py-24">
        {/* Hero Section */}
        <header className="text-center mb-32">
          <h1 className="text-6xl md:text-8xl font-bold text-stone-900 dark:text-stone-100 mb-12 tracking-wide leading-tight">
            Sunrise Investments
          </h1>
          <div className="w-32 h-0.5 bg-amber-600 mx-auto mb-16"></div>
          <p className="text-3xl md:text-4xl text-stone-700 dark:text-stone-300 font-medium leading-relaxed tracking-wide">
            Rising with the Sun, Growing with Every Dawn
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-32">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 leading-loose text-center font-light tracking-wide">
              Welcome to Sunrise Investments, where we stand as a beacon of financial stewardship and strategic investment planning. With a legacy rooted in cultivating prosperity, we embrace each dawn with unwavering dedication.
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-8 tracking-widest">
              ABOUT US
            </h2>
            <div className="w-24 h-0.5 bg-amber-600 mx-auto mb-12"></div>
            <h3 className="text-3xl md:text-4xl font-semibold text-amber-700 dark:text-amber-500 tracking-wide">
              A Legacy of Wealth Creators
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 leading-loose font-light tracking-wide">
              Founded in 2022 by Munna Lal Jain along with his son Aditya Jain & family, Sunrise Investments emerged from a shared vision to harness the potential of diverse investment avenues in India. With a firm belief in the power of strategic wealth creation.
            </p>
            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 leading-loose font-light tracking-wide">
              From our humble beginnings, we have steadily grown, guided by principles of prudent financial management. Today, Sunrise Investments stands as a testament to our pursuit of prosperity, marked by a legacy of trust and forward-thinking strategies.
            </p>
          </div>
        </section>

        {/* Office Information */}
        <section className="text-center pt-16">
          <div className="bg-white dark:bg-stone-800 rounded-lg shadow-xl p-16 border border-stone-200 dark:border-stone-700 max-w-2xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-stone-100 mb-12 tracking-wide">
              Office
            </h4>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto mb-12"></div>
            <div className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 leading-loose font-light tracking-wide space-y-3">
              <div>AddRec Solutions Private Limited</div>
              <div>10, B Block, Second Floor</div>
              <div>The Acropolis, Thaltej</div>
              <div>Ahmedabad, Gujarat 380054</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
