export interface toolLink {
  alt: string;
  src: string;
  negative: string;
  after: string;
  onclick?: Function; // FIXME: сделать обязательным?
  component?: string // ProxyConstructor; // FIXME: уточнить тип
}