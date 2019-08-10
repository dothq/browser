import { observer } from 'mobx-react';
import Ripple from '~/renderer/components/Ripple';
import { transparency } from '~/renderer/constants/transparency';
import { Button, Icon, Circle } from './style';
import { Props } from './index';
@observer
export default class ToolbarButton extends React.Component<Props, {}> {
  public static defaultProps = {
    size: 20,
    opacity: transparency.icons.inactive,
  };
  private ripple = React.createRef<Ripple>();
  private ref: HTMLDivElement;
  public onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const { onMouseDown } = this.props;
    if (typeof onMouseDown === 'function') {
      onMouseDown(e);
    }
  };
  public getSize = () => {
    if (this.ref) {
      return {
        height: this.ref.offsetHeight,
        width: this.ref.offsetWidth,
      };
    }
    return {
      height: 0,
      width: 0,
    };
  };
  public render() {
    const { icon, onClick, size, disabled, className, divRef, children, opacity, invert, title, onContextMenu, } = this.props;
    let { style } = this.props;
    style = { ...style };
    return (<Button onMouseDown={this.onMouseDown} onClick={onClick} onContextMenu={onContextMenu} className={className} style={style} invert={invert} title={title} ref={(r: HTMLDivElement) => {
      this.ref = r;
      if (typeof divRef === 'function') {
        divRef(r);
      }
    }} disabled={disabled}>
      <Icon style={{ backgroundImage: `url(${icon})` }} size={size} disabled={disabled} opacity={opacity} />
      <Circle>
        <Ripple ref={this.ripple} color="#000" rippleTime={0.8} opacity={0.1} />
      </Circle>
      {children}
    </Button>);
  }
}
