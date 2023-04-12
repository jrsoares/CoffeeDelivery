import { BtnConfirm, CartPaymentWrapper } from "./styles";
import React from "react";
import { useCart } from "../../hooks/useCart";

const DELIVERY_PRICE = 3.5;
export function CartPayment() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;
  function PriceLocaleBr(price: number): string {
    return price.toLocaleString("pt-br", {
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  }

  const formattedItemsTotal = PriceLocaleBr(cartTotal);

  return (
    <CartPaymentWrapper>
      <div>
        <span>Total de itens</span>
        <span>R$ {PriceLocaleBr(cartItemsTotal)} </span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ {PriceLocaleBr(DELIVERY_PRICE)}</span>
      </div>
      <div className="total">
        <span>Total</span>
        {cartQuantity > 0 && <span>R$ {formattedItemsTotal}</span>}
      </div>
      <BtnConfirm disabled={cartQuantity <= 0}>Confirmar</BtnConfirm>
    </CartPaymentWrapper>
  );
}
