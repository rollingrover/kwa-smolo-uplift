import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <Image 
          src="/assets/hero/community-hero.jpg" 
          alt="KwaSmolo community and cultural tourism in Hluhluwe" 
          fill 
          className="object-cover"
          priority 
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Empowering KwaSmolo Communities</h1>
          <p className="text-xl md:text-2xl mb-10">
            Homestay Tourism • Cultural Experiences • Sustainable Agriculture in Hluhluwe, KwaZulu-Natal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="bg-accent hover:bg-yellow-600 text-white px-10 py-4 rounded-full text-lg font-semibold">
              Donate Now
            </Link>
            <Link href="/our-work" className="border-2 border-white hover:bg-white/20 px-10 py-4 rounded-full text-lg">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-6">Our Work in KwaSmolo</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            The Diza Kwa-Smolo Uplifting Initiative NPC is building sustainable futures through 
            community-based tourism, cultural preservation, and agricultural development. 
            We connect visitors with authentic Zulu homestays, promote local crafts and traditions, 
            and support community gardens that improve food security and livelihoods.
          </p>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Homestay & Cultural Tourism</h3>
              <p className="text-gray-700">
                Authentic Zulu homestays and cultural experiences that celebrate heritage and create local jobs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Agricultural & Community Gardens</h3>
              <p className="text-gray-700">
                Sustainable farming and community gardens that promote food security and empower families.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Skills Development & Empowerment</h3>
              <p className="text-gray-700">
                Training in crafts, entrepreneurship, and tourism services to help women and youth build livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Together We Build Stronger Futures</h2>
        <Link href="/get-involved" className="inline-block mt-6 bg-accent px-12 py-5 rounded-full text-xl font-semibold">
          Partner or Donate Today
        </Link>
      </section>
    </>
  );
}
