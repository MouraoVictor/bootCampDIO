// aqui ficarão todas as funções que lidam com o produto

const productType = {
    version: "digital",
    tax: "x1",
}

// hidden const (hidden member)
const apiURL = {
    url: "www.google.com/api",
};

async function getFullName(codeId, productName) {
    await doBreakLine()
    console.log("product " + codeId + " -- " + productName);
}

async function doBreakLine() {
    console.log("\n");
}

async function getProductLabel(productName) {
    await doBreakLine();
    console.log("Product: " + productName + "\n");
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
};