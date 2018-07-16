import { Component } from "@stencil/core";
import * as stories from "./stories";

@Component({
  tag: "cp-main",
  styleUrl: "cp-main.css"
})
export class CpMain {
  render() {
    return (
      <main>
        <cp-stories stories={stories} />
      </main>
    );
  }
}
