import styles from './page.module.css'

import { HomeGraphic1, HomeGraphic2 } from "@/components/Svg"

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
            <div>
              <p className="text-3xl font-heading mb-2">Easily search for datasets</p>
              <p className={styles.subtext}>Made possible with clear metadata, usage and community votes.</p>
            </div>
            <div>
              <p className="text-3xl font-heading mb-2">Curate missing datasets</p>
              <p className={styles.subtext}>Can’t find what you need? Publish a request and get it created.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gradient_block_1}></div>
      <div className="py-20"></div>
    </div>
  )
}

