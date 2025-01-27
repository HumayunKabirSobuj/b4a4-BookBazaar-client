declare namespace JSX {
    interface IntrinsicElements {
      'lottie-player': {
        autoplay?: boolean;
        controls?: boolean;
        loop?: boolean;
        mode?: string;
        src?: string;
        style?: React.CSSProperties;
      } & React.HTMLAttributes<HTMLElement>;
    }
  }
  