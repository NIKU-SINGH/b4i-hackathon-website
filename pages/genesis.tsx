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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                  maiores nisi nemo et. Beatae molestias harum itaque
                  voluptatem. Earum ipsam soluta officia, in corporis
                  consectetur iste officiis. Dolor, sit recusandae.
                </p>
                <h3 className="mt-6 text-xl text-green-400">Registration</h3>
                <p className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                  maiores nisi nemo et. Beatae molestias harum itaque
                  voluptatem. Earum ipsam soluta officia, in corporis
                  consectetur iste officiis. Dolor, sit recusandae.
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                  maiores nisi nemo et. Beatae molestias harum itaque
                  voluptatem. Earum ipsam soluta officia, in corporis
                  consectetur iste officiis. Dolor, sit recusandae.
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
