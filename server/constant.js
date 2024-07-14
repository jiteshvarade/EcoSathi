require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.DB_NAME;
const EMAIL = process.env.EMAIL;
const APP_PASSWD = process.env.APP_PASSWD;
const GENAI_KEY = process.env.GENAI_KEY;

module.exports = {PORT, MONGODB_URL, DB_NAME, EMAIL, APP_PASSWD,GENAI_KEY};