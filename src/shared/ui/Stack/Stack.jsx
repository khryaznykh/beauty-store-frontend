import { getStyles } from '@/shared/lib/getStyles';
import PropTypes from 'prop-types';
import styles from './Stack.module.scss';

const directionClasses = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const justifyClasses = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    evenly: styles.justifyEvenly,
    between: styles.justifyBetween,
    around: styles.justifyAround,
};

const alignClasses = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
    stretch: styles.alignStretch,
};

const gapClasses = {
    4: styles.gap4,
    8: styles.gap8,
    12: styles.gap12,
    16: styles.gap16,
    24: styles.gap24,
    32: styles.gap32,
    48: styles.gap48,
    64: styles.gap64
};

export const Stack = (props) => {
    const {
        className,          //additional customCSS classes
        children,           //content rendered inside the component
        direction = 'row',
        justify = 'start',
        align = 'start',
        gap,
        fullWidth,
        tag = 'div',
        wrap,
        ...otherProps
    } = props;
    
//defines mapping for valid HTML tags and 
//uses the tag prop to select the correct one
    const mapStackTag = {
        div: 'div',
        section: 'section',
        article: 'article',
        aside: 'aside',
        main: 'main',
        nav: 'nav',
        header: 'header'
    };

//will hold the correct HTML tag name based on the input tag prop
//if the provided tag value not found will default to 'div'
    const StackTag = mapStackTag[tag] || 'div';

//this is where styling logic comes together using utility calsses
// that are defined higher
    const additional = [ //array that collects standard classes
        className,                    // className passed in by the user 
        justifyClasses[justify],      //specific layout classes based on 
        alignClasses[align],                    //justify, align, and
        directionClasses[direction],            //direction props
        gap && gapClasses[gap],       //conditional inclusion
    ];                                //if gap exists then add corresponding class

    const mods = {                    //work if true???
        [styles.fullWidth]: fullWidth,
        [styles.wrap]: wrap,
    };

    return (
        <StackTag
            className={getStyles(styles.flex, mods, additional)}
            {...otherProps}
        >
            {children}
        </StackTag>
    );
};

Stack.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(['row', 'column']),
    justify: PropTypes.oneOf(['start', 'center', 'end', 'evenly', 'between', 'around']),
    align: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
    gap: PropTypes.oneOf([4, 8, 12, 16, 24, 32, 48, 64]),
    fullWidth: PropTypes.bool,
    tag: PropTypes.oneOf(['div', 'section', 'article', 'aside', 'main', 'nav', 'header']),
    wrap: PropTypes.bool,
};