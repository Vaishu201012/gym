const days = [
  { date: "24", day: "MON", title: "Cardio", time: "MORNING TRAINING" },
  { date: "25", day: "TUE", title: "Cardio", time: "MORNING TRAINING" },
  { date: "26", day: "WED", title: "Yoga", time: "MORNING TRAINING" },
  { date: "27", day: "THU", title: "Body Training", time: "MORNING TRAINING" },
  { date: "28", day: "FRI", title: "Diet Plan", time: "MORNING TRAINING" },
  { date: "29", day: "SAT", title: "Weight Training", time: "EVENING" },
];

function DayCard({ date, day, title, time }) {
  return (
    <div className="bg-white p-4 text-center shadow-sm hover:shadow-md transition-shadow">
      <p className="font-heading text-2xl font-bold text-beastred">{date}</p>
      <p className="text-xs text-beastgray mb-2">{day}</p>
      <p className="font-heading text-sm uppercase">{title}</p>
      <p className="text-xs text-beastgray">{time}</p>
    </div>
  );
}

export default function Schedule() {
  return (
    <section id="schedule" className="px-6 lg:px-16 py-16 bg-gray-50">
      <p className="text-beastred font-heading text-sm tracking-widest mb-2">SCHEDULE</p>
      <h2 className="font-heading text-3xl font-bold mb-10">Keep up with our timetable</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {days.map((d) => (
          <DayCard key={d.date} {...d} />
        ))}
      </div>
    </section>
  );
}
