export class Box<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  public get value(): T {
    return this._value;
  }

  public set value(newValue: T) {
    this._value = newValue;
  }
}
