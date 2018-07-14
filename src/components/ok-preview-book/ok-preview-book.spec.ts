import { TestWindow } from '@stencil/core/testing';
import { OkPreviewBook } from './ok-preview-book';

describe('ok-preview-book', () => {
  it('should build', () => {
    expect(new OkPreviewBook()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLOkPreviewBookElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [OkPreviewBook],
        html: '<ok-preview-book></ok-preview-book>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
