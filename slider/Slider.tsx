import * as React from "react";
import { useState } from "react";
import {
  Slider,
  ISliderProps,
  ISliderStyleProps,
  ISliderStyles,
  IStyleFunctionOrObject,
} from "@fluentui/react";

export interface ISliderValueProps {
  minimumValue: number;
  maximumValue: number;
}

const greenStyles: IStyleFunctionOrObject<ISliderStyleProps, ISliderStyles> = {
  activeSection: {
    backgroundColor: "green",
  },
};

const redStyles: IStyleFunctionOrObject<ISliderStyleProps, ISliderStyles> = {
  activeSection: {
    backgroundColor: "red",
  },
};

export const SliderComponent = (props: ISliderValueProps): JSX.Element => {
  const [val, setVal] = useState(0);

  return (
    <Slider
      styles={val / props.maximumValue > 0.5 ? greenStyles : redStyles}
      min={props.minimumValue}
      max={props.maximumValue}
      value={val}
      onChange={e => {
        setVal(e);
      }}
      label={`My Slider Label ${val}`}
    />
  );
};
