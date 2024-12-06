import axios from 'axios';
import * as cheerio from 'cheerio';
import Sorter from './sortAlgs.js'; // Asegúrate de usar .js para los archivos locales
import chalk from 'chalk';
import URLgetter from './URLgetter.js';

const url = URLgetter.guitarrasElectricas()

const scrapeOffers = async (url) => {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
      
        const guitars = [];

        // Loop through each product card
        $('.poly-card__content').each((i, elem) => {
            const name = $(elem)
                .find('h2.poly-box.poly-component__title')
                .text()
                .slice(0, 50)
                .trim();
                
            // Extraemos el precio del span (tomamos el segundo si existe, si no, el primero)
            const priceElem = $(elem).find('.poly-component__price .poly-price__current span.andes-money-amount__fraction');
            const priceText = priceElem.eq(1).text().trim() || priceElem.eq(0).text().trim();
            const price = parseInt(priceText.replace(/\./g, '')) || 0; // Convertimos a número
            
            const offer = $(elem)
                .find('.poly-component__price span.andes-money-amount__discount')
                .text()
                .trim();

            if (name && price) { // Ensure data is valid
                guitars.push({
                    name,
                    price, // Usamos el valor numérico
                    offer: offer || 'No discount', // Add "No discount" if not present
                });
            }
        });

        const sortedGuitars = Sorter.sort(guitars);
        
        //showGuitars(sortedGuitars, url)
        //Estaba devolviendo esto por eso no andaba
        /*return {
            guitars: sortedGuitars,
            url: url
        }*/
        return sortedGuitars;
         
    } catch (err) {
        //Error fetching or processing data: getaddrinfo ENOTFOUND listado.mercadolibre.com.ar
        console.error('Error fetching or processing data:', err.message);
    }
};

//If you want to show the guitars on console
const showGuitars = (guitars, url) => {
    guitars.forEach((guitar, i) => {
        console.log(`${i} - ${chalk.blue(guitar.name)} - $${chalk.yellowBright(guitar.price)} - Discount: ${chalk.green(guitar.offer)}`);
        console.log("-----------------------------------------------------------------");
    });
    console.log("url:", url)
};

//scrapeOffers(url)


export { scrapeOffers }

