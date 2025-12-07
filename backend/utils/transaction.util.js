export const getDateRange = (filterType) => {
  if (!filterType) return null;

  const now = new Date();
  let startDate = new Date();
  let endDate = new Date();

  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);

  switch (filterType) {
    case "today":
      break;
    case "yesterday":
      startDate.setDate(now.getDate() - 1);
      endDate.setDate(now.getDate() - 1);
      break;
    case "last_7_days":
      startDate.setDate(now.getDate() - 7);
      break;
    case "last_30_days":
      startDate.setDate(now.getDate() - 30);
      break;
    case "this_month":
      startDate.setDate(1);
      break;
    case "last_month":
      startDate.setMonth(now.getMonth() - 1);
      startDate.setDate(1);
      endDate.setMonth(now.getMonth());
      endDate.setDate(0);
      break;
    default:
      return null;
  }

  const format = (d) => d.toISOString().split("T")[0];
  return { $gte: format(startDate), $lte: format(endDate) };
};

export const buildMatchQuery = (queryParams) => {
  const {
    text,
    CustomerRegion,
    Gender,
    AgeRange,
    ProductCategory,
    Tags,
    PaymentMethod,
    Date: DateFilter,
  } = queryParams;

  let matchQuery = {};

  if (text) {
    matchQuery.$or = [
      { "Customer Name": { $regex: text, $options: "i" } },
      {
        $expr: {
          $regexMatch: {
            input: { $toString: "$Phone Number" },
            regex: text,
            options: "i",
          },
        },
      },
    ];
  }

  if (CustomerRegion) 
    matchQuery["Customer Region"]=CustomerRegion;
  if (Gender) 
    matchQuery["Gender"] = Gender;

  if (ProductCategory) 
    matchQuery["Product Category"]=ProductCategory;

  if (PaymentMethod)
     matchQuery["Payment Method"] = PaymentMethod;

  if (Tags) {
    matchQuery["Tags"] = { $regex: Tags, $options: "i" };
  }

  if (AgeRange) {
    if (AgeRange === "65+") {
      matchQuery["Age"] = { $gte: 65 };
    } else {
      const [min, max] = AgeRange.split("-").map(Number);
      if (!isNaN(min) && !isNaN(max)) {
        matchQuery["Age"] = { $gte: min, $lte: max };
      }
    }
  }

  const dateQuery = getDateRange(DateFilter);
  if (dateQuery) {
    matchQuery["Date"] = dateQuery;
  }

  return matchQuery;
};

export const buildSortQuery = (sort) => {
  switch (sort) {
    case "name_asc":
      return { "Customer Name": 1 };
    case "date_desc":
      return { Date: -1 };
    case "quantity_desc":
      return { Quantity: -1 };
    default:
      return { "Customer Name": 1 };
  }
};