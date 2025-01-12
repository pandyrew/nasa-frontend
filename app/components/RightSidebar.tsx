type Task = {
  label: string;
  duration: string;
  risk: string;
  isComplete?: boolean;
};

export function RightSidebar() {
  return (
    <div className="bg-[#2d2a2b] border border-gray-700 p-4 rounded-lg">
      <h2 className="font-bold mb-4">Connect UIA to DCU</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>ETA</span>
          <span>3:34 min</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Risk</span>
          <span>Medium</span>
        </div>

        <div className="space-y-2">
          <TaskItem
            label="EV1 and EV2 connect UIA and DCU umbilical"
            duration="2.3 seconds"
            risk="Low risk"
            isComplete={true}
          />
        </div>
      </div>
    </div>
  );
}

function TaskItem({ label, duration, risk, isComplete }: Task) {
  return (
    <div className="p-3 bg-gray-700 rounded">
      <div className="flex items-center gap-2">
        <div
          className={`w-2 h-2 rounded-full ${
            isComplete ? "bg-green-400" : "bg-gray-400"
          }`}
        />
        <span>{label}</span>
      </div>
      <div className="mt-2 text-sm text-gray-400">
        <span>{duration}</span>
        <span className="ml-4">{risk}</span>
      </div>
    </div>
  );
}
