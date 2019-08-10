import * as React from 'react';
import { observer, inject } from "mobx-react";
import { StyledSelect, SelectOption, Container, Icon, Selection, SelectItems } from "./style";
import { icons } from '../../constants';
import onClickOutside from "react-onclickoutside";

interface Props {
    children: any;
    value: any;
}

class SelectList extends React.Component<Props, {}> {

    public view: boolean = false;

    public value: any = this.props.value

    public toggleView() { 
        this.view = this.view == false ? this.view = true : this.view = false; 
    }

    public changeValue(newValue: any) {
        this.value = newValue;
    }

    handleClickOutside = (e: any) => {
        this.view = false;
    }

    public render() {

        let {
            children,
        } = this.props;

        return (
            <StyledSelect onClick={() => this.toggleView()} onBlur={() => this.toggleView()}>
                <Icon src={icons.down} white={true} isOpen={this.view}/>
                <Container isOpen={this.view} canBeHovered={false}>
                    <SelectOption>{this.value}</SelectOption>
                </Container>
                <SelectItems visible={this.view}>
                    {children.map((i: any) => (
                            <Container 
                                canBeHovered={true} 
                                key={Math.random()*1000} 
                                onClick={() => this.changeValue(i)}
                            >
                                <SelectOption>{i}</SelectOption>
                            </Container>
                        )
                    )}
                </SelectItems>
            </StyledSelect>
        )
    }
}

export default onClickOutside(SelectList);