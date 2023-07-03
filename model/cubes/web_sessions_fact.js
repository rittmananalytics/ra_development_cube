cube(`web_sessions_fact`, {
  sql_table: `ra-development.analytics.web_sessions_fact`,
  public: false,
 
  joins: {
    web_events_fact: {
      relationship: `many_to_one`,
      sql: `${web_sessions_fact.sessionId} = ${web_events_fact.sessionId}`,
    },
  },

  pre_aggregations: {
    sessions_rollup: {
      measures: [web_events_fact.totalPageViews,web_events_fact.totalVisitorValue,web_events_fact.totalSessionConversions,web_events_fact.totalSessions,web_events_fact.totalBlendedUserId],
      dimensions: [CUBE.channel, CUBE.referrerHost,CUBE.sessionUtmSource, CUBE.sessionUtmCampaign, CUBE.sessionUtmMedium],
      time_dimension: CUBE.sessionStartTs,
      granularity: `week`,
    },
  },
  measures: {
    countOfEvents: {
      sql: `events`,
      type: `sum`,
    },
    totalDurationInS: {
      sql: `timestamp_diff(session_end_ts, session_start_ts, MINUTE)`,
      type: `avg`,
    },
    totalWebSessionsPk: {
      sql: `web_sessions_pk`,
      type: `countDistinct`,
    },
    bouncedSessionRate: {
      sql: `SAFE_DIVIDE(COUNT(DISTINCT(case when is_bounced_session = TRUE then web_sessions_pk end)), ${CUBE}.totalWebSessionsPk)`,
      type: `number`,
    },
    count: {
      type: `count`,
    },
  },

  dimensions: {
    blendedUserId: {
      sql: `blended_user_id`,
      type: `string`,
    },
    channel: {
      sql: `channel`,
      type: `string`,
    },
    adCampaignPk: {
      sql: `ad_campaign_pk`,
      type: `string`,
    },
    customerPk: {
      sql: `customer_pk`,
      type: `string`,
    },
    device: {
      sql: `device`,
      type: `string`,
    },
    deviceCategory: {
      sql: `device_category`,
      type: `string`,
    },
    durationInS: {
      sql: `duration_in_s`,
      type: `number`,
    },
    durationInSTier: {
      sql: `duration_in_s_tier`,
      type: `string`,
    },
    referrer: {
      sql: `split(referrer, "?")[SAFE_OFFSET(0)]`,
      type: `string`,
    },
    referrerSource: {
      sql: `case when referrer like '%blog.rittmananalytics.com%' or referrer like '%medium.com/mark-rittman%' then 'Medium'
                when referrer_host like '%github%' then 'Github'
                when referrer_host like '%linkedin%' then 'LinkedIn'
                when referrer_host like '%google%' or referrer_host like '%bing%' or  referrer_host like '%yahoo%' or referrer_host like '%yandex%' then 'Organic Search'
                when referrer_host like '%t.co%' or referrer_host like '%twitter%' then 'Twitter'
                when first_page_url like '%rittmananalytics.com/blog%'  then 'Squarespace'
                when first_page_url like '%https://rittmananalytics.com/drilltodetail%'  then 'Podcast'
                else 'Direct'
          end`,
      type: `string`,
    },
    referrerArticleStub: {
      sql: `case when referrer_source = 'Medium' and referrer_host = 'blog.rittmananalytics.com' then split(referrer,'/')[safe_offset(3)]
                when referrer_source = 'Medium' and referrer_host = 'medium.com' then split(referrer,'/')[safe_offset(4)]
                when first_page_url LIKE '%rittmananalytics.com/blog/2%' then SPLIT(first_page_url_path,'/')[safe_OFFSET(5)]
            end`,
      type: `string`,
    },
    referrerDaysSincePost: {
      sql: `case when referrer_article_stub is not null then timestamp_diff(session_start_ts_raw,marketing_content_dim.interaction_posted_ts_raw,DAY) end`,
      type: `number`,
    },
    events: {
      sql: `events`,
      type: `number`,
    },
    firstPageUrl: {
      sql: `first_page_url`,
      type: `string`,
    },
    firstPageUrlHost: {
      sql: `first_page_url_host`,
      type: `string`,
    },
    firstPageUrlPath: {
      sql: `first_page_url_path`,
      type: `string`,
    },
    gclid: {
      sql: `gclid`,
      type: `string`,
    },
    isBouncedSession: {
      sql: `is_bounced_session`,
      type: `boolean`,
    },
    lastPageUrl: {
      sql: `last_page_url`,
      type: `string`,
    },
    lastPageUrlHost: {
      sql: `last_page_url_host`,
      type: `string`,
    },
    lastPageUrlPath: {
      sql: `last_page_url_path`,
      type: `string`,
    },
    minsBetweenSessions: {
      sql: `mins_between_sessions`,
      type: `number`,
    },
    prevSessionChannel: {
      sql: `prev_session_channel`,
      type: `string`,
    },
    prevUtmMedium: {
      sql: `prev_utm_medium`,
      type: `string`,
    },
    prevUtmSource: {
      sql: `prev_utm_source`,
      type: `string`,
    },
    referrerHost: {
      sql: `referrer_host`,
      type: `string`,
    },
    referrerMedium: {
      sql: `referrer_medium`,
      type: `string`,
    },
    search: {
      sql: `search`,
      type: `string`,
    },
    sessionEndTs: {
      sql: `session_end_ts`,
      type: `time`,
    },
    sessionId: {
      sql: `session_id`,
      type: `string`,
      primaryKey: true,
    },
    sessionStartTs: {
      sql: `session_start_ts`,
      type: `time`,
    },
    sessionSite: {
      sql: `site`,
      type: `string`,
    },
    userSessionNumber: {
      sql: `user_session_number`,
      type: `number`,
    },
    newOrReturningUser: {
      sql: `case when user_session_number = 1 then 'New' else 'Returning' end`,
      type: `string`,
    },
    webSessionsPk: {
      sql: `web_sessions_pk`,
      type: `string`,
      
    },
    isConvertedUser: {
      sql: `is_converting_blended_user_id`,
      type: `boolean`,
    },
    isConvertingSession: {
      sql: `is_converting_session`,
      type: `boolean`,
    },
    sessionUtmCampaign: {
      sql: `utm_campaign`,
      type: `string`,
    },
    sessionUtmContent: {
      sql: `utm_content`,
      type: `string`,
    },
    sessionUtmMedium: {
      sql: `utm_medium`,
      type: `string`,
    },
    sessionUtmSource: {
      sql: `utm_source`,
      type: `string`,
    },
    sessionUtmTerm: {
      sql: `utm_term`,
      type: `string`,
    },
  },
});