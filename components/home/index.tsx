import type { NextPage } from 'next'
import { useState } from 'react'

import Countdown from 'react-countdown'
import Typed from 'react-typed'

import {
  FaAward,
  FaBitcoin,
  FaDiscord,
  FaMedal,
  FaTrophy,
} from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'
import { BiMedal } from 'react-icons/bi'
import { AiFillTrophy } from 'react-icons/ai'

import Button from '../button'
import Accordion from './accordion'
import Prize from './prize'
import Sponsor from './sponsor'

const Home: NextPage = () => {
  const [faq, setFaq] = useState<number>(-1)
  const headlines = ['Design.', 'Develop.', 'Code.', 'Ideate.', 'Bitcoin.']

  return (
    <div className="w-screen overflow-hidden font-mono max-h-screen overflow-y-scroll pb-6">
      <div className="flex flex-col items-center">
        <div className="max-w-xl">
          <nav className="self-start mt-4 mx-2 flex justify-between items-center">
            <h1 className="text-3xl text-green-400 font-medium">MoneyHacks.</h1>
            <div className="text-green-400 text-5xl mr-4">
              <FaBitcoin />
            </div>
          </nav>
          <main className="mt-2">
            <h2 className="text-xl text-green-500 font-medium mx-2">
              <Typed
                strings={headlines}
                typeSpeed={40}
                backSpeed={60}
                loop
              ></Typed>
            </h2>
            <h3 className="text-gray-300 mx-2 mt-4 text-sm">
              First ever{' '}
              <span className="font-semibold">&quot;Bitcoin-Only&quot;</span>{' '}
              Hackathon at India.
            </h3>
            <picture>
              <img className="mt-10" src="/btc-banner.webp" alt="Bitcoin Banner" />
            </picture>
            <p className="mt-10 text-gray-300 mx-2 text-md">
              Are you hyped up for Bitcoin for all of its magic, while your
              parents and friends never seem to get it, and find yourself as a
              lone <i>*psychopath*</i> in this clown world??
            </p>
            <p className="mt-4 text-gray-300 mx-2 text-md">The wait is over!</p>
            <p className="mt-4 text-gray-300 mx-2 text-md">
              Join us on{' '}
              <span className="text-green-300 font-bold">
                **15th September 2022**
              </span>{' '}
              with participants from all accross the nation for a week of
              creation, innovation and talks about money.
            </p>
            <p className="mx-2 mt-4">
              <Countdown
                className="text-white"
                date={new Date(2022, 8, 15, 0, 0, 0)}
                renderer={(x) => {
                  if (x.completed) return <>Event is running!</>
                  else {
                    return (
                      <>
                        <Button className="mt-4 text-lg font-bold shadow bg-gray-600 hover:bg-gray-500 px-5 py-2">
                          <SiDevpost />
                          <span>Register on Devpost</span>
                        </Button>
                        <div className="mt-2 text-xs text-gray-400">
                          <span>^ </span>
                          {x.days != 0 && <span>{x.days} days </span>}
                          {x.hours != 0 && <span>{x.hours} hours </span>}
                          {x.minutes != 0 && <span>{x.minutes} minutes </span>}
                          {x.seconds != 0 && <span>{x.seconds} seconds</span>}
                          <span> left</span>
                        </div>
                      </>
                    )
                  }
                }}
              />
            </p>
            <br />
            <Button className="mx-2 normal-case font-bold px-4 bg-blue-600 hover:bg-blue-500">
              <FaDiscord />
              <span>Join Discord</span>
            </Button>
          </main>
          <section className="mt-10">
            <h2 className="text-xl text-green-400 font-medium mx-2">
              What is MoneyHacks all about?
            </h2>
            <p className="mt-4 text-gray-300 mx-2 text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, aspernatur, dolores repudiandae enim recusandae maxime
              molestiae ex officia saepe adipisci id sequi sit quos vitae earum
              harum blanditiis neque aliquid!
            </p>
            <p className="mt-4 text-gray-300 mx-2 text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, aspernatur, dolores repudiandae enim recusandae maxime
              molestiae ex officia saepe adipisci id sequi sit quos vitae earum
              harum blanditiis neque aliquid!
            </p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl text-green-400 font-medium mx-2">FAQs</h2>
            <div className="mt-4 mx-2 flex flex-col justify-center">
              <Accordion
                idx={0}
                expandedIdx={faq}
                setExpandedIdx={setFaq}
                title="Question 1"
              >
                Answer 1
              </Accordion>
              <Accordion
                idx={1}
                expandedIdx={faq}
                setExpandedIdx={setFaq}
                title="Question 2"
              >
                Answer 2
              </Accordion>
              <Accordion
                idx={2}
                expandedIdx={faq}
                setExpandedIdx={setFaq}
                title="Question 3"
              >
                Answer 3
              </Accordion>
              <Accordion
                idx={3}
                expandedIdx={faq}
                setExpandedIdx={setFaq}
                title="Question 4"
              >
                Answer 4
              </Accordion>
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-xl text-green-400 font-medium mx-2 uppercase">
              Prizes
            </h2>
            <div className="mt-4 mx-2 grid grid-rows-2 grid-cols-2 gap-2">
              <Prize icon={<FaTrophy />} name="Overall First">
                First Overall prize will be given to a project that outstands
                all other submissions
              </Prize>
              <Prize icon={<FaMedal />} name="Overall Second">
                Second Overall prize will be given to the second best project of
                the hackathon
              </Prize>
              <Prize icon={<BiMedal />} name="Overall Third">
                Best third overall project of the hackathon will win some
                awesome prizes
              </Prize>
              <Prize icon={<FaAward />} name="Best Solo">
                You project will qualify for this prize if you participate alone
                without a team
              </Prize>
              <Prize icon={<AiFillTrophy />} name="Best Beginner">
                Your project will qualify for this category if atleast 50% of
                your topic is functional and you&apos;re starting out
              </Prize>
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-xl text-green-400 font-medium mx-2 uppercase">
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
                logo="/sponsors/bdk.png"
                name="BitcoinDevKit"
                link="https://bitcoindevkit.org/"
              >
                With BDK, you seamlessly build cross platform mobile wallets.
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
              <Sponsor
                logo="/sponsors/ldk.jpg"
                name="LightningDevKit"
                link="https://lightningdevkit.org/"
              >
                Simplest way to integrate Lightning into your Bitcoin wallet.
              </Sponsor>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
