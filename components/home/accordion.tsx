import type { NextPage } from 'next'
import type { Dispatch, ReactNode, SetStateAction } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

type AccordionProps = {
  idx: number
  expandedIdx: number
  setExpandedIdx: Dispatch<SetStateAction<number>>
  title: string
  children: ReactNode
}

const Accordion: NextPage<AccordionProps> = ({
  idx,
  expandedIdx,
  setExpandedIdx,
  title,
  children,
}) => {
  const isOpen = idx === expandedIdx

  return (
    <>
      <motion.header
        initial={false}
        className="mt-2 bg-gray-700 text-white px-2 cursor-pointer rounded flex items-center justify-between"
        onClick={() => setExpandedIdx(isOpen ? -1 : idx)}
      >
        <span>{title}</span>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className="px-2 bg-white rounded"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.99]}}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export default Accordion
