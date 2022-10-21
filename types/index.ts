export interface initialType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface customFormType {
  children?: any;
  initialValues?: any;
  validationSchema?: any;
  onSubmit?: any;
}
