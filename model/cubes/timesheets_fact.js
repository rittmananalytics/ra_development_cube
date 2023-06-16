cube(`timesheets_fact`, {
  sql: `analytics.timesheets_fact`,

  measures: {
    avgTimesheetBillableHourlyCostAmountGbp: {
      sql: `timesheet_billable_hourly_cost_amount_gbp`,
      type: `avg`,
    },
    lastTimesheetBillingDate: {
      sql: `timesheet_billing_date`,
      type: `max`,
    },
    totalTimesheetHoursBilled: {
      sql: `timesheet_hours_billed`,
      type: `sum`,
    },
    totalTimesheetAmountBilled: {
      sql: `timesheet_total_amount_billed`,
      type: `sum`,
    },
    totalTimesheetCostAmountGbp: {
      sql: `${CUBE}.timesheet_hours_billed * ${CUBE}.timesheet_billable_hourly_cost_amount`,
      type: `sum`,
    },
  },

  dimensions: {
    companyPk: {
      sql: `company_fk`,
      type: `string`,
    },
    timesheetBillableHourlyCostAmountGbp: {
      sql: `timesheet_billable_hourly_cost_amount`,
      type: `number`,
    },
    timesheetBillableHourlyRateAmountGbp: {
      sql: `timesheet_billable_hourly_rate_amount`,
      type: `number`,
    },
    timesheetBillingDate: {
      sql: `timesheet_billing_date`,
      type: `time`,
    },
    timesheetHasBeenBilled: {
      sql: `timesheet_has_been_billed`,
      type: `boolean`,
    },
    firstClientTimesheet: {
      sql: `first_company_timesheet_billing_date`,
      type: `time`,
    },
    lastClientTimesheet: {
      sql: `last_company_timesheet_billing_date`,
      type: `time`,
    },
    timesheetHasBeenLocked: {
      sql: `timesheet_has_been_locked`,
      type: `boolean`,
    },
    timesheetHoursBilled: {
      sql: `timesheet_hours_billed`,
      type: `number`,
    },
    timesheetInvoiceId: {
      sql: `timesheet_invoice_id`,
      type: `number`,
    },
    timesheetIsBillable: {
      sql: `timesheet_is_billable`,
      type: `boolean`,
    },
    timesheetNotes: {
      sql: `timesheet_notes`,
      type: `string`,
    },
    timesheetPk: {
      sql: `timesheet_pk`,
      type: `string`,
      primaryKey: true,
    },
    timesheetProjectPk: {
      sql: `timesheet_project_fk`,
      type: `string`,
    },
    timesheetTaskPk: {
      sql: `timesheet_task_fk`,
      type: `string`,
    },
    timesheetTotalAmountBilled: {
      sql: `timesheet_total_amount_billed`,
      type: `number`,
    },
    contactPk: {
      sql: `contact_fk`,
      type: `string`,
    },
  },
});
