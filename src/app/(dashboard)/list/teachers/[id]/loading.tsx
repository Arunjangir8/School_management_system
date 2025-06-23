"use client";
import React from 'react';

const SmoothLoader = () => {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center gap-6">
        <div className="flex gap-2 items-end">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-6 bg-blue-500 rounded-sm animate-smooth-wave"
              style={{
                animationDelay: `${i * 0.15}s`
              }}
            />
          ))}
        </div>
        <div className="text-blue-600 text-lg font-medium tracking-wide animate-fade">
          Loading...
        </div>
      </div>

      <style jsx>{`
        @keyframes smoothWave {
          0%, 100% {
            transform: scaleY(0.5);
            opacity: 0.6;
          }
          50% {
            transform: scaleY(1.2);
            opacity: 1;
          }
        }

        @keyframes fade {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-smooth-wave {
          animation: smoothWave 1.6s ease-in-out infinite;
        }

        .animate-fade {
          animation: fade 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default SmoothLoader;