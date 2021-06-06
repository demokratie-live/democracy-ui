import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface Props {
  width: number;
}

export const SPD: React.FC<Props> = ({ width, ...props }) => (
  <Svg
    width={width}
    height={(width / 380) * 133}
    viewBox="0 0 380 133"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path fill="#EE3439" d="M0 .323h131.757v132.354H0z" />
      <Path fill="#FFF" d="M138.95.452H380v132.096H138.95z" />
      <Path fill="#5D5855" d="M259.089 106.808h2.511V79.773h-2.511z" />
      <Path
        d="M159.855 60.683c4.062 0 6.123 1.778 6.123 5.284 0 3.68-1.834 5.25-6.123 5.25h-5.435V60.682h5.435zm-.769-12.28c4.048 0 6.015 1.634 6.015 4.993 0 3.51-1.778 5.285-5.285 5.285h-5.396V48.403h4.666zm-7.142-2.11v27.031h8.385c5.314 0 8.125-2.517 8.125-7.283 0-3.445-1.77-5.712-4.949-6.445 2.626-.965 4.069-3.126 4.069-6.382 0-4.723-2.694-6.922-8.488-6.922h-7.142z"
        fill="#5D5855"
        fillRule="nonzero"
      />
      <Path
        d="M189.11 46.292v18.324c0 4.713-2.09 6.818-6.782 6.818-4.743 0-6.677-1.972-6.677-6.818V46.292h-2.473v18.324c0 6.276 2.808 9.076 9.111 9.076 6.256 0 9.298-2.97 9.298-9.076V46.292h-2.476zM213.192 46.292v21.36s.097 2.263.106 2.504h-.048c.003 0 .003 0 .003-.005 0-.142-1.142-2.565-1.142-2.565l-12.17-21.294h-2.788v27.032h2.328V51.936s-.12-2.252-.135-2.597c.338.954.733 1.831 1.222 2.659l12.167 21.326h2.788V46.292h-2.331z"
        fill="#5D5855"
      />
      <Path
        d="M228.96 48.478c4.6 0 8.867 1.316 8.867 10.875 0 8.267-2.688 11.79-8.98 11.79h-4.88V48.479h4.992zm-7.508-2.185v27.032h7.36c7.722 0 11.635-4.699 11.635-13.972 0-8.909-3.71-13.06-11.67-13.06h-7.325z"
        fill="#5D5855"
        fillRule="nonzero"
      />
      <Path
        fill="#5D5855"
        d="M245.536 46.292v27.032h14.918l-.289-2.181h-12.12v-10.39h11.626v-2.181h-11.626v-10.06h12.132v-2.22h-14.64zM264.796 53.287c0 3.147 1.498 5.002 5.334 6.618.003 0 4.316 1.79 4.316 1.79 2.806 1.18 3.798 2.423 3.798 4.746 0 3.27-1.867 4.993-5.396 4.993-1.8 0-2.939-.17-7.019-1.31l-.115-.032-.695 2.317.118.035c3.748 1.048 5.553 1.248 7.563 1.248 5.043 0 8.055-2.738 8.055-7.322 0-3.353-1.596-5.44-5.337-6.986l-4.243-1.751c-2.864-1.199-3.833-2.314-3.833-4.42 0-3.244 2.02-5.028 5.688-5.028 1.616 0 3.082.248 5.75.801l.12.024.49-2.32-.125-.03c-2.428-.506-4.31-.73-6.088-.73-5.093 0-8.381 2.885-8.381 7.357M283.76 46.292v2.22h7.092v24.812h2.51V48.512h7.087v-2.22h-16.69z"
      />
      <Path
        d="M309.843 48.366c.041.203.418 1.961.418 1.961s3.686 11.435 3.969 12.303h-8.759c.1-.312 4.001-12.297 4.001-12.3a7.531 7.531 0 0 0 .362-1.964h.009zm-1.487-2.072l-8.855 27.029h2.564s2.723-8.417 2.776-8.585h9.98l2.815 8.585h2.596l-8.814-27.03h-3.062z"
        fill="#5D5855"
        fillRule="nonzero"
      />
      <Path
        d="M322.386 59.755c0 9.77 3.206 13.937 10.722 13.937 1.56 0 4.454-.383 7.893-1.47l.085-.02V58.609h-8.614v2.217h6.212v9.65c-2.397.651-4.013.925-5.538.925-4.887 0-8.137-1.981-8.137-11.646 0-9.604 3.238-11.535 8.464-11.535 1.878 0 3.983.403 6.83 1.31l.127.038.647-2.4-.117-.028c-3.174-.86-5.364-1.21-7.56-1.21-7.62 0-11.014 4.262-11.014 13.825M345.775 53.287c0 3.147 1.498 5.002 5.337 6.618.003 0 4.316 1.79 4.316 1.79 2.803 1.18 3.795 2.423 3.795 4.746 0 3.27-1.864 4.993-5.394 4.993-1.798 0-2.938-.17-7.018-1.31l-.115-.032-.695 2.317.12.035c3.746 1.048 5.545 1.248 7.561 1.248 5.04 0 8.055-2.738 8.055-7.322 0-3.353-1.599-5.44-5.34-6.986l-4.24-1.751c-2.864-1.199-3.833-2.314-3.833-4.42 0-3.244 2.023-5.028 5.69-5.028 1.614 0 3.08.248 5.748.801l.123.024.486-2.32-.12-.03c-2.435-.506-4.31-.73-6.095-.73-5.087 0-8.381 2.885-8.381 7.357M151.964 79.774v27.032h2.512V94.453h11.549v-2.217h-11.55V81.994h12.062v-2.22h-14.573z"
        fill="#5D5855"
      />
      <Path
        d="M178.801 81.92c3.798 0 5.723 1.864 5.723 5.541 0 3.76-2.122 5.835-5.976 5.835h-4.922V81.921h5.175zm10.555 22.566l-.928.062c-.812 0-1.027-.3-1.716-1.322 0 0-4.749-7.772-5.073-8.396 3.548-1.019 5.438-3.565 5.438-7.407 0-5.002-2.835-7.649-8.202-7.649h-7.725v27.032h2.476V95.37h5.628c-.008.003 5.335 9.07 5.335 9.067 1.166 1.767 1.843 2.473 3.398 2.48l1.377-.121-.008-2.309zM202.875 81.847c.041.203.421 1.958.421 1.958l3.963 12.303H198.5c.103-.312 4.004-12.3 4.004-12.3a7.371 7.371 0 0 0 .36-1.961h.011zm-1.49-2.073l-8.852 27.032h2.561l2.78-8.59h9.982c.05.17 2.812 8.59 2.812 8.59h2.597l-8.815-27.032h-3.065z"
        fill="#5D5855"
        fillRule="nonzero"
      />
      <Path
        d="M235.5 104.487l-.922.062c-.813 0-.954-.262-1.722-1.325 0 0-7.714-11.814-7.796-11.961l9.435-11.14.03-.348h-2.703L221.08 92.573c-.635.742-1.33 1.737-1.73 2.467l.044-15.265h-2.473v27.032h2.473v-8.746c.023.014 3.55-4.149 4.115-4.805.165.297 7.125 11.005 7.125 11.005 1.254 1.745 1.704 2.655 3.506 2.655l1.375-.12-.015-2.309zM237.57 79.774v2.22h7.086v24.812h2.514V81.994h7.086v-2.22H237.57z"
        fill="#5D5855"
      />
      <Path
        d="M269.547 93.308c0-8.16 2.323-11.643 7.77-11.643 5.443 0 7.771 3.482 7.771 11.643 0 10.23-3.93 11.609-7.772 11.609-3.615 0-7.769-1.32-7.769-11.609m-2.623.036c0 9.176 3.491 13.828 10.392 13.828 6.895 0 10.393-4.664 10.393-13.864 0-9.223-3.498-13.901-10.393-13.901-6.9 0-10.392 4.69-10.392 13.937"
        fill="#5D5855"
        fillRule="nonzero"
      />
      <Path
        d="M160.608 39.915c-2.434 0-4.398-.144-9.09-1.925l1.745-6.183c5.782 1.817 6.618 1.89 8.181 1.89 1.237 0 2.038-.653 2.038-1.963 0-1.054-.619-1.49-1.675-1.817l-4.252-1.383c-3.056-.98-5.785-3.236-5.785-7.525 0-5.42 4.405-8.473 10.037-8.473 2.04 0 3.965.218 8.216 1.345l-1.56 6.218c-4.543-1.128-6.074-1.345-7.454-1.345-1.163 0-1.926.474-1.926 1.816 0 .948.69 1.275 1.743 1.64l4.254 1.454c3.2 1.051 5.744 3.236 5.744 7.525 0 5.744-4.507 8.726-10.216 8.726"
        fill="#EE3439"
      />
      <Path
        d="M182.424 18.79h-2.256v6.874h2.217c1.42 0 2.185-.765 2.185-3.712 0-2.509-.836-3.162-2.146-3.162m.073 12.836h-2.329v7.925h-7.416V12.899h9.928c5.961 0 9.635 2.546 9.635 8.947 0 7.089-4.545 9.78-9.818 9.78M204.206 18.898h-2.617V33.48h2.58c3.414 0 4.18-1.201 4.18-7.634 0-6.147-1.31-6.948-4.143-6.948m.106 20.653H194.17V12.898h10.036c7.019 0 11.962 3.457 11.962 12.801 0 9.053-4.219 13.852-11.856 13.852"
        fill="#EE3439"
        fillRule="nonzero"
      />
      <Path
        d="M309.168 79.777v21.356s.1 2.27.106 2.511h-.053c.006-.003.006-.003.006-.009 0-.141-1.142-2.561-1.142-2.561l-12.171-21.297h-2.785v27.038h2.329V85.42s-.115-2.25-.139-2.594c.342.954.733 1.828 1.222 2.655l12.17 21.333h2.789V79.777h-2.332zM160.443 124.46h-.98l-2.025-6.082c-.089-.28-.198-.675-.198-.845h-.076c0 .17-.08.565-.168.845l-1.993 6.082h-.98l-2.038-8.137h.875l1.563 6.418c.076.323.12.677.12.83h.065c0-.153.089-.507.195-.83l1.916-5.956h.978l2.01 5.956c.092.294.183.724.183.83h.08c0-.106.029-.521.105-.83l1.578-6.418h.828l-2.038 8.137zM173.896 124.46h-.983l-2.023-6.082c-.09-.28-.2-.675-.2-.845h-.076c0 .17-.077.565-.168.845l-1.99 6.082h-.98l-2.038-8.137h.871l1.567 6.418c.076.323.117.677.117.83h.065c0-.153.089-.507.197-.83l1.917-5.956h.983l2.005 5.956c.094.294.186.724.186.83h.076c0-.106.033-.521.11-.83l1.574-6.418h.827l-2.037 8.137zM187.335 124.46h-.984l-2.022-6.082c-.091-.28-.197-.675-.197-.845h-.077c0 .17-.076.565-.17.845l-1.99 6.082h-.981l-2.04-8.137h.874l1.563 6.418c.077.323.121.677.121.83h.065c0-.153.088-.507.197-.83l1.914-5.956h.98l2.01 5.956c.095.294.183.724.183.83h.08c0-.106.03-.521.106-.83l1.578-6.418h.827l-2.037 8.137zM192.756 124.553c-.368 0-.644-.248-.644-.645 0-.383.276-.627.644-.627.357 0 .66.212.66.627 0 .397-.277.645-.66.645M199.516 124.614c-.54 0-1.166-.077-2.406-.4l.198-.799c1.316.368 1.763.448 2.27.448.995 0 1.698-.43 1.698-1.38 0-.825-.368-1.181-1.487-1.611l-1.239-.489c-.874-.339-1.38-.89-1.38-1.763 0-1.56 1.103-2.45 2.714-2.45.412 0 1.177.062 1.943.197l-.168.83c-1.01-.232-1.378-.276-1.822-.276-.98 0-1.793.444-1.793 1.563 0 .736.262.922 1.425 1.393l1.3.524c.781.318 1.35.948 1.35 1.899 0 1.563-1.058 2.314-2.603 2.314"
        fill="#5D5855"
      />
      <Path
        d="M209.547 116.953c-.612 0-1.192.183-2.435.78v5.762c.919.32 1.564.368 2.023.368 1.301 0 2.426-.736 2.426-3.589 0-2.632-.754-3.32-2.014-3.32m-.306 7.66c-.671 0-1.316-.11-2.129-.386v3.603h-.842v-11.508h.842v.692h.077c1.192-.63 1.902-.845 2.5-.845 1.73 0 2.773.995 2.773 4.122 0 3.232-1.455 4.322-3.221 4.322M221.178 117.274c-.736-.245-1.487-.353-1.978-.353-1.237 0-2.464.582-2.464 3.585 0 2.774.827 3.339 2.037 3.339.506 0 .998-.106 2.405-.795v-5.776zm.015 7.186v-.689h-.077c-1.254.672-1.943.842-2.479.842-1.504 0-2.805-.66-2.805-4.107 0-3.553 1.607-4.336 3.385-4.336.474 0 1.178.109 1.976.383v-3.834l.842-.182v11.923h-.842z"
        fill="#5D5855"
        fillRule="nonzero"
      />
      <Path
        d="M229.683 113.444a2.755 2.755 0 0 0-.675-.092c-.812 0-1.304.35-1.304 1.47v1.5h2.084v.749h-2.084v7.39h-.839v-7.39H225.7v-.748h1.166v-1.192c0-1.626.736-2.594 2.252-2.594.136 0 .445.018.642.08l-.076.827zM236.469 117.152a1.196 1.196 0 0 0-.4-.08c-.507 0-.934.17-2.023.904v6.483h-.84v-8.135h.84v.904h.082c1.222-.95 1.622-1.06 2.123-1.06.068 0 .233.018.356.062l-.138.922z"
        fill="#5D5855"
      />
      <Path
        d="M244.145 120.783l-3.354.354c-.382.365-.509.871-.509 1.33 0 1.028.386 1.396 1.472 1.396.445 0 1.257-.2 2.39-.677v-2.403zm.109 3.677l-.08-.63h-.073c-1.502.663-2.102.784-2.697.784-1.228 0-1.976-.66-1.976-2.07 0-1.254.748-2.01 1.7-2.114l3.017-.338v-2.282c0-.598-.306-.857-1.01-.857-.612 0-1.84.212-2.941.536l-.168-.783c1.407-.383 2.452-.536 3.185-.536 1.396 0 1.764.598 1.764 1.484v6.806h-.721z"
        fill="#5D5855"
        fillRule="nonzero"
      />
      <Path
        d="M251.67 119.526l2.114 3.722c.183.323.289.415.548.415.109 0 .218-.015.28-.033v.83c-.127.015-.23.033-.354.033-.52 0-.795-.16-1.104-.692l-2.055-3.648-1.33 1.428v2.88h-.83V112.72l.83-.183v8.014h.062c.185-.277.444-.645.703-.936l3.16-3.321.932.073-2.955 3.16zM260.11 124.614c-.888 0-1.271-.433-1.271-1.408v-6.135h-1.163v-.748h1.163v-1.852l.842-.185v2.037h2.452v.748h-2.452v6.224c0 .397.2.52.539.52.244 0 .61-.014 1.913-.58l.186.763c-1.41.571-1.778.616-2.208.616"
        fill="#5D5855"
      />
      <Path
        d="M266.087 116.323h.842v8.137h-.842v-8.137zm.43-2.037c-.371 0-.598-.215-.598-.583s.215-.583.598-.583c.332 0 .597.186.597.583 0 .368-.23.583-.597.583zM274.602 116.906c-1.484 0-2.402.718-2.402 3.494 0 2.664.856 3.477 2.402 3.477 1.537 0 2.379-.795 2.379-3.477 0-2.867-1.013-3.494-2.38-3.494m0 7.707c-2.033 0-3.305-1.119-3.305-4.213 0-3.188 1.348-4.23 3.306-4.23 1.858 0 3.282.95 3.282 4.23 0 3.109-1.286 4.213-3.282 4.213"
        fill="#5D5855"
        fillRule="nonzero"
      />
      <Path
        d="M286.511 124.46v-6.362c0-.792-.17-1.116-1.257-1.116-.83 0-1.763.247-2.853.78v6.698h-.839v-8.137h.84v.72h.082c1.286-.611 2.143-.873 3.047-.873 1.101 0 1.822.368 1.822 1.625v6.665h-.842zM291.672 124.553c-.368 0-.644-.248-.644-.645 0-.383.276-.627.644-.627.357 0 .66.212.66.627 0 .397-.27.645-.66.645"
        fill="#5D5855"
      />
      <Path
        d="M300.925 117.274c-.733-.245-1.484-.353-1.975-.353-1.237 0-2.464.582-2.464 3.585 0 2.774.827 3.339 2.037 3.339.506 0 .995-.106 2.402-.795v-5.776zm.015 7.186v-.689h-.074c-1.257.672-1.943.842-2.481.842-1.505 0-2.803-.66-2.803-4.107 0-3.553 1.607-4.336 3.385-4.336.474 0 1.178.109 1.973.383v-3.834l.842-.182v11.923h-.842zM310.72 119.097c0-1.516-.704-2.223-1.902-2.223-1.334 0-2.158.769-2.22 3.003 1.36-.032 4.107-.076 4.107-.076.015-.306.015-.642.015-.704m-1.84 5.517c-2.232 0-3.203-1.304-3.203-4.015 0-3.05 1.121-4.428 3.14-4.428 1.652 0 2.727.918 2.727 3.003 0 .23-.012.81-.026 1.271 0 0-3.298.077-4.935.103 0 2.544.751 3.28 2.311 3.28.339 0 .766-.026 2.3-.503l.17.8c-1.348.366-1.948.49-2.484.49"
        fill="#5D5855"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);
