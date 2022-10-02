import type { NextPage } from 'next'
import { ReactNode } from 'react'

import Countdown from 'react-countdown'

type RegisterCountdownProps = {
  children: ReactNode
}

const RegisterCountdown: NextPage<RegisterCountdownProps> = ({ children }) => (
  <Countdown
    className="text-white"
    date={ new Date(2022, 9, 15, 0, 0, 0)}
    renderer={(x) => {
      if (x.completed)
        return <div className="text-white italic">Event is ongoing!</div>
      else {
        return (
          <>
            {children}
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
)

export default RegisterCountdown
