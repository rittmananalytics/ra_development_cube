view(`utilisation`, {
  description: `Staff utilisation`,
  public: true,


  includes: [
    // Measure
    utilisation_fact.averageTotalCapacity,
    utilisation_fact.averageActualBillableHours,
    utilisation_fact.averageActualUtilization,
    utilisation_fact.averageForecastBillableHours,
    utilisation_fact.averageForecastUtilization,
    utilisation_fact.averageTarget,
    utilisation_fact.averageTargetBillableCapacity,
    // Dimensions
    utilisation_fact.forecastWeek,
    contacts_dim.contactName,
    contacts_dim.contactIsStaff,
    contacts_dim.contactIsContractor,
    contacts_dim.contactStaffJobTitle    
      ]
});