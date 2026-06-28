const posts = [
  {
    tag: "GYM",
    title: "Build yourself to have great physique by working hard",
    img: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=500&auto=format&fit=crop",
  },
  {
    tag: "DIET",
    title: "Get burning inside workout to keep yourself in shape",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500&auto=format&fit=crop",
  },
  {
    tag: "YOGA",
    title: "Coach guide for beginner who's trying out to get fit body",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=500&auto=format&fit=crop",
  },
];

function BlogCard({ tag, title, img }) {
  return (
    <div className="text-left">
      <div className="relative h-48 overflow-hidden mb-4">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-beastred text-white text-xs font-heading px-2 py-1 uppercase">
          {tag}
        </span>
      </div>
      <h3 className="font-heading font-semibold mb-2">{title}</h3>
      <p className="text-sm text-beastgray">
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
      </p>
    </div>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="px-6 lg:px-16 py-16 text-center">
      <p className="text-beastred font-heading text-sm tracking-widest mb-2">BLOG</p>
      <h2 className="font-heading text-3xl font-bold mb-10">Read for the moment</h2>

      <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {posts.map((p) => (
          <BlogCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
