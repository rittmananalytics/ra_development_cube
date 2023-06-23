cube(`InvoicesFact`, {
  sql_table: `analytics.invoices_fact`,
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
  },
  measures: {
    customerTotalActiveMonths: {
      sql: `invoice_issued_month`,
      type: `countDistinct`,
    },
    invoiceMonthsRecency: {
      sql: `invoice_months_before_now`,
      type: `max`,
    },
    minInvoiceMonthsBeforeNow: {
      sql: `invoice_months_before_now`,
      type: `min`,
    },
    totalMonthsCustomer: {
      sql: `months_since_first_invoice`,
      type: `max`,
    },
    totalGrossAmountLocal: {
      sql: `total_local_amount`,
      type: `sum`,
    },
    totalTaxLocal: {
      sql: `invoice_local_total_tax_amount`,
      type: `sum`,
    },
    totalNetAmountLocal: {
      sql: `total_local_amount - COALESCE(invoice_local_total_tax_amount, 0)`,
      type: `sum`,
    },
    totalGrossAmountGbp: {
      sql: `invoice_gbp_amount`,
      type: `sum`,
    },
    totalTaxGbp: {
      sql: `invoice_gbp_tax_amount`,
      type: `sum`,
    },
    totalNetAmountGbp: {
      sql: `invoice_gbp_amount - COALESCE(invoice_gbp_tax_amount, 0)`,
      type: `sum`,
    },
    totalInvoicedNetAmountGbp: {
      sql: `invoice_gbp_amount - COALESCE(invoice_gbp_tax_amount, 0)`,
      type: `sum`,
    },
    totalUninvoicedNetAmountGbp: {
      sql: `invoice_gbp_amount - COALESCE(invoice_gbp_tax_amount, 0)`,
      type: `sum`,
    },
    countInvoices: {
      sql: `invoice_fk`,
      type: `countDistinct`,
    },
    totalInvoiceCountInClientsLast12m: {
      sql: `invoice_fk`,
      type: `countDistinct`,
    },
  },

  dimensions: {
    companyId: {
      sql: `company_id`,
      type: `string`,
    },
    companyPk: {
      sql: `company_fk`,
      type: `string`,
    },
    firstInvoiceMonth: {
      sql: `first_invoice_month`,
      type: `time`,
    },
    lastInvoiceMonth: {
      sql: `last_invoice_month`,
      type: `time`,
    },
    invoiceSentAtTs: {
      sql:`invoice_sent_at_ts`,
      type: `time`,
    },
    invoiceCreatorUsersId: {
      sql: `invoice_creator_users_id`,
      type: `string`,
    },
    invoiceCurrency: {
      sql: `invoice_currency`,
      type: `string`,
    },
    invoiceIssueAtTs: {
      sql: `invoice_issue_at_ts`,
      type: `time`,
    },
    expectedPaymentAtTs: {
      sql: `expected_payment_at_ts`,
      type: `time`,
    },
    invoiceNumber: {
      sql: `invoice_number`,
      type: `string`,
    },
    invoicePaidAtTs: {
      sql: `invoice_paid_at_ts`,
      type: `time`,
    },
    invoicePaymentTerm: {
      sql: `invoice_payment_term`,
      type: `string`,
    },
    invoicePeriodEndAtTs: {
      sql: `invoice_period_end_at_ts`,
      type: `time`,
    },
    invoicePeriodStartAtTs: {
      sql: `invoice_period_start_at_ts`,
      type: `time`,
    },
    invoicePk: {
      sql: `invoice_pk`,
      primaryKey: true,
      type: `string`,
    },
    invoiceSeq: {
      sql: `invoice_seq`,
      type: `number`,
    },
    invoiceStatus: {
      sql: `invoice_status`,
      type: `string`,
    },
    invoiceSubject: {
      sql: `invoice_subject`,
      type: `string`,
    },
    invoiceTaxRatePct: {
      sql: `invoice_tax_rate_pct`,
      type: `number`,
    },
    invoiceTotalDaysOverdue: {
      sql: `invoice_total_days_overdue`,
      type: `number`,
    },
    invoiceTotalDaysToPay: {
      sql: `invoice_total_days_to_pay`,
      type: `number`,
    },
    invoiceTotalDaysVarianceOnPaymentTerms: {
      sql: `invoice_total_days_variance_on_payment_terms`,
      type: `number`,
    },
    invoiceType: {
      sql: `invoice_type`,
      type: `string`,
    },
    monthsSinceFirstInvoice: {
      sql: `months_since_first_invoice`,
      type: `number`,
    },
    monthsBeforeLastInvoice: {
      sql: `months_before_last_invoice`,
      type: `number`,
    },
    isInvoiceInClientsLast12m: {
      sql: `months_before_last_invoice < 12`,
      type: `boolean`,
    },
    invoiceMonthsBeforeNow: {
      sql: `invoice_months_before_now`,
      type: `number`,
    },
    projectId: {
      sql: `project_id`,
      type: `string`,
    },
    quartersSinceFirstInvoice: {
      sql: `quarters_since_first_invoice`,
      type: `number`,
    },
    timesheetProjectPk: {
      sql: `timesheet_project_fk`,
      type: `string`,
    },
    totalLocalAmount: {
      sql: `total_local_amount`,
      type: `number`,
    },
    invoiceLocalTotalRevenueAmount: {
      sql: `invoice_local_total_revenue_amount`,
      type: `number`,
    },
    invoiceGbpAmount: {
      sql: `CASE WHEN total_gbp_amount IS NULL THEN total_local_amount / currency_rate ELSE total_gbp_amount END`,
      type: `number`,
    },
    invoiceLocalTotalTaxAmount: {
      sql: `total_local_amount * (CAST(invoice_tax_rate_pct AS FLOAT64) / 100)`,
      type: `number`,
    },
    invoiceCurrencyRate: {
      sql: `CASE WHEN invoice_currency_rate IS NULL OR invoice_currency_rate = 0 THEN currency_rate ELSE invoice_currency_rate END`,
      type: `number`,
    },
    invoiceGbpTaxAmount: {
      sql: `invoice_gbp_amount * (CAST(invoice_tax_rate_pct AS FLOAT64) / 100)`,
      type: `number`,
    },
    invoiceGbpNetAmount: {
      sql: `invoice_gbp_amount`,
      type: `number`,
    },
  },
});