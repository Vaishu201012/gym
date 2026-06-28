export default function Reviews() {
  return (
    <section className="px-6 lg:px-16 py-16 text-center">
      <p className="text-beastred font-heading text-sm tracking-widest mb-2">REVIEW</p>
      <h2 className="font-heading text-3xl font-bold mb-10">What people think about it</h2>

      <div className="max-w-3xl mx-auto grid sm:grid-cols-[200px_1fr] gap-6 items-center text-left bg-gray-50 p-6">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop"
          alt="Member review"
          className="w-full h-48 object-cover"
        />
        <div>
          <p className="text-5xl text-beastred font-heading leading-none mb-2">“</p>
          <p className="text-beastgray mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
          </p>
          <p className="font-heading font-bold">Will Travis</p>
          <p className="text-xs text-beastgray">Gym member</p>
        </div>
      </div>
    </section>
  );
}
