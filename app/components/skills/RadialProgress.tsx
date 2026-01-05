"use client";

import { motion } from "framer-motion";

interface RadialProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color: string;
  showPercentage?: boolean;
}

export default function RadialProgress({
  value,
  size = 80,
  strokeWidth = 6,
  color,
  showPercentage = true,
}: RadialProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const center = size / 2;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.2,
          }}
        />
      </svg>

      {/* Percentage text */}
      {showPercentage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span
            className="font-jetbrains text-sm font-bold"
            style={{ color }}
          >
            {value}%
          </span>
        </motion.div>
      )}
    </div>
  );
}
