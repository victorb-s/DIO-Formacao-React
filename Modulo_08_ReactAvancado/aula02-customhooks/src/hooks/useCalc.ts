export const UseCalc = () => {
    const handleSum = (num1: number, num2: number) => {
        return num1 + num2;
    }

    return {handleSum};
}