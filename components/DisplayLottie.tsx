import React, { useEffect, useState } from 'react';

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [isClient, setIsClient] = useState(false);
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    import('react-lottie').then((module) => {
      setLottie(() => module.default);
    });
  }, []);

  if (!isClient || !Lottie) {
    return <div style={{ minHeight: '300px' }} />;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
