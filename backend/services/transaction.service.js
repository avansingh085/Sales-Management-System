import Transaction from "../models/transaction.model.js";
import { buildMatchQuery, buildSortQuery } from "../utils/transaction.util.js";

export const getTransactionsService = async (queryParams) => {
 
  const page = parseInt(queryParams.startPage / 12) || 1;
  const limit = 12;
  const skip = (page - 1) * limit;

  const matchQuery = buildMatchQuery(queryParams);
  const sortQuery = buildSortQuery(queryParams.sort);

  const [summary, data] = await Promise.all([
    
    Transaction.aggregate([
      { $match: matchQuery },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$Total Amount" },
          totalFinalAmount: { $sum: "$Final Amount" },
          totalUnits: { $sum: "$Quantity" },
          totalDiscount: {
            $sum: { $subtract: ["$Total Amount", "$Final Amount"] },
          },
        },
      },
    ]),

    Transaction.find(matchQuery)
      .sort(sortQuery)
      .skip(skip)
      .limit(limit),
  ]);

  const totals = summary[0] || {
    totalAmount: 0,
    totalFinalAmount: 0,
    totalUnits: 0,
    totalDiscount: 0,
  };

  return {
    data,
    totals,
    page,
    limit,
  };
};