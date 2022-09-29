import type { NextPage } from 'next'
import Head from 'next/head'

import { FaAward, FaBitcoin, FaMedal, FaTrophy } from 'react-icons/fa'
import { BiMedal } from 'react-icons/bi'
import { AiFillTrophy } from 'react-icons/ai'
import { SiDevpost } from 'react-icons/si'

import RegisterCountdown from '../components/countdown'
import Prize from '../components/home/prize'
import Footer from '../components/footer'
import Link from 'next/link'

const Genesis: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Genesis | MoneyHacks - First Bitcoin-Only Hackathon in India
        </title>
        <meta
          name="description"
          content="India's first Bitcoin-Only Hackathon held virtually with it's genesis block getting mined on 15th September"
        />
        <link rel="preload" as="image" href="/btc-banner.webp" />
        <meta name="og:image" content="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black h-screen">
        <div className="w-screen font-mono max-h-screen overflow-y-scroll px-1 sm:px-0">
          <div className="flex flex-col items-center">
            <div className="max-w-xl">
              <nav className="self-start mt-4 mx-2 flex justify-between items-center">
                <div>
                  <Link href="/">
                    <h1 className="text-3xl text-green-400 font-medium cursor-pointer">
                      MoneyHacks.
                    </h1>
                  </Link>
                  <h2 className="text-2xl text-green-300 font-medium mt-2">
                    /Genesis
                  </h2>
                </div>
                <div className="text-green-400 text-5xl mr-4 self-start">
                  <FaBitcoin />
                </div>
              </nav>
              <main className="mx-2 text-white">
                <h3 className="mt-6 text-xl text-green-400">
                  What is the hackathon about?
                </h3>
                <p className="mt-2">
                  MoneyHacks is an initiative put forward by Indian Bitcoin developers, to gather the
                  momentum of Bitcoin and Lightning development among young Indians. Bitcoin and its related
                  applications have been transforming fundamentals of the world's financial systems for 13 years and counting.
                  While a lot of hype and excitement have been portrayed over "crypto" and "web3" projects in India, the
                  Bitcoin ecosystem is still nascent and predominantly considered as obsolete technology. Which cannot be further
                  from the truth. Bitcoin is breaking grounds of extreme decentralization, while Lightning, a Layer 2 protocol on top of
                  it, producing previously unimaginable application with instant low fee transactions of magic internet money.
                </p>
                <h3 className="mt-6 text-xl text-green-400">Registration</h3>
                <p className="mt-2">
                  Indian Bitcoin devs are determined to change this scene and make India a prominent hub of Bitcoin and LN
                  FOSS technologies in the world stage. We have the knowledge, we have the numbers, we have fire, all we need is a stage.

                  Enters MoneyHacks. An Online periodic hackathon organized to not only just build things, but to also educate curious minds
                  on the topics of Bitcoin and LN. The Hacks will contain both in depth problem solving in Bitcoin protocol layers, as well as
                  fun and innovative application ideas with LN. The outcome is only limited by our imagination. And MoneyHacks is intended to be
                  the platform where we let our imaginations run wild.

                  We are fixing the clown world one line of code at a time. Come Join Us!
                </p>
                <RegisterCountdown>
                  <a className="btn mt-4 text-lg font-bold shadow bg-gray-600 hover:bg-gray-500 px-5 py-2">
                    <SiDevpost />
                    <span>Register on Devpost</span>
                  </a>
                </RegisterCountdown>
                <h3 className="mt-6 text-xl text-green-400">Topics/Ideas</h3>
                <ul className="mt-2 list-disc">
                  <li>Topic 1</li>
                  Bitcoin Web App:
                  Build a basic web based Bitcoin Wallet application that can receive and send transactions.

                  The first hackathon project is intended to be the most simplest Bitcoin application imaginable.
                  Its a web wallet. All it needs to do is operate and maintain Bitcoin transactions and interface
                  with the user. The goal is to learn about basic Bitcoin machineries, mnemonics, public-private key pairs, transaction structures,
                  interacting with the Bitcoin network.

                  Judging Criteria:
                  The projects will be judged by the following generic parameters. Its important to note that there is no
                  one right way to do a Bitcoin Wallet. The project will be judged on the approach and design decisions
                  taken by the developer. Below are few pointers (not exhaustive) over which judgement will be made.
                   - UI/UX : The layout of the wallet, and its user workflow.
                   - Security: How keypairs are stored and accessed by the app.
                   - Features: Functionalities offered by the wallet app.

                  Qualifying Criteria:
                  The Project will be considered qualified if it can perform the following tasks.
                   - Generate mnemonic seed phrase for use at wallet startup.
                   - Create new addresses for receiving funds.
                   - Create Transaction to send funds to a given address and broadcast it to the network.
                   - Sync with the network and show updated balance.
                  If a project does not satisfy the above 4 basic operations, it won't be considered qualified.

                  Bonus Criteria:
                  Above the basic feature extra points will be alloted for the following advanced but optional features.
                   - Create OP_RETURN transactions.
                   - Create Multisig transactions and sign PSBTs by multiple participants.
                   - Sign random messages with the wallet.

                  To perform this tasks participants can take help of any available Bitcoin libraries out there.
                  Few popular libraries are listed below, but participants are free to choose their own, or even write
                  basic operational codes by themselves.
                   - Bitcoinjs : https://github.com/bitcoinjs/bitcoinjs-lib
                   - BCoin : https://github.com/bcoin-org/bcoin
                   - Python Bitcoinlib : https://github.com/petertodd/python-bitcoinlib
                   - BDK: https://github.com/bitcoindevkit/bdk

                  <li>Topic 2</li>
                  <li>Topic 3</li>
                  <li>Topic 4</li>
                  <li>Topic 5</li>
                  <li>Topic 6</li>
                </ul>
                <h3 className="mt-6 text-xl text-green-400">
                  When is it happening?
                </h3>
                <p className="mt-2">
                  The first Hackathon event will happen on 15th-16th of October.
                </p>
                <section className="mt-6 mb-4">
                  <h2 className="text-xl text-green-400 font-medium uppercase">
                    Prizes
                  </h2>
                  <div className="mt-4 grid grid-rows-2 grid-cols-2 gap-2">
                    <Prize icon={<FaTrophy />} name="Overall First">
                      First Overall prize will be given to a project that
                      outstands all other submissions
                    </Prize>
                    <Prize icon={<FaMedal />} name="Overall Second">
                      Second Overall prize will be given to the second best
                      project of the hackathon
                    </Prize>
                    <Prize icon={<BiMedal />} name="Overall Third">
                      Best third overall project of the hackathon will win some
                      awesome prizes
                    </Prize>
                    <Prize icon={<FaAward />} name="Best Solo">
                      You project will qualify for this prize if you participate
                      alone without a team
                    </Prize>
                    <Prize icon={<AiFillTrophy />} name="Best Beginner">
                      Your project will qualify for this category if atleast 50%
                      of your topic is functional and you&apos;re starting out
                    </Prize>
                  </div>
                </section>
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Genesis
