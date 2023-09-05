import { hello } from 'scip/hello';
import { bye } from 'scip/bye';

hello('ts');
bye('js');

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  describe('SCIPをテストする', () => {
    it('hello, byeの関数確認', () => {
      hello('ts');
      bye('js');
    });
  });
}
