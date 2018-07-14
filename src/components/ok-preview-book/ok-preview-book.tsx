import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "ok-preview-book",
  styleUrl: "ok-preview-book.css"
})
export class OkPreviewBook {
  @Prop()
  components: {
    tag: string;
    knobs?: Object;
    notes?: string;
  }[];
  @State() selected: number = -1;

  links;
  routes;

  componentWillLoad() {
    this.links = this.components.map(c => {
      return (
        <stencil-route-link
          url={`/${c.tag}`}
          activeClass="component-link-active"
        >
          <li>{c.tag}</li>
        </stencil-route-link>
      );
    });

    this.routes = this.components.map(c => {
      return (
        <stencil-route
          url={`/${c.tag}`}
          routeRender={() => (
            <ok-preview
              class="component-preview"
              tag={c.tag}
              knobs={c.knobs}
              notes={c.notes}
            />
          )}
        />
      );
    });
  }

  render() {
    return [
      <div class="components-list">
        <ul>{this.links}</ul>
      </div>,
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          {this.routes}
        </stencil-route-switch>
      </stencil-router>
    ];
  }
}
