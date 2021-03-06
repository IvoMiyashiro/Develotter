import { MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';

import { Anchor, Button } from './styles';

interface IProps {
  children: ReactNode,
  type?: 'button' | 'link'
  outline?: boolean
  textColor: string
  color: string
  href?: string
  isDisabled?: boolean
  action?: 'submit' | 'reset' | 'button'
  onClick?: MouseEventHandler<HTMLButtonElement>
  hover?: string
}

export const ButtonPrimary = ({
  children,
  isDisabled,
  type = 'button',
  href,
  color,
  textColor,
  outline = false,
  action = 'submit',
  onClick,
  hover = ''
}: IProps) => {

  return (
    <>
      {
        type === 'button'
          ? (
            <Button
              outline={outline}
              disabled={isDisabled}
              type={action}
              color={color}
              textColor={textColor}
              onClick={onClick}
              hover={hover}
            >
              { children }
            </Button>
          )
          : (
            <Link
              href={href as string}
              passHref
            >
              <Anchor
                outline={outline}
                color={color}
                textColor={textColor}
                hover={hover}
              >
                {children}
              </Anchor>
            </Link>
          )
      }
    </>
  );
};
