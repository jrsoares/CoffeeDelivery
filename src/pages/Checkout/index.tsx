import React from "react";
import { Container, CheckoutForm, Form, Payment } from "./styles";

export function Checkout() {
  return (
    <Container>
      <CheckoutForm>
        Complete seu pedido
        <Form>
          <div>
            <span>Endereço de Entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </Form>
        <Payment>
          <div>
            <span>Pagamento</span>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
          <button>Cartão de crédito</button>
          <button>Cartão de débito</button>
          <button>Dinheiro</button>
        </Payment>
      </CheckoutForm>
    </Container>
  );
}
