cube(`web_sessions_fact`, {
  sql_table: `analytics.web_sessions_fact`,
  
  joins: {
    
  },
  
  dimensions: {
    web_sessions_pk: {
      sql: `web_sessions_pk`,
      type: `string`,
      primary_key: true
    },
    
    is_conversion_session: {
      sql: `is_conversion_session`,
      type: `string`
    },
    
    is_goal_achieved_session: {
      sql: `is_goal_achieved_session`,
      type: `string`
    },
    
    is_converting_blended_user_id: {
      sql: `is_converting_blended_user_id`,
      type: `string`
    },
    
    blended_user_id: {
      sql: `blended_user_id`,
      type: `string`
    },
    
    events: {
      sql: `events`,
      type: `string`
    },
    
    utm_source: {
      sql: `utm_source`,
      type: `string`
    },
    
    utm_content: {
      sql: `utm_content`,
      type: `string`
    },
    
    utm_medium: {
      sql: `utm_medium`,
      type: `string`
    },
    
    utm_campaign: {
      sql: `utm_campaign`,
      type: `string`
    },
    
    utm_term: {
      sql: `utm_term`,
      type: `string`
    },
    
    search: {
      sql: `search`,
      type: `string`
    },
    
    gclid: {
      sql: `gclid`,
      type: `string`
    },
    
    first_page_url: {
      sql: `first_page_url`,
      type: `string`
    },
    
    first_page_url_host: {
      sql: `first_page_url_host`,
      type: `string`
    },
    
    first_page_url_path: {
      sql: `first_page_url_path`,
      type: `string`
    },
    
    referrer_host: {
      sql: `referrer_host`,
      type: `string`
    },
    
    device: {
      sql: `device`,
      type: `string`
    },
    
    device_category: {
      sql: `device_category`,
      type: `string`
    },
    
    last_page_url: {
      sql: `last_page_url`,
      type: `string`
    },
    
    last_page_url_host: {
      sql: `last_page_url_host`,
      type: `string`
    },
    
    last_page_url_path: {
      sql: `last_page_url_path`,
      type: `string`
    },
    
    duration_in_s: {
      sql: `duration_in_s`,
      type: `string`
    },
    
    duration_in_s_tier: {
      sql: `duration_in_s_tier`,
      type: `string`
    },
    
    referrer_medium: {
      sql: `referrer_medium`,
      type: `string`
    },
    
    referrer_source: {
      sql: `referrer_source`,
      type: `string`
    },
    
    referrer: {
      sql: `referrer`,
      type: `string`
    },
    
    channel: {
      sql: `channel`,
      type: `string`
    },
    
    mins_between_sessions: {
      sql: `mins_between_sessions`,
      type: `string`
    },
    
    is_bounced_session: {
      sql: `is_bounced_session`,
      type: `string`
    },
    
    ad_campaign_fk: {
      sql: `ad_campaign_fk`,
      type: `string`
    },
    
    user_session_number: {
      sql: `user_session_number`,
      type: `string`
    },
    
    session_start_ts: {
      sql: `session_start_ts`,
      type: `time`
    },
    
    session_end_ts: {
      sql: `session_end_ts`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
