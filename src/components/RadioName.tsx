import { Fragment } from "react";

const radioName = "A7 Sertanejo Universitário FM";

/** Changes only the family of the radio name, inheriting size and weight. */
export function RadioName({ text = radioName }: { text?: string }) {
  return text.split(radioName).map((part, index) => (
    <Fragment key={index}>
      {index > 0 && <span className="font-headline">{radioName}</span>}
      {part}
    </Fragment>
  ));
}
