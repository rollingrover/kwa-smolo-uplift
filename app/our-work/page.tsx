// src/app/our-work/page.tsx
import Image from 'next/image';

export default function OurWork() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Transforming lives in Hluhluwe through community-driven projects focused on tourism, culture, agriculture, and empowerment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold text-center mb-12">What We’ve Achieved So Far</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Project Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <Image 
              src="/projects/project1.jpg" 
              alt="Homestay Tourism Initiative" 
              width={600} 
              height={400} 
              className="w-full h-64 object-cover"
              priority 
              loading="eager"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">Homestay Tourism Initiative</h3>
              <p className="text-gray-600 mb-4">
                Empowering local families to host visitors, share authentic Zulu culture, and generate sustainable income.
              </p>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                20+ Families Trained
              </span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <Image 
              src="/projects/project2.jpg" 
              alt="Community Food Drive" 
              width={600} 
              height={400} 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">Community Food Security</h3>
              <p className="text-gray-600 mb-4">
                Establishing community gardens and providing nutritious meals to support vulnerable families in the area.
              </p>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                100+ Meals Distributed
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-16 bg-white border-t">
        <a 
          href="/get-involved" 
          className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-12 py-5 rounded-full text-lg transition-all"
        >
          Support Our Next Project →
        </a>
      </div>
    </div>
  );
}