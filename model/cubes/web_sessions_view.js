view(`web_traffic`, {
  description: `Web sessions and individual page and other events within those sessions`,
  public: true,

  includes: [
    // Measure
    web_sessions_fact.count,
    web_events_fact.totalBlendedUserId,
    web_events_fact.totalConversions,
    web_events_fact.totalPageViews,
    web_events_fact.totalVisitorValue,
    web_events_fact.totalSessionConversions,
    web_events_fact.totalSessionGoalAchieveds,
    // Dimensions
    web_sessions_fact.blendedUserId,
    web_sessions_fact.sessionStartTs,
    web_sessions_fact.channel,
    web_sessions_fact.referrerHost,
    web_sessions_fact.sessionSite,
    web_sessions_fact.sessionUtmSource,
    web_sessions_fact.sessionUtmCampaign,
    web_sessions_fact.sessionUtmMedium,
    web_sessions_fact.isConvertedUser,
    web_sessions_fact.isConvertingSession,
    web_sessions_fact.userSessionNumber,
    web_sessions_fact.firstPageUrlPath,
    web_sessions_fact.lastPageUrlPath,
    web_events_fact.eventType,
    web_events_fact.eventDetails,
    web_events_fact.eventInSessionSeq,
    web_events_fact.isConversionEvent,
    web_events_fact.isGoalAchieved,
    web_events_fact.pageTitle,
    web_events_fact.pageCategory,
    web_events_fact.pageUrlPath,
    web_events_fact.pagePublished,
    web_events_fact.pageTotalPageViews,
    web_events_fact.pageTotalUniqueViewers,
    web_events_fact.site
      ]
});