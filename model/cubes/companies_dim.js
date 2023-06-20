cube(`companies_dim`, {
  sql: `with company_aggs as (
          SELECT company_pk,
            if(sum(case when i.invoice_status in ("Open","Paid"') then i.total_gbp_amount end) >0,if(sum(case when t.timesheet_is_billable then t.timesheet_hours_billed end)>0,true,false),false) as is_customer,
            if(sum(case when p.invoice_status != "Voided" then p.total_gbp_amount end) >0,true,false) as is_supplier
          from analytics.companies_dim c 
          left join ra-development.analytics.invoices_fact i
            on c.company_pk = i.company_fk
            and i.invoice_type = "Xero - Sales"
          left join analytics.invoices_fact p
            on c.company_pk = p.company_fk
            and p.invoice_type = 'Xero - Purchases'
          left join analytics.timesheets_fact t
            on c.company_pk = t.company_fk
          group by 1)
        select c.*,a.* except (company_pk)
        from analytics.companies_dim c
        join company_aggs a 
        on c.company_pk = a.company_pk
        where a.is_customer or a.is_supplier`,
  public: false,
  segments: {
    clients: {
      sql: `${CUBE}.is_customer`,
    },
    existing_client: {
      sql: `${CUBE}.is_supplier`,
    },
  },
  
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







