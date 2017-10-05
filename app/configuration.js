/*
 * Be sure to setup your config values before running this code. You can 
 * set them using environment variables or modifying the config file in /config.
 *
 */


const APP_SECRET = (process.env.MESSENGER_APP_SECRET) || "1b4369e1de8511432341bcb8816478d0" 

// Arbitrary value used to validate a webhook
const VALIDATION_TOKEN = (process.env.MESSENGER_VALIDATION_TOKEN) || 'mytoken'

// Generate a page access token for your page from the App Dashboard
const PAGE_ACCESS_TOKEN = (process.env.MESSENGER_PAGE_ACCESS_TOKEN) || "EAAXxmLPrmhYBAIob8vAGHUfsLgzijLmpLWZCZAzHb9sMZCBAs4hSjzLUx1ZBmZAJX0QJlYhoFdtC5pY2DdJVkrSzvPHwkTzr6ybXtwHKOM1K1FacJdUIHRyZARAoK4BCKvtDmtzTZBpIiV2gZCUIZAIiNainiHK16EzcTShcGoZBLZBXjTfWXFKuRXe"

// URL where the app is running (include protocol). Used to point to scripts and 
// assets located at this address. 
// const SERVER_URL = (process.env.SERVER_URL)

exports.APP_SECRET = APP_SECRET;
exports.VALIDATION_TOKEN = VALIDATION_TOKEN;
exports.PAGE_ACCESS_TOKEN = PAGE_ACCESS_TOKEN;


