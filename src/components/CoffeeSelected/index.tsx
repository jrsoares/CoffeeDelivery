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
import { formatMoney } from "../../utils/formatMoney";

const DELIVERY_PRICE = 3.5;
export function CoffeeSelected() {
  const {
    cartItems,
    changeCartItemQuantity,
    removeCartItem,
    cartItemsTotal,
    cartQuantity,
  } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartTotal);

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
              <span>R$ {formatMoney(totalItems)}</span>
            </CoffeeSelectedItem>
          );
        })}
        <div className="items">
          <div className="items-info">
            <span>Total de itens</span>
            <span>R$ {formatMoney(cartItemsTotal)} </span>
          </div>
          <div className="items-info">
            <span>Entrega</span>
            <span>R$ {formatMoney(DELIVERY_PRICE)}</span>
          </div>
          <div className="total items-info">
            <span>Total</span>
            {cartQuantity > 0 && <span>R$ {formattedItemsTotal}</span>}
          </div>
        </div>
      </CoffeeCardContainer>
    </div>
  );
}
