import { classNames } from './classNames';

describe('classNames', () => {
  test('classNames with mainClass', () => {
    expect(classNames('main')).toBe('main');
  });

  test('classNames with additionalClasses', () => {
    const expected = 'main class1 class2';
    expect(classNames('main', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('classNames with additionalClasses included undefined', () => {
    const expected = 'main class1';
    expect(classNames('main', {}, ['class1', undefined])).toBe(expected);
  });

  test('classNames with mods', () => {
    const expected = 'main class1 class2 hovered focused';
    expect(classNames('main', { hovered: true, focused: true }, ['class1', 'class2'])).toBe(expected);
  });

  test('classNames with mods included false', () => {
    const expected = 'main class1 class2 hovered';
    expect(classNames('main', { hovered: true, focused: false }, ['class1', 'class2'])).toBe(expected);
  });
});
