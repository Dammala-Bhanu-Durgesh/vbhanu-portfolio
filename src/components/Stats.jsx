import { motion } from "framer-motion";

const stats = [
  {
    number: "50+",
    label: "Quiz Questions Generated",
  },
  {
    number: "1000+",
    label: "Student Responses Evaluated",
  },
  {
    number: "94%",
    label: "Spam Detection Accuracy",
  },
  {
    number: "10K+",
    label: "Records Analyzed",
  },
];

const Stats = () => {
  return (
    <section className="py-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">

        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center"
          >
            <h3 className="text-4xl font-bold text-cyan-400">
              {stat.number}
            </h3>

            <p className="text-gray-400 mt-3">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Stats;