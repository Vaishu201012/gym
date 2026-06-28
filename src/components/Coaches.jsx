const coaches = [
  { name: "Sarah Lee", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop" },
  { name: "John Snow", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop" },
  { name: "Maria Diaz", img: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=400&auto=format&fit=crop" },
  { name: "Mike Ross", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop" },
];

function CoachCard({ name, img }) {
  return (
    <div className="relative h-72 overflow-hidden group">
      <img src={img} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 bg-black/60 w-full p-3">
        <p className="font-heading text-white text-sm uppercase">{name}</p>
      </div>
    </div>
  );
}

export default function Coaches() {
  return (
    <section id="coaches" className="px-6 lg:px-16 py-16 text-center bg-beastdark text-white">
      <p className="text-beastred font-heading text-sm tracking-widest mb-2">COACHES</p>
      <h2 className="font-heading text-3xl font-bold mb-10">Our training coaches</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {coaches.map((c) => (
          <CoachCard key={c.name} {...c} />
        ))}
      </div>
    </section>
  );
}
