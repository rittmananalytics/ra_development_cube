view(`projects`, {
  description: `Timesheet projects, timesheets, client and staff details`,
  public: true,


  includes: [
    // Measure
    timesheets_fact.totalTimesheetHoursBilled,
    timesheets_fact.timesheetTotalAmountBilled,
    timesheet_projects_dim.countTimesheetProjects,
    timesheet_projects_dim.totalProjectFeeAmount,
    timesheets_fact.totalTimesheetCostAmountGbp,
    timesheets_fact.totalTimesheetAmountBilled,
    companies_dim.count,
    contacts_dim.countContacts,
    // Dimensions
    timesheet_projects_dim.projectName,
    timesheet_projects_dim.projectCode,
    timesheet_projects_dim.isProjectActive,
    timesheet_projects_dim.projectDeliveryStartTs,
    timesheet_projects_dim.projectDeliveryEndTs,
    timesheets_fact.timesheetBillingDate,
    timesheets_fact.timesheetIsBillable,
    companies_dim.companyName,
    companies_dim.companyCreated,
    companies_dim.companyDescription,
    companies_dim.companyWebsite,
    companies_dim.companyIndustry,
    companies_dim.companyCurrencyCode,
    contacts_dim.contactName,
    contacts_dim.contactIsStaff,
    contacts_dim.contactIsContractor,
    contacts_dim.contactStaffJobTitle    
      ]
});