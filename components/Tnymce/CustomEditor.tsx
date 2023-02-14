import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";
import initFullProps from "./initFullProps";

interface Props {
    modelValue: any,
    emit: (param: any) => void
}

const CustomEditor = ({ modelValue, emit }: Props) => {
    const [text, setText] = useState<any>(modelValue);

    React.useEffect(() => {
        emit(text);
    }, [text]);

    return (
        <React.Fragment>
            <Editor
                id="Editor"
                apiKey='kk8b71st8g7se8kra0do3fzsckuxv92i3y7p7onfzof65jwh'
                value={text}
                init={{
                    ...initFullProps,
                }}
                onEditorChange={setText}
            />
        </React.Fragment>
    );
};

export default CustomEditor;
