import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Mission */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo-horizontal2.png" alt="KwaSmolo Logo" className="h-12 w-auto brightness-110" />            
          </div>
          <p className="text-gray-300">
            Dedicated to uplifting rural Zulu communities in Hluhluwe through homestay tourism, cultural experiences, agricultural gardens, and community empowerment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-6 text-accent">Quick Links</h4>
          <div className="space-y-3 text-gray-300">
            <Link href="/" className="block hover:text-white">Home</Link>
            <Link href="/our-work" className="block hover:text-white">Our Work</Link>
            <Link href="/gallery" className="block hover:text-white">Gallery</Link>
            <Link href="/get-involved" className="block hover:text-white">Get Involved / Donate</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-6 text-accent">Contact Us</h4>
          <div className="space-y-4 text-gray-300">
            <p>Hluhluwe, KwaZulu-Natal<br />South Africa</p>
            <p>Phone: 069 562 0240 / 079 670 2530</p>
            <p>Email: <a href="mailto:chrishawu449@gmail.com" className="hover:text-accent">chrishawu449@gmail.com</a></p>
            <p>Website: <a href="https://www.dizakwasmolo.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-accent">www.dizakwasmolo.co.za</a></p>
          </div>
        </div>

        {/* Partners & Social */}
        <div>
          <h4 className="font-semibold text-lg mb-6 text-accent">Partners &amp; Supporters</h4>
          <p className="text-gray-300 mb-6">Proudly collaborating with:</p>
          
          <div className="space-y-3 text-gray-300">
            <a href="https://www.dizatravels.co.za" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">Diza Travels Safaris, Tours & Shuttles</a>
            <a href="https://www.ethlathini.co.za" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">Ethlathini Rest Camp</a>
            <a href="https://www.ubizane.co.za" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">Ubizane Wildlife Reserve</a>
            <a href="https://www.mzamovillagehomestead.co.za" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">Mzamo Cultural Village and Homestead</a>
            <a href="https://www.zatours.co.za" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">ZAtours</a>
            <a href="https://opdesk.app" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">OpDesk</a>
            <span className="block text-gray-400">Local Schools</span>
            <span className="block text-gray-400">Community Groups</span>
          </div>

          <div className="mt-10">
            <h5 className="font-medium mb-4">Follow Our Journey</h5>
            <div className="flex gap-4 items-center flex-wrap">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="block">
                <Image 
                  src="/images/icons/facebook-icon.png" 
                  alt="Facebook" 
                  width={36} 
                  height={36} 
                  className="w-9 h-9 object-contain hover:scale-110 transition" 
                />
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="block">
                <Image 
                  src="/images/icons/instagram-icon.png" 
                  alt="Instagram" 
                  width={36} 
                  height={36} 
                  className="w-9 h-9 object-contain hover:scale-110 transition" 
                />
              </a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="block">
                <Image 
                  src="/images/icons/twitter-icon.png" 
                  alt="Twitter" 
                  width={36} 
                  height={36} 
                  className="w-9 h-9 object-contain hover:scale-110 transition" 
                />
              </a>
              <a href="#" aria-label="X" target="_blank" rel="noopener noreferrer" className="block">
                <Image 
                  src="/images/icons/X-icon.png" 
                  alt="X" 
                  width={36} 
                  height={36} 
                  className="w-9 h-9 object-contain hover:scale-110 transition" 
                />
              </a>
              <a href="#" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="block">
                <Image 
                  src="/images/icons/tiktok.png" 
                  alt="TikTok" 
                  width={36} 
                  height={36} 
                  className="w-9 h-9 object-contain hover:scale-110 transition" 
                />
              </a>
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="block">
                <Image 
                  src="/images/icons/youtube-icon.png" 
                  alt="YouTube" 
                  width={36} 
                  height={36} 
                  className="w-9 h-9 object-contain hover:scale-110 transition" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-16 pt-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Diza Kwa-Smolo Uplifting Initiative NPC. All Rights Reserved.</p>
        <p className="mt-2">
          Web design by{' '}
          <a href="https://www.rollingrover.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
            Rolling Rover Productions
          </a>
        </p>
      </div>
    </footer>
  );
}