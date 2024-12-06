class Sorter {
    sort(guitars) {
        const sortedGuitars = guitars.sort((a, b) => {
            // Ordenar por precio
            const priceComparison = (a.price || 0) - (b.price || 0);
            if (priceComparison !== 0) {
                return priceComparison; // Si los precios son diferentes, se usa este criterio
            }

            // Si los precios son iguales, ordenar por descuento
            const discountA = parseInt(a.offer.replace('%', '')) || 0;
            const discountB = parseInt(b.offer.replace('%', '')) || 0;
            return discountB - discountA; // Descuentos en orden descendente
        });

        return sortedGuitars;
    }
}

export default new Sorter();
