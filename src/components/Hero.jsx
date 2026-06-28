
export default function Hero() {
  return (
    <section className="relative bg-beastdark text-white">
      <div
        className="relative h-[80vh] min-h-[480px] flex flex-col justify-center px-6 lg:px-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <p className="font-heading text-beastred tracking-widest text-sm mb-4">
          NO PAIN NO GAIN
        </p>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-xl">
          LIVE IT <br /> LIKE A ROCK!
        </h1>

       
      </div>

      {/* progress bar like in design */}
      <div className="h-1 bg-white/10">
        <div className="h-1 bg-beastred w-1/3" />
      </div>
    </section>
  );
}
 