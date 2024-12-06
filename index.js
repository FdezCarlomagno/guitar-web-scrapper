import URLgetter from './URLgetter.js';
import { sendEmail } from './emailService.js';
import { scrapeOffers } from './scrap.js';
import cron from 'node-cron';

//El parametro es el descuento
//- /1 * * * * test
//- 0 9 * * 1 real
cron.schedule('*0 12 * * 1', async () => {
    console.log('Running scrapping job every Monday at 12 PM');

    const URLacusticas = URLgetter.guitarrasAcusticas();
    const URLelectricas = URLgetter.guitarrasElectricas();

    const guitars = await scrapeOffers(URLelectricas);

    sendEmail(guitars)
},
    {
        scheduled: true,
        timezone: "America/Argentina/Buenos_Aires" // Set timezone (optional)
    }
)