export const lambdaHandler = async (event, context) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My AWS Web App</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <h1>Welcome to My AWS Hosted Web App 🚀</h1>
            <p>This website is automatically deployed from GitHub using AWS CodePipeline.</p>
        </body>
        </html>
    `;

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: htmlContent
    };
};
