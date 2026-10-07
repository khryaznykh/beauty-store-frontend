import { getStyles } from '@/shared/lib/getStyles';
import styles from './Text.module.scss';
import PropTypes from 'prop-types';

const sizeClasses = {
  12: styles.size12,
  14: styles.size14,
  16: styles.size16,
  18: styles.size18,
  20: styles.size20,
  22: styles.size22,
  24: styles.size24,
  28: styles.size28,
  32: styles.size32,
  40: styles.size40,
  46: styles.size46,
  48: styles.size48,
  110: styles.size110,
  150: styles.size150,
}

const colorClasses = {
  white: styles.colorwhite,
  black: styles.colorblack,
  grey: styles.colorgrey,
  green: styles.colorgreen,
  lightpurple: styles.colorlightpurple,
  purple: styles.colorpurple,
  red: styles.colorred
};


const fontFamilyClasses = {
  roboto400: styles.roboto400,
  alexbrush: styles.alexbrush,
};


export const Text = (props) => {
  const {
    children,
    className,
    size,
    color = 'black', //white, black, grey, lightpurple, purple, red, green
    fontStyle = 'roboto400', //alexbrush
    tag = 'p',
    ...otherProps
  } = props;

  const mapTextTag = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    li: "li",
    span: "span",
  };

  const additionals = [
    className,
    sizeClasses[size],
    colorClasses[color],
    fontFamilyClasses[fontStyle]
  ];

  const TextTag = mapTextTag[tag];

  return (
    <TextTag
      className={getStyles(styles.text, {}, additionals)}
      {...otherProps}
    >
      {children}
    </TextTag>
  );
};

Text.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf([8, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 46, 48, 110]),
    color: PropTypes.oneOf(['white', 'black', 'grey', 'lightpurple', 'purple', 'red', 'green']),
    fontStyle: PropTypes.oneOf(['roboto400', 'alexbrush']),
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'p', 'li', 'span']),
};
