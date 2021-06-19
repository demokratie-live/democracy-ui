import * as React from 'react';
import Svg, { SvgProps, Defs, Path, G, Mask, Use } from 'react-native-svg';

function SvgLens(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 50 50" ref={svgRef} {...props}>
      <Defs>
        <Path
          id="lens_svg__a"
          d="M31.887 35.011l15.142 14.891 2.726-2.975-14.84-14.824c6.086-7.823 5.991-19.476-1.025-26.493-7.614-7.616-20.118-7.458-27.928.354-7.81 7.81-7.968 20.317-.353 27.933 7.016 7.017 18.182 7.435 26.003 1.347l.275-.233zm-12.151.978c9.245 0 16.74-7.297 16.74-16.299 0-9.001-7.495-16.299-16.74-16.299-9.246 0-16.74 7.298-16.74 16.3 0 9.001 7.494 16.298 16.74 16.298z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd" transform="translate(.24 .138)">
        <Mask id="lens_svg__b" fill="#fff">
          <Use xlinkHref="#lens_svg__a" />
        </Mask>
        <Use fill={props.color} xlinkHref="#lens_svg__a" />
        <Path
          fillRule="nonzero"
          d="M-.24-.138h50.196v50.196H-.24z"
          mask="url(#lens_svg__b)"
        />
      </G>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgLens);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
