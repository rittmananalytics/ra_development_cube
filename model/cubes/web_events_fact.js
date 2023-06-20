 cube(`web_events_fact`, {
  sql: `SELECT * except(page_title),
              replace(page_title,'—','-') as page_title,
              min(event_ts) over (partition by replace(page_title,'—','-') order by event_ts) as page_title_published_at_ts,
              date_diff(date(event_ts),date(min(event_ts) over (partition by replace(page_title,'—','-') order by event_ts)), month) as months_since_page_title_published_at_ts,
              date_diff(date(event_ts),date(min(event_ts) over (partition by replace(page_title,'—','-') order by event_ts)), day) as days_since_page_title_published_at_ts,
              count(distinct web_event_pk) over (partition by replace(page_title,'—','-')) as total_page_views,
              count(distinct blended_user_id) over (partition by replace(page_title,'—','-')) as total_unique_viewers
       FROM analytics.web_events_fact`,
  public: false,
  segments: {
    page_views: {
      sql: `${CUBE}.event_type = 'Page View'`,
    }
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
    },
    totalConversions: {
      sql: `web_event_pk`,
      type: `countDistinct`,
      filters: [{
        sql: `${CUBE}.is_conversion_event`
      }]
    },
    totalGoalAchieveds: {
      sql: `web_event_pk`,
      type: `countDistinct`,
      filters: [{
        sql: `${CUBE}.is_goal_achieved_event`
      }]
    },
    totalSessionConversions: {
      sql: `session_id`,
      type: `countDistinct`,
      filters: [{
        sql: `${CUBE}.is_conversion_event`
      }]
    },
    totalSessionGoalAchieveds: {
      sql: `session_id`,
      type: `countDistinct`,
      filters: [{
        sql: `${CUBE}.is_goal_achieved_event`
      }]
    },
    totalSessions: {
      sql: `session_id`,
      type: `countDistinct`,
    },
    totalVisitorValue: {
      sql: `visit_value`,
      type: `sum`,
    },
    totalPageViews: {
      sql: `web_event_pk`,
      type: `countDistinct`,
    },
    totalEvents: {
      sql: `web_event_pk`,
      type: `countDistinct`,
    },
    totalBlendedUserId: {
      sql: `blended_user_id`,
      type: `countDistinct`,
    },
  },

  dimensions: {
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
    eventDetails: {
      sql: `event_details`,
      type: `string`,
    },
    eventId: {
      sql: `event_id`,
      type: `string`,
    },
    eventInSessionSeq: {
      sql: `event_in_session_seq`,
      type: `number`,
    },
    eventNumber: {
      sql: `event_seq`,
      type: `number`,
    },
    eventTs: {
      sql: `event_ts`,
      type: `time`,
    },
    eventType: {
      sql: `event_type`,
      type: `string`,
    },
    mapLocation: {
      sql: `CONCAT(latitude, ';', longitude)`,
      type: `string`,
    },
    localeCode: {
      sql: `locale_code`,
      type: `string`,
    },
    longitude: {
      sql: `longitude`,
      type: `number`,
    },
    metroCode: {
      sql: `metro_code`,
      type: `string`,
    },
    network: {
      sql: `network`,
      type: `string`,
    },
    pageTitle: {
      sql: `page_title`,
      type: `string`,
    },
    pagePublished: {
      sql: `page_title_published_at_ts`,
      type: `time`,
    },
    monthsSincePagePublished: {
      sql: `months_since_page_title_published_at_ts`,
      type: `number`,
    },
    pageTotalPageViews: {
      sql: `total_page_views`,
      type: `number`,
    },
    pageTotalUniqueViewers: {
      sql: `total_unique_viewers`,
      type: `number`,
    },
    pageUrl: {
      sql: `page_url`,
      type: `string`,
    },
    pageUrlHost: {
      sql: `page_url_host`,
      type: `string`,
    },
    pageUrlPath: {
      sql: `page_url_path`,
      type: `string`,
    },
    pageCategory: {
      sql: `CASE WHEN ${CUBE}.event_type = 'Page View' OR ${CUBE}.event_type = 'Meeting Booked' THEN
              CASE WHEN ${CUBE}.page_url_path LIKE '%blog%' OR ${CUBE}.page_url_path LIKE '%rittmananalytics.com/202%' THEN '01: Blog'
                  WHEN ${CUBE}.page_url_path LIKE '%drilltodetail%' OR ${CUBE}.page_url_path LIKE '%podcast%' THEN '01: Podcast'
                  WHEN ${CUBE}.page_url_path = '/' OR ${CUBE}.page_url_path LIKE '%home-index%' THEN '01: Home Page'
                  WHEN ${CUBE}.page_url_path LIKE '%/services/%' OR ${CUBE}.page_url_path LIKE '%/offers/%' THEN '04: Service'
                  WHEN ${CUBE}.page_url_path LIKE '%/about/%' OR ${CUBE}.page_url_path LIKE '%/contact%' OR ${CUBE}.page_url_path LIKE '%/faqs/%' OR ${CUBE}.page_url_path LIKE '%scv-contact-us-form%' THEN '08: Contact'
                  WHEN ${CUBE}.page_url_path LIKE '%sidebar%' THEN 'Misc'
                  WHEN ${CUBE}.page_url_path LIKE '%/assistant%' THEN '06: Assistant'
                  WHEN ${CUBE}.page_url_path LIKE '%/pricing%' OR ${CUBE}.page_url_path LIKE '%/engagement-model%' OR ${CUBE}.page_url_path LIKE '%/how-we-work%' THEN '12: Commercials'
                  WHEN ${CUBE}.page_url_path LIKE '%scv-thank-you%' OR ${CUBE}.page_url_path LIKE '%/modern-data-stack-thank-you%' THEN '08: Goal Achieved'
                  WHEN ${CUBE}.page_url_path LIKE '%causal-analytics%' OR ${CUBE}.page_url_path LIKE '/scv-download-hubspot-form' THEN '02: Landing Page'
                  WHEN ${CUBE}.page_url_path LIKE '%causal-analytics-video%' OR ${CUBE}.page_url_path LIKE '%download-10-ways-your-modern-data-stack-can-fail%' OR ${CUBE}.page_url_path LIKE '%download-page%' THEN '04: Gated Content'
                  WHEN ${CUBE}.page_url_path LIKE '%case-studies%' OR ${CUBE}.page_url_path LIKE '%industries%' OR ${CUBE}.page_url_path LIKE '%about%' OR ${CUBE}.page_url_path LIKE '%partners%'THEN '02: Marketing'
                  WHEN ${CUBE}.event_type = 'MeetingBooked' THEN '16: Conversion'
              END
         END`,
      type: `string`,
    },
    visitValue: {
      sql: `CASE WHEN ${CUBE}.page_category IN ('01: Blog','01: Podcast') THEN 1
              WHEN ${CUBE}.page_category = '01: Home Page' THEN 1
              WHEN ${CUBE}.page_category IN ('02: Marketing','02: Landing Page') THEN 2
              WHEN ${CUBE}.page_category IN ('04: Service','04: Gated Content') THEN 4
              WHEN ${CUBE}.page_category IN ('06: Assistant') THEN 6
              WHEN ${CUBE}.page_category = '08: Contact' THEN 8
              WHEN ${CUBE}.is_goal_achieved_event OR ${CUBE}.page_category = '08: Goal Achieved' THEN 8
              WHEN ${CUBE}.page_category = '12: Commercials' THEN 12
              WHEN ${CUBE}.is_conversion_event THEN 16 END`,
      type: `number`,
    },
    isConversionEvent: {
      sql: `is_conversion_event`,
      type: `boolean`,
    },
    isGoalAchieved: {
      sql: `is_goal_achieved_event`,
      type: `boolean`,
    },
    postalCode: {
      sql: `postal_code`,
      type: `string`,
    },
    prevEventTs: {
      sql: `prev_event_ts`,
      type: `time`,
    },
    prevEventType: {
      sql: `prev_event_type`,
      type: `string`,
    },
    search: {
      sql: `search`,
      type: `string`,
    },
    sessionId: {
      sql: `session_id`,
      type: `string`,
    },
    site: {
      sql: `site`,
      type: `string`,
    },
    blendedUserId: {
      sql: `blended_user_id`,
      type: `string`,
    },
    timeOnPageSecs: {
      sql: `time_on_page_secs`,
      type: `number`,
    },
    timeZone: {
      sql: `time_zone`,
      type: `string`,
    },
    userId: {
      sql: `user_id`,
      type: `string`,
    },
    utmCampaign: {
      sql: `utm_campaign`,
      type: `string`,
    },
    utmContent: {
      sql: `utm_content`,
      type: `string`,
    },
    utmMedium: {
      sql: `utm_medium`,
      type: `string`,
    },
    utmSource: {
      sql: `utm_source`,
      type: `string`,
    },
    utmTerm: {
      sql: `utm_term`,
      type: `string`,
    },
    visitorId: {
      sql: `visitor_id`,
      type: `string`,
    },
    webEventPk: {
      sql: `web_event_pk`,
      type: `string`,
      primaryKey: true,
    },
    eventSeq: {
      sql: `event_seq`,
      type: `number`,
    },
    gclid: {
      sql: `gclid`,
      type: `string`,
    },
    ip: {
      sql: `ip`,
      type: `string`,
    },
    referrerHost: {
      sql: `referrer_host`,
      type: `string`,
    },
    referrer: {
      sql: `split(referrer, '?')[SAFE_OFFSET(0)]`,
      type: `string`,
    },
    referrerSource: {
      sql: `CASE WHEN ${CUBE}.referrer LIKE '%blog.rittmananalytics.com%' OR${CUBE}.referrer LIKE '%medium.com/mark-rittman%' THEN 'Medium' END`,
      type: `string`,
    },
    referrerArticleStub: {
      sql: `CASE WHEN ${CUBE}.referrer_source = 'Medium' AND ${CUBE}.referrer_host = 'blog.rittmananalytics.com' THEN split(${CUBE}.referrer,'/')[safe_offset(3)]
              WHEN ${CUBE}.referrer_source = 'Medium' AND ${CUBE}.referrer_host = 'medium.com' THEN split(${CUBE}.referrer,'/')[safe_offset(4)]
          END`,
      type: `string`,
    },
    referrerDaysSincePost: {
      sql: `CASE WHEN ${CUBE}.referrer_article_stub IS NOT NULL THEN timestamp_diff(${CUBE}.event_ts,${CUBE}.interaction_posted_ts_raw,DAY) END`,
      type: `number`,
    },
    eventDetailsSeq1: {
      sql: `CASE WHEN event_seq = 1 THEN event_details END`,
      type: `string`,
    },
    eventDetailsSeq2: {
      sql: `CASE WHEN event_seq = 2 THEN event_details END`,
      type: `string`,
    },
    eventDetailsSeq3: {
      sql: `CASE WHEN event_seq = 3 THEN event_details END`,
      type: `string`,
    },
    eventDetailsSeq4: {
      sql: `CASE WHEN event_seq = 4 THEN event_details END`,
      type: `string`,
    },
    eventDetailsSeq5: {
      sql: `CASE WHEN event_seq = 5 THEN event_details END`,
      type: `string`,
    },
    eventTypeSeq1: {
      sql: `CASE WHEN event_seq = 1 THEN event_type END`,
      type: `string`,
    },
    eventTypeSeq2: {
      sql: `CASE WHEN event_seq = 2 THEN event_type END`,
      type: `string`,
    },
    eventTypeSeq3: {
      sql: `CASE WHEN event_seq = 3 THEN event_type END`,
      type: `string`,
    },
    eventTypeSeq4: {
      sql: `CASE WHEN event_seq = 4 THEN event_type END`,
      type: `string`,
    },
    eventTypeSeq5: {
      sql: `CASE WHEN event_seq = 5 THEN event_type END`,
      type: `string`,
    },
  },
});
