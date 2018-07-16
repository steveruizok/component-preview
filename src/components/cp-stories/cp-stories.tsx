import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "cp-stories",
  styleUrl: "cp-stories.css"
})
export class CpStories {
  @Prop() stories: Object = {};
  @State() current: string;

  links = [];
  story_components = {};
  current_component;

  componentWillLoad() {
    if (!this.stories) {
      this.story_components = [<div>Feed me stories.</div>];
      return;
    }

    let keys = Object.keys(this.stories);

    keys.forEach(key => {
      let component = (
        <cp-story
          ref={el => {
            this.current_component = el;
          }}
          story={this.stories[key]}
        />
      );

      let link = (
        <li
          onClick={() => {
            this.current = key;
          }}
        >
          <a href={"#" + key}>{key}</a>
        </li>
      );

      this.links.push(link);
      this.story_components[key] = component;
    });

    this.current = window.location.hash
      ? window.location.hash.slice(1)
      : keys[0];
  }

  componentDidUpdate() {}

  render() {
    let story = this.story_components[this.current];

    return [
      <div class="stories-list">
        <ul>{this.links}</ul>
      </div>,
      <div class="story">{story}</div>
    ];
  }
}
