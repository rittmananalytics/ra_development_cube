cube(`contacts_dim`, {
  sql_table: `analytics.contacts_dim`,
  public: false,
  
  joins: {
    timesheets_fact: {
        relationship: `one_to_many`,
        sql: `${CUBE}.contact_pk = ${timesheets_fact.contactPk}`,
      },
    deals_fact: {
        relationship: `one_to_many`,
        sql: `${CUBE}.contact_pk = ${deals_fact.contactpk}`,
      },
  },
  segments: {
    staff_member: {
      sql: `${CUBE}.contact_is_staff`,
    },
    contractor: {
      sql: `${CUBE}.contact_is_contractor`,
    },
  },
  measures: {
    countContacts: {
      sql: `contact_pk`,
      type: `countDistinct`,
    },
    count: {
      sql: `contact_pk`,
      type: `count`,
    },
  },

  dimensions: {
    hubspotContactId: {
      sql: `(SELECT contact_id FROM UNNEST(all_contact_ids) contact_id WHERE contact_id like "%hubspot%" limit 1)`,
      type: `string`,
    },
    contactConversionEvent: {
      sql: `contact_conversion_event_source`,
      type: `string`,
    },
    contactSourceType: {
      sql: `contact_source_type`,
      type: `string`,
    },
    isContactInCrmWorkflow: {
      sql: `contact_in_crm_workflow`,
      type: `boolean`,
    },
    contactCrmLifecycleStage: {
      sql: `contact_crm_lifecycle_stage`,
      type: `string`,
    },
    contactCostRate: {
      sql: `contact_cost_rate`,
      type: `number`,
    },
    contactCreatedDate: {
      sql: `contact_created_date`,
      type: `time`,
    },
    contactDefaultHourlyRate: {
      sql: `contact_default_hourly_rate`,
      type: `number`,
    },
    contactIsActive: {
      sql: `contact_is_active`,
      type: `boolean`,
    },
    contactIsContractor: {
      sql: `contact_is_contractor`,
      type: `boolean`,
    },
    contactIsStaff: {
      sql: `contact_is_staff`,
      type: `boolean`,
    },
    contactStaffJobTitle: {
      sql: `contact_staff_job_title`,
      type: `string`,
    },
    contactLastModifiedDate: {
      sql: `contact_last_modified_date`,
      type: `time`,
    },
    contactName: {
      sql: `contact_name`,
      type: `string`,
    },
    contactPhone: {
      sql: `contact_phone`,
      type: `string`,
    },
    contactPk: {
      sql: `contact_pk`,
      type: `string`,
      primaryKey: true,
    },
    contactWeeklyCapacity: {
      sql: `contact_weekly_capacity/60/60`,
      type: `number`,
    },
  }
});




