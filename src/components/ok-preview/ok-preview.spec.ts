import { TestWindow } from '@stencil/core/testing';
import { OkPreview } from './ok-preview';

describe('ok-preview', () => {
  it('should build', () => {
    expect(new OkPreview()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLOkPreviewElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [OkPreview],
        html: '<ok-preview></ok-preview>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
