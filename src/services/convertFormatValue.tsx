
export const formatReal = (value: number) => {
    // Verifica se o valor é um número válido
    if (isNaN(value) || !isFinite(value)) {
        return 'Valor inválido';
    }

    // Formata o número com duas casas decimais
    const formattedValue = value.toFixed(2);

    // Divide o valor em parte inteira e decimal
    const [integerPart, decimalPart] = formattedValue.split('.');

    // Formata a parte inteira com separadores de milhares
    const formattedInteger = parseInt(integerPart).toLocaleString('pt-BR');

    // Retorna o valor formatado com duas casas decimais
    return `R$ ${formattedInteger},${decimalPart}`;
};