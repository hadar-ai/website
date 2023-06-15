# Hadar.ai


## Incentivized Decentralized Data Crowdsourcing


# Summary

Data is the lifeblood of AI development, powering the algorithms that drive innovation and transformation. However, the current landscape presents two major challenges: **data isolation** and **underserved niche datasets**.

* Large enterprises are increasingly treating their data as proprietary assets, imposing high barriers to access and stifling collaboration. This data isolation limits the potential for innovation and creates an uneven playing field.
* Collecting data from niche verticals poses a significant hurdle. Fine-tuning AI models requires diverse and specialized datasets that are often scattered and hard to obtain. This scarcity of niche data restricts the ability to develop accurate and effective AI solutions in specific domains.

At DataX, we believe that a decentralized data bank that is openly curated and accessible by the crowd can help democratize data and promote innovation. 

Our platform incentivizes people to request, contribute, verify, and process high-quality datasets by leveraging tokenomics, and the individuals who supply and curate the data are the ones who profit from its future usage which drove by its very own high quality.

Through our platform, individuals and organizations can easily access and contribute high-quality datasets, allowing for comprehensive and diverse data sets that fuel breakthroughs. We empower data scientists, researchers, and innovators to fine-tune their AI models with the specific data they need, regardless of their niche vertical.

**Keywords: **data bank, open, crowdsourced, incentivized, decentralized, high quality


# How it works


## Stakeholders

Note that the different roles outlined here are not mutually exclusive. Indeed, we expect that many users will play multiple roles within the system.


<table>
  <tr>
   <td><strong>User role</strong>
   </td>
   <td><strong>Action</strong>
   </td>
   <td><strong>Reward</strong>
   </td>
   <td><strong>Cost</strong>
   </td>
  </tr>
  <tr>
   <td>Owner
   </td>
   <td>Owner of a dataset - either a Supplier or Curator.
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Supplier
   </td>
   <td>Provide high-quality datasets
   </td>
   <td>Paid for consumer usage of datasets they originally provided, as well as by curators for data provision.
   </td>
   <td>None
   </td>
  </tr>
  <tr>
   <td>Verifier
   </td>
   <td>Verify datasets for quality
   </td>
   <td>Paid for consumer usage of datasets they curated as well as by curators for data quality verification.
   </td>
   <td>None
   </td>
  </tr>
  <tr>
   <td>Curator
   </td>
   <td>Request datasets via tenders.
   </td>
   <td>Paid for consumer usage of datasets they originally requested.
   </td>
   <td>Pay suppliers and verifiers for dataset collection.
   </td>
  </tr>
  <tr>
   <td>Consumer
   </td>
   <td>Access data
   </td>
   <td>None
   </td>
   <td>Pay the platform for accessing datasets via API.
   </td>
  </tr>
  <tr>
   <td>Sponsor
   </td>
   <td>Sponsor cost of accessing a dataset
   </td>
   <td>None
   </td>
   <td>Cover the platform and supplier costs of accessing a dataset.
   </td>
  </tr>
</table>



### Suppliers 

Entities who supply/upload datasets for entry into the database. They can upload datasets ad-hoc and set pricing terms and/or fulfill the dataset requirements of curators.


### Curators 

Users who place requests for datasets and allow _Suppliers _to bid on fulfilling those requests. They may also optionally allow verifiers to bid on said requests for verification purposes. They are responsible for signing off on the quality of said datasets prior to them being made available for use by _Consumers_.



* _Curators will need to be DOXXED since we want them to be held accountable for misusing their vetting powers._


### Verifiers** **

Responsible for vetting the quality of the data entered by _Suppliers_. Verifiers are an optional add-on - curators may choose to verify the data themselves or utilize the services of a verifier. Any community members can apply to be a verifier and tag themselves with appropriate expertise. 


### Consumers 

Users who use datasets available in our database to train AI models, via our API.


### Sponsors 

Users who put up liquid capital to pay for the cost of accessing one or more datasets.


## Process flow

The following diagram gives a brief overview of all how each of the aforementioned types of users use the platform and interact with each other:


### 

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline drawings not supported directly from Docs. You may want to copy the inline drawing to a standalone drawing and export by reference. See <a href="https://github.com/evbacher/gd2md-html/wiki/Google-Drawings-by-reference">Google Drawings by reference</a> for details. The img URL below is a placeholder. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![drawing](https://docs.google.com/drawings/d/12345/export/png)


### Supplier-led dataset publishing

Our platform is intended to be open for suppliers to upload new datasets as and when they choose. This allows for dataset and API pricing competition between suppliers and for outdated datasets to be deprecated over time through natural market choice. 

The rough process:



1. A supplier uploads a new dataset and describes its features via metadata
2. They can optionally choose to request verifiers to verify the quality of the uploaded data.
    1. Note that automated verification algorithms built into the platform will be executed against any and all uploaded data regardless.
3. Once verification is complete, the supplier sets the price of accessing the data.
    2. _The supplier can also set the price of the dataset to be 0, in which case they do not earn anything from consumers accessing that dataset later on._
4. The data is now made publicly available via the platform API.
    3. Any Verifiers involved in the process will receive a share of the revenue earned from consumers accessing the data.
        1. _If the dataset price is 0 then the verifiers do not earn anything from consumers accessing that dataset later on._
5. Suppliers can continue to provide data with rich metadata even when there’s no curator
    4. Again, they can optionally choose to pay Verifiers to verify that the data matches the suppliers’ description. 

**Note:** Every dataset will have metadata indicating whether it has been verified or not and by whom. Data verified by known Verifiers will be considered more trustworthy by the community and thus charge a higher premium. Thus, it’s in a supplier’s interest to assign Verifiers to verify the quality of the data that they upload.


### Curator-led dataset publishing


#### Step 1: Curator &lt;-> Supplier matching auction



6. The curator creates a tender requesting data with a specific set of features. 
    5. They can also optionally request at least a certain no. of rows of data.
    6. They can also optionally request for verifiers to apply for verification bids
        2. Note that they can choose to invite known verifiers whom they’ve previously worked with to come and bid.
7. Suppliers can bid for the tender.
8. Verifiers can bid for the tender too, if verification has been requested.
9. Curator can choose multiple desirable bids from both suppliers and verifiers. At Least one supplier bid must be chosen.
10. The required amount of tokens covering all chosen bids in aggregate is taken from the Curator wallet and escrowed by the platform

For extremely niche data sets, the Curator will obviously expect to receive more costly bids. And vice versa.


#### Step 2: Data entry and quality control



1. Supplier enters data into the database via API / upload / etc.
2. The Curator and Verifiers check the data in order to sign off on its quality. Data checking is done by viewing it through our website and utilising the tools there-in to check validity.
    1. _None of the data is available via the API at this point, as doing so otherwise would otherwise allow a curator to build a model without yet signing off on quality. This incentivizes the curator, to be honest about the sign-off._
    2. _In the case of Verifiers:_
        1. Curators can decide to give the quorum of verifiers the final say or keep that privilege for themselves
        2. Any given verifier can raise an issue with the data, but a majority will need to decide on a final decision.
3. If the Curator signs off then:
    3. The Suppliers and Verifiers receive tokens from escrow.
        3. _The platform takes a fee from suppliers’ and verifiers’ earnings._
    4. The full data is now available via the platform API
4. If the Curator requests improvements:
    5. The tokens stay in escrow.
    6. The data remains unavailable via the platform API.
    7. The Curator provides specific improvements needed, and Suppliers upload updated data accordingly for another round of verification.
    8. There will be a 180-day deadline for these changes to be made.
    9. If the curator fails to sign off on the data after 180 days, the sign-off will automatically be assumed.
    10. If the Suppliers fail to upload new data within 180 days then the request will be considered a failure and the Curator sign-off is impossible.
        4. In this case, the escrowed tokens go back to the Curator. The data will be destroyed.

When a Supplier believes there’s a false negative from the Verifiers, they can raise a dispute:



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline drawings not supported directly from Docs. You may want to copy the inline drawing to a standalone drawing and export by reference. See <a href="https://github.com/evbacher/gd2md-html/wiki/Google-Drawings-by-reference">Google Drawings by reference</a> for details. The img URL below is a placeholder. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![drawing](https://docs.google.com/drawings/d/12345/export/png)

The process:



* Submit a dispute and put up a collateral of 25% of the rewards that they could have received had the data qualified
* The platform randomly selects a pool of independent verifiers from a list of qualified and trusted users on the platform
* These verifiers are required to meet a certain level of expertise and experience in the relevant field
* The verifiers are provided with the disputed data and asked to evaluate it using the same criteria as the initial verifiers
* The results of the independent verification are compared to the initial verifiers’ review to determine if there were any inconsistencies or biases
* If the independent review finds that the initial verifiers’ reviews were unfair:
    * The collateralized tokens will be returned to suppliers
    * The Supplier is compensated and data will be accepted.
    * Secondary Verifiers will share revenue later on from API consumption requests.
* If the independent review confirms the initial peer review:
    * The dispute is considered resolved 
    * The staked tokens will be taken from Supplier and equally divided among the new Verifiers.
    * The submitted data will be removed.


### Consumer data API consumption



1. Consumer setups up their model and funds their account with USDC.
2. API requests to fetch rows of data incur a cost.
3. API cost is split between the platform and the original curators, verifiers and suppliers of the data.


### Sponsoring data access



1. A sponsor selects a dataset they wish to sponsor
2. They add capital to the platform to cover the costs of consumers accessing that data
3. They tell the world about their sponsorship


# Pricing and Tokenomics

The platform is designed to be self-sustaining. It accomplishes this through priced access to data as well as monetary incentives for users who contribute and verify high-quality datasets.

All bid/offer pricing and API fees are denominated in USDC, a US Dollar pegged stablecoin in the bockchain ecosystem. This allows for price predictability and avoids wild fluctuations due to speculative action around a non-stable token. Onboarding non-crypto individuals and institutions to USDC will also be easier to facilitate. 


## API pricing models

We will allow Supplier and Curators to set different types of pricing for their datasets:



* Per-row micro-transaction pricing
* Pricing for bulk batch sizes (e.g 10k rows at price point A, 50k rows at B, etc).
* Single price for entire dataset.

In addition, there will be a base cost for accessing any API, priced in terms of USDC / Gigabyte downloaded via the API. The exact price for this will be determined closer to our production launch once our infrastructure is established.


## Payments

Users receive payment in the form of MLD. Specifically, USDC revenue will be used to purchase MLD from a DEX, to be deposid into our staking contract on the recipient’s behalf. They may unstake at any time. They can also choose to opt out of this system and have their USDC payment sent directly to thor wallet. However, staking MLD comes with a no. of benefits as detailed below.


## Fees

The platform charges a commission on revenue earned by curators, suppliers and verifiers:



* New dataset creation payouts to suppliers and verifiers:
    * 25% of their earnings go to the platform.
* API consumption payouts to suppliers, verifiers and curators: 
    * 25% of their earnings go to the platform


## DAO

The platform will be governed by a DAO. Our governance token is called MLD (Machine Learning Data). It will have a maximum supply of 10,000,000. 


### Staking

Obtaining this token and staking it in the platform entitles the staker to a share of our platform’s revenue, proportional to their stake vs the global staked amount. 

**Note: we need to check if this is legally possible**

Specifically, the proportion of platform revenue allocated to stakers is 50%.

Stakers are also rewarded through higher participation probabilities:



* Verifiers with holdings exceeding 500 MLD for longer than 90 days stand a higher chance of being chosen to verify a dataset.
    * This will be implemented via a verifier “credibility” score shown next to a verifier’s profile id. The score will incorporate a number of factors such as no. of previous successful verifications, amount and duration of staked MLD, etc.


## Treasury

All fees earned by the platform - denominated in USDC - will go into the platform treasury, governed by the DAO.

At certain times, the DAO may, at its discretion, vote to use a portion of treasury funds to buy and burn a percentage of the MLD circulating supply from the market to increase scarcity and further drive value to the token.


## Tokenomics

Note that MLD will only be obtainable via the token sale and subsequently through exchanges. 


### Distribution


<table>
  <tr>
   <td><strong>Total supply</strong>
   </td>
   <td><p style="text-align: right">
10,000,000</p>

   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong><em>Vesting (months):</em></strong>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Lock-up period</strong>
   </td>
   <td><p style="text-align: right">
12</p>

   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Vesting duration</strong>
   </td>
   <td><p style="text-align: right">
48</p>

   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong><em>Allocations:</em></strong>
   </td>
   <td><p style="text-align: right">
<strong><em>%</em></strong></p>

   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>DEX liquidity</strong>
   </td>
   <td><p style="text-align: right">
5</p>

   </td>
   <td><p style="text-align: right">
500,000</p>

   </td>
  </tr>
  <tr>
   <td><strong>Founders</strong>
   </td>
   <td><p style="text-align: right">
15</p>

   </td>
   <td><p style="text-align: right">
1,500,000</p>

   </td>
  </tr>
  <tr>
   <td><strong>Employee pool</strong>
   </td>
   <td><p style="text-align: right">
15</p>

   </td>
   <td><p style="text-align: right">
1,500,000</p>

   </td>
  </tr>
  <tr>
   <td><strong>Investors</strong>
   </td>
   <td><p style="text-align: right">
10</p>

   </td>
   <td><p style="text-align: right">
1,000,000</p>

   </td>
  </tr>
  <tr>
   <td><strong>Advisors</strong>
   </td>
   <td><p style="text-align: right">
5</p>

   </td>
   <td><p style="text-align: right">
500,000</p>

   </td>
  </tr>
  <tr>
   <td><strong>Launch partners</strong>
   </td>
   <td><p style="text-align: right">
10</p>

   </td>
   <td><p style="text-align: right">
1,000,000</p>

   </td>
  </tr>
  <tr>
   <td><strong>Treasury</strong>
   </td>
   <td><p style="text-align: right">
40</p>

   </td>
   <td><p style="text-align: right">
2,000,000</p>

   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><p style="text-align: right">
100</p>

   </td>
   <td><p style="text-align: right">
10,000,000</p>

   </td>
  </tr>
</table>



# Data


## Licensing

All data will be under a [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/4.0/) license.


## Architecture

To optimize for data availability while controlling costs, datasets will be stored centrally on commercial cloud-hosting services. We will utilize serverless functions (e.g., Cloudflare Workers) to ensure low-latency access from around the globe.

Storage will be in a data lake / warehouse??

When uploading data, suppliers are required to provide rich meta data which makes data search easy


## Quality control

Ensuring high-quality data or providing sufficient tooling for data quality measures is critical for the success of our platform. To achieve this, we will implement the following measures for data quality control:


### Automated Quality Control

Our platform will provide automated tools and plugins to measure data completeness and validity. Automated quality control measures include:



* **Completeness**: Check for missing, duplications, outliers, or null values 
* **Validity**: Check for formatting errors, such as inconsistent data types or invalid characters
* **Impact:** we need a way to measure the impact of the data, especially for step 4. One potential way is to randomly select certain ML models and measure improved model performance

These automated quality control measures will all be enforced by default, be made public to all participants beforehand, and flag any data that falls below a certain threshold. Curators can reduce or demand additional automated checks to be done, suppliers will be required to correct or provide explanations for flagged data.


### Curator / Verifier Review

The peer review process will involve a team of subject matter experts who will evaluate the data based on criteria that were made public when requesting the data. Examples:



* **Relevance**: The data is relevant to the research question or use case.
* **Completeness**: The data is comprehensive and includes all relevant information.
* **Accuracy**: The data is accurate and verified through external sources, if necessary.
* **Consistency**: The data is consistent and contains no obvious discrepancies.
* **Validity**: The data is valid and meets any required formatting standards.

The review will be conducted on the full data set, which will be made available through our platform dashboard interface but not through our API. Because data will not be downloadable via our API until it has been finalized, we will provide a system whereby stakeholders can develop and upload additional tooling for data verification within our online interface. This will give stakeholders the flexibility they need to run custom heuristics against the dataset for validity purposes, while at the same time enhancing the overall value of our ecosystem thanks to new and improved tooling.


### Versioning

We will implement version control for datasets. Specifically, there will be per-row version control. This will enable all parties who modify and curate dataset rows to track changes and rollback if necessary. 

In addition, we will enable per-dataset change tracking. Once some rows have been modified and signed off as final, the system will increment the overall dataset version. This enables consumers to know when a newer version of the dataset is available as well make sure that the version they’re currently using doesn’t change due to new data.


### Subset Tagging

We will allow for subsets of a dataset to be tagged with arbitrary labels. Such tagged subsets will then be fetchable via the API. This will allow users to train models on subsets of a dataset that may have particular properties that are useful to them.

Tagging will usually be done by curators, suppliers, and verifiers on a row-by-row basis. Batch tagging of a selection of rows will also be possible.



# FAQ


## Why DAO? 

Decentralized Autonomous Organizations (DAOs) ensure that no single entity or person can make unilateral decisions about the use of data. This helps prevent data isolation and ensures that decision-making power is distributed among the community, promoting transparency and accountability.


## Why crypto? 

Cryptocurrency incentivizes global participation by providing fast and easy off-ramps for payments. This promotes a decentralized economy where anyone can contribute to the data ecosystem and be rewarded for their efforts.


## Why centralized storage? 

While we strive for decentralization in decision-making, centralized storage provides the necessary infrastructure to make data accessible and usable, and cost-manageable for everyone.


