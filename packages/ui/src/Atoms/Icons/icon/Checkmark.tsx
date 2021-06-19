import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCheckmark(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 50 50" ref={svgRef} {...props}>
      <Path
        fillRule="evenodd"
        d="M4.997 25.5l10.658 10.571L44.966 7l3.997 3.964L15.655 44 1 29.464z"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCheckmark);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
