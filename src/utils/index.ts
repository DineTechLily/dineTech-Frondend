const formatPriceToTWD = (price: number) => new Intl.NumberFormat('zh-TW').format(price);

export {formatPriceToTWD};