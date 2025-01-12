type ViewMode = "single" | "grid";

export function MainViewport({
  connection,
  currentTime,
  elapsedTime,
  missionProgress,
  viewMode,
  onViewModeChange,
}: {
  connection: string;
  currentTime: string;
  elapsedTime: string;
  missionProgress: number;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <span>Connection: </span>
            <span className="text-green-400">{connection}</span>
          </div>
          <div className="flex gap-4">
            <button 
              className={`px-3 py-1 rounded ${viewMode === 'single' ? 'bg-blue-500' : 'bg-gray-700'}`}
              onClick={() => onViewModeChange('single')}
            >
              Single view
            </button>
            <button 
              className={`px-3 py-1 rounded ${viewMode === 'grid' ? 'bg-blue-500' : 'bg-gray-700'}`}
              onClick={() => onViewModeChange('grid')}
            >
              Grid view
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <TimeDisplay label="Current time" value={currentTime} />
          <TimeDisplay label="Elapsed time" value={elapsedTime} />
          <TimeDisplay label="Mission progress" value={`${missionProgress}%`} />
        </div>

        <CameraFeed />
        <ControlPanel />
      </div>
    </div>
  );
}

function TimeDisplay({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-2xl">{value}</div>
    </div>
  );
}

function CameraFeed() {
  return (
    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-gray-600">Camera feed placeholder</div>
      </div>
      
      <div className="absolute bottom-4 left-4 bg-gray-800/80 p-2 rounded-full">
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
          <polygon points="50,20 45,35 55,35" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
}

function ControlPanel() {
  return (
    <div className="mt-4 flex gap-4">
      <button className="px-4 py-2 bg-red-600 rounded-lg">Abort commands</button>
      <button className="px-4 py-2 bg-gray-700 rounded-lg">Turn on radio</button>
      <button className="px-4 py-2 bg-gray-700 rounded-lg">Navigation</button>
      <button className="px-4 py-2 bg-gray-700 rounded-lg">Adjust speed</button>
    </div>
  );
} 