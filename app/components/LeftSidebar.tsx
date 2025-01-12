type CrewMember = {
  heartRate: number;
  oxygenTank: number;
  bloodPressure: number;
  temperature: number;
};

type RoverStats = {
  heading: number;
  speed: number;
  battery: number;
  temperature: number;
};

type ScienceSample = {
  id: string;
  properties: string[];
};

export function LeftSidebar({
  rover,
  crew,
  samples,
}: {
  rover: RoverStats;
  crew: {
    ev1: CrewMember;
    ev2: CrewMember;
  };
  samples: ScienceSample[];
}) {
  return (
    <div className="space-y-4">
      <div className="bg-[#2d2a2b] border border-gray-700 p-4 rounded-lg">
        <h2 className="font-bold mb-4">LTV</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-400">Heading</div>
              <div className="text-xl">{rover.heading}°</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Speed</div>
              <div className="text-xl">{rover.speed} km/h</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Battery</div>
              <div className="text-xl">{rover.battery}%</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Temperature</div>
              <div className="text-xl">{rover.temperature}°F</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2d2a2b] border border-gray-700 p-4 rounded-lg">
        <h2 className="font-bold mb-4">Crew</h2>
        <div className="space-y-4">
          <CrewStatus label="EV1" stats={crew.ev1} />
          <CrewStatus label="EV2" stats={crew.ev2} />
        </div>
      </div>

      <div className="bg-[#2d2a2b] border border-gray-700 p-4 rounded-lg">
        <h2 className="font-bold mb-4">Science</h2>
        <div className="space-y-2">
          {samples.map((sample) => (
            <div
              key={sample.id}
              className="p-3 bg-gray-700 rounded flex items-center space-x-3"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <div>
                <div className="font-medium">Sample {sample.id}</div>
                <div className="text-sm text-gray-400">
                  {sample.properties.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CrewStatus({ label, stats }: { label: string; stats: CrewMember }) {
  return (
    <div className="p-3 rounded">
      <div className="flex justify-between items-center">
        <span>{label}</span>
        <span className="text-green-400">Nominal</span>
      </div>
      <div className="mt-2 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-400">Heart rate</span>
          <span>{stats.heartRate} BPM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Oxygen</span>
          <span>{stats.oxygenTank}%</span>
        </div>
      </div>
    </div>
  );
}
