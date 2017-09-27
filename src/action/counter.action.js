export function add(number){
    return {
        type : 'ADD',
        payload: number
    };
}

export function substract(number){
    return {
        type : 'SUBSTRACT',
        payload: number
    };
}