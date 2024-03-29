import 'dotenv/config';


const app = {
    port : process.env.PORT,
    xapikey: process.env.X_API_KEY,
    jwtsecret: process.env.JWT_SECRET,
    db_user: process.env.DATABASE_USER,
    db_name: process.env.DATABASE_NAME,
    db_host: process.env.DATABASE_HOST,
    db_pass: process.env.DATABASE_PASSWORD,
    db_port: process.env.DATABASE_PORT,
    app_debug: process.env.APP_DEBUG,
    app_name: process.env.APP_NAME
}

export default app;