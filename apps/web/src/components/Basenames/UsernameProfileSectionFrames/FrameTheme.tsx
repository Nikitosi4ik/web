import type { FrameUIComponents, FrameUITheme } from '@frames.js/render/ui';
import Image from 'next/image';
import BaseLoading from './base-loading.gif';
import classNames from 'classnames';

type StylingProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const theme: FrameUITheme<StylingProps> = {
  Error: {
    className:
      'flex flex-col rounded-lg overflow-hidden bg-transparent relative items-center justify-center opacity-50',
  },
  Root: {
    className: 'flex flex-col rounded-lg overflow-hidden bg-transparent relative',
  },
  ButtonsContainer: {
    className:
      'text-xs sm:text-sm flex sm:py-3 py-2 sm:px-7 px-2 justify-around bg-[#F3F3F3] gap-2 sm:gap-4',
  },
  Button: {
    className:
      'grow py-4 rounded-lg bg-white border border-[#CFD0D2] transition-colors hover:bg-state-b-hovered',
  },
  ImageContainer: {
    className: 'flex w-full h-full border-0 overflow-hidden',
    style: {
      aspectRatio: 'var(--frame-image-aspect-ratio)',
    },
  },
  TextInputContainer: {
    className: 'flex flex-row items-center justify-around gap-2 w-full',
  },
  TextInput: {
    className: 'w-full outline-0 focus:outline-0',
  },
};

export const components: FrameUIComponents<StylingProps> = {
  LoadingScreen: (props) => {
    return (
      <Image
        src={BaseLoading}
        alt=""
        width={22}
        height={22}
        className={classNames({
          // eslint-disable-next-line react/prop-types
          hidden: props.frameState.status !== 'loading',
        })}
      />
    );
  },
  Image: (props) => {
    // @ts-expect-error asdf
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @next/next/no-img-element, react/prop-types
    return <img src={props.src} {...props} alt="" />;
  },
};