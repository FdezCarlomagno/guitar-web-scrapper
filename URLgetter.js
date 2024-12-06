
class URLgetter {
    constructor(){
        this.base = "https://listado.mercadolibre.com.ar/";
    }
    guitarrasElectricas(descuento = 0){
        const filter = `instrumentos-musicales/instrumentos-cuerdas/guitarras/electricas/guitarra-electrica_Discount_${descuento}-100_NoIndex_True#applied_filter_id%3Ddiscount%26applied_filter_name%3DDescuentos%26applied_filter_order%3D11%26applied_value_id%3D${descuento}-100%26applied_value_name%3DDesde+${descuento}%25+OFF%26applied_value_order%3D3%26applied_value_results%3D54%26is_custom%3Dfalse`;
        
        if(descuento != 0){
            return this.base + filter
        }

        return this.base + 'guitarras-electricas';
    }
    guitarrasAcusticas(){
        return this.base + 'guitarras-acusticas';
    }
}

export default new URLgetter();