export interface FormInputProps {
    name: string;
    label: string;
    req: boolean;
    type?: "text" | "password";
    setValue?: any;
}
