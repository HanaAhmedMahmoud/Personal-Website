export const RenderDot = (props: DotsItem) => {
  if (props.isActive) {
    return <div className={'mx-2 h-5 w-5 rounded-full bg-[#43005E]'} />;
  }
  return (
    <div
      className={
        'mx-2 h-5 w-5  bg-[#43005E] opacity-25 rounded-full hover:bg-sh-l-r'
      }
    />
  );
};

export declare type DotsItem = {
  isActive: boolean;
  activeIndex: number;
};
