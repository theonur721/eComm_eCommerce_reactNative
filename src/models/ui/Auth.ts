export interface LoginFormValues {
  email: string;
  password: string;
}

export interface GuestProfileProps {
  onSubmitLogin: (values: LoginFormValues) => void;
  isLoading: boolean;
}
