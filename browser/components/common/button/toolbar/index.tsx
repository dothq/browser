/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, {
	DOMAttributes,
	PureComponent,
	ReactNode,
} from "react";
import Icon from "../../icon";
import { Base } from "../../typography/base";
import { StyledToolbarButton } from "./index.style";

interface Props extends DOMAttributes<HTMLButtonElement> {
	text?: string | ReactNode;
	icon?: string;
	iconPosition?: TBIconPosition;
	iconSize?: number | string;
	w?: number | string;
	h?: number | string;
	roundness?: number;
	iconRoundness?: number;
	disabled?: boolean;
}

enum TBIconPosition {
	Start = "start",
	End = "end",
}

export enum TBDisplayMode {
	Icon,
	Text,
	IconAndText,
}

class ToolbarButton extends PureComponent<Props> {
	public render() {
		const hasIcon = !!this.props.icon && !!this.props.icon.length;
		const hasText = !!this.props.text;
		const hasIconAndText = hasIcon && hasText;

		const displayMode = hasIconAndText
			? TBDisplayMode.IconAndText
			: hasIcon && !hasText
			? TBDisplayMode.Icon
			: TBDisplayMode.Text;

		return (
			<StyledToolbarButton
				displayMode={displayMode}
				{...this.props}
			>
				{this.props.icon ? (
					this.props.iconPosition ? (
						this.props.iconPosition == "start" ? (
							<Icon
								size={this.props.iconSize || 14}
								icon={this.props.icon}
								roundness={this.props.iconRoundness}
							/>
						) : null
					) : (
						<Icon
							size={this.props.iconSize || 14}
							icon={this.props.icon}
							roundness={this.props.iconRoundness}
						/>
					)
				) : null}
				{this.props.text && <Base>{this.props.text}</Base>}
				{this.props.icon ? (
					this.props.iconPosition ? (
						this.props.iconPosition == "end" ? (
							<Icon
								size={this.props.iconSize || 14}
								icon={this.props.icon}
								roundness={this.props.iconRoundness}
							/>
						) : null
					) : null
				) : null}
			</StyledToolbarButton>
		);
	}
}

export default ToolbarButton;
