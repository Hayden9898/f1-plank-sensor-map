
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
        {/* F1 Car Bottom Realistic SVG */}
        <svg width="800" height="600" viewBox="0 0 800 600" className="drop-shadow-2xl">
          <defs>
            <linearGradient id="carBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2a2a2a" />
              <stop offset="50%" stopColor="#3d3d3d" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </linearGradient>
            <linearGradient id="plankGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="50%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#b8860b" />
            </linearGradient>
            <linearGradient id="suspensionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#444" />
              <stop offset="50%" stopColor="#666" />
              <stop offset="100%" stopColor="#333" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="shadow">
              <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.3"/>
            </filter>
          </defs>

          {/* Wheels */}
          {/* Front Left Wheel */}
          <ellipse cx="100" cy="150" rx="45" ry="45" fill="#1a1a1a" stroke="#333" strokeWidth="3"/>
          <ellipse cx="100" cy="150" rx="35" ry="35" fill="#2a2a2a"/>
          
          {/* Front Right Wheel */}
          <ellipse cx="700" cy="150" rx="45" ry="45" fill="#1a1a1a" stroke="#333" strokeWidth="3"/>
          <ellipse cx="700" cy="150" rx="35" ry="35" fill="#2a2a2a"/>
          
          {/* Rear Left Wheel */}
          <ellipse cx="100" cy="450" rx="45" ry="45" fill="#1a1a1a" stroke="#333" strokeWidth="3"/>
          <ellipse cx="100" cy="450" rx="35" ry="35" fill="#2a2a2a"/>
          
          {/* Rear Right Wheel */}
          <ellipse cx="700" cy="450" rx="45" ry="45" fill="#1a1a1a" stroke="#333" strokeWidth="3"/>
          <ellipse cx="700" cy="450" rx="35" ry="35" fill="#2a2a2a"/>

          {/* Suspension Arms */}
          {/* Front Left Suspension */}
          <path d="M 145 150 L 200 150 L 220 130 L 200 170 Z" fill="url(#suspensionGradient)" stroke="#555" strokeWidth="1"/>
          <path d="M 145 150 L 200 180 L 220 200 L 180 160 Z" fill="url(#suspensionGradient)" stroke="#555" strokeWidth="1"/>
          
          {/* Front Right Suspension */}
          <path d="M 655 150 L 600 150 L 580 130 L 600 170 Z" fill="url(#suspensionGradient)" stroke="#555" strokeWidth="1"/>
          <path d="M 655 150 L 600 180 L 580 200 L 620 160 Z" fill="url(#suspensionGradient)" stroke="#555" strokeWidth="1"/>
          
          {/* Rear Left Suspension */}
          <path d="M 145 450 L 200 450 L 220 430 L 200 470 Z" fill="url(#suspensionGradient)" stroke="#555" strokeWidth="1"/>
          <path d="M 145 450 L 200 480 L 220 500 L 180 460 Z" fill="url(#suspensionGradient)" stroke="#555" strokeWidth="1"/>
          
          {/* Rear Right Suspension */}
          <path d="M 655 450 L 600 450 L 580 430 L 600 470 Z" fill="url(#suspensionGradient)" stroke="#555" strokeWidth="1"/>
          <path d="M 655 450 L 600 480 L 580 500 L 620 460 Z" fill="url(#suspensionGradient)" stroke="#555" strokeWidth="1"/>

          {/* Main Car Body */}
          <path
            d="M 200 80 L 600 80 L 650 120 L 680 200 L 680 400 L 650 480 L 600 520 L 200 520 L 150 480 L 120 400 L 120 200 L 150 120 Z"
            fill="url(#carBodyGradient)"
            stroke="#444"
            strokeWidth="2"
            filter="url(#shadow)"
          />

          {/* Front Nose */}
          <path d="M 200 80 L 400 50 L 400 80 Z" fill="#2a2a2a" stroke="#555" strokeWidth="1"/>
          
          {/* Side Pods */}
          <ellipse cx="180" cy="220" rx="30" ry="60" fill="#2a2a2a" stroke="#555" strokeWidth="1"/>
          <ellipse cx="620" cy="220" rx="30" ry="60" fill="#2a2a2a" stroke="#555" strokeWidth="1"/>
          <ellipse cx="180" cy="380" rx="30" ry="60" fill="#2a2a2a" stroke="#555" strokeWidth="1"/>
          <ellipse cx="620" cy="380" rx="30" ry="60" fill="#2a2a2a" stroke="#555" strokeWidth="1"/>

          {/* Wooden Plank (Central highlighted area like in the image) */}
          <rect 
            x="250" 
            y="200" 
            width="300" 
            height="200" 
            rx="15" 
            fill="url(#plankGradient)" 
            stroke="#b8860b" 
            strokeWidth="3"
            opacity="0.9"
          />
          
          {/* Plank Details - Wood grain effect */}
          <line x1="270" y1="210" x2="530" y2="210" stroke="#b8860b" strokeWidth="1" opacity="0.6"/>
          <line x1="270" y1="230" x2="530" y2="230" stroke="#b8860b" strokeWidth="1" opacity="0.4"/>
          <line x1="270" y1="250" x2="530" y2="250" stroke="#b8860b" strokeWidth="1" opacity="0.6"/>
          <line x1="270" y1="270" x2="530" y2="270" stroke="#b8860b" strokeWidth="1" opacity="0.4"/>
          <line x1="270" y1="290" x2="530" y2="290" stroke="#b8860b" strokeWidth="1" opacity="0.6"/>
          <line x1="270" y1="310" x2="530" y2="310" stroke="#b8860b" strokeWidth="1" opacity="0.4"/>
          <line x1="270" y1="330" x2="530" y2="330" stroke="#b8860b" strokeWidth="1" opacity="0.6"/>
          <line x1="270" y1="350" x2="530" y2="350" stroke="#b8860b" strokeWidth="1" opacity="0.4"/>
          <line x1="270" y1="370" x2="530" y2="370" stroke="#b8860b" strokeWidth="1" opacity="0.6"/>
          <line x1="270" y1="390" x2="530" y2="390" stroke="#b8860b" strokeWidth="1" opacity="0.4"/>

          {/* Central spine line */}
          <line x1="400" y1="200" x2="400" y2="400" stroke="#9d7f00" strokeWidth="2"/>

          {/* Sensor Positions on the Plank */}
          {/* Front Left Sensor */}
          <circle
            cx="350"
            cy="250"
            r="18"
            fill={getSensorByPosition('front left')?.color || '#FF6B6B'}
            opacity={getSensorIntensity(getSensorByPosition('front left')?.value || 0) / 100}
            filter="url(#glow)"
            className="animate-pulse"
          />
          <text x="350" y="256" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">FL</text>

          {/* Front Right Sensor */}
          <circle
            cx="450"
            cy="250"
            r="18"
            fill={getSensorByPosition('front right')?.color || '#4ECDC4'}
            opacity={getSensorIntensity(getSensorByPosition('front right')?.value || 0) / 100}
            filter="url(#glow)"
            className="animate-pulse"
          />
          <text x="450" y="256" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">FR</text>

          {/* Rear Left Sensor */}
          <circle
            cx="350"
            cy="350"
            r="18"
            fill={getSensorByPosition('rear left')?.color || '#45B7D1'}
            opacity={getSensorIntensity(getSensorByPosition('rear left')?.value || 0) / 100}
            filter="url(#glow)"
            className="animate-pulse"
          />
          <text x="350" y="356" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">RL</text>

          {/* Rear Right Sensor */}
          <circle
            cx="450"
            cy="350"
            r="18"
            fill={getSensorByPosition('rear right')?.color || '#96CEB4'}
            opacity={getSensorIntensity(getSensorByPosition('rear right')?.value || 0) / 100}
            filter="url(#glow)"
            className="animate-pulse"
          />
          <text x="450" y="356" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">RR</text>

          {/* Additional Details */}
          {/* Brake Discs */}
          <circle cx="100" cy="150" r="25" fill="none" stroke="#666" strokeWidth="2"/>
          <circle cx="700" cy="150" r="25" fill="none" stroke="#666" strokeWidth="2"/>
          <circle cx="100" cy="450" r="25" fill="none" stroke="#666" strokeWidth="2"/>
          <circle cx="700" cy="450" r="25" fill="none" stroke="#666" strokeWidth="2"/>

          {/* Airflow lines */}
          <path d="M 150 300 Q 400 290 650 300" stroke="#00ff41" strokeWidth="1.5" fill="none" opacity="0.4"/>
          <path d="M 200 320 Q 400 310 600 320" stroke="#00ff41" strokeWidth="1" fill="none" opacity="0.3"/>
          <path d="M 200 280 Q 400 270 600 280" stroke="#00ff41" strokeWidth="1" fill="none" opacity="0.3"/>

          {/* Technical annotations */}
          <text x="400" y="30" textAnchor="middle" fill="#888" fontSize="12" fontWeight="bold">F1 CAR UNDERFLOOR</text>
          <text x="400" y="580" textAnchor="middle" fill="#888" fontSize="10">PLANK SENSOR MONITORING SYSTEM</text>
        </svg>

        {/* Sensor Value Labels */}
        <div className="absolute top-4 left-4 space-y-2 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-white font-bold text-sm mb-2">SENSOR READINGS</h3>
          {sensors.map(sensor => (
            <div key={sensor.id} className="flex items-center space-x-3 text-sm">
              <div 
                className="w-4 h-4 rounded-full border-2 border-white/50" 
                style={{ backgroundColor: sensor.color }}
              />
              <span className="text-white font-medium min-w-[80px]">{sensor.name}</span>
              <span className="text-green-300 font-mono">{sensor.value.toFixed(1)}</span>
              <span className="text-gray-400 text-xs">units</span>
            </div>
          ))}
        </div>

        {/* Technical Info Panel */}
        <div className="absolute top-4 right-4 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-white font-bold text-sm mb-2">PLANK STATUS</h3>
          <div className="text-xs text-gray-300 space-y-1">
            <div>Material: Wood/Carbon</div>
            <div>Thickness: 10mm</div>
            <div>Width: 300mm</div>
            <div>Length: 200mm</div>
          </div>
        </div>
      </div>
    </div>
  );
};
