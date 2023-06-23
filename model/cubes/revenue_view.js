view(`revenue`, {
  description: `Invoice revenue from project delivery`,
  public: true,
  

  includes: [
    // Measure
    InvoicesFact.invoiceGbpNetAmount,
    InvoicesFact.invoiceGbpAmount,
    InvoicesFact.invoiceGbpTaxAmount,
    // Dimensions
    companies_dim.companyName,
    companies_dim.companyCreated,
    timesheet_projects_dim.projectName,
    timesheet_projects_dim.projectCode,
    timesheet_projects_dim.projectFeeAmount,
    timesheet_projects_dim.projectIsBillable,
    InvoicesFact.firstInvoiceMonth,
    InvoicesFact.invoiceSentAtTs,
    InvoicesFact.invoicePaidAtTs,
    InvoicesFact.invoiceSeq,
    InvoicesFact.invoiceSubject,
    InvoicesFact.totalMonthsCustomer,
    InvoicesFact.customerTotalActiveMonths,
    InvoicesFact.invoiceTotalDaysToPay,
    InvoicesFact.totalInvoicedNetAmountGbp,
    InvoicesFact.monthsSinceFirstInvoice,
    InvoicesFact.quartersSinceFirstInvoice
]
});