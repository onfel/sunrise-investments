export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-950 dark:to-stone-900">
      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Hero Section */}
        <header className="text-center mb-24">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-0.5 bg-amber-600"></div>
            <div className="mx-6 text-4xl text-amber-600">☀</div>
            <div className="w-16 h-0.5 bg-amber-600"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 dark:text-stone-100 mb-8 tracking-wide">
            Sunrise Investments
          </h1>
          <div className="flex items-center justify-center mb-12">
            <div className="w-8 h-px bg-amber-600"></div>
            <div className="mx-4 text-xl text-amber-600">◦</div>
            <div className="w-8 h-px bg-amber-600"></div>
          </div>
          <p className="text-2xl md:text-3xl text-stone-700 dark:text-stone-300 font-medium leading-relaxed italic">
            Rising with the Sun, Growing with Every Dawn
          </p>
        </header>

        {/* Introduction with Icon */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-3xl text-amber-600 mb-8">🌅</div>
            <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              Welcome to Sunrise Investments, where we stand as a beacon of financial stewardship and strategic investment planning. With a legacy rooted in cultivating prosperity, we embrace each dawn with unwavering dedication.
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-stone-300 dark:bg-stone-700"></div>
              <div className="mx-4 text-2xl text-amber-600">☀</div>
              <div className="w-12 h-px bg-stone-300 dark:bg-stone-700"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 tracking-widest">
              ABOUT US
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="text-lg text-amber-600">◦</div>
              <div className="mx-3 w-16 h-px bg-amber-600"></div>
              <div className="text-lg text-amber-600">◦</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-amber-700 dark:text-amber-500">
              A Legacy of Wealth Creators
            </h3>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="text-center">
                <div className="text-4xl text-amber-600 mb-6">🌄</div>
                <h4 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">Founded in Excellence</h4>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                  Founded in 2022 by Munna Lal Jain along with his son Aditya Jain & family, Sunrise Investments emerged from a shared vision to harness the potential of diverse investment avenues in India. With a firm belief in the power of strategic wealth creation.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-amber-600 mb-6">🏛️</div>
                <h4 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">Legacy of Trust</h4>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                  From our humble beginnings, we have steadily grown, guided by principles of prudent financial management. Today, Sunrise Investments stands as a testament to our pursuit of prosperity, marked by a legacy of trust and forward-thinking strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-stone-800 rounded-lg shadow-lg p-12 border border-stone-200 dark:border-stone-700">
              <div className="text-3xl text-amber-600 mb-6">📍</div>
              <h4 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-8">
                Office Location
              </h4>
              <div className="flex items-center justify-center mb-6">
                <div className="w-8 h-px bg-amber-600"></div>
                <div className="mx-3 text-amber-600">◦</div>
                <div className="w-8 h-px bg-amber-600"></div>
              </div>
              <div className="text-stone-600 dark:text-stone-400 leading-relaxed space-y-2">
                <div>AddRec Solutions Private Limited</div>
                <div>10, B Block, Second Floor</div>
                <div>The Acropolis, Thaltej</div>
                <div>Ahmedabad, Gujarat 380054</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Ornament */}
        <footer className="text-center mt-16">
          <div className="flex items-center justify-center">
            <div className="w-12 h-px bg-stone-300 dark:bg-stone-700"></div>
            <div className="mx-4 text-2xl text-amber-600">☀</div>
            <div className="w-12 h-px bg-stone-300 dark:bg-stone-700"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
