// TODO: Implement proper templates in production
//TODO: Modularize templats.

exports.generateEmailTemplate = (OTP: number) => `
        <!DOCTYPE html>
        <html>
            <body>
                <h1>Verification Code ${OTP}</h1>
            </body>
        </html>
    `;

exports.welcomeEmailTemplate = (heading: string, message: string) => `
    <!DOCTYPE html>
    <html>
        <body>
            <h1>${heading}</h1>
            <h1>${message}</h1>

        </body>
    </html>
`;

exports.forgotPasswordTemplate = (url: string) => `
    <!DOCTYPE html>
    <html>
        <body>
            <h1>${url}</h1>
        </body>
    </html>
    `;

exports.resetPasswordTemplate = (heading: string, message: string) => `
    <!DOCTYPE html>
    <html>
        <body>
            <h1>${heading}</h1>
            <h1>${message}</h1>
        </body>
    </html>
`;
