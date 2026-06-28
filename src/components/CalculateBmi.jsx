import { useState } from "react";

export default function CalculateBmi() {
  const [form, setForm] = useState({ height: "", weight: "", age: "", gender: "" });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const h = parseFloat(form.height) / 100;
    const w = parseFloat(form.weight);
    if (h > 0 && w > 0) {
      setResult((w / (h * h)).toFixed(1));
    }
  };

  return (
    <section
      className="relative px-6 lg:px-16 py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="max-w-md ml-0 md:ml-auto bg-white p-8 shadow-lg">
        <p className="text-beastred font-heading text-sm tracking-widest mb-1">
          CALCULATE YOUR
        </p>
        <h3 className="font-heading text-2xl font-bold mb-6">Body Mass Index</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="height"
            value={form.height}
            onChange={handleChange}
            placeholder="Height (cm)"
            className="w-full border-b border-gray-300 py-2 outline-none focus:border-beastred"
          />
          <input
            name="weight"
            value={form.weight}
            onChange={handleChange}
            placeholder="Weight (kg)"
            className="w-full border-b border-gray-300 py-2 outline-none focus:border-beastred"
          />
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full border-b border-gray-300 py-2 outline-none focus:border-beastred"
          />
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 outline-none focus:border-beastred text-gray-500"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button
            type="submit"
            className="w-full bg-beastred text-white font-heading uppercase tracking-wide py-3 hover:bg-red-700 transition-colors"
          >
            Calculate
          </button>
        </form>

        {result && (
          <p className="mt-4 text-center font-heading">
            Your BMI is <span className="text-beastred font-bold">{result}</span>
          </p>
        )}
      </div>
    </section>
  );
}
