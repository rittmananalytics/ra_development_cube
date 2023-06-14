cube(`web_events_fact`, {
  sql_table: `analytics.web_events_fact`,
  
  joins: {
    web_sessions_fact: {
      sql: `${CUBE}.web_session_fk = ${web_sessions_fact}.web_sessions_pk`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    web_event_pk: {
      sql: `web_event_pk`,
      type: `string`,
      primary_key: true
    },
    
    event_id: {
      sql: `event_id`,
      type: `string`
    },
    
    event_type: {
      sql: `event_type`,
      type: `string`
    },
    
    event_details: {
      sql: `event_details`,
      type: `string`
    },
    
    page_title: {
      sql: `page_title`,
      type: `string`
    },
    
    page_url_path: {
      sql: `page_url_path`,
      type: `string`
    },
    
    referrer_host: {
      sql: `referrer_host`,
      type: `string`
    },
    
    referrer: {
      sql: `referrer`,
      type: `string`
    },
    
    search: {
      sql: `search`,
      type: `string`
    },
    
    page_url: {
      sql: `page_url`,
      type: `string`
    },
    
    page_url_host: {
      sql: `page_url_host`,
      type: `string`
    },
    
    gclid: {
      sql: `gclid`,
      type: `string`
    },
    
    utm_term: {
      sql: `utm_term`,
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
    
    utm_source: {
      sql: `utm_source`,
      type: `string`
    },
    
    ip: {
      sql: `ip`,
      type: `string`
    },
    
    visitor_id: {
      sql: `visitor_id`,
      type: `string`
    },
    
    user_id: {
      sql: `user_id`,
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
    
    event_number: {
      sql: `event_number`,
      type: `string`
    },
    
    is_conversion_event: {
      sql: `is_conversion_event`,
      type: `string`
    },
    
    is_goal_achieved_event: {
      sql: `is_goal_achieved_event`,
      type: `string`
    },
    
    session_id: {
      sql: `session_id`,
      type: `string`
    },
    
    site: {
      sql: `site`,
      type: `string`
    },
    
    blended_user_id: {
      sql: `blended_user_id`,
      type: `string`
    },
    
    event_seq: {
      sql: `event_seq`,
      type: `string`
    },
    
    event_in_session_seq: {
      sql: `event_in_session_seq`,
      type: `string`
    },
    
    time_on_page_secs: {
      sql: `time_on_page_secs`,
      type: `string`
    },
    
    web_session_fk: {
      sql: `web_session_fk`,
      type: `string`
    },
    
    ad_campaign_fk: {
      sql: `ad_campaign_fk`,
      type: `string`
    },
    
    event_ts: {
      sql: `event_ts`,
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
