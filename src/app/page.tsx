import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

import { BadForCreators, Community, Flow1, GoodForCreators, Nodes, Pay } from "@/components/Svg"
import { Form } from '@/components/Form'
import { sendToMailchimp } from '@/app/actions'
import { LearnMoreButton, RequestAccessButton } from "@/components/Button";

export default function Home() {
  return (
    <main>
      <div className='first_block flex flex-col items-center justify-center'>
        <div className='container text-center'>
          <h1 className="text-6xl font-heading">
            Ethically powered AI data.
          </h1>
          <p className="text-3xl mt-8 font-thin">
            Creative work is valuable. We ensure creators get paid for AI.
          </p>
          <div className='mt-14'>
            <RequestAccessButton />
          </div>
        </div>
      </div>
      <div className='gradient_block_2'>
        <div className="container h-full text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl font-heading">
            We provide training data, and incentivise creators.
          </h2>
          <Flow1 className="w-full mt-16 mb-14" />
          <p className="text-2xl font-thin w-9/12 max-md:w-full">
            We work with existing publishers and creators directly to ensure we provide the highest quality training data.
          </p>
        </div>
      </div>
      <div className='gradient_block_1'>
        <div className="container h-full text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl font-heading">
            Data has value. Creators should be compensated.
          </h2>
          <BadForCreators className="w-full mt-20 mb-16" />
          <GoodForCreators className="w-full" />
        </div>
      </div>
      <div className='gradient_block_2'>
        <div className="container h-full flex flex-row place-content-center items-center max-md:flex-col">
          <div className="w-7/12 max-md:w-full">
            <h2 className="text-4xl font-heading mb-16">Our Mission</h2>
            <p className="text-2xl mb-10 font-thin">
              At Hadar, we believe that an incentivized data bank empowers both 
              creators as well as AI modellers.
            </p>
            <p className="text-2xl mb-16 font-thin">
              By building a platform where users get paid for contributing quality 
              data, we empower creators financially while providing AI companies 
              access to diverse, ethical datasets.
            </p>
            <LearnMoreButton className="max-md:hidden" />              
          </div>
          <div className="ml-20 max-md:hidden">
            <div className={styles.icon_with_content}>
              <div>
                <Nodes />
              </div>
              <div className={styles.sub}>
                <p>Open access</p>
                <p>High quality ethical datasets that everyone can use commercially.</p>
              </div>
            </div>
            <div className={styles.icon_with_content}>
              <div>
                <Pay />
              </div>
              <div className={styles.sub}>
                <p>Revenue-sharing</p>
                <p>
                  Value shared amongst stakeholders who supply and verify the data.
                </p>
              </div>
            </div>
            <div className={styles.icon_with_content}>
              <div>
                <Community />
              </div>
              <div className={styles.sub}>
                <p>Decentralized Governance</p>
                <p>Built for the community, governed by the community.</p>
              </div>
            </div>
            <div className="mt-20 text-center hidden max-md:block">
              <LearnMoreButton  />              
            </div>
          </div>
        </div>
      </div>
      <div className='gradient_block_1'>
        <a id="request_access" href="#"></a>
        <div className="container h-full flex flex-col items-center justify-center">
          <h2 className="text-5xl font-heading text-center ">
            Gain Early Access
          </h2>
          <p className="text-2xl font-thin mt-10 text-center">
            We will grant limited access to early adopters along with some special perks.
          </p>
          <div className='w-6/12 flex-grow-0 mt-12 max-md:w-full max-md:mt-10'>
            <Form className='w-full text-center flex flex-col justify-start items-center' endpoint={sendToMailchimp} successMessage='Thanks. Please follow the confirmation link in the email we have sent you.'>
              <div className="text-left">
                <div className="mb-6">
                  <label>Full name</label>
                  <input
                    name="fullName"
                    required={true}
                    type="text"
                    maxLength={50}
                    className="w-60"
                  />
                </div>
                <div className="mb-6">
                  <label>Email address</label>
                  <input
                    name="email"
                    required={true}
                    type="email"
                    className="w-60"
                  />
                </div>
                <div className="mb-10">
                  <label>Select all that apply</label>
                  <div className="mb-1">
                    <input type="checkbox" name="interests" value="access" />
                    <span className="ml-2">I want to access data to train a model</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" name="interests" value="publish" />
                    <span className="ml-2">I want to supply data ethically</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" name="interests" value="source" />
                    <span className="ml-2">
                      I want to ethically source a dataset
                    </span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" name="interests" value="verify" />
                    <span className="ml-2">I want to help with verifying data quality</span>
                  </div>
                </div>
              </div>
              <div className="w-full max-md:w-11/12">
                <em className='text-sm'>By submitting this form you agree to our <Link href="/terms">terms and conditions</Link> and <Link href="/privacy">privacy policy</Link>.</em>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}

