const formatValue = (value: number): string => {
  const numberFormated = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
  return numberFormated;
};
export default formatValue;
