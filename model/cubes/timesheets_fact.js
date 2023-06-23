cube(`timesheets_fact`, {
  sql_table: `analytics.timesheets_fact`,
  public: false,
  joins: {
    timesheet_projects_dim: {
      relationship: `many_to_one`,
      sql: `${CUBE}.timesheet_project_fk = ${timesheet_projects_dim.timesheetProjectPk}`
    },
    companies_dim: {
      relationship: `many_to_one`,
      sql: `${CUBE}.company_fk = ${companies_dim.companyPk}`
    },
    contacts_dim: {
      relationship: `many_to_one`,
      sql: `${CUBE}.contact_fk = ${contacts_dim.contactPk}`
    }
  },
  measures: {
    avgTimesheetBillableHourlyCostAmountGbp: {
      sql: `timesheet_billable_hourly_cost_amount_gbp`,
      type: `avg`
    },
    lastTimesheetBillingDate: {
      sql: `timesheet_billing_date`,
      type: `max`
    },
    totalTimesheetHoursBilled: {
      sql: `timesheet_hours_billed`,
      type: `sum`
    },
    totalTimesheetAmountBilled: {
      sql: `timesheet_total_amount_billed`,
      type: `sum`
    },
    totalTimesheetCostAmountGbp: {
      sql: `${CUBE}.timesheet_hours_billed * ${CUBE}.timesheet_billable_hourly_cost_amount`,
      type: `sum`
    }
  },
  dimensions: {
    companyPk: {
      sql: `company_fk`,
      type: `string`
    },
    timesheetBillableHourlyCostAmountGbp: {
      sql: `timesheet_billable_hourly_cost_amount`,
      type: `number`
    },
    timesheetBillableHourlyRateAmountGbp: {
      sql: `timesheet_billable_hourly_rate_amount`,
      type: `number`
    },
    timesheetBillingDate: {
      sql: `timesheet_billing_date`,
      type: `time`
    },
    timesheetHasBeenBilled: {
      sql: `timesheet_has_been_billed`,
      type: `boolean`
    },
    firstClientTimesheet: {
      sql: `first_company_timesheet_billing_date`,
      type: `time`
    },
    lastClientTimesheet: {
      sql: `last_company_timesheet_billing_date`,
      type: `time`
    },
    timesheetHasBeenLocked: {
      sql: `timesheet_has_been_locked`,
      type: `boolean`
    },
    timesheetHoursBilled: {
      sql: `timesheet_hours_billed`,
      type: `number`
    },
    timesheetInvoiceId: {
      sql: `timesheet_invoice_id`,
      type: `number`
    },
    timesheetIsBillable: {
      sql: `timesheet_is_billable`,
      type: `boolean`
    },
    timesheetNotes: {
      sql: `timesheet_notes`,
      type: `string`
    },
    timesheetPk: {
      sql: `timesheet_pk`,
      type: `string`,
      primaryKey: true
    },
    timesheetProjectPk: {
      sql: `timesheet_project_fk`,
      type: `string`
    },
    timesheetTaskPk: {
      sql: `timesheet_task_fk`,
      type: `string`
    },
    timesheetTotalAmountBilled: {
      sql: `timesheet_total_amount_billed`,
      type: `number`
    },
    contactPk: {
      sql: `contact_fk`,
      type: `string`
    }
  },
  pre_aggregations: {
    biling_by_month: {
      measures: [timesheets_fact.totalTimesheetAmountBilled, timesheets_fact.totalTimesheetHoursBilled],
      timeDimension: projects.timesheetBillingDate,
      granularity: `month`
    }
  }
});