import { IRenderInputProps } from "@/types/formfield"

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
    return <>
        <div className={`formGroup ${containerClasses}`}>
            <label
                htmlFor={labelName}
                className={`formLabel ${labelClasses}`}
                data-content={labelName}
            >
                <span className="hidden--visually">{labelName}</span>
            </label>
            <input
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