import { qux, Foo } from '.';

describe('index', () => {
  it('Foo bar returns baz', () => {
    const foo = new Foo();
    expect(foo.bar()).toEqual('baz');
  });

  it('qux returns quux', () => {
    expect(qux()).toEqual('quux');
  });
});
