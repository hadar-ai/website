'use server'

import mailchimp from '@mailchimp/mailchimp_marketing'

import { config } from '../config'

mailchimp.setConfig({
  apiKey: config.MAILCHIMP_API_KEY,
  server: config.MAILCHIMP_SERVER_PREFIX,
})

export const sendToMailchimp = async (data: FormData) => {
  const fullName = data.get('fullName')?.valueOf() as string
  const email = data.get("email")?.valueOf() as string;
  const interests = data.getAll("interests").map((item) => item.valueOf()).join(",");

  if (!email || !fullName || !interests) {
    throw new Error("Missing details");
  }

  console.log(`Adding contact to Mailchimp...`);

  try {
    const response = await mailchimp.lists.addListMember(
      config.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email.valueOf() as string,
        status: "pending",
        merge_fields: {
          FULLNAME: fullName,
          INTEREST: interests,
        },
      }
    );

    console.log(`...added: ${response.status}`);
  } catch (err: any) {
    console.error(`...error: ${err.message}`);
    throw new Error(`You may have already signed up.`)
  }
};