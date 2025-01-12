export function StatusBar({ environmentalReadings }: { 
  environmentalReadings: {
    temperature: number;
    humidity: number;
    visibility: number;
    windSpeed: number;
  }
}) {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-800">
      <div className="flex items-center gap-2">
        <span className="text-red-500">● Live</span>
        <span>Rover camera feed</span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span>{environmentalReadings.temperature}°</span>
        <span>{environmentalReadings.windSpeed}mph</span>
        <span>{environmentalReadings.humidity}% humid</span>
        <span>{environmentalReadings.visibility}mi visible</span>
      </div>
    </div>
  );
} 