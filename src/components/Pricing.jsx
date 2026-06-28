const plans = [
  {
    name: "Basic",
    price: "9.99",
    features: ["Personal trainer", "Strict diet plan", "Group sessions"],
  },
  {
    name: "Premium",
    price: "24.99",
    features: [
      "Personal trainer",
      "Strict diet plan",
      "Group sessions",
      "Free supplements",
    ],
    highlight: true,
  },
  {
    name: "Advanced",
    price: "14.99",
    features: ["Personal trainer", "Strict diet plan", "Group sessions"],
  },
];

function PricingCard({ name, price, features, highlight }) {
  return (
    <div
      className={`p-8 text-center border ${
        highlight ? "bg-beastdark text-white border-beastdark" : "bg-white border-gray-200"
      }`}
    >
      <p className="text-beastred font-heading text-sm tracking-widest mb-4">{name}</p>
      <p className="font-heading text-3xl font-bold mb-6">
        ${price}
        <span className="text-sm font-body font-normal"> / month</span>
      </p>
      <ul className={`space-y-2 mb-8 text-sm ${highlight ? "text-gray-300" : "text-beastgray"}`}>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <button className="bg-beastred text-white font-heading uppercase tracking-wide px-6 py-2 hover:bg-red-700 transition-colors">
        Enroll Now
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="px-6 lg:px-16 py-16 text-center bg-gray-50">
      <p className="text-beastred font-heading text-sm tracking-widest mb-2">JOIN NOW</p>
      <h2 className="font-heading text-3xl font-bold mb-10">Join and be fit</h2>

      <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p) => (
          <PricingCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
