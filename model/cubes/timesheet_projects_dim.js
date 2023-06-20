cube(`timesheet_projects_dim`, {
  sql_table: `analytics.timesheet_projects_dim`,
  public: false,
  
  joins: {
    timesheets_fact: {
      relationship: `many_to_one`,
      sql: `${CUBE}.timesheet_project_pk = ${timesheets_fact.timesheetProjectPk}`,
    },
  },
  
  

  measures: {
    projectHoursBudget: {
      sql: `project_budget_amount`,
      type: `sum`,
    },
    projectFteBudget: {
      sql: `${CUBE}.project_budget_amount / (35*4)`,
      type: `sum`,
    },
    totalProjectFeeAmount: {
      sql: `project_fee_amount`,
      type: `sum`,
    },
    countTimesheetProjects: {
      sql: `timesheet_project_pk`,
      type: `countDistinct`,
    },
  },

  dimensions: {
    companyPk: {
      sql: `company_fk`,
      type: `string`,
    },
    projectBudgetAmount: {
      sql: `project_budget_amount`,
      type: `number`,
    },
    projectBudgetBy: {
      sql: `project_budget_by`,
      type: `string`,
    },
    projectCode: {
      sql: `project_code`,
      type: `string`,
    },
    projectCostBudget: {
      sql: `project_cost_budget`,
      type: `number`,
    },
    projectDeliveryEndTs: {
      sql: `project_delivery_end_ts`,
      type: `time`,
    },
    isProjectActive: {
      sql: `CASE WHEN TIMESTAMP_ADD(TIMESTAMP(${CUBE}.project_delivery_end_ts), INTERVAL 30 DAY) > CURRENT_TIMESTAMP THEN true ELSE false END`,
      type: `boolean`,
    },
    projectDeliveryStartTs: {
      sql: `project_delivery_start_ts`,
      type: `time`,
    },
    projectFeeAmount: {
      sql: `project_fee_amount`,
      type: `number`,
    },
    projectFeeAmountProRata: {
      sql: `total_project_fee_recognized_revenue`,
      type: `number`,
    },
    totalBusinessDaysPctElapsed: {
      sql: `1 - ${CUBE}.total_business_days_pct_left`,
      type: `number`,
    },
    projectHourlyRate: {
      sql: `project_hourly_rate`,
      type: `number`,
    },
    projectIsActive: {
      sql: `project_is_active`,
      type: `boolean`,
    },
    projectIsBillable: {
      sql: `project_is_billable`,
      type: `boolean`,
    },
    projectIsExpensesIncludedInCostBudget: {
      sql: `project_is_expenses_included_in_cost_budget`,
      type: `boolean`,
    },
    projectIsFixedFee: {
      sql: `project_is_fixed_fee`,
      type: `boolean`,
    },
    projectName: {
      sql: `project_name`,
      type: `string`,
    },
    projectOverBudgetNotificationPct: {
      sql: `project_over_budget_notification_pct`,
      type: `number`,
    },
    timesheetProjectId: {
      sql: `timesheet_project_id`,
      type: `string`,
    },
    timesheetProjectPk: {
      sql: `timesheet_project_pk`,
      type: `string`,
      primaryKey: true,
    },
  },
});