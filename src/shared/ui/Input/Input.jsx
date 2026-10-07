import { getStyles } from '../../lib/getStyles';
import { Stack } from '../../ui/Stack/Stack'
import { Text } from '../Text/Text';
import styles from './Input.module.scss'
import { forwardRef } from "react";
import PropTypes from 'prop-types';

export const Input = forwardRef(({
    label,
    type = 'text',
    required,
    error,
    className,
    multiline = false,
    rightIcon = null,
    rows = 4,
    fullWidth,
    ...otherProps }, ref) => {

    const mode = {
        [styles.error]: !!error,
        [styles.fullWidth]: fullWidth,
    };

    const additional = [
        className,
    ];

    const inputClass = getStyles(styles.input, mode, additional);
    const stackClass = fullWidth ? styles.fullWidth : '';

    return (
        <Stack className={stackClass} direction="column" gap={12} align="start">
            {label && (
                <label className={styles.label} htmlFor={otherProps.name}>
                    {label} {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <Stack className={stackClass} direction="column" gap={4}>
                
                {multiline ? (
                    <textarea
                        ref={ref}
                        required={required}
                        rows={rows}
                        className={inputClass}
                        {...otherProps}
                    />
                ) : (
                    <div  className={styles.inputWrapper}>
                        <input
                        ref={ref}
                        type={type}
                        required={required}
                        className={inputClass}
                        {...otherProps}
                        />
                        {rightIcon && (
                            <div className={styles.rightIcon}>
                                {rightIcon}
                            </div>
                        )}
                    </div>
                )}
                <Text tag='span' size={12} color='red'>
                    {error ? error.message : ''}
                </Text>
            </Stack>
        </Stack>
    );
});


Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'number']),
    required: PropTypes.bool,
    error: PropTypes.shape({
        message: PropTypes.string,
    }),
    className: PropTypes.string,
    onChange: PropTypes.func,
    fullWidth: PropTypes.bool,
    name: PropTypes.string, 
    rightIcon: PropTypes.node,
};
