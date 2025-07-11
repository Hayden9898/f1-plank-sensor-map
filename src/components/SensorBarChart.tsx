
import React from 'react';

interface SensorData {
  id: number;
  name: string;
  value: number;
  history: number[];
  color: string;
}

interface SensorBarChartProps {
  sensors: SensorData[];
}

export const SensorBarChart: React.FC<SensorBarChartProps> = ({ sensors }) => {
  const maxValue = 100;

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
      <div className="flex items-end justify-between h-64 space-x-4">
        {sensors.map((sensor) => {
          const heightPercentage = (sensor.value / maxValue) * 100;
          
          return (
            <div key={sensor.id} className="flex-1 flex flex-col items-center">
              <div className="w-full max-w-16 relative">
                {/* Bar */}
                <div 
                  className="w-full rounded-t-lg transition-all duration-300 ease-out relative overflow-hidden"
                  style={{ 
                    height: `${Math.max(heightPercentage, 5)}%`,
                    backgroundColor: sensor.color,
                    minHeight: '20px'
                  }}
                >
                  {/* Animated shine effect */}
                  <div 
                    className="absolute top-0 left-0 w-full h-full opacity-30"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)`
                    }}
                  />
                  
                  {/* Value label on bar */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <span className="text-white font-bold text-sm bg-gray-800 px-2 py-1 rounded">
                      {sensor.value.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Base line */}
                <div className="w-full h-1 bg-gray-700 rounded-b"></div>
              </div>

              {/* Sensor name */}
              <div className="mt-3 text-center">
                <div className="text-white font-medium text-sm">{sensor.name}</div>
                <div 
                  className="w-4 h-4 rounded-full mx-auto mt-1"
                  style={{ backgroundColor: sensor.color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Y-axis labels */}
      <div className="absolute left-2 top-6 h-64 flex flex-col justify-between text-xs text-gray-400">
        {[100, 80, 60, 40, 20, 0].map(value => (
          <span key={value}>{value}</span>
        ))}
      </div>

      {/* Chart title and legend */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <h4 className="text-white font-medium">Sensor Comparison</h4>
          <div className="flex space-x-4">
            <span className="text-sm text-gray-400">
              Avg: {(sensors.reduce((sum, s) => sum + s.value, 0) / sensors.length).toFixed(1)}
            </span>
            <span className="text-sm text-gray-400">
              Max: {Math.max(...sensors.map(s => s.value)).toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
