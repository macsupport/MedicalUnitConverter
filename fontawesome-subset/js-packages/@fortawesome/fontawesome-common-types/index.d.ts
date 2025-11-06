export type IconFamily = "classic" | "sharp" | "duotone";
export type IconPrefix = "fas" | "far" | "fal" | "fat" | "fad" | "fab" | "fak" | "fass" ;
export type CssStyleClass = "fa-solid" | "fa-regular" | "fa-light" | "fa-thin" | "fa-duotone" | "fa-brands" ;
export type IconStyle = "solid" | "regular" | "light" | "thin" | "duotone" | "brands" ;
export type IconPathData = string | string[]

export interface IconLookup {
  prefix: IconPrefix;
  // IconName is defined in the code that will be generated at build time and bundled with this file.
  iconName: IconName;
}

export interface IconDefinition extends IconLookup {
  icon: [
    number, // width
    number, // height
    string[], // ligatures
    string, // unicode
    IconPathData // svgPathData
  ];
}

export interface IconPack {
  [key: string]: IconDefinition;
}

export type IconName = 'paw' | 
  'pen-ruler' | 
  'pencil-ruler' | 
  'users-medical' | 
  'notes-medical' | 
  'vial' | 
  'left-right' | 
  'arrows-alt-h' | 
  'square-info' | 
  'info-square' | 
  'circle' | 
  'circle-question' | 
  'question-circle' | 
  'cat' | 
  'envelope' | 
  'user-doctor' | 
  'user-md' | 
  'circle-info' | 
  'info-circle' | 
  'vials' | 
  'flag-usa' | 
  'calculator' | 
  'laptop-medical' | 
  'arrow-right-arrow-left' | 
  'exchange' | 
  'square-question' | 
  'question-square' | 
  'rotate' | 
  'sync-alt' | 
  'dog' | 
  'scale-balanced' | 
  'balance-scale' | 
  'earth-europe' | 
  'globe-europe' | 
  'print' | 
  'notdef' | 
  'paw' | 
  'pen-ruler' | 
  'pencil-ruler' | 
  'users-medical' | 
  'notes-medical' | 
  'vial' | 
  'left-right' | 
  'arrows-alt-h' | 
  'square-info' | 
  'info-square' | 
  'circle' | 
  'circle-question' | 
  'question-circle' | 
  'cat' | 
  'envelope' | 
  'user-doctor' | 
  'user-md' | 
  'circle-info' | 
  'info-circle' | 
  'vials' | 
  'flag-usa' | 
  'calculator' | 
  'laptop-medical' | 
  'arrow-right-arrow-left' | 
  'exchange' | 
  'square-question' | 
  'question-square' | 
  'rotate' | 
  'sync-alt' | 
  'dog' | 
  'scale-balanced' | 
  'balance-scale' | 
  'earth-europe' | 
  'globe-europe' | 
  'print' | 
  'notdef' | 
  'paw' | 
  'pen-ruler' | 
  'pencil-ruler' | 
  'users-medical' | 
  'notes-medical' | 
  'vial' | 
  'left-right' | 
  'arrows-alt-h' | 
  'square-info' | 
  'info-square' | 
  'circle' | 
  'circle-question' | 
  'question-circle' | 
  'cat' | 
  'envelope' | 
  'user-doctor' | 
  'user-md' | 
  'circle-info' | 
  'info-circle' | 
  'vials' | 
  'flag-usa' | 
  'calculator' | 
  'laptop-medical' | 
  'arrow-right-arrow-left' | 
  'exchange' | 
  'square-question' | 
  'question-square' | 
  'rotate' | 
  'sync-alt' | 
  'dog' | 
  'scale-balanced' | 
  'balance-scale' | 
  'earth-europe' | 
  'globe-europe' | 
  'print' | 
  'notdef';
