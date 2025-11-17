/* eslint-disable react/prop-types */
import React from "react";

const toColorStyles = color => {
  const cleanedColor =
    typeof color === "string" ? color.toLowerCase().trim() : color;
  switch (cleanedColor) {
    case "maroon": {
      return {
        backgroundColor: "#8C1D40",
        color: "#ffffff",
      };
    }
    case "maroon_monsoon": {
      return {
        backgroundColor: "#8C1D40",
        color: "#ffffff",
      };
    }
    case "gold": {
      return {
        backgroundColor: "#FFC628",
      };
    }
    case "gold_out": {
      return {
        backgroundColor: "#FFC628",
      };
    }
    case "goldout": {
      return {
        backgroundColor: "#FFC628",
      };
    }
    case "black": {
      return {
        backgroundColor: "#000000",
        color: "#ffffff",
      };
    }
    case "blackout": {
      return {
        backgroundColor: "#000000",
        color: "#ffffff",
      };
    }
    case "black_out": {
      return {
        backgroundColor: "#000000",
        color: "#ffffff",
      };
    }
    case "pink": {
      return {
        backgroundColor: "#E74973",
        color: "#FAFAFA",
      };
    }
    case "white": {
      return {
        backgroundColor: "#ffffff",
        color: "#000000",
      };
    }
    case "whiteout": {
      return {
        backgroundColor: "#ffffff",
        color: "#000000",
      };
    }
    case "white_out": {
      return {
        backgroundColor: "#ffffff",
        color: "#000000",
      };
    }

    default: {
      return {};
    }
  }
};

export const Chip = (
  /**
   * @type {{chip: import("../../../Game/game").Link}}
   */
  { chip }
) => {
  return (
    <div
      style={{
        color: "#484848",
        fontSize: "12px",
        fontWeight: "bold",
        ...toColorStyles(chip.color),
      }}
    >
      <span
        style={{
          display: "inline",
          backgroundColor: "#d0d0d0",
          boxDecorationBreak: "clone",
          webkitBoxDecorationBreak: "clone",
          padding: "2.5px 6px",
          ...toColorStyles(chip.color),
        }}
        dangerouslySetInnerHTML={{
          __html: chip.label,
        }}
      />
    </div>
  );
};
