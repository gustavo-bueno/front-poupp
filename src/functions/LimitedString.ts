const LimitedString = (string: string, stringLenght: number) => {
  if (string.length > 25) {
    let finalString = "";

    string
      .split("")
      .slice(0, stringLenght)
      .map((letter) => (finalString = finalString + letter));

    return finalString+"...";
  } else {
    return string;
  }
};

export default LimitedString;
