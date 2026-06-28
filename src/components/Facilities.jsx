const facilities = [
  { name: "Cardio Zone", img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=500&auto=format&fit=crop" },
  { name: "Exercise Studio", img: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=500&auto=format&fit=crop" },
  { name: "Weight Training", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500&auto=format&fit=crop" },
  { name: "Functional Zone", img: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?q=80&w=500&auto=format&fit=crop" },
];

function FacilityCard({ name, img }) {
  return (
    <div className="relative h-56 overflow-hidden group">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40 flex items-end p-4">
        <p className="font-heading text-white uppercase text-sm">{name}</p>
      </div>
    </div>
  );
}

export default function Facilities() {
  return (
    <section className="px-6 lg:px-16 py-16 text-center bg-gray-50">
      <p className="text-beastred font-heading text-sm tracking-widest mb-2">FACILITIES</p>
      <h2 className="font-heading text-3xl font-bold mb-10">What we offer to you</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {facilities.map((f) => (
          <FacilityCard key={f.name} {...f} />
        ))}
      </div>
    </section>
  );
}
