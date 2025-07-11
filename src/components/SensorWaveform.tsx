
import React, { useRef, useEffect } from 'react';

interface SensorData {
  id: number;
  name: string;
  value: number;
  history: number[];
  color: string;
}

interface SensorWaveformProps {
  sensor: SensorData;
}

export const SensorWaveform: React.FC<SensorWaveformProps> = ({ sensor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || sensor.history.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Clear canvas
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Draw grid
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 0.5;
    
    // Horizontal grid lines
    for (let i = 0; i <= 10; i++) {
      const y = (rect.height / 10) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(rect.width, y);
      ctx.stroke();
    }

    // Vertical grid lines
    for (let i = 0; i <= 20; i++) {
      const x = (rect.width / 20) * i;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, rect.height);
      ctx.stroke();
    }

    // Draw waveform
    if (sensor.history.length > 1) {
      ctx.strokeStyle = sensor.color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      const pointSpacing = rect.width / (sensor.history.length - 1);
      
      sensor.history.forEach((value, index) => {
        const x = index * pointSpacing;
        const y = rect.height - (value / 100) * rect.height;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // Add glow effect
      ctx.shadowColor = sensor.color;
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw current value indicator
      if (sensor.history.length > 0) {
        const lastValue = sensor.history[sensor.history.length - 1];
        const lastY = rect.height - (lastValue / 100) * rect.height;
        
        ctx.fillStyle = sensor.color;
        ctx.beginPath();
        ctx.arc(rect.width - 5, lastY, 4, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.shadowColor = sensor.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Draw value labels
    ctx.fillStyle = '#888';
    ctx.font = '10px monospace';
    ctx.textAlign = 'right';
    
    for (let i = 0; i <= 10; i++) {
      const value = (100 - i * 10).toString();
      const y = (rect.height / 10) * i + 3;
      ctx.fillText(value, rect.width - 5, y);
    }

  }, [sensor.history, sensor.color]);

  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-medium flex items-center space-x-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: sensor.color }}
          />
          <span>{sensor.name}</span>
        </h3>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">
            {sensor.value.toFixed(1)}
          </div>
          <div className="text-xs text-gray-400">Current</div>
        </div>
      </div>
      
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="w-full h-32 rounded border border-gray-600"
          style={{ backgroundColor: '#1a1a1a' }}
        />
        <div className="absolute bottom-1 left-1 text-xs text-gray-500">
          Time →
        </div>
        <div className="absolute top-1 left-1 text-xs text-gray-500 transform -rotate-90 origin-left">
          Value
        </div>
      </div>
    </div>
  );
};
