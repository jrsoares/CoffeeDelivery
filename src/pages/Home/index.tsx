import React from "react";
import { Intro, Item, List, Title } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import imagemIntro from "../../assets/imagem-intro.svg";
import { CoffeeList } from "../../components/CoffeeList";

export function Home() {
  return (
    <>
      <Intro>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <small>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </small>
          </Title>
          <List>
            <Item icon="shopping">
              <small>
                <ShoppingCart size={16} weight="fill" />
              </small>
              Compra simples e segura
            </Item>
            <Item icon="package">
              <small>
                <Package size={16} weight="fill" />
              </small>
              Embalagem mantém o café intacto
            </Item>
            <Item icon="timer">
              <small>
                <Timer size={16} weight="fill" />
              </small>
              Entrega rápida e rastreada
            </Item>
            <Item icon="coffee">
              <small>
                <Coffee size={16} weight="fill" />
              </small>
              O café chega fresquinho até você
            </Item>
          </List>
        </div>
        <img src={imagemIntro} alt="" />
      </Intro>
      <CoffeeList />
    </>
  );
}
