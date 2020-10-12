import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

function createPatchFrom(value) {
  return PatchEvent.from(value === "" ? unset() : set(value));
}

export function TriggerText({ type, value, onChange, forwardedRef }) {
  console.log({ type, value });
  return (
    <div>
      <h2>Trigger</h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={forwardedRef}
      />
    </div>
  );
}

// Sanity accessibility
TriggerText.focus = function () {
  this._inputElement.focus();
};

TriggerText.propTypes = {
  type: PropTypes.object,
  value: PropTypes.number,
  onChange: PropTypes.func,
  forwardedRef: PropTypes.func,
};

export default forwardRef((props, ref) => (
  <TriggerText {...props} forwardedRef={ref} />
));
