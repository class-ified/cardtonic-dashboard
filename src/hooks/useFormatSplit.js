// format number and split by decimal
const FormatSplit = (amount) => {
    const formattedNumber = Number(amount.toFixed(2)).toLocaleString();

    let splitArray = []
    
    // split number by .
    const splitNumber = formattedNumber.split(".");

    splitArray[0] = splitNumber[0]

    if (splitNumber[1] || !splitNumber[1] === undefined) {
        splitArray[1] = splitNumber[1]
    } else {
        splitArray[1] = '00'
    }

    return splitArray
};

export default FormatSplit