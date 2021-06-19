import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPlus(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 50 50" ref={svgRef} {...props}>
      <Path
        fillRule="evenodd"
        d="M27.5 0v22.5H50v5H27.5V50h-5V27.5H0v-5h22.5V0h5z"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPlus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
