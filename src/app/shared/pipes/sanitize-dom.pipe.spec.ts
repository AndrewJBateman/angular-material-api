import { SanitizeDomPipe } from './sanitize-dom.pipe';

describe('SanitizeDomPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeDomPipe();
    expect(pipe).toBeTruthy();
  });
});
