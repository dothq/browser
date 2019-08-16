import * as React from 'react';
import { observer, inject } from "mobx-react";
import { StyledSelect, SelectOption, SelectContainer, Icon, Selection, SelectItems, ItemIcon } from "./style";
import { icons } from '../../constants';
import onClickOutside from "react-onclickoutside";
import console = require('console');
import store from '../../store';

interface Props {
    children: any;
    value: any;
    parentRef: any;
    icon?: any;
}

interface ItemProps {
    children: any;
    onClick: any;
    parentRef: any;
    icon?: any;
}

class SelectList extends React.Component<Props, {}> {

    public state = {
        visible: false,
        value: this.props.value
    }

    public toggleView() { 
        console.log("Called from StyledSelect", this.props.parentRef.current)
        this.state.visible = this.state.visible == false ? this.state.visible = true : this.state.visible = false; 
    }

    public changeValue(newValue: any) {
        this.state.value = newValue;
    }

    handleClickOutside = (e: any) => {
        this.state.visible = false;
    }

    public render() {

        let {
            children,
            parentRef,
            icon,
        } = this.props;

        return (
            <StyledSelect onClick={() => this.toggleView()} isOpen={this.state.visible}>
                <Icon src={icons.down} white={true} isOpen={this.state.visible}/>
                <SelectContainer isOpen={this.state.visible} canBeHovered={false}>
                    <SelectOption>
                        {icon && ( <ItemIcon src={icon} /> )}
                        <span ref={parentRef}>{this.state.value}</span>
                    </SelectOption>
                </SelectContainer>
                <SelectItems visible={this.state.visible == true}>
                    {children}
                </SelectItems>
            </StyledSelect>
        )
    }
}

export default onClickOutside(SelectList);

export class SelectListItem extends React.Component<ItemProps, {}> {

    public clickEvent = () => {
        this.props.onClick()
        this.props.parentRef.current.innerText = this.props.children
        console.log("Called from SelectListItem", this.props.parentRef.current)
    }

    public render() {

        const {
            icon,
        } = this.props;

        return (
            <SelectContainer 
                canBeHovered={true}
                onClick={this.clickEvent}
            >
                <SelectOption>
                    {icon && ( <ItemIcon src={icon} /> )}
                    {this.props.children}
                </SelectOption>
            </SelectContainer>
        )
    }

};

