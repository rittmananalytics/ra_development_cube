cube(`ChartOfAccountsDim`, {
  sql: `SELECT * FROM ra-development.analytics.chart_of_accounts_dim`,

  dimensions: {
    accountBankAccountNumber: {
      sql: `account_bank_account_number`,
      type: `string`,
      public: false
    },

    accountBankAccountType: {
      sql: `account_bank_account_type`,
      type: `string`
    },

    accountClass: {
      sql: `account_class`,
      type: `string`
    },

    accountCode: {
      sql: `account_code`,
      type: `string`
    },

    accountCurrencyCode: {
      sql: `account_currency_code`,
      type: `string`
    },

    accountDescription: {
      sql: `account_description`,
      type: `string`
    },

    accountEnablePaymentsToAccount: {
      sql: `account_enable_payments_to_account`,
      type: `boolean`,
      public: false
    },

    accountId: {
      sql: `account_id`,
      type: `string`
    },

    accountIsSystemAccount: {
      sql: `account_is_system_account`,
      type: `string`
    },

    accountName: {
      sql: `account_name`,
      type: `string`
    },

    accountPk: {
      sql: `account_fk`,
      type: `string`,
      primaryKey: true
    },

    accountReportCategory: {
      sql: `account_report_category`,
      type: `string`
    },

    accountReportCategoryOrder: {
      sql: `account_report_category_order`,
      type: `number`,
      public: false
    },

    accountReportGroup: {
      sql: `account_report_group`,
      type: `string`
    },

    accountReportOrder: {
      sql: `account_report_order`,
      type: `number`
    },

    accountReportSubCategory: {
      sql: `account_report_sub_category`,
      type: `string`
    },

    accountReportSubCategoryOrder: {
      sql: `account_report_sub_category_order`,
      type: `number`,
      public: false
    },

    accountReportingCode: {
      sql: `account_reporting_code`,
      type: `string`
    },

    accountReportingCodeName: {
      sql: `account_reporting_code_name`,
      type: `string`
    },

    accountShowInExpenseClaims: {
      sql: `account_show_in_expense_claims`,
      type: `boolean`
    },

    accountStatus: {
      sql: `account_status`,
      type: `string`
    },

    accountTaxType: {
      sql: `account_tax_type`,
      type: `string`
    },

    accountType: {
      sql: `account_type`,
      type: `string`
    },

    source: {
      sql: `source`,
      type: `string`,
      public: false
    }
  }
});
