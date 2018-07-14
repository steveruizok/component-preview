import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "ok-preview",
  styleUrl: "ok-preview.css"
})
export class OkPreview {
  @Prop() tag: string;
  @Prop() knobs: Object = {};
  @Prop() notes: Object = {};
  @State() values: Object = {};

  previousKnobs;
  component;

  componentWillLoad() {
    this.resetValues();
    this.component = h(this.tag, this.values);
    this.previousKnobs = this.knobs;
  }

  componentWillUpdate() {
    if (this.knobs !== this.previousKnobs) {
      this.resetValues();
    }

    this.component = h(this.tag, this.values);
    this.previousKnobs = this.knobs;
  }

  resetValues() {
    let initial = {};

    for (let key in this.knobs) {
      let value = this.knobs[key];
      if (typeof value === "object") {
        value = value[0];
      }

      initial[key] = value;
    }

    this.values = initial;
  }

  setValue = (key, value) => {
    let change = {};
    change[key] = value;

    let newValues = Object.assign({}, this.values, change);
    this.values = newValues;
  };

  render() {
    let knobs, knobControls, notes;

    if (!this.tag) {
      return <div>Needs a component tag (e.g. "app-button").</div>;
    }

    // Component

    // Knobs

    knobs = Object.keys(this.knobs).map(key => {
      let input;
      const type = typeof this.knobs[key];
      const current = this.values[key];

      switch (type) {
        case "string":
          input = (
            <input
              id={key}
              type="text"
              value={current}
              class="knob-text"
              onInput={ev => {
                let target = ev.target as HTMLInputElement;
                let value = target.value;
                this.setValue(key, value);
              }}
            />
          );
          break;
        case "boolean":
          input = (
            <input
              class="knob-checkbox"
              id={key}
              checked={current}
              type="checkbox"
              onChange={ev => {
                let target = ev.target as HTMLInputElement;
                let value = target.checked;
                this.setValue(key, value);
              }}
            />
          );
          break;
        case "object":
          if (!Array.isArray(this.knobs[key])) {
            break;
          }

          input = (
            <select
              class="knob-select"
              id={key}
              onChange={ev => {
                let target = ev.target as HTMLSelectElement;
                let value = target.value;
                this.setValue(key, value);
              }}
            >
              {this.knobs[key].map(i => {
                return <option value={i}>{i}</option>;
              })}
            </select>
          );
          break;
      }

      return [<label class="knob-label">{key}</label>, input];
    });

    if (knobs) {
      knobControls = <div class="knobs">{knobs}</div>;
    }

    if (this.notes) {
      notes = <div class="notes">{this.notes}</div>;
    }

    return [
      <div class="preview-container">{this.component}</div>,
      knobControls,
      notes
    ];
  }
}
