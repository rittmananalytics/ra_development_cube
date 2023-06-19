view(`sales`, {
  description: `Deals, leads and sales pipeline analytics`,
  public: true,


  includes: [
    // Measure
    deals_fact.totalDealAmount,
    deals_fact.totalDealAmountGbpConverted,
    deals_fact.totalClosedWonDealAmount,
    deals_fact.totalWeightedDealAmount,
    deals_fact.totalClosedLostDeals,
    deals_fact.countClosedWonDeals,
    // Dimensions
    deals_fact.dealCreatedTs,
    deals_fact.dealCurrencyCode,
    deals_fact.dealDescription,
    deals_fact.dealName,
    deals_fact.dealType,
    deals_fact.dealStageClosedLost,
    deals_fact.dealStageClosedWon,
    deals_fact.dealSource,
    contacts_dim.contactName,
    companies_dim.companyName
      ]
});