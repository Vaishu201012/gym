import { useState } from "react";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (demo only)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-beastdark text-white">
      <div className="px-6 lg:px-16 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-beastred font-heading text-sm tracking-widest mb-1">
            CONTACT US
          </p>
          <h3 className="font-heading text-2xl font-bold mb-6">Get in touch reach out to us</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
            className="w-full bg-transparent border-b border-white/30 py-2 outline-none focus:border-beastred"
          />
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="w-full bg-transparent border-b border-white/30 py-2 outline-none focus:border-beastred"
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Message"
            rows="3"
            className="w-full bg-transparent border-b border-white/30 py-2 outline-none focus:border-beastred"
          />
          <button className="bg-beastred text-white font-heading uppercase tracking-wide px-6 py-3 hover:bg-red-700 transition-colors">
            Send message →
          </button>
        </form>
      </div>

      <div className="border-t border-white/10 px-6 lg:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p className="font-heading text-lg text-white">
          <span className="text-beastred">BEAST</span>
        </p>
        <p>© Beast Gym. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">FB</a>
          <a href="#">IG</a>
          <a href="#">TW</a>
        </div>
      </div>
    </footer>
  );
}
