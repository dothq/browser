import * as React from 'react';
import { observer, inject } from "mobx-react";
import { StyledSelect, SelectOption, SelectContainer, Icon, Selection, SelectItems } from "./style";
import { icons } from '../../constants';
import onClickOutside from "react-onclickoutside";
import console = require('console');
import store from '../../store';

interface Props {
    children: any;
    value: any;
    parentRef: any;
}

interface ItemProps {
    children: any;
    onClick: any;
    parentRef: any;
}

class SelectList extends React.Component<Props, {}> {

    public view: boolean = false;

    public value = this.props.value;

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
            parentRef,
        } = this.props;

        console.log(store.options.theme)

        return (
            <StyledSelect onClick={() => this.toggleView()}>
                <Icon src={icons.down} white={true} isOpen={this.view}/>
                <SelectContainer isOpen={this.view} canBeHovered={false}>
                    <SelectOption ref={parentRef}>{this.value}</SelectOption>
                </SelectContainer>
                <SelectItems visible={this.view}>
                    {children}
                </SelectItems>
            </StyledSelect>
        )
    }
}

export default onClickOutside(SelectList);

export class SelectListItem extends React.Component<ItemProps, {}> {

    public render() {

        const {
            onClick,
            parentRef
        } = this.props;

        var clickEvent = () => {
            onClick()
            parentRef.current.innerText = this.props.children
        }

        return (
            <SelectContainer 
                canBeHovered={true}
                onClick={clickEvent}
            >
                <SelectOption>{this.props.children}</SelectOption>
            </SelectContainer>
        )
    }

};

