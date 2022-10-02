import type { NextPage } from 'next'
import { useState } from 'react'
import Typed from 'react-typed'

import {
  FaAward,
  FaBitcoin,
  FaDiscord,
  FaGithub,
  FaMedal,
  FaTrophy,
  FaTwitter,
} from 'react-icons/fa'
import { BiMedal } from 'react-icons/bi'
import { AiFillTrophy, AiFillDownCircle, AiFillUpCircle } from 'react-icons/ai'
import { SiDevpost } from 'react-icons/si'


import Button from '../button'
import Accordion from './accordion'
import Prize from './prize'
import Sponsor from './sponsor'
import Profile from './profile'
import Link from 'next/link'
import RegisterCountdown from '../countdown'
import Footer from '../footer'

const Home: NextPage = () => {
  const [faq, setFaq] = useState<number>(-1)
  const headlines = ['Design.', 'Develop.', 'Code.', 'Ideate.', 'Bitcoin.']
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className="w-screen font-mono max-h-screen overflow-y-scroll px-1 sm:px-0">
      <div className="flex flex-col items-center">
        <div className="max-w-xl">
          <nav className="self-start mt-4 mx-2 flex justify-between items-center">
            <h1 className="text-3xl text-orange-400 font-medium">MoneyHacks.</h1>
            <div className="text-orange-400 text-5xl mr-4">
              <FaBitcoin />
            </div>
          </nav>
          <main className="mt-2">
            <h2 className="text-xl text-orange-500 font-medium mx-2">
              <Typed
                strings={headlines}
                typeSpeed={40}
                backSpeed={60}
                loop
              ></Typed>
            </h2>
            <h3 className="text-gray-300 mx-2 mt-4 text-sm">
              First ever{' '}
              <span className="font-semibold">Bitcoin-Only</span>{' '}
              Hackathon at India.
            </h3>
            <picture>
              <img
                className="mt-10"
                src="/btc-banner.webp"
                alt="Bitcoin Banner"
              />
            </picture>
            <p className="mt-10 text-gray-300 mx-2 text-md">
              Are you hyped up for Bitcoin for all of its magic, while your
              parents and friends never seem to get it, and find yourself as a
              lone <i>*psychopath*</i> in this clown world??
            </p>
            <p className="mt-4 text-gray-300 mx-2 text-md">The wait is over!</p>
            <p className="mt-4 text-gray-300 mx-2 text-md">
              Join us on{' '}
              <span className="text-orange-300 font-bold">
                **15th September 2022**
              </span>{' '}
              with participants from all accross the nation for a week of
              creation, innovation and talks about money.
            </p>
            <p className="mx-2 mt-4">
              {/* <RegisterCountdown /> */}
              <Link href="/genesis">
                <span className="hidden btn mt-4 text-lg font-bold shadow bg-gray-600 hover:bg-gray-500 px-5 py-2">
                  Register Now!
                </span>
              </Link>
              {/* </RegisterCountdown> */}
            </p>
            <br />
            <Button className="mx-2 normal-case font-bold px-4 bg-blue-600 hover:bg-blue-500">
              <FaDiscord />
              <Link href="https://discord.gg/VVsQM2jk">
                <span>Join Discord</span>
              </Link>
            </Button>
          </main>
          <section className="mt-10">
            <h2 className="text-xl text-orange-400 font-medium mx-2">
              What is MoneyHacks all about?
            </h2>
            <p className="mt-4 text-gray-300 mx-2 text-md">
              MoneyHacks is an initiative put forward by Indian Bitcoin developers, to gather the
              momentum of Bitcoin and Lightning development among young Indians. Bitcoin and its related
              applications have been transforming fundamentals of the world's financial systems for 13 years and counting.
              While a lot of hype and excitement have been portrayed over "crypto" and "web3" projects in India, the
              Bitcoin ecosystem is still nascent and predominantly considered as obsolete technology. Which cannot be further
              from the truth. Bitcoin is breaking grounds of extreme decentralization, while Lightning, a Layer 2 protocol on top of
              it, producing previously unimaginable application with instant low fee transactions of magic internet money.
            </p>
            <p className="mt-4 text-gray-300 mx-2 text-md">
              Indian Bitcoin devs are determined to change this scene and make India a prominent hub of Bitcoin and LN
              FOSS technologies in the world stage. We have the knowledge, we have the numbers, we have fire, all we need is a stage.

              Enters MoneyHacks. An Online periodic hackathon organized to not only just build things, but to also educate curious minds
              on the topics of Bitcoin and LN. The Hacks will contain both in depth problem solving in Bitcoin protocol layers, as well as
              fun and innovative application ideas with LN. The outcome is only limited by our imagination. And MoneyHacks is intended to be
              the platform where we let our imaginations run wild.

              We are fixing the clown world one line of code at a time. Come Join Us!
            </p>
            <h3 className="mt-6 text-xl text-orange-400">Hackathon Events</h3>
            <ul className="mt-2 list-disc">
              <li className='mb-4' >
                <h1 className="font-bold text-xl text-orange-500">Hack 1</h1>

                <Accordion
                  idx={4}
                  expandedIdx={faq}
                  setExpandedIdx={setFaq}
                  title="
                  Bitcoin Web App:
                  Build a basic web based Bitcoin Wallet application that can receive and send transactions."
                >
                  <p>
                    The first hackathon project is intended to be the most simplest Bitcoin application imaginable.
                    Its a web wallet. All it needs to do is operate and maintain Bitcoin transactions and interface
                    with the user. The goal is to learn about basic Bitcoin machineries, mnemonics, public-private key pairs, transaction structures,
                    interacting with the Bitcoin network.
                  </p>

                  <h1 className='text-base font-bold mt-4 underline'>Judging Criteria</h1>
                  <p className=''>
                    The projects will be judged by the following generic parameters. Its important to note that there is no
                    one right way to do a Bitcoin Wallet. The project will be judged on the approach and design decisions
                    taken by the developer. Below are few pointers (not exhaustive) over which judgement will be made.
                    <ul className='list-disc ml-8'>
                      <li>UI/UX : The layout of the wallet, and its user workflow.</li>
                      <li>Security: How keypairs are stored and accessed by the app.</li>
                      <li>Features: Functionalities offered by the wallet app.</li>
                    </ul>
                  </p>

                  <h1 className='text-base font-bold mt-4 underline'> Qualifying Criteria</h1>
                  <p>
                    The Project will be considered qualified if it can perform the following tasks.
                    <ul className='list-disc ml-8'>
                      <li>Generate mnemonic seed phrase for use at wallet startup.</li>
                      <li>Create new addresses for receiving funds.</li>
                      <li>Create Transaction to send funds to a given address and broadcast it to the network.</li>
                      <li>Sync with the network and show updated balance.</li>
                    </ul>
                    If a project does not satisfy the above 4 basic operations, it won't be considered qualified.
                  </p>

                  <h1 className='text-base font-bold mt-4 underline'>Bonus Criteria</h1>
                  Above the basic feature extra points will be alloted for the following advanced but optional features.
                  <ul className='list-disc ml-8'>
                    <li>Create OP_RETURN transactions.</li>
                    <li>Create Multisig transactions and sign PSBTs by multiple participants.</li>
                    <li>Sign random messages with the wallet.</li>
                  </ul>

                  To perform this tasks participants can take help of any available Bitcoin libraries out there.
                  Few popular libraries are listed below, but participants are free to choose their own, or even write
                  basic operational codes by themselves.
                  <ul className='list-disc ml-8 underline text-orange-500'>
                    <li>
                      <Link href="https://github.com/bitcoinjs/bitcoinjs-lib">Bitcoinjs</Link>
                    </li>
                    <li>
                      <Link href="https://github.com/bcoin-org/">BCoin</Link>
                    </li>
                    <li>
                      <Link href="https://github.com/petertodd/python-bitcoinlib">Python Bitcoinlib</Link>
                    </li>
                    <li>  
                      <Link href="https://github.com/bitcoindevkit/bdk">BDK</Link>
                    </li>
                  </ul>


                </Accordion>
              </li>
            </ul>
            <RegisterCountdown>
              <a className="btn mt-4 text-lg font-bold shadow bg-gray-600 hover:bg-gray-500 px-5 py-2">
                <SiDevpost />
                <span>Register on bolt.fun</span>
              </a>
            </RegisterCountdown>
          </section>
          <section className="mt-10">
            <h2 className="text-xl text-orange-400 font-medium mx-2">FAQs</h2>
            <div className="mt-4 mx-2 flex flex-col justify-center">
              <Accordion
                idx={0}
                expandedIdx={faq}
                setExpandedIdx={setFaq}
                title="Who Can participate"
              >
                The Hackathon is open to all. Weather you are experienced developer or beginner starting your dev journey, Bitcoin needs you.
              </Accordion>
              <Accordion
                idx={1}
                expandedIdx={faq}
                setExpandedIdx={setFaq}
                title="Location"
              >
                This will be an online hackathon, and all the interactions will take place in the hackthon discord server.
              </Accordion>
              <Accordion
                idx={2}
                expandedIdx={faq}
                setExpandedIdx={setFaq}
                title="Duration"
              >
                The event will take place over a weekend. Friday evening the Event will be formally initiated with a introduction session
                Saturday Will be all day hack activity. Participants are encouraged to ask doubts and report their progression. Sunday evening
                will be the dead line for the project completion and the event will end with another online group session.
              </Accordion>
              <Accordion
                idx={3}
                expandedIdx={faq}
                setExpandedIdx={setFaq}
                title="Code of Conduct"
              >
                Bad behaviors and disrespect for other participants will result in immediate disqualification.
              </Accordion>
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-xl text-orange-400 font-medium mx-2 uppercase">
              Prizes
            </h2>
            <div className="mt-4 mx-2 grid grid-rows-2 grid-cols-2 gap-2">
              <Prize icon={<FaTrophy />} name="Grand Prize">
                2,000,000 sats. Free Ticket for Bitcoin4India Annual conference.
                Presentation slot at Technical Stage of Bitcoin4India Annual Conference.
              </Prize>
              <Prize icon={<FaMedal />} name="Overall Second">
                1,000,000 sats. Free Ticket for Bitcoin4India Annual conference.
              </Prize>
              <Prize icon={<BiMedal />} name="Overall Third">
                500,000 sats.
              </Prize>
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-xl text-orange-400 font-medium mx-2 uppercase">
              Sponsors
            </h2>
            <p className="mx-2 mt-2 text-white text-sm">
              We&apos;re looking for sponsors.
              <a
                href="mailto:b4itechnical@protonmail.com?subject=Sponsorship for MoneyHacks&body=Hi, I'm interested in sponsoring MoneyHacks. Would love to reach out."
                className="ml-2 text-blue-300 font-bold underline underline-offset-2 cursor-pointer"
              >
                Let&apos;s talk.
              </a>
            </p>
            <div className="mt-4 mx-2 flex flex-col space-y-4">
              <Sponsor
                logo="/sponsors/galoy.jpg"
                name="Galoy"
                link="https://galoy.io"
              >
                Connecting communities by creating circular Bitcoin Economy.
              </Sponsor>
              <Sponsor
                logo="/sponsors/hexa.png"
                name="Hexa Wallet"
                link="https://bitcoindevkit.org/"
              >
                A simple, secure, private, non-custodial Bitcoin wallet.
              </Sponsor>
              <Sponsor
                logo="/sponsors/gosats.jpeg"
                name="GoSats"
                link="https://bitcoindevkit.org/"
              >
                Earn Bitcoin when you shop.
              </Sponsor>
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-xl text-orange-400 font-medium mx-2 uppercase">
              team
            </h2>
            <p className="mx-2 mt-2 text-white text-sm">
              Interested in joining our team?
              <a
                href="mailto:b4itechnical@protonmail.com?subject=Interested to join team&body=Hi, I'm interested in joining MoneyHacks and volunteer my time there. Would love to know how I can help."
                className="ml-2 text-blue-300 font-bold underline underline-offset-2 cursor-pointer"
              >
                Hit us up!
              </a>
            </p>
            <div className="mt-4 mx-2 grid grid-cols-4 gap-4">
              <Profile
                name="Raj"
                photo="/team/rajarshimaitra.jpeg"
                twitter="rajarshimaitra"
              />
              <Profile
                name="Sandipan"
                photo="/team/sandipndev.jpeg"
                twitter="sandipndev"
              />
              <Profile
                name="Kartik"
                photo="/team/krtk6160.jpeg"
                twitter="krtk6160"
              />
              <Profile name="Parsh" photo="/team/parsh.jpeg" twitter="parsh" />
              <Profile
                name="Shreyan"
                photo="/team/shreyan.jpg"
                twitter="JoshiShreyan"
              />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
