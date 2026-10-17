import { useForm } from "react-hook-form"
import { Stack } from "@/shared/ui/Stack/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { emailRegex, message } from "@/shared/lib/validation/validateInput";
import { useState } from "react";
import styles from './SignInForm.module.scss';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from "../../../../shared/context/AuthContext";
import { useLogInMutation } from "../../api/UserApi";
import { useNavigate } from "react-router";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm ({
    mode: "onBlur", //onSubmit, onBlur, onChange, onTouched, all
    defaultValues: {
    email: "",
    password: "",
  }})

  const [showPassword, setShowPassword] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState()
  const { login } = useAuth();
  const [ signin ] = useLogInMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setErrorMessage('')
    try {
      const response = await signin(data).unwrap();
      console.log("backend response", response)
      const success = login(response.token)
      console.log("Login successful:", success)
      if (!success) {
        setErrorMessage("Invalid authentication token");
        return
      }
      reset()
      navigate('/products')
    } catch (error) {
        if (error?.status === 500) {
          setErrorMessage("Server is not available. Try again later.");
        } else {
          setErrorMessage("Wrong email or password.");
        }
    }
  }

  return (
    <Stack direction="column" className={styles.containerForm} gap={12}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Stack direction="column" gap={12}>
          <Input
            label="Email" {
              ...register ("email", {
                required: message.required,
                pattern: {
                  value: emailRegex,
                  message: message.errors.validEmail,
                }   
            })}
            fullWidth
            error={errors.email}///this is from register
          />

          <Input
            label="Password" {
              ...register("password", {
                required: message.required,
            })}
            fullWidth
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
          /> 
        </Stack>
        <Button type="submit" fullWidth className={styles.button}>Sign In</Button>
      </form>
    </Stack>
  )
}

