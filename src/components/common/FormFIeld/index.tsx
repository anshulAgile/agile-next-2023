import { IRenderInputProps } from "@/types/formfield"
import { useId } from "react"

// Text Field
export const RenderTextInput = ({
    register,
    type,
    children,
    placeholder,
    containerClasses,
    inputClasses,
    labelClasses,
    labelName,
    disabled,
    errorClasses,
    errorMessage,
}: IRenderInputProps) => {
    const id = useId();
    return <>
        <div className={`formGroup ${containerClasses}`}>
            <label
                htmlFor={id}
                className={`formLabel ${labelClasses}`}
                data-content={labelName}
            >
                <span className="hidden--visually">{labelName}</span>
            </label>
            <input
                id={id}
                {...register}
                className={`formInput ${inputClasses}`}
                disabled={disabled}
                type={type}
                placeholder={placeholder}
            />
            <span className="childrenClass">{children}</span>
        </div>
        <div className={`inputError ${errorClasses}`}>
            {errorMessage && (
                <span className="textDanger textRight">{errorMessage}</span>
            )}
        </div>
    </>
}