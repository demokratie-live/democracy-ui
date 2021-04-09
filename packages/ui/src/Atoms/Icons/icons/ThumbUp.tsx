import * as React from 'react';
import Svg, { SvgProps, Defs, Path, Use } from 'react-native-svg';

export interface ThumbUpProps extends SvgProps {
  color: string;
}

export const ThumbUp: React.FC<ThumbUpProps> = ({ color, ...props }) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 44 51" {...props}>
      <Defs>
        <Path
          d="M12.32 46.942c.775-.03 1.267-.05 1.78-.068 3.832-.133 6.231-.096 7.964.22 2.463.452 5.675.908 8.463 1.162 3.567.324 6.248.305 7.488-.108.852-.284 1.307-.74 1.51-1.345.15-.453.15-.966.054-1.447a2.764 2.764 0 00-.043-.184c-.133-.406.004-.805.323-1.018l.11-.077a10.54 10.54 0 001.296-1.097c.814-.813 1.286-1.6 1.286-2.212 0-.76-.16-1.397-.422-1.922a2.926 2.926 0 00-.272-.446c-.08-.1-.085-.104-.087-.107a.85.85 0 01.363-1.41c.147-.056.24-.098.341-.151.3-.157.6-.369.883-.642.643-.624 1.088-1.471 1.249-2.605.18-1.26-.127-2.107-.738-2.687a2.472 2.472 0 00-.701-.466c-1.034-.34-.658-1.834.372-1.66a.68.68 0 00.419-.11c.145-.095.277-.255.388-.516.16-.373.251-.902.251-1.604 0-.91-.405-1.451-1.328-1.86-.822-.366-1.733-.544-3.87-.826l-.38-.05c-1.796-.24-2.783-.425-3.757-.765-1.354-.473-2.32-1.187-2.855-2.259a.85.85 0 01-.09-.38c0-1.334.362-2.649 1.047-4.038.516-1.046 1.114-1.98 2.179-3.487l.572-.81c.215-.305.387-.552.546-.787.39-.573.693-1.055.943-1.507.572-1.033.853-1.892.853-2.674 0-1.843-.215-3.32-.585-4.306-.152-.404-.32-.698-.48-.868a.557.557 0 00-.13-.11c-.2.12-.47.438-.83 1.003-.17.266-.356.58-.604 1.011-.122.212-.605 1.064-.718 1.262a47.322 47.322 0 01-1.875 3.056 31.398 31.398 0 01-2.664 3.443 27.735 27.735 0 01-4.992 4.398c-.586.403-1.278 1.027-2.11 1.89-.659.683-1.277 1.371-2.418 2.675l-.114.13c-1.576 1.802-2.207 2.504-3.009 3.31-1.111 1.118-2.02 1.845-2.84 2.204-2.61 1.139-6.867 2.13-9.24 2.213a2.57 2.57 0 00-.069.235c-.116.478-.193 1.211-.224 2.146-.06 1.824.056 4.32.316 6.923.26 2.604.643 5.1 1.07 6.926.219.94.444 1.68.66 2.168.072.162.14.287.196.373 1.015-.004 1.941-.035 4.523-.139zm28.787.41c-.371 1.115-1.225 1.97-2.584 2.422-1.542.515-4.373.535-8.176.189a102.769 102.769 0 01-8.612-1.182c-1.568-.287-3.89-.324-7.594-.194-.51.018-1 .037-1.77.067-2.788.112-3.664.14-4.804.14-.417 0-.756-.205-1.032-.53-.185-.22-.349-.503-.505-.856-.266-.602-.52-1.435-.761-2.47-.445-1.906-.838-4.474-1.105-7.147-.268-2.674-.387-5.243-.324-7.152.035-1.041.123-1.88.272-2.491.09-.37.203-.67.358-.911.242-.374.597-.62 1.051-.62 2.049 0 6.347-.976 8.866-2.077.574-.25 1.343-.867 2.315-1.845.766-.77 1.383-1.458 2.933-3.231l.114-.13c1.158-1.326 1.789-2.029 2.473-2.739.903-.938 1.671-1.631 2.37-2.111a26.032 26.032 0 004.685-4.131c1.66-1.858 2.865-3.651 4.328-6.213l.719-1.265c.26-.453.458-.787.645-1.08.493-.774.9-1.256 1.374-1.538.278-.166.576-.257.889-.257.514 0 .983.239 1.371.653.33.352.607.835.831 1.435.45 1.2.694 2.873.694 4.905 0 1.115-.367 2.236-1.066 3.5a21.187 21.187 0 01-1.023 1.64c-.166.243-.342.498-.563.81l-.573.811c-1.016 1.44-1.576 2.316-2.042 3.261-.538 1.093-.83 2.095-.867 3.075.333.536.919.938 1.8 1.246.83.29 1.736.46 3.419.684l.378.05c1.117.148 1.647.227 2.255.346.824.16 1.5.354 2.081.612 1.501.667 2.338 1.786 2.338 3.417 0 1.556-.383 2.648-1.088 3.295.89.947 1.322 2.282 1.08 3.99-.215 1.516-.84 2.706-1.748 3.588a5.549 5.549 0 01-.918.722 6 6 0 01.628 2.737c0 .652-.215 1.3-.6 1.942a7.79 7.79 0 01-1.183 1.475c-.363.363-.748.698-1.134.998.061.728.04 1.453-.195 2.16z"
          id="prefix__a"
        />
      </Defs>
      <Use
        fill={color}
        fillRule="nonzero"
        xlinkHref="#prefix__a"
        transform="translate(-3)"
      />
    </Svg>
  );
};
