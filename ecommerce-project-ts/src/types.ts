export interface Rating {
  stars: number;
  count: number;
}

export interface Product {
  id: string;
  image: string;
  name: string;
  rating: Rating;
  priceCents: number;
  keywords: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  deliveryOptionId: string;
  product?: Product;
}

export interface DeliveryOption {
  id: string;
  deliveryDays: number;
  priceCents: number;
  estimatedDeliveryTime?: string;
  estimatedDeliveryTimeMs?: number;
}

export interface OrderProduct {
  productId: string;
  quantity: number;
  estimatedDeliveryTimeMs: number;
  product: Product;
}

export interface Order {
  id: string;
  orderTimeMs: number;
  totalCostCents: number;
  products: OrderProduct[];
}

export interface PaymentSummary {
  totalItems: number;
  productCostCents: number;
  shippingCostCents: number;
  totalCostBeforeTaxCents: number;
  taxCents: number;
  totalCostCents: number;
}
