import { useForm } from "react-hook-form"
import { Input } from "@/shared/ui/Input/Input"
import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import { emailRegex, message, textRegex, validatePassword } from "@/shared/lib/validation/validateInput"
import { Button } from "@/shared/ui/Button/Button"
import { Link, useNavigate } from "react-router"
import { getRoutePrivacyPolicy, getRouteTermsAndCond } from "@/app/router/config/routes"
import { useSignUpMutation } from "../../api/UserApi"
import { useState } from "react"
import styles from './SignUpForm.module.scss'
import { Eye, EyeOff } from 'lucide-react';

export const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        watch,
        formState:{errors}
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            agree: false,
        }
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const [signUp, { isLoading }] = useSignUpMutation();
    const [errorMessage, setErrorMessage] = useState("")
    const agree = watch("agree");

    const onSubmit = async (signUpData) => {
        setErrorMessage('');   
        try {
            console.log("Data being sent:", signUpData),
            await signUp(signUpData).unwrap()
            reset(),
            navigate("/signin")
        } catch (error) {
            console.error('Error during signup:', error); 

            if (error?.status === 500) {
                setErrorMessage("Server is not availabe. Try again later.");
            } else if (error?.status === 400) {
                setErrorMessage("User with this email already exists");
            } else {
                setErrorMessage("Error occurred. Try again later.");
            }
        }
    }

    return (
        <Stack className={styles.containerForm}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <Input
                    label="First Name" {
                        ...register ("firstName", {
                            required: message.required,
                            pattern: {
                                value: textRegex,
                                message: message.errors.onlyLetters,
                            }   
                    })}
                    required
                    fullWidth
                    error={errors.firstName}
                />
                
                <Input
                    label="Last Name" {
                        ...register ("lastName", {
                            required: message.required,
                            pattern: {
                                value: textRegex,
                                message: message.errors.onlyLetters,
                            }   
                    })}
                    required
                    fullWidth
                    error={errors.lastName}///this is from register
                />

                <Input
                    label="Email" {
                        ...register ("email", {
                            required: message.required,
                            pattern: {
                                value: emailRegex,
                                message: message.errors.validEmail,
                            }   
                    })}
                    required
                    fullWidth
                    error={errors.email}///this is from register
                />
                
                <Input
                    label="Password" {
                        ...register ("password", {
                            required: message.required,
                            validate: validatePassword,
                        }   
                    )}
                    type={showPassword ? "text" : "password"}
                    rightIcon={
                        <button
                            type="button"
                            className={styles.eyeButton}
                            onClick={() => setShowPassword(prev => !prev)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                                <EyeOff size={24} />
                                ) : (
                                <Eye size={24} />
                            )}
                        </button>
                    }
                    required
                    fullWidth
                    error={errors.password}///this is from register
                />
                
                <Input
                    label="Confirm Password" {
                        ...register ("passwordConfirmed", {
                            required: message.required,
                            validate: (value) =>
                                value === getValues("password") || "Passwords do not match"
                        }   
                    )}
                    type={showConfirmPassword ? "text" : "password"}
                    rightIcon={
                            <button
                                type="button"
                                className={styles.eyeButton}
                                onClick={() => setShowConfirmPassword(prev => !prev)}
                                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                            >
                                {showConfirmPassword ? (
                                    <EyeOff size={24} />
                                ) : (
                                    <Eye size={24} />
                                )}
                            </button>
                        }
                    required
                    fullWidth
                    error={errors.passwordConfirmed}///this is from register
                />

                <Stack direction='row'>
                    <Input 
                    type="checkbox" {
                        ...register("agree", { 
                            required: true 
                        }
                    )} 
                    required
                    />  
                    <Text>
                        Agree with <Link to={getRouteTermsAndCond()}>Terms & Condition</Link> and <Link to={getRoutePrivacyPolicy()}>Privacy Policy</Link>
                    </Text>
                </Stack> 
                
                <Button type="onSubmit" fullWidth className={styles.button}>
                    {isLoading ? "Submitting info..." : "JOIN"}
                </Button>
            </form>
        </Stack>
    )
}

