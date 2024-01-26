import React, { FC } from 'react'
import { GsapMagnetic } from '../GsapMagnetic/GsapMagnetic'
import clsx from 'clsx'

interface IProps {
  text: string
  colorType?: 'primary' | 'secondary'
  magnetic?: boolean
  link?: boolean
  url?: string
}

export const CircleButton: FC<IProps> = ({
  text,
  colorType = 'primary',
  magnetic = true,
  link = false,
  url = '',
}) => {
  return magnetic ? (
    <GsapMagnetic>
      {link ? (
        <a
          href={url}
          className={clsx(
            'button circle-arrow',
            colorType === 'secondary' && 'secondary-circle-arrow'
          )}
        >
          <div className="text">
            <span>{text}</span>
            <span>{text}</span>
          </div>
          <div className="arrow">
            <div className="icon">
              {colorType === 'secondary' ? (
                <>
                  <img src="/images/icons/button-black-arrow-left.svg" alt="" />
                  <img src="/images/icons/button-black-arrow-left.svg" alt="" />
                </>
              ) : (
                <>
                  <img src="/images/icons/button-white-arrow-left.svg" alt="" />
                  <img src="/images/icons/button-white-arrow-left.svg" alt="" />
                </>
              )}
            </div>
          </div>
        </a>
      ) : (
        <button
          className={clsx(
            'button circle-arrow',
            colorType === 'secondary' && 'secondary-circle-arrow'
          )}
        >
          <div className="text">
            <span>{text}</span>
            <span>{text}</span>
          </div>
          <div className="arrow">
            <div className="icon">
              {colorType === 'secondary' ? (
                <>
                  <img src="/images/icons/button-black-arrow-left.svg" alt="" />
                  <img src="/images/icons/button-black-arrow-left.svg" alt="" />
                </>
              ) : (
                <>
                  <img src="/images/icons/button-white-arrow-left.svg" alt="" />
                  <img src="/images/icons/button-white-arrow-left.svg" alt="" />
                </>
              )}
            </div>
          </div>
        </button>
      )}
    </GsapMagnetic>
  ) : (
    <>
      {link ? (
        <a
          href={url}
          className={clsx(
            'button circle-arrow',
            colorType === 'secondary' && 'secondary-circle-arrow'
          )}
        >
          <div className="text">
            <span>{text}</span>
            <span>{text}</span>
          </div>
          <div className="arrow">
            <div className="icon">
              {colorType === 'secondary' ? (
                <>
                  <img src="/images/icons/button-black-arrow-left.svg" alt="" />
                  <img src="/images/icons/button-black-arrow-left.svg" alt="" />
                </>
              ) : (
                <>
                  <img src="/images/icons/button-white-arrow-left.svg" alt="" />
                  <img src="/images/icons/button-white-arrow-left.svg" alt="" />
                </>
              )}
            </div>
          </div>
        </a>
      ) : (
        <button
          className={clsx(
            'button circle-arrow',
            colorType === 'secondary' && 'secondary-circle-arrow'
          )}
        >
          <div className="text">
            <span>{text}</span>
            <span>{text}</span>
          </div>
          <div className="arrow">
            <div className="icon">
              {colorType === 'secondary' ? (
                <>
                  <img src="/images/icons/button-black-arrow-left.svg" alt="" />
                  <img src="/images/icons/button-black-arrow-left.svg" alt="" />
                </>
              ) : (
                <>
                  <img src="/images/icons/button-white-arrow-left.svg" alt="" />
                  <img src="/images/icons/button-white-arrow-left.svg" alt="" />
                </>
              )}
            </div>
          </div>
        </button>
      )}
    </>
  )
}
