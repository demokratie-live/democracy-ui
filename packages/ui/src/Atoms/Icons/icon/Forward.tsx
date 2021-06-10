import * as React from 'react';
import Svg, { SvgProps, Defs, Path, Use } from 'react-native-svg';

function SvgForward(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 50 50" ref={svgRef} {...props}>
      <Defs>
        <Path
          id="forward_svg__a"
          d="M19.654 39c.433 0 .828-.098 1.184-.294.357-.195.64-.477.848-.845.21-.369.314-.764.314-1.187 0-.642-.24-1.206-.72-1.691L5.599 19.5l15.68-15.483c.48-.485.721-1.049.721-1.691 0-.439-.105-.838-.314-1.198a2.18 2.18 0 00-.848-.834A2.419 2.419 0 0019.654 0c-.65 0-1.2.22-1.65.658L.767 17.738a2.2 2.2 0 00-.593.81c-.116.29-.174.607-.174.952s.058.662.174.952c.116.29.314.56.593.81l17.237 17.08c.45.439 1 .658 1.65.658z"
        />
      </Defs>
      <Use
        fill={props.color}
        fillRule="nonzero"
        transform="matrix(-1 0 0 1 36 6)"
        xlinkHref="#forward_svg__a"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgForward);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
