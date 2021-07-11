const ParamMapping = (param) => {
  if (param === "TOP") {
    return 0;
  } else if (param === "Showbiz") {
    return 1;
  } else if (param === "News") {
    return 1;
  } else if (param === "Life") {
    return 3;
  } else if (param === "Regional") {
    return 4;
  } else if (param === "Intermezzo") {
    return 4;
  } else if (param === "Trending") {
    return 6;
  } else if (param === "Videos") {
    return 7;
  } else if (param === "Sci-Tech") {
    return 8;
  } else if (param === "Sports") {
    return 9;
  } else if (param === "Biz") {
    return 10;
  } else if (param === "Movie") {
    return 11;
  } else if (param === "Story") {
    return 12;
  } else if (param === "Hobbies") {
    return 13;
  } else if (param === "Otomotif") {
    return 14;
  } else if (param === "Parenting") {
    return 15;
  } else if (param === "Story") {
    return 12;
  } else if (param === "Corona di RI") {
    return 13;
  }
};

export default ParamMapping;
