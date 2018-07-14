import { Component } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  render() {
    let buttonOptions = {
      tag: "ok-button",
      knobs: {
        label: "Click here!",
        ghost: true,
        disabled: false,
        flag: [null, "4", "5", "7"]
      },
      notes: "This is a classic button."
    };

    let toggleOptions = {
      tag: "ok-toggle",
      knobs: {
        disabled: false
      },
      notes: "This is something else."
    };

    return (
      <div>
        <main>
          <h3>Stencil Component Preview</h3>
          <p>
            <a href="http://twitter.com/steveruizok">@steveruizok</a>
          </p>
          <ok-preview-book components={[buttonOptions, toggleOptions]} />
        </main>
      </div>
    );
  }
}
