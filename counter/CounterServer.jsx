import { h } from "preact";
import renderToString from "preact-render-to-string"
import Counter from './Counter';

export const component = () => renderToString(<Counter/>);
export const render = renderToString;