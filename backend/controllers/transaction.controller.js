import { getTransactionsService } from "../services/transaction.service.js";

const TransactionController = async (req, res) => {
  try {
   console.log(req.query)
    const result = await getTransactionsService(req.query);
    
    return res.status(200).json(result);
  } catch (err) {
    console.error("Transaction Error:", err);
    return res.status(500).send("Server Error");
  }
};

export { TransactionController };