export function VersusPercentage({
  label_1,
  label_2,
  value_1,
  value_2,
  per_1,
  per_2,
}: {
  label_1: string;
  label_2: string;
  value_1: string;
  value_2: string;
  per_1: number;
  per_2: number;
}) {
  return (
    <div className="flex-1 p-4">
      <div className="flex flex-col">
        <div className="flex">
          <div className={`flex flex-col flex-1`}>
            <span className="text-xs opacity-50">{label_1}</span>
            {value_1}
          </div>
          <div className={`flex flex-col flex-1 items-end`}>
            <span className="text-xs opacity-50">{label_2}</span>
            {value_2}
          </div>
        </div>
        <div className="flex">
          <div
            style={{
              width: `${per_1 ? per_1 : "50"}%`,
            }}
          >
            <div className="bg-green-500 h-1 rounded-lg w-full"></div>
          </div>
          <div
            style={{
              width: `${per_2 ? per_2 : "50"}%`,
            }}
          >
            <div className="bg-red-500 h-1 rounded-lg w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
