import { formatMoney } from '../../utils/money';
import dayjs from 'dayjs';

export function DeliveryOptions({cartItem,deliveryOptions}) {
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
        return (
          <div key={deliveryOption.id} className="delivery-option">
            <input type="radio"
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              onChange={() => {
                console.log("Selected:", deliveryOption.id); //doubt
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