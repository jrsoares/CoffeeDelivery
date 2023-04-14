export function formatMoney(price: number): string {
  return price.toLocaleString("pt-br", {
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}
