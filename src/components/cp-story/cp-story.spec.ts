import { TestWindow } from '@stencil/core/testing';
import { CpStory } from './cp-story';

describe('cp-story', () => {
  it('should build', () => {
    expect(new CpStory()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCpStoryElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CpStory],
        html: '<cp-story></cp-story>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
