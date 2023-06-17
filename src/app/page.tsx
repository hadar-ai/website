import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

import { Bulb, Code, Community, Email, Flow1, HomeGraphic1, HomeGraphic2, Linkedin, Nodes, Pay, Person, Trophy } from "@/components/Svg"
import classnames from 'classnames'
import { Form } from '@/components/Form'
import { sendToMailchimp } from '@/app/actions'
import { LearnMoreButton, RequestAccessButton } from "@/components/Button";

export default function Home() {
  return (
    <div>
      <div className="content-width-wrapper my-32">
        <div className="flex place-content-between items-center">
          <div className="w-6/12 mr-20 flex-shrink-0 max-md:w-full max-md:text-center">
            <h1 className="text-5xl font-heading">
              Democratizing Data.
              <br />
              Shaping AI.
            </h1>
            <p className="text-3xl mt-8">
              Infrastructure for curating and accessing high quality datasets.
            </p>
            <div className='mt-20 min-md:hidden'>
              <RequestAccessButton />
            </div>
          </div>
          <div>
            <HomeGraphic1 className="w-5/6 flex-shrink max-md:hidden" />
          </div>
        </div>
      </div>
      <div className={styles.gradient_block_1}>
        <div className="content-width-wrapper">
          <div className="flex place-content-space-between items-center max-md:flex-col">
            <HomeGraphic2 className="w-5/6 max-md:w-full" />
            <div className="ml-12 max-md:ml-0 max-md:mt-12">
              <h2 className="text-5xl font-heading mb-5">Access data</h2>
              <p className="text-2xl text-coolGray-300">
                Hadar helps you find datasets that are usually proprietary,
                inaccessible or expensive.
              </p>
            </div>
          </div>
          <div className="flex place-content-between items-center mt-28 max-md:flex-col max-md:mt-12">
            <div className={styles.sub}>
              <p>Easily search for datasets</p>
              <p>
                Made possible with clear metadata, usage and community votes.
              </p>
            </div>
            <div className={classnames(styles.sub, 'max-md:mt-10')}>
              <p>Curate missing datasets</p>
              <p>
                Can’t find what you need? Publish a request and get it created.
              </p>
            </div>
          </div>
          <div className="text-center mt-28">
            <LearnMoreButton />
          </div>
        </div>
      </div>
      <div className={styles.gradient_block_1}>
        <div className="content-width-wrapper">
          <h2 className="font-heading text-center text-5xl leading-tight">
            Contribute to datasets.
            <br />
            Share in the future value.
          </h2>
          <div className="mt-20 flex place-content-between items-start max-md:flex-col-reverse max-md:items-center max-md:place-content-center">
            <div className="mr-8 max-md:mr-0">
              <div className={styles.icon_with_content}>
                <div>
                  <Bulb />
                </div>
                <div className={styles.sub}>
                  <p>Request Data</p>
                  <p>
                    Set standards and invite verifiers to help with curation.
                  </p>
                </div>
              </div>
              <div className={styles.icon_with_content}>
                <div>
                  <Code />
                </div>
                <div className={styles.sub}>
                  <p>Provide Data</p>
                  <p>Publish high quality dataasets.</p>
                </div>
              </div>
              <div className={styles.icon_with_content}>
                <div>
                  <Person />
                </div>
                <div className={styles.sub}>
                  <p>Verify Data</p>
                  <p>Review data and guarantee its quality.</p>
                </div>
              </div>
              <div className={styles.icon_with_content}>
                <div>
                  <Trophy />
                </div>
                <div className={styles.sub}>
                  <p>Sponsor Data</p>
                  <p>Reduce the cost of data access for all.</p>
                </div>
              </div>
              <div className="mt-20 max-md:text-center">
                <LearnMoreButton />
              </div>
            </div>
            <Flow1 className="w-7/12 max-md:w-full max-md:mb-10" />
          </div>
        </div>
      </div>
      <div className={styles.gradient_block_1}>
        <div className="content-width-wrapper">
          <div className="flex place-content-center items-center max-md:flex-col">
            <div className="w-7/12 max-md:w-full">
              <h2 className="text-5xl font-heading mb-10">Our Mission</h2>
              <p className="text-2xl mb-20">
                At Hadar, we believe that a decentralized data bank that is
                openly curated and accessible by the crowd can help democratize
                and promote innovation.
              </p>
              <LearnMoreButton className="max-md:hidden" />              
            </div>
            <div className="ml-20 max-md:ml-0">
              <div className={styles.icon_with_content}>
                <div>
                  <Nodes />
                </div>
                <div className={styles.sub}>
                  <p>Openly curated datasets</p>
                  <p>High quality datasets that are crowd-sourced.</p>
                </div>
              </div>
              <div className={styles.icon_with_content}>
                <div>
                  <Pay />
                </div>
                <div className={styles.sub}>
                  <p>Profit-sharing</p>
                  <p>
                    Value shared among users who provide, curate and verify
                    data.
                  </p>
                </div>
              </div>
              <div className={styles.icon_with_content}>
                <div>
                  <Community />
                </div>
                <div className={styles.sub}>
                  <p>Decentralized Governance</p>
                  <p>Built the community, governed by the community.</p>
                </div>
              </div>
              <div className="mt-20 text-center min-md:hidden">
                <LearnMoreButton  />              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gradient_block_1}>
        <div className="content-width-wrapper">
          <h2 className="text-5xl text-center font-heading mb-10">Team</h2>
          <p
            className={classnames(styles.content_sub_text, "text-center mb-20")}
          >
            Combined 20+ years building tech products in ML and blockchain that
            served millions of users, managed billions in AUM, and generated
            billions in trading volume.
          </p>
          <div className="flex place-content-around items-center">
            <div className={styles.team_member}>
              <Image
                alt="Sylvia Chen"
                src="/images/sylvia.jpg"
                width={244}
                height={281}
                unoptimized
              />
              <div>
                <h3>Silvia Chen</h3>
                <p>CEO, Co-founder</p>
                <a href="https://www.linkedin.com/in/silvia-chen/" className="mt-4">
                  <Linkedin />
                </a>
              </div>
            </div>
            <div className={styles.team_member}>
              <Image
                alt="Ramesh Nair"
                src="/images/ram.jpg"
                width={244}
                height={281}
                unoptimized
              />
              <div>
                <h3>Ramesh Nair</h3>
                <p>CTO, Co-founder</p>
                <a href="https://www.linkedin.com/in/hiddentao/" className="mt-4">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gradient_block_1}>
        <a id="request_access" href="#"></a>
        <div className="content-width-wrapper">
          <div className='flex place-content-between items-center max-md:flex-col'>
            <div className='w-5/12 flex-shrink-0 max-md:w-full'>
              <h2 className="text-5xl font-heading mb-10">Early Access</h2>
              <p className="text-xl">
                We will grant limited access to early adopters along with a
                special welcome package.
              </p>
            </div>
            <div className='w-6/12 flex-grow-0 max-md:w-full max-md:mt-20'>
              <Form className='w-full' endpoint={sendToMailchimp} successMessage='Thanks. Please follow the confirmation link in the email we have sent you.'>
                <div className="mb-10">
                  <label>Full name</label>
                  <input
                    name="fullName"
                    required={true}
                    type="text"
                    maxLength={50}
                    className="w-60"
                  />
                </div>
                <div className="mb-10">
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
                    <span className="ml-2">I need to access datasets</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" name="interests" value="publish" />
                    <span className="ml-2">I want to publish datasets</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" name="interests" value="source" />
                    <span className="ml-2">
                      I want to source datasets that don&apos;t exist
                    </span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" name="interests" value="verify" />
                    <span className="ml-2">I can verify datasets</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" name="interests" value="sponsor" />
                    <span className="ml-2">
                      I want to sponsor dataset access
                    </span>
                  </div>
                </div>
                <div>
                  <em className='text-sm'>By submitting this form you agree to our <Link href="/terms">terms and conditions</Link> and <Link href="/privacy">privacy policy</Link>.</em>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
