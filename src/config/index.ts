interface ConfigInterface {
  MAILCHIMP_API_KEY: string;
  MAILCHIMP_SERVER_PREFIX: string;
  MAILCHIMP_AUDIENCE_ID: string
}

const env = require("env-var").from({
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
  MAILCHIMP_SERVER_PREFIX: process.env.MAILCHIMP_SERVER_PREFIX,
  MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID
});

export const config: ConfigInterface = Object.freeze({
  MAILCHIMP_API_KEY: env.get("MAILCHIMP_API_KEY").required().asString(),
  MAILCHIMP_SERVER_PREFIX: env
    .get("MAILCHIMP_SERVER_PREFIX")
    .required()
    .asString(),
  MAILCHIMP_AUDIENCE_ID: env
    .get("MAILCHIMP_AUDIENCE_ID")
    .default("134ff41a1d")
    .asString(),
});
