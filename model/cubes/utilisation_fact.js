cube(`utilisation_fact`, {
  sql: `SELECT * FROM analytics.contact_utilization_fact GROUP BY 1,2,3,4,5,6,7,8,9,10,11,12,13`,
  public: false,

joins: {
  contacts_dim: {
      relationship: `many_to_one`,
      sql: `${CUBE}.contact_pk = ${contacts_dim.contactPk}`,
    }
},

  measures: {
    averageActualBillableHours: {
      sql: `actual_billable_hours`,
      type: `avg`,
    },
    totalActualBillableHours: {
      sql: `actual_billable_hours`,
      type: `sum`,
    },
    averageActualStoryPoints: {
      sql: `actual_story_points`,
      type: `avg`,
    },
    totalActualStoryPoints: {
      sql: `actual_story_points`,
      type: `sum`,
    },
    averageForecastBillableHours: {
      sql: `forecast_billable_hours`,
      type: `avg`,
    },
    totalForecastBillableHours: {
      sql: `forecast_billable_hours`,
      type: `sum`,
    },
    averageHoursPerWeek: {
      sql: `hours_per_week`,
      type: `avg`,
    },
    totalHoursPerWeek: {
      sql: `hours_per_week`,
      type: `sum`,
    },
    averageTarget: {
      sql: `target`,
      type: `avg`,
    },
    averageTargetBillableCapacity: {
      sql: `target_billable_capacity`,
      type: `avg`,
    },
    totalTargetBillableCapacity: {
      sql: `target_billable_capacity`,
      type: `sum`,
    },
    averageForecastUtilization: {
      sql: `COALESCE(safe_divide(forecast_billable_hours, target_billable_capacity), 0)`,
      type: `avg`,
    },
    averageActualUtilization: {
      sql: `COALESCE(safe_divide(actual_billable_hours, target_billable_capacity), 0)`,
      type: `avg`,
    },
    actualToForecastUtilizationVariance: {
      sql: `${CUBE}.actual_utilization - ${CUBE}.forecast_utilization`,
      type: `avg`,
    },
    actualToTargetUtilizationVariance: {
      sql: `${CUBE}.actual_utilization - ${CUBE}.target`,
      type: `avg`,
    },
    averageTimeOff: {
      sql: `days_off`,
      type: `avg`,
    },
    totalTimeOff: {
      sql: `days_off`,
      type: `sum`,
    },
    averageTotalCapacity: {
      sql: `total_capacity`,
      type: `avg`,
    },
    totalTotalCapacity: {
      sql: `total_capacity`,
      type: `sum`,
    },
  },

  dimensions: {
    actualBillableHours: {
      sql: `actual_billable_hours`,
      type: `number`,
    },
    actualStoryPoints: {
      sql: `actual_story_points`,
      type: `number`,
    },
    contactPk: {
      sql: `contact_pk`,
      type: `string`,
    },
    forecastBillableHours: {
      sql: `forecast_billable_hours`,
      type: `number`,
    },
    forecastWeek: {
      sql: `forecast_week`,
      type: `time`,
    },
    hoursPerWeek: {
      sql: `hours_per_week`,
      type: `number`,
    },
    hrUtilizationPk: {
      sql: `CONCAT(contact_pk, forecast_week)`,
      type: `string`,
      primaryKey: true,
    },
    target: {
      sql: `target`,
      type: `number`,
    },
    targetBillableCapacity: {
      sql: `target_billable_capacity`,
      type: `number`,
    },
    forecastUtilization: {
      sql: `COALESCE(safe_divide(forecast_billable_hours, target_billable_capacity), 0)`,
      type: `number`,
    },
    actualUtilization: {
      sql: `COALESCE(safe_divide(actual_billable_hours, target_billable_capacity), 0)`,
      type: `number`,
    },
    timeOff: {
      sql: `days_off`,
      type: `number`,
    },
    totalCapacity: {
      sql: `total_capacity`,
      type: `number`,
    },
  },
});
