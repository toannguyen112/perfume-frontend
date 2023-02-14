export interface FieldInterface {
    field: {
        className?: string;
        type?: string;
        source?: {
            model?: string;
            method?: string;
            only?: string[];
            except?: string[];
        };
        placeholder?: string;
        disable?: boolean;
        rows?: number;
        min?: number;
        max?: number;
        label?: string;
        title?: string;
        mode?: string,
        required?: boolean;
        options?: any[];
        autoFocus?: boolean,
        isDisabled?: boolean,
    };
    modelValue?: any;
    updateModelValue: (arg: any) => void;
}