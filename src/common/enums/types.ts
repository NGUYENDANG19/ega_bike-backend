export enum DiscountType {
  PERCENT = "percent",
  AMOUNT = "amount",
}

export enum DiscountConditionType {
  USER_ID = "user_id",
  PRODUCT_ID = "product_id",
  CATEGORY_ID = "category_id",
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

export enum UPLOAD_TYPES {
  CATEGORY_IMAGE = 'category_images',
  PRODUCT_IMAGE = 'product_images',
  BRAND_LOGO = 'brand_logos',
} 
