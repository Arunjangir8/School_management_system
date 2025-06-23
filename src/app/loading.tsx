"use client";
import { useEffect, useState } from "react";
import { BookOpen, GraduationCap, Lightbulb, Brain, Atom } from "lucide-react";

const EDUCATION_ICONS = [
  { icon: BookOpen, label: "Reading" },
  { icon: GraduationCap, label: "Learning" },
  { icon: Lightbulb, label: "Thinking" },
  { icon: Brain, label: "Processing" },
  { icon: Atom, label: "Discovering" },
];

export default function EducationalLoader({ text = "Loading Educational Content..." }) {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % EDUCATION_ICONS.length);
    }, 400);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!isLoading) return null;

  const { icon: Icon, label } = EDUCATION_ICONS[current];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 z-50">
      <div className="flex flex-col items-center justify-center gap-6 p-8">
        <div className="relative">
          <Icon 
            size={72} 
            className="text-blue-500 animate-bounce" 
          />
          <div className="absolute -inset-4 bg-blue-100 rounded-full animate-ping opacity-20"></div>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-gray-800">
            {label}
          </h2>
          <p className="text-sm text-gray-600 max-w-xs">
            {text}
          </p>
        </div>
        <div className="flex space-x-1">
          {EDUCATION_ICONS.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-blue-500' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}