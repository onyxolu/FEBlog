import {
  LightningBoltIcon,
  PuzzleIcon,
  CogIcon,
  DocumentIcon,
  CodeIcon,
  DocumentTextIcon,
  TruckIcon,
  BeakerIcon,
  ChartBarIcon,
  LightBulbIcon,
  GlobeAltIcon,
  ServerIcon,
  ChartSquareBarIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Requirements Gathering",
    icon: DocumentTextIcon,
  },
  {
    name: "Design",
    icon: ServerIcon,
  },
  {
    name: "Coding",
    icon: CodeIcon,
  },
  {
    name: "Logging",
    icon: ChartSquareBarIcon,
  },
  {
    name: "Localization",
    icon: GlobeAltIcon,
  },
  {
    name: "Accessibility",
    icon: LightningBoltIcon,
  },
  {
    name: "Testing",
    icon: LightBulbIcon,
  },
  {
    name: "Telemetry and Monitoring",
    icon: ChartBarIcon,
  },
  {
    name: "Performance and Optimization",
    icon: BeakerIcon,
  },
  {
    name: "Deployment",
    icon: TruckIcon,
  },
  {
    name: "Documentation",
    icon: DocumentIcon,
  },
];

function Features() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 my-12">
        {features.map(({ icon: Icon, ...feature }, i) => (
          <div
            className="flex items-center space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              <Icon
                className="block w-8 h-8"
                style={{ height: 24, width: 24 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="my-0 font-small dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;

// "requirements-gathering": "📝 ⏐ Requirements Gathering",
// "design": "🍥 ⏐ Design",
// "coding": "👨🏿‍💻 ⏐ Coding",
// "logging": "💹 ⏐ Logging",
// "localization": "🌎 ⏐ Localization",
// "accessibility": "♿️ ⏐ Accessibility",
// "testing": "🧪 ⏐ Testing",
// "telemetry-and-monitoring": "📊 ⏐ Telemetry and Monitoring",
// "performance-and-optimization": "📉 ⏐ Performance and Optimization",
// "deployment": "🚀 ⏐ Deployment",
// "documentation": "📄 ⏐ Documentation"
