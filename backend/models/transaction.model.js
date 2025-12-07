import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    transactionId: String,
    date: Date,
    customerId: String,
    customerName: String,
    phoneNumber: String,
    gender: String,
    age: Number,

    customerRegion: String,
    customerType: String,

    productId: String,
    productName: String,
    brand: String,
    productCategory: String,
    tags: [String], 

    quantity: Number,
    pricePerUnit: Number,
    discountPercentage: Number,
    totalAmount: Number,
    finalAmount: Number,

    paymentMethod: String,
    orderStatus: String,
    deliveryType: String,

    storeId: String,
    storeLocation: String,

    salespersonId: String,
    employeeName: String,
  },
  { timestamps: false }
);
transactionSchema.pre("save", function (next) {
  if (typeof this.tags === "string") {
    this.tags = this.tags.split(",").map((t) => t.trim());
  }
  next();
});

export default mongoose.model("Transaction", transactionSchema);
