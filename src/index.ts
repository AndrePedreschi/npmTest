
/**
 * Retorna uma saudação personalizada.
 * 
 * A função recebe um nome como parâmetro e retorna uma saudação no formato: "Hello, {name}".
 * 
 * @function greet
 * @param {string} name - O nome da pessoa a ser saudada.
 * @returns {string} Uma saudação personalizada contendo o nome fornecido.
 */
export function greet(name: string): string {
    return `Hello, ${name}`
}

/**
 * Exibe uma mensagem de despedida no console.
 * 
 * A função imprime a mensagem "Valew, falow" no console.
 * 
 * @function adeus
 * @returns {void} Esta função não retorna nenhum valor.
 */
export function adeus(): void {
    console.log('Valew, falow');
}

//module.exports = greet;


console.log(greet("José"));
adeus();