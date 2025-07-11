
import React from 'react';

interface SensorData {
  id: number;
  name: string;
  value: number;
  history: number[];
  color: string;
}

interface F1CarBottomProps {
  sensors: SensorData[];
}

export const F1CarBottom: React.FC<F1CarBottomProps> = ({ sensors }) => {
  const getSensorByPosition = (position: string) => {
    return sensors.find(s => s.name.toLowerCase().includes(position.toLowerCase()));
  };

  const getSensorIntensity = (value: number) => {
    return Math.min(100, Math.max(10, value));
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div className="relative">
        {/* F1 Car Bottom SVG */}
        <svg width="400" height="600" viewBox="0 0 400 600" className="drop-shadow-2xl">
          {/* Car Body */}
          <defs>
            <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="50%" stopColor="#2d2d2d" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main car body */}
          <path
            d="M 50 50 L 350 50 L 380 100 L 380 500 L 350 550 L 50 550 L 20 500 L 20 100 Z"
            fill="url(#carGradient)"
            stroke="#444"
            strokeWidth="2"
          />

          {/* Front wing */}
          <rect x="30" y="30" width="340" height="15" rx="7" fill="#333" stroke="#666" strokeWidth="1"/>
          
          {/* Rear wing */}
          <rect x="30" y="555" width="340" height="15" rx="7" fill="#333" stroke="#666" strokeWidth="1"/>

          {/* Side pods */}
          <ellipse cx="100" cy="200" rx="25" ry="80" fill="#2a2a2a" stroke="#555"/>
          <ellipse cx="300" cy="200" rx="25" ry="80" fill="#2a2a2a" stroke="#555"/>
          <ellipse cx="100" cy="400" rx="25" ry="80" fill="#2a2a2a" stroke="#555"/>
          <ellipse cx="300" cy="400" rx="25" ry="80" fill="#2a2a2a" stroke="#555"/>

          {/* Plank (central strip) */}
          <rect x="150" y="80" width="100" height="440" rx="10" fill="#1a1a1a" stroke="#00ff41" strokeWidth="2"/>
          
          {/* Plank details */}
          <rect x="160" y="90" width="80" height="420" rx="5" fill="#0a0a0a"/>
          
          {/* Central spine */}
          <line x1="200" y1="90" x2="200" y2="510" stroke="#333" strokeWidth="1"/>

          {/* Sensor Positions */}
          {/* Front Left Sensor */}
          <circle
            cx="180"
            cy="150"
            r="15"
            fill={getSensorByPosition('front left')?.color || '#FF6B6B'}
            opacity={getSensorIntensity(getSensorByPosition('front left')?.value || 0) / 100}
            filter="url(#glow)"
            className="animate-pulse"
          />
          <text x="180" y="155" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">FL</text>

          {/* Front Right Sensor */}
          <circle
            cx="220"
            cy="150"
            r="15"
            fill={getSensorByPosition('front right')?.color || '#4ECDC4'}
            opacity={getSensorIntensity(getSensorByPosition('front right')?.value || 0) / 100}
            filter="url(#glow)"
            className="animate-pulse"
          />
          <text x="220" y="155" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">FR</text>

          {/* Rear Left Sensor */}
          <circle
            cx="180"
            cy="450"
            r="15"
            fill={getSensorByPosition('rear left')?.color || '#45B7D1'}
            opacity={getSensorIntensity(getSensorByPosition('rear left')?.value || 0) / 100}
            filter="url(#glow)"
            className="animate-pulse"
          />
          <text x="180" y="455" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">RL</text>

          {/* Rear Right Sensor */}
          <circle
            cx="220"
            cy="450"
            r="15"
            fill={getSensorByPosition('rear right')?.color || '#96CEB4'}
            opacity={getSensorIntensity(getSensorByPosition('rear right')?.value || 0) / 100}
            filter="url(#glow)"
            className="animate-pulse"
          />
          <text x="220" y="455" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">RR</text>

          {/* Airflow lines for effect */}
          <path d="M 50 150 Q 200 140 350 150" stroke="#00ff41" strokeWidth="1" fill="none" opacity="0.3"/>
          <path d="M 50 300 Q 200 290 350 300" stroke="#00ff41" strokeWidth="1" fill="none" opacity="0.3"/>
          <path d="M 50 450 Q 200 440 350 450" stroke="#00ff41" strokeWidth="1" fill="none" opacity="0.3"/>
        </svg>

        {/* Sensor Value Labels */}
        <div className="absolute top-4 left-4 space-y-2">
          {sensors.map(sensor => (
            <div key={sensor.id} className="flex items-center space-x-2 text-sm">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: sensor.color }}
              />
              <span className="text-white font-medium">{sensor.name}</span>
              <span className="text-gray-300">{sensor.value.toFixed(1)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
