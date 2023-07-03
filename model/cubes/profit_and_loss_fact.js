cube(`ProfitAndLossReportFact`, {
  sql: `SELECT * FROM ra-development.analytics.profit_and_loss_report_fact`,

  dimensions: {
    accountClass: {
      sql: `account_class`,
      type: `string`
    },

    accountCode: {
      sql: `account_code`,
      type: `string`,
      public: false
    },

    accountId: {
      sql: `account_id`,
      type: `string`
    },

    accountName: {
      sql: `account_name`,
      type: `string`
    },

    accountReportCategory: {
      sql: `account_report_category`,
      type: `string`
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

    accountType: {
      sql: `account_type`,
      type: `string`
    },

    profitAndLossPk: {
      sql: `profit_and_loss_pk`,
      type: `string`,
      primaryKey: true,
      public: false
    },

    period: {
      sql: `date_month`,
      type: `time`
    }
  },

  measures: {
    amount: {
      sql: `net_amount`,
      type: `sum`
    }
  }
});
