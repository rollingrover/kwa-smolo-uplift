import Image from 'next/image';

const projects = [
  { src: '/assets/gallery/at-school.png', alt: 'Children at school in KwaSmolo' },
  { src: '/assets/gallery/community-group.png', alt: 'Community group gathering in Hluhluwe' },
  { src: '/assets/gallery/homestay-students.png', alt: 'Students participating in homestay tourism' },
  { src: '/assets/gallery/student-at-bech.png', alt: 'Student at community beach or garden project' },
  { src: '/assets/gallery/children-new-clothes.png', alt: 'Children wearing new clothes' },
  { src: '/assets/gallery/children-new-clothes.png2.png', alt: 'Children in new clothing' },
  { src: '/assets/gallery/children-new-clothes.png3.png', alt: 'children in new clothes' },
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">Our Impact in Pictures</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((img, i) => (
          <div key={i} className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              className="object-cover hover:scale-105 transition" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
