cube(`companies_dim`, {
  sql_table: `analytics.companies_dim`,
  public: false,
  
  joins: {
    timesheets_fact: {
      relationship: "one_to_many",
      sql: `${CUBE}.company_pk = ${timesheets_fact.companyPk}`
    },
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [companyName]
    }
  },

  dimensions: {
    companyCreated: {
      sql: `company_created_date`,
      type: `time`
    },

    companyCurrencyCode: {
      sql: `company_currency_code`,
      type: `string`
    },

    companyDescription: {
      sql: `company_description`,
      type: `string`
    },

    allCompanyAddresses: {
      sql: `all_company_addresses`,
      type: `string`
    },

    companyFinanceStatus: {
      sql: `company_finance_status`,
      type: `string`
    },

    companyIndustry: {
      sql: `company_industry`,
      type: `string`
    },

    companyLastModified: {
      sql: `company_last_modified_date`,
      type: `time`
    },

    companyLinkedinCompanyPage: {
      sql: `company_linkedin_company_page`,
      type: `string`
    },

    companyName: {
      sql: `company_name`,
      type: `string`
    },

    companyPhone: {
      sql: `company_phone`,
      type: `string`
    },

    companyPk: {
      sql: `company_pk`,
      type: `string`,
      primaryKey: true
    },

    companyTwitterhandle: {
      sql: `company_twitterhandle`,
      type: `string`
    },

    companyWebsite: {
      sql: `company_website`,
      type: `string`
    }
  }
});







