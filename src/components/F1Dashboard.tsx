
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { F1CarBottom } from './F1CarBottom';
import { SensorWaveform } from './SensorWaveform';
import { SensorBarChart } from './SensorBarChart';

interface SensorData {
  id: number;
  name: string;
  value: number;
  history: number[];
  color: string;
}

const F1Dashboard = () => {
  const [sensors, setSensors] = useState<SensorData[]>([
    { id: 1, name: 'Front Left', value: 50, history: [], color: '#FF6B6B' },
    { id: 2, name: 'Front Right', value: 45, history: [], color: '#4ECDC4' },
    { id: 3, name: 'Rear Left', value: 55, history: [], color: '#45B7D1' },
    { id: 4, name: 'Rear Right', value: 48, history: [], color: '#96CEB4' }
  ]);

  // Simulate real-time sensor data
  useEffect(() => {
    const interval = setInterval(() => {
      setSensors(prevSensors => 
        prevSensors.map(sensor => {
          const variation = (Math.random() - 0.5) * 10;
          const newValue = Math.max(0, Math.min(100, sensor.value + variation));
          const newHistory = [...sensor.history, newValue].slice(-50); // Keep last 50 readings
          
          return {
            ...sensor,
            value: newValue,
            history: newHistory
          };
        })
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="min-h-screen p-6" 
      style={{ background: 'linear-gradient(135deg, #13133B 50%, #3C388C 100%)' }}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">F1 Plank Sensor Monitor</h1>
          <p className="text-gray-300">Real-time monitoring of underfloor sensor readings</p>
        </div>

        {/* F1 Car Bottom View */}
        <Card className="border-gray-700" style={{ backgroundColor: '#13133B' }}>
          <CardHeader>
            <CardTitle className="text-white text-xl">Car Underfloor View</CardTitle>
          </CardHeader>
          <CardContent>
            <F1CarBottom sensors={sensors} />
          </CardContent>
        </Card>

        {/* Sensor Waveforms */}
        <Card className="border-gray-700" style={{ backgroundColor: '#13133B' }}>
          <CardHeader>
            <CardTitle className="text-white text-xl">Sensor Data Waveforms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sensors.map(sensor => (
                <SensorWaveform key={sensor.id} sensor={sensor} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card className="border-gray-700" style={{ backgroundColor: '#13133B' }}>
          <CardHeader>
            <CardTitle className="text-white text-xl">Current Sensor Readings</CardTitle>
          </CardHeader>
          <CardContent>
            <SensorBarChart sensors={sensors} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default F1Dashboard;
