"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaSmile, FaFolder, FaCode, FaUsers } from "react-icons/fa";
import { stats } from "@/app/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  smile: FaSmile,
  folder: FaFolder,
  code: FaCode,
  users: FaUsers,
};

const iconColors = [
  "var(--skill-frontend)",
  "var(--skill-backend)",
  "var(--skill-tools)",
  "var(--skill-infrastructure)",
];

export default function StatsSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            const color = iconColors[index];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="stat-card p-6 text-center group"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${color}15`,
                  }}
                >
                  {Icon && (
                    <span style={{ color }}>
                      <Icon className="w-5 h-5 transition-colors duration-300" />
                    </span>
                  )}
                </div>

                {/* Counter */}
                <div className="font-outfit text-3xl lg:text-4xl font-bold text-[var(--nexus-cream)] mb-2">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.value >= 1000 ? "" : "+"}
                </div>

                {/* Label */}
                <p className="font-jakarta text-sm text-[var(--nexus-cream)]/50">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
