import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function SvgMinus(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 50 50" ref={svgRef} {...props}>
      <G fill={props.color} fillRule="evenodd">
        <Path d="M9 24h1v1H9z" />
        <Path d="M0 22h50v6H0z" />
      </G>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgMinus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
