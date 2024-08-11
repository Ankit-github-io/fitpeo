type TimePeriod = "daily" | "weekly" | "monthly";
interface DataSet {
  label: string;
  data: number[];
  backgroundColor: string;
  borderRadius: number;
  borderSkipped: boolean;
  borderWidth: number;
}
interface ChartData {
  labels: string[];
  datasets: DataSet[];
}

// Function to generate day labels based on the selected month
const generateDayLabels = (month: number): string[] => {
  const daysInMonth = new Date(2024, month, 0).getDate(); // Use 2024 for leap year consideration
  return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
};

// Function to generate random daily data (for demonstration)
const generateDailyData = (days: number): number[] => {
  return Array.from(
    { length: days },
    () => Math.floor(Math.random() * 5000) + 1000
  );
};

// Get current month
const currentMonth = new Date().getMonth() + 1; // Months are zero-based

// Create the activityData object
export const activityData: Record<TimePeriod, ChartData> = {
  daily: {
    labels: generateDayLabels(currentMonth),
    datasets: [
      {
        label: "Daily Activity",
        data: generateDailyData(generateDayLabels(currentMonth).length),
        backgroundColor: "#4A90E2",
        borderRadius: 999,
        borderSkipped: false,
        borderWidth: 2,
      },
    ],
  },
  weekly: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Activity",
        data: [5000, 7000, 6000, 4000, 9000, 11000, 10000],
        backgroundColor: "#4A90E2",
        borderRadius: 999,
        borderSkipped: false,
        borderWidth: 12,
      },
    ],
  },
  monthly: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Activity",
        data: [
          30000, 28000, 32000, 35000, 37000, 39000, 41000, 43000, 45000, 48000,
          50000, 52000,
        ],
        backgroundColor: "#4A90E2",
        borderRadius: 999,
        borderSkipped: false,
        borderWidth: 8,
      },
    ],
  },
};
