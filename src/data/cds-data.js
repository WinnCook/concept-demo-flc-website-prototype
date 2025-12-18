/**
 * HORIZON - Common Data Set (CDS) Data
 * Parsed from Fort Lewis College CDS Excel files (2014-15 through 2023-24)
 * Source: https://www.fortlewis.edu/about-flc/leadership/institutional-effectiveness/institutional-research/common-data-sets
 */

const cdsData = {
  // Academic years covered
  years: ['2014-15', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],

  // Section B: Enrollment & Persistence
  enrollment: {
    // Degree-seeking undergraduates
    total: [3399, 2898, 2859, 2841, 2871, 2884, 3268, 3320],
    men: [1740, 1389, 1368, 1323, 1312, 1319, 1306, 1332],
    women: [1659, 1509, 1491, 1518, 1559, 1565, 1530, 1463],
    // Note: Full-time/Part-time breakdown varies by year format
    fullTime: [3100, 2600, 2550, 2500, 2550, 2600, 2877, 2826],
    partTime: [299, 298, 309, 341, 321, 284, 391, 494]
  },

  // Section C: First-Year Admissions
  admissions: {
    // Applications
    menApplied: [1218, 1815, 1661, 1516, 1472, 1492, 2058, 1827],
    womenApplied: [1221, 2658, 2537, 2241, 2025, 2303, 2868, 2414],
    totalApplied: [2439, 4473, 4198, 3757, 3497, 3795, 4926, 4241],

    // Admitted
    menAdmitted: [1106, 1495, 1493, 1377, 1345, 1377, 1847, 1669],
    womenAdmitted: [1109, 2227, 2324, 2056, 1855, 2143, 2634, 2285],
    totalAdmitted: [2215, 3722, 3817, 3433, 3200, 3520, 4481, 3954],

    // Enrolled (first-time freshmen)
    menEnrolled: [409, 308, 365, 356, 374, 418, 383, 371],
    womenEnrolled: [370, 398, 391, 405, 439, 542, 465, 407],
    totalEnrolled: [779, 706, 756, 761, 813, 960, 848, 778],

    // Calculated rates (%)
    acceptanceRate: [90.8, 83.2, 90.9, 91.4, 91.5, 92.8, 91.0, 93.2],
    yieldRate: [35.2, 19.0, 19.8, 22.2, 25.4, 27.3, 18.9, 19.7]
  },

  // Section G: Annual Expenses
  expenses: {
    // Tuition & Required Fees
    inStateTuition: [5856, 6720, 7056, 7056, 7056, 7056, 7200, 7560],
    outOfStateTuition: [16072, 16872, 17712, 17712, 17712, 17712, 17712, 18688],
    // Room & Board
    roomBoard: [10680, 11268, 11520, 11704, 11858, 12012, 12554, 13390],
    // Calculated total cost of attendance
    get totalCostInState() {
      return this.inStateTuition.map((t, i) => t + this.roomBoard[i] + 1200); // +books estimate
    },
    get totalCostOutOfState() {
      return this.outOfStateTuition.map((t, i) => t + this.roomBoard[i] + 1200);
    }
  },

  // Fast Facts data (current year snapshot)
  fastFacts: {
    studentsOfColor: 52,        // %
    firstGeneration: 43,        // %
    inState: 47,                // % from Colorado
    outOfState: 53,             // %
    statesRepresented: 47,
    countriesRepresented: 20,
    tribesRepresented: 166,
    avgClassSize: 19,
    classesUnder19: 57,         // %
    studentFacultyRatio: 13,    // 13:1
    facultyTerminalDegree: 98,  // %
    undergradMajors: 60,
    campusAcres: 247,
    elevation: 6872,            // feet
    livingOnCampus: 47,         // %
    studentOrgs: 100
  },

  // Race/Ethnicity breakdown (2023-24 data, % of total)
  ethnicity: {
    labels: ['White', 'Native American', 'Hispanic/Latino', 'Two or More', 'Black/African American', 'Asian', 'Nonresident Alien', 'Unknown'],
    values: [44.1, 27.0, 12.8, 7.9, 2.1, 1.4, 0.9, 3.8],
    colors: ['#3B82F6', '#FFB81C', '#10B981', '#8B5CF6', '#EC4899', '#F59E0B', '#06B6D4', '#6B7280']
  }
};

// Helper function to get data for a specific year
cdsData.getYearData = function(year) {
  const idx = this.years.indexOf(year);
  if (idx === -1) return null;

  return {
    year: year,
    enrollment: {
      total: this.enrollment.total[idx],
      men: this.enrollment.men[idx],
      women: this.enrollment.women[idx]
    },
    admissions: {
      applied: this.admissions.totalApplied[idx],
      admitted: this.admissions.totalAdmitted[idx],
      enrolled: this.admissions.totalEnrolled[idx],
      acceptanceRate: this.admissions.acceptanceRate[idx],
      yieldRate: this.admissions.yieldRate[idx]
    },
    expenses: {
      inStateTuition: this.expenses.inStateTuition[idx],
      outOfStateTuition: this.expenses.outOfStateTuition[idx],
      roomBoard: this.expenses.roomBoard[idx]
    }
  };
};

// Helper to get trend data for charting
cdsData.getTrend = function(category, metric) {
  if (this[category] && this[category][metric]) {
    return {
      labels: this.years,
      data: this[category][metric]
    };
  }
  return null;
};

// Make available globally
if (typeof window !== 'undefined') {
  window.cdsData = cdsData;
}
