
# Guitar Deals Email Scraper

This project scrapes guitar deals from mercado libre and sends an email every week with the latest offers. The email contains a table of guitars, including their name, price, and discount offer. The script is run weekly using **Heroku Scheduler** to send an email every Monday at 12 PM.

## Features

- Scrapes guitar offers from specified URLs.
- Sends a weekly email with a table listing guitar names, prices, and discounts.
- Runs automatically on Heroku using **Heroku Scheduler**.
- Customizable to use your own email account for sending emails.

## Tech Stack

- **Node.js**: JavaScript runtime for executing the script.
- **Nodemailer**: A module for sending emails from Node.js.
- **Heroku Scheduler**: Used to run the script on a schedule.
- **dotenv**: Manages environment variables securely.

## Setup Instructions

### 1. Clone the repository

To clone the project to your local machine, use the following command:

```bash
git clone https://github.com/FdezCarlomagno/guitar-web-scrapper
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Set up your environment variables

Create a `.env` file in the root directory of the project. This file will contain your email configuration and any other environment variables. Example:

```env
MAIL=your-email@gmail.com
MAIL_PASS=your-email-password
```

Replace `your-email@gmail.com` with your email address and `your-email-password` with your email password (or better yet, use an [app-specific password](https://support.google.com/accounts/answer/185833?hl=en) for Gmail for added security).

### 4. Run the project locally (Optional)

To run the script locally to check if everything works before deploying, use the following command:

```bash
node app.js
```

If the email is successfully sent, you should see a confirmation message in the console.

## Notes

- This project uses **Nodemailer** to send emails via your Gmail account. For added security, it's recommended to use an [App Password](https://support.google.com/accounts/answer/185833?hl=en) if you're using Gmail.
- The cron job is set to run daily in the **Heroku Scheduler**, but the logic inside the script ensures that emails are only sent on Mondays at 12 PM.
- Make sure your **email account** has access to "less secure apps" if you're using a Gmail account. Alternatively, consider using **OAuth2** for better security.

## Contributing

Feel free to fork the repository, make improvements, or submit issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Explanation of the `README`:

1. **Project Overview**: Describes what the project does and the tech stack.
2. **Setup Instructions**:
   - **Cloning**: How to clone the repository.
   - **Installing dependencies**: Run `npm install` to install required packages.
   - **Setting up `.env` file**: Describes how to set up environment variables, particularly for your email account.
   - **Running the script locally**: Optional step for testing before deploying.
3. **Deploying to Heroku**: Describes how to deploy the project to Heroku and set up a scheduled job using Heroku Scheduler.
4. **Checking Logs**: How to view the logs to ensure everything is working as expected.
5. **Notes**: Additional recommendations for Gmail accounts and security.

Once you've set up everything, your script will send the email with guitar deals every Monday at 12 PM, and you'll be able to monitor and adjust it from the Heroku dashboard.

Let me know if you need more help!