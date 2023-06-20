view(`sales`, {
  description: `Sales deals, opportunities, wins and losses and pipeline`,
  public: true,
  

  includes: [
    // Measure
    deals_fact.totalDealAmount,
    deals_fact.countDeals,
    deals_fact.totalDealAmountGbpConverted,
    deals_fact.totalWeightedDealAmount,
    deals_fact.totalClosedWonDealAmount,
    deals_fact.totalClosedLostDealAmount,
    deals_fact.countClosedWonDeals,
    // Dimensions
    deals_fact.dealName,
    deals_fact.dealDescription,
    deals_fact.dealCurrencyCode,
    deals_fact.dealCreatedTs,
    deals_fact.dealSource,
    deals_fact.dealType,
    deals_fact.dealPipelineStageLabel,
    deals_fact.dealPipelineStageTs,
    companies_dim.companyName,
    companies_dim.companyCreated
]
});