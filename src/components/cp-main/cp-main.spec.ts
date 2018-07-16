import { TestWindow } from '@stencil/core/testing';
import { CpMain } from './cp-main';

describe('cp-main', () => {
  it('should build', () => {
    expect(new CpMain()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCpMainElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CpMain],
        html: '<cp-main></cp-main>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
