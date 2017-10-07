// Type definitions for React (react-dom) 16.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
//                 AssureSign <http://www.assuresign.com>
//                 Microsoft <https://microsoft.com>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference path="react.d.ts" />

export as namespace ReactDOM;

export function findDOMNode<E extends Element>(instance: React.ReactInstance): E;
export function findDOMNode(instance: React.ReactInstance): Element;
export function unmountComponentAtNode(container: Element): boolean;

export const version: string;
export const render: Renderer;
export const hydrate: Renderer;

export function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
export function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
export function unstable_batchedUpdates(callback: () => any): void;

export function unstable_renderSubtreeIntoContainer<P extends React.DOMAttributes<T>, T extends Element>(
    parentComponent: React.Component<any, any>,
    element: React.DOMElement<P, T>,
    container: Element,
    callback?: (element: T) => any): T;
export function unstable_renderSubtreeIntoContainer<P, T extends React.Component<P, React.ComponentState>>(
    parentComponent: React.Component<any, any>,
    element: React.CElement<P, T>,
    container: Element,
    callback?: (component: T) => any): T;
export function unstable_renderSubtreeIntoContainer<P>(
    parentComponent: React.Component<any, any>,
    element: React.ReactElement<P>,
    container: Element,
    callback?: (component?: React.Component<P, React.ComponentState> | Element) => any): React.Component<P, React.ComponentState> | Element | void;

export interface Renderer {
    <P extends React.DOMAttributes<T>, T extends Element>(
        element: React.DOMElement<P, T>,
        container: Element | null,
        callback?: (element: T) => any
    ): T;
    <P>(
        element: React.SFCElement<P>,
        container: Element | null,
        callback?: () => any
    ): void;
    <P, T extends React.Component<P, React.ComponentState>>(
        element: React.CElement<P, T>,
        container: Element | null,
        callback?: (component: T) => any
    ): T;
    <P>(
        element: React.ReactElement<P>,
        container: Element | null,
        callback?: (component?: React.Component<P, React.ComponentState> | Element) => any
    ): React.Component<P, React.ComponentState> | Element | void;
    <P>(
        parentComponent: React.Component<any, any>,
        element: React.SFCElement<P>,
        container: Element,
        callback?: () => any
    ): void;
}
