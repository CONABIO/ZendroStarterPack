require("dotenv").config();

/**
 * Mandatory variables
 */
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN;
const JWT_SECRET = process.env.JWT_SECRET;
if (!ALLOW_ORIGIN || !JWT_SECRET) {
  throw new Error("Some mandatory environment variables have not been set\n", {
    ALLOW_ORIGIN,
    JWT_SECRET,
  });
}

/**
 * Optional variables with no defaults
 */

const MAIL_ACCOUNT = process.env.MAIL_ACCOUNT;
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
const MAIL_SERVICE = process.env.MAIL_SERVICE;
const MAIL_PORT = process.env.MAIL_PORT;

if (!MAIL_ACCOUNT || !MAIL_HOST || !MAIL_PASSWORD || !MAIL_SERVICE) {
  console.warn(
    "WARNING: BulkAdd email service has not been properly configured",
    {
      MAIL_ACCOUNT,
      MAIL_HOST,
      MAIL_PASSWORD,
      MAIL_SERVICE,
      MAIL_PORT,
    }
  );
}

/**
 * Optional variables with sensible defaults
 */

// Listening port
const PORT = parseInt(process.env.PORT || 3000);

// Logging
const ERROR_LOG = process.env.ERROR_LOG || "compact";

// Request Limits
const LIMIT_RECORDS = parseInt(process.env.LIMIT_RECORDS || 10000);
const POST_REQUEST_MAX_BODY_SIZE =
  process.env.POST_REQUEST_MAX_BODY_SIZE || "1mb";

// Security
const REQUIRE_SIGN_IN = process.env.REQUIRE_SIGN_IN === "false" ? false : true;
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || 10);
const WHITELIST_ROLES = process.env.WHITELIST_ROLES
  ? process.env.WHITELIST_ROLES.split(",")
  : [];
const DOWN_MIGRATION = process.env.DOWN_MIGRATION === "true" ? true : false;
// Timeouts
const MAX_TIME_OUT = parseInt(process.env.MAX_TIME_OUT || 2000);
const EXPORT_TIME_OUT = parseInt(process.env.EXPORT_TIME_OUT || 3600);

const config = {
  LIMIT_RECORDS,
  PORT,
  ALLOW_ORIGIN,
  JWT_SECRET,
  SALT_ROUNDS,
  REQUIRE_SIGN_IN,
  MAX_TIME_OUT,
  POST_REQUEST_MAX_BODY_SIZE,
  ERROR_LOG,
  MAIL_SERVICE,
  MAIL_HOST,
  MAIL_ACCOUNT,
  MAIL_PASSWORD,
  MAIL_PORT,
  EXPORT_TIME_OUT,
  WHITELIST_ROLES,
  DOWN_MIGRATION,
};

module.exports = config;
