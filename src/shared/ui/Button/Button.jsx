import { getStyles } from "@/shared/lib/getStyles";
import styles from "./Button.module.scss";

import PropTypes from "prop-types";
import { Link, NavLink } from "react-router";

export const Button = (props) => {
    const {
        className,
        children,
        tag = "button",
        theme = "white",
        accent,
        fullWidth,
        active,
        circle,
        to,
        onClick,
        type = "button",
        ...otherProps
    } = props;

    const mods = {
        [styles.circle]: circle,
        [styles.fullWidth]: fullWidth,
        [styles.active]: active,
    };

    const renderContent = (isActive = false) => (
        <>
            <div
                className={getStyles(
                    styles.buttonText,
                    {
                        [styles.fullWidth]: fullWidth,
                        [styles.active]: active || isActive,
                    },
                    [styles[theme]]
                )}
            >
                {children}
            </div>

            {accent && (
                <span
                    className={getStyles(
                        styles.iconWrapper,
                        {},
                        [styles[theme]]
                    )}
                >
                    <ArrowIcon
                        color={theme === "yellow" ? "white" : "black"}
                    />
                </span>
            )}
        </>
    );

    const commonClassName = getStyles(
        styles.button,
        mods,
        [className]
    );

    if (tag === "navlink") {
        return (
            <NavLink
                to={to}
                className={commonClassName}
                {...otherProps}
            >
                {({ isActive }) => renderContent(isActive)}
            </NavLink>
        );
    }

    if (tag === "link") {
        return (
            <Link
                to={to}
                className={commonClassName}
                {...otherProps}
            >
                {renderContent()}
            </Link>
        );
    }

    return (
        <button
            className={commonClassName}
            onClick={onClick}
            type={type}
            {...otherProps}
        >
            {renderContent()}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    tag: PropTypes.oneOf([
        "button",
        "link",
        "navlink"
    ]),
    theme: PropTypes.oneOf([
        "white",
        "plain",
        "nothing"
    ]),
    accent: PropTypes.bool,
    fullWidth: PropTypes.bool,
    circle: PropTypes.bool,
    to: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf([
        "button",
        "submit",
        "reset"
    ]),
};