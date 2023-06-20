cube(`deals_fact`, {
  sql_table: `analytics.deals_fact`,
  public: false,
  joins: {
    contacts_dim: {
      relationship: `many_to_one`,
      sql: `${CUBE}.contact_fk = ${contacts_dim.contactPk}`
    },
    companies_dim: {
      relationship: `many_to_one`,
      sql: `${CUBE}.company_fk = ${companies_dim.companyPk}`
    }
  },
  segments: {
    new_business: {
      sql: `${CUBE}.dealType = 'New Business'`,
    },
    existing_client: {
      sql: `${CUBE}.dealType = 'Existing Client'`,
    },
  },
  measures: {
    totalDealAmount: {
      sql: `deal_amount`,
      type: `sum`
    },
    totalDealAmountGbpConverted: {
      sql: `CASE
              WHEN deal_currency_code = 'USD' THEN deal_amount * .75
              WHEN deal_currency_code = 'CAD' THEN deal_amount * .58
              WHEN deal_currency_code = 'EUR' THEN deal_amount * 0.90
              ELSE deal_amount
            END`,
      type: `sum`
    },
    totalClosedWonDealAmount: {
      sql: `CASE WHEN pipeline_stage_closed_won THEN deal_amount END`,
      type: `sum`
    },
    totalClosedLostDealAmount: {
      sql: `CASE WHEN pipeline_stage_display_order = 10 THEN deal_amount END`,
      type: `sum`
    },
    totalClosedLostDeals: {
      sql: `CASE WHEN pipeline_stage_display_order = 10 THEN deal_pk END`,
      type: `countDistinct`
    },
    countDeals: {
      sql: `deal_pk`,
      type: `countDistinct`
    },
    countClosedWonDeals: {
      sql: `CASE WHEN pipeline_stage_closed_won THEN deal_pk END`,
      type: `countDistinct`
    },
    totalDealValue: {
      sql: `deal_value`,
      type: `sum`
    },
    totalWeightedDealAmount: {
      sql: `deal_amount * pipeline_stage_close_probability_pct`,
      type: `sum`
    }
  },
  dimensions: {
    companyPk: {
      sql: `company_fk`,
      type: `string`
    },
    dealAmount: {
      sql: `deal_amount`,
      type: `number`
    },
    dealClosedLostReason: {
      sql: `deal_closed_lost_reason`,
      type: `string`
    },
    dealCreatedTs: {
      sql: `deal_created_ts`,
      type: `time`
    },
    dealDescription: {
      sql: `deal_description`,
      type: `string`
    },
    dealId: {
      sql: `deal_id`,
      type: `number`
    },
    dealIsDeleted: {
      sql: `deal_is_deleted`,
      type: `boolean`
    },
    dealLastModifiedTs: {
      sql: `deal_last_modified_ts`,
      type: `time`
    },
    dealName: {
      sql: `deal_name`,
      type: `string`
    },
    dealOwnerId: {
      sql: `deal_owner_id`,
      type: `string`
    },
    dealPipelineId: {
      sql: `deal_pipeline_id`,
      type: `string`
    },
    dealPipelineStageLabel: {
      sql: `pipeline_stage_label`,
      type: `string`
    },
    dealPipelineStageTs: {
      sql: `deal_pipeline_stage_ts`,
      type: `time`
    },
    dealPk: {
      sql: `deal_pk`,
      type: `string`,
      primaryKey: true
    },
    dealType: {
      sql: `CASE WHEN deal_type IS NULL THEN 'Existing Business' ELSE deal_type END`,
      type: `string`
    },
    dealStageDisplayOrder: {
      sql: `deal_stage_display_order`,
      type: `number`
    },
    dealStageProbability: {
      sql: `deal_stage_probability`,
      type: `number`
    },
    dealStageClosedWon: {
      sql: `deal_stage_closed_won`,
      type: `boolean`
    },
    dealStageClosedLost: {
      sql: `deal_stage_closed_lost`,
      type: `boolean`
    },
    ownerEmail: {
      sql: `owner_email`,
      type: `string`
    },
    ownerFullName: {
      sql: `owner_full_name`,
      type: `string`
    },
    pipelineDisplayOrder: {
      sql: `pipeline_display_order`,
      type: `number`
    },
    pipelineLabel: {
      sql: `pipeline_label`,
      type: `string`
    },
    pipelineStageCloseProbabilityPct: {
      sql: `pipeline_stage_close_probability_pct`,
      type: `number`
    },
    weightedDealAmount: {
      sql: `deal_amount * pipeline_stage_close_probability_pct`,
      type: `number`
    },
    pipelineStageClosedWon: {
      sql: `pipeline_stage_closed_won`,
      type: `boolean`
    },
    pipelineStageDisplayOrder: {
      sql: `pipeline_stage_display_order`,
      type: `number`
    },
    pipelineStageLabel: {
      sql: `pipeline_stage_label`,
      type: `string`
    },
    numberOfSprints: {
      sql: `deal_number_of_sprints`,
      type: `number`
    },
    pricingModel: {
      sql: `deal_pricing_model`,
      type: `string`
    },
    partnerReferral: {
      sql: `deal_partner_referral`,
      type: `string`
    },
    sprintType: {
      sql: `deal_sprint_type`,
      type: `string`
    },
    dealCurrencyCode: {
      sql: `deal_currency_code`,
      type: `string`
    },
    dealSource: {
      sql: `deal_source`,
      type: `string`
    },
    dealEndTs: {
      sql: `deal_end_ts`,
      type: `time`
    }
  },
  
});