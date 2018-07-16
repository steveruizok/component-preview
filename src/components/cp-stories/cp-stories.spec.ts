import { TestWindow } from '@stencil/core/testing';
import { CpStories } from './cp-stories';

describe('cp-stories', () => {
  it('should build', () => {
    expect(new CpStories()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCpStoriesElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CpStories],
        html: '<cp-stories></cp-stories>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
