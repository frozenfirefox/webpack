import * as React from "react"

export interface HelloProps { compiler: string; framework: string;}
export interface NamePops { name: string };
export interface AnimalProps { name: string };

// export const Hello = (props: HelloProps) => <h1>Hello from  {props.compiler} and {props.framework} !</h1>;


export class Hello extends React.Component<HelloProps, {}>{
    render() {
        return <h1>Hello from  {this.props.compiler} and {this.props.framework} !</h1>;
    }
}

export class Name extends React.Component<NamePops, {}>{
    render() {
    return <h2> My name is {this.props.name} !</h2>
    }
}

export class Animal extends React.Component<AnimalProps, {}>{
    render() {
    return <h3>I have a {this.props.name} !</h3>
    }
}
