export interface ISingUpFormValues {
  name: string;
  email: string;
  password: string;
  policy: boolean;
}

export const singUpInitialValues: ISingUpFormValues = {
  name: "",
  email: "",
  password: "",
  policy: false,
};
