const ParamMapping = (param) => {
  if (param === "TOP") {
    return 1;
  } else if (param === "Showbiz") {
    return 9;
  } else if (param === "Life") {
    return 10;
  } else if (param === "News") {
    return 13;
  } else if (param === "Intermezzo") {
    return 14;
  } else if (param === "Videos") {
    return 15;
  } else if (param === "Sports") {
    return 16;
  } else if (param === "Sci-Tech") {
    return 17;
  } else if (param === "English") {
    return 18;
  }
};

export default ParamMapping;
