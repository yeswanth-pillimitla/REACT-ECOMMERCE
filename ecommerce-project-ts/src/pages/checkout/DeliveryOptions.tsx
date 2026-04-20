import { formatMoney } from '../../utils/money';
import axios from 'axios';
import dayjs from 'dayjs';
import type { CartItem, DeliveryOption } from '../../types';

interface DeliveryOptionsProps {
  cartItem: CartItem;
  deliveryOptions: DeliveryOption[];
  loadCart: () => Promise<void>;
}

export function DeliveryOptions({ cartItem, deliveryOptions, loadCart }: DeliveryOptionsProps) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = 'FREE shipping';

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)}-Shipping`
        }

        const updateDeliveryOptinos=async()=>{
          await axios.put(`/api/cart-items/${cartItem.productId}`,{
            deliveryOptionId:deliveryOption.id
          });
          await loadCart()
        }
        return (
          <div key={deliveryOption.id} className="delivery-option"
          onClick={updateDeliveryOptinos}
          >
            <input type="radio"
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              onChange={() => {
}}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd,MMMM,D')}

              </div>
              <div className="delivery-option-price">
                {priceString}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}