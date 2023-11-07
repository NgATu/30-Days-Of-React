const ColorBlock = () => {
  const getRandomHexColor = () => {
    const hex = Math.floor(Math.random() * 0xffffff);
    return `#${hex.toString(16)}`;
  };

  const hex = getRandomHexColor();

  return <div className={`w-full p-4 bg-[${hex}]`}>{hex}</div>;
};

export default ColorBlock;
