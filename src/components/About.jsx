export default function About() {
  return (
    <section id="about" className="px-6 lg:px-16 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-beastred font-heading text-sm tracking-widest mb-2">ABOUT US</p>
        <h2 className="font-heading text-3xl font-bold mb-4">
          Train hard. Live strong. <br /> Become the best version of you.
        </h2>
        <p className="text-beastgray mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse
          ultrices gravida.
        </p>
        <p className="text-beastgray leading-relaxed">
          Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est
          velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet.
        </p>
      </div>

      <div className="relative">
        <span className="absolute -right-4 top-0 text-[10rem] font-heading font-bold text-beastred/20 leading-none select-none">
          X
        </span>
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
          alt="Athlete training"
          className="relative z-10 w-full max-w-sm mx-auto rounded"
        />
      </div>
    </section>
  );
}
