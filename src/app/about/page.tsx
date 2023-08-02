import Image from "next/image";

import styles from './page.module.css'
import { Linkedin } from "@/components/Svg";

export default function About() {
  return (
    <main className='first_block'>
      <div className="container mt-32 text-center">
        <h2 className="text-5xl text-center font-heading mb-10">About us</h2>
        <p className='text-2xl font-thin text-center mb-20'>
          Combined 20+ years building tech products in ML and blockchain that
          served millions of users, managed billions in AUM, and generated
          billions in trading volume.
        </p>
        <div className="flex flex-row place-content-around items-center">
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
              <a href="https://www.linkedin.com/in/silvia-chen/" className={styles.linkedin_link}>
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
              <a href="https://www.linkedin.com/in/hiddentao/" className={styles.linkedin_link}>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

