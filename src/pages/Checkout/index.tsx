import React from "react";
import {
  BtnPayment,
  CheckoutForm,
  Container,
  Form,
  Payment,
  WrapperForm,
  WrapperPayment,
} from "./styles";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";

import { CoffeeSelected } from "../../components/CoffeeSelected";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string(),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;
export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });
  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data);
  }
  return (
    <FormProvider {...confirmOrderForm}>
      <Container>
        <CheckoutForm>
          <h1>Complete seu pedido</h1>
          <WrapperForm>
            <div>
              <MapPin size={"22"} />
              <span> Endereço de Entrega</span>
              <small>Informe o endereço onde deseja receber seu pedido</small>
            </div>
            <Form onSubmit={handleSubmit(handleConfirmOrder)}>
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
        <CoffeeSelected />
      </Container>
    </FormProvider>
  );
}
