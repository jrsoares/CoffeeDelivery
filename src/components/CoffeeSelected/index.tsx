import React from "react";
import {
  Actions,
  BtnRemove,
  CoffeeSelectedItem,
  CoffeeCardContainer,
  Counter,
  Info,
} from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { BtnConfirm, CartPayment } from "../../pages/Checkout/styles";

export function CoffeeSelected() {
  const { cartItems, changeCartItemQuantity, removeCartItem } = useCart();

  function PriceLocaleBr(price: number): string {
    return price.toLocaleString("pt-br", {
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  }

  return (
    <div>
      <h1>Cafés selecionados</h1>
      <CoffeeCardContainer>
        {cartItems.map((item) => {
          const totalItems = item.price * item.quantity;
          function handleQuantityIncrease() {
            changeCartItemQuantity(item.id, "increase");
          }
          function handleQuantityDecrease() {
            changeCartItemQuantity(item.id, "decrease");
          }
          function handleRemoveItem() {
            removeCartItem(item.id);
          }
          return (
            <CoffeeSelectedItem key={item.id}>
              <Info>
                <img src={`${item.img}`} alt="" />
                <div>
                  <span>{item.title}</span>
                  <Actions>
                    <Counter>
                      <button onClick={handleQuantityDecrease}>
                        <Minus weight={"bold"} size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={handleQuantityIncrease}>
                        <Plus weight={"bold"} size={14} />
                      </button>
                    </Counter>
                    <BtnRemove onClick={handleRemoveItem}>
                      <Trash />
                      REMOVER
                    </BtnRemove>
                  </Actions>
                </div>
              </Info>
              <span>R$ {PriceLocaleBr(totalItems)}</span>
            </CoffeeSelectedItem>
          );
        })}

        <CartPayment>
          <div>
            <span>Total de itens</span>
            <span>R$ 34,00</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
          <BtnConfirm>Confirmar</BtnConfirm>
        </CartPayment>
      </CoffeeCardContainer>
    </div>
  );
}
