import { Container, List } from "./styles";
import { CoffeeCard } from "../CoffeeCard";

export const coffees = [
  {
    id: 1,
    img: "src/assets/img/Type=Expresso.svg",
    categories: ["Tradicional"],
    title: "Expresso tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 2,
    img: "src/assets/img/Type=Americano.svg",
    categories: ["Tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: 3,
    img: "src/assets/img/Type=Expresso Cremoso.svg",
    categories: ["Tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: 4,
    img: "src/assets/img/Type=Expresso Gelado.svg",
    categories: ["Tradicional", "Gelado"],
    title: "Expresso Gelado",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: 5,
    img: "src/assets/img/Type=Café com Leite.svg",
    categories: ["Tradicional", "Com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: 6,
    img: "src/assets/img/Type=Latte.svg",
    categories: ["Tradicional", "Com leite"],
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: 7,
    img: "src/assets/img/Type=Capuccino.svg",
    categories: ["Tradicional", "Com leite"],
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: 8,
    img: "src/assets/img/Type=Macchiato.svg",
    categories: ["Tradicional", "Com leite"],
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: 9,
    img: "src/assets/img/Type=Mochaccino.svg",
    categories: ["Tradicional", "Com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: 10,
    img: "src/assets/img/Type=Chocolate Quente.svg",
    categories: ["Especial", "Com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },
  {
    id: 11,
    img: "src/assets/img/Type=Cubano.svg",
    categories: ["Especial", "Gelado", "Alcoólico"],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },
  {
    id: 12,
    img: "src/assets/img/Type=Havaiano.svg",
    categories: ["Especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
  },
  {
    id: 13,
    img: "src/assets/img/Type=Árabe.svg",
    categories: ["Especial"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },
  {
    id: 14,
    img: "src/assets/img/Type=Irlandês.svg",
    categories: ["Especial", "Alcoólico"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
  },
];

export function CoffeeList() {
  return (
    <Container>
      <h1>Nossos cafés</h1>
      <List>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </List>
    </Container>
  );
}
