import React from "react";
import {
  Actions,
  BtnPayment,
  BtnRemove,
  CartPayment,
  CheckoutForm,
  CoffeeCardContainer,
  CoffeeSelected,
  Container,
  Counter,
  Form,
  Info,
  Payment,
  WrapperForm,
  WrapperPayment,
} from "./styles";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";

export function Checkout() {
  return (
    <Container>
      <CheckoutForm>
        <h1>Complete seu pedido</h1>
        <WrapperForm>
          <div>
            <MapPin size={"22"} />
            <span> Endereço de Entrega</span>
            <small>Informe o endereço onde deseja receber seu pedido</small>
          </div>
          <Form>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </Form>
        </WrapperForm>
        <Payment>
          <div className="info">
            <CurrencyDollar size={"22"} />
            <span>Pagamento</span>
            <small>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </small>
          </div>
          <WrapperPayment>
            <BtnPayment autoFocus={true}>
              <CreditCard />
              Cartão de crédito
            </BtnPayment>
            <BtnPayment>
              <Bank />
              Cartão de débito
            </BtnPayment>
            <BtnPayment>
              <Money />
              Dinheiro
            </BtnPayment>
          </WrapperPayment>
        </Payment>
      </CheckoutForm>
      <div>
        <h1>Cafés selecionados</h1>
        <CoffeeCardContainer>
          <CoffeeSelected>
            <Info>
              <img src="src/assets/img/Type=Expresso.svg" alt="" />
              <div>
                <span>Expresso Tradicional</span>
                <Actions>
                  <Counter>
                    <button>
                      <Minus weight={"bold"} size={14} />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus weight={"bold"} size={14} />
                    </button>
                  </Counter>
                  <BtnRemove>
                    <Trash />
                    REMOVER
                  </BtnRemove>
                </Actions>
              </div>
            </Info>
            <span>R$ 9,90</span>
          </CoffeeSelected>
          <CoffeeSelected>
            <Info>
              <img src="src/assets/img/Type=Expresso.svg" alt="" />
              <div>
                <span>Expresso Tradicional</span>
                <Actions>
                  <Counter>
                    <button>
                      <Minus weight={"bold"} size={14} />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus weight={"bold"} size={14} />
                    </button>
                  </Counter>
                  <BtnRemove>
                    <Trash />
                    REMOVER
                  </BtnRemove>
                </Actions>
              </div>
            </Info>
            <span>R$ 9,90</span>
          </CoffeeSelected>
          <CartPayment></CartPayment>
        </CoffeeCardContainer>
      </div>
    </Container>
  );
}
