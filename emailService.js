import nodeMailer from 'nodemailer';
import dotenv from 'dotenv';
import URLgetter from './URLgetter.js';
dotenv.config();

//Email function
const mail = process.env.MAIL || '';
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: mail,
        pass: process.env.MAIL_PASS || ''
    },
    tls: {
        rejectUnauthorized: false // Ignorar la verificación del certificado
    }
})

const testGuitars = [
    {
        name: 'test1',
        price: '100',
        discount: '10%'
    },
    {
        name: 'test2',
        price: '120',
        discount: '10%'
    },
    {
        name: 'test1',
        price: '100',
        discount: '10%'
    },
    {
        name: 'test1',
        price: '100',
        discount: '10%'
    },
    {
        name: 'test1',
        price: '100',
        discount: '10%'
    },
    {
        name: 'test1',
        price: '100',
        discount: '10%'
    },
    {
        name: 'test1',
        price: '100',
        discount: '10%'
    },
    {
        name: 'test1',
        price: '100',
        discount: '10%'
    },
]

const sendEmail = (guitars) => {
    if (!guitars || guitars.length === 0) {
        console.log('No guitars to display');
        return; // Salir si no hay guitarras
    }

    transporter.verify((error, success) => {
        if (error) {
            console.log('Error with email transport:', error);
        } else {
            console.log('Email transport is ready:', success);
        }
    });

    const htmlContent = getHtmlContent(guitars);

    console.log('Generated HTML content:', htmlContent);
    const mailOptions = {
        from: mail,
        to: mail, // Email address to receive the data
        subject: 'Weekly Guitar Deals',
        html: htmlContent, // Send the data as HTML
    };
    transporter.sendMail(mailOptions, (error, info) => {
        console.log('durante sendMail')
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};



const getHtmlContent = (guitars) => {
    const htmlContent = `
        <h1>New Guitar Offers</h1>
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Discount</th>
            </tr>
            ${guitars.map(guitar => `
                <tr>
                    <td>${guitar.name}</td>
                    <td>$${guitar.price}</td>
                    <td>${guitar.offer}</td>
                </tr>`).join('')}
        </table>
    `;
    if(!htmlContent){
        return console.error('Couldn´t generate htmlContent')
    }

    return htmlContent
}

export { sendEmail }