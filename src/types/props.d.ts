import React from "react"

export interface LanguageProps {
    language:string;
    setLanguage? :React.Dispatch<React.SetStateAction<Languages | string>>;
}