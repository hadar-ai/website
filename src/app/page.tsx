import Link from 'next/link'
import styles from './page.module.css'

import { Bulb, Flow1, HomeGraphic1, HomeGraphic2 } from "@/components/Svg"
import classnames from 'classnames'

export default function Home() {
  return (
    <div>
      <div className="content-width-wrapper my-32">
        <div className="flex place-content-between items-center">
          <div className="w-6/12">
            <h1 className="text-5xl font-heading">
              Democratizing Data.<br />Shaping AI.
            </h1>
            <p className="text-3xl mt-8">Infrastructure for curating and accessing high quality datasets.</p>
          </div>
          <div><HomeGraphic1 className="w-5/6" /></div>
        </div>
      </div>
      <div className={styles.gradient_block_1}>
        <div className="content-width-wrapper">
          <div className="flex place-content-space-between items-center">
            <HomeGraphic2 className="w-5/6" />
            <div className="ml-12">
              <p className="text-5xl font-heading mb-5">Access data</p>
              <p className="text-2xl text-coolGray-300">Hadar helps you find datasets that are usually proprietary, inaccessible or expensive.</p>
            </div>
          </div>
          <div className="flex place-content-between items-center mt-28">
            <div className={styles.sub}>
              <p>Easily search for datasets</p>
              <p>Made possible with clear metadata, usage and community votes.</p>
            </div>
            <div className={styles.sub}>
              <p>Curate missing datasets</p>
              <p>Can’t find what you need? Publish a request and get it created.</p>
            </div>
          </div>
          <div className="text-center mt-28">
            <Link className='btn' href="/whitepaper">Learn more</Link>
          </div>
        </div>
      </div>
      <div className={styles.gradient_block_1}>
        <div className="content-width-wrapper">
          <p className="font-heading text-center text-5xl leading-tight">Contribute to datasets.<br />Share in the future value.</p>
          <div className="mt-20 flex place-content-between items-start">
            <div>
              <div className={styles.icon_with_content}>
                <div>
                  <Bulb />
                </div>
                <div className={styles.sub}>
                  <p>Request Data</p>
                  <p>Set standards and invite verifiers to help with curation.</p>
                </div>
              </div>
              <div className={styles.icon_with_content}>
                <div>
                  <Bulb />
                </div>
                <div className={styles.sub}>
                  <p>Provide Data</p>
                  <p>Publish high quality dataasets.</p>
                </div>
              </div>
              <div className={styles.icon_with_content}>
                <div>
                  <Bulb />
                </div>
                <div className={styles.sub}>
                  <p>Verify Data</p>
                  <p>Review data and guarantee its quality.</p>
                </div>
              </div>
              <div className={styles.icon_with_content}>
                <div>
                  <Bulb />
                </div>
                <div className={styles.sub}>
                  <p>Sponsor Data</p>
                  <p>Reduce the cost of data access for all.</p>
                </div>
              </div>
            </div>
            <Flow1 className="w-7/12 ml-8" />
          </div>
        </div>
      </div>
      <div className="py-20"></div>
    </div>
  )
}

