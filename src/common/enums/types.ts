export enum DiscountType {
  PERCENTAGE = "percentage",
  FIXED = "fixed",
}

export enum PaymentMethod {
  CREDIT_CARD = "credit_card",
  PAYPAL = "paypal",
  CASH_ON_DELIVERY = "cash_on_delivery",
  CASH = "cash",
}

export enum PaymentStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
}

export enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
}
