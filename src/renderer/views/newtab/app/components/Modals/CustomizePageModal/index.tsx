import * as React from 'react';
import ReactModal from 'react-modal';
import {
  IronBar_Right,
  IronBar,
  IronIcon,
  IronBar_Left,
  Title,
  Hero,
  Heading,
} from './../../../style';
import { icons } from '../../../../../../constants/icons';
import HideLogo_Switch from '../../Switches/HideLogo/index';

const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    background: 'rgb(255, 255, 255)',
    overflow: 'auto',
    borderRadius: '4px',
    padding: '0px',
    outline: 'none',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '300px',
    border: 'none',
    boxShadow: '5px 5px 33px 10px rgba(0,0,0,0.21)',
  },
};

class CustomizePageModal extends React.Component {
  public state = {
    showModal: false,
    darkModeSwitchState: false,
  };

  constructor(props: any) {
    super(props);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  setDarkModeState() {
    if (this.state.darkModeSwitchState == false) {
      this.setState({ darkModeSwitchState: true });
    } else {
      this.setState({ darkModeSwitchState: false });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} id="customizepage.modal" />
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          ariaHideApp={false}
          style={customStyles}
        >
          <Title style={{ padding: '25px 0px', margin: '2px 0px 0px 0px' }}>
            Customize this page
          </Title>
          <IronBar>
            <IronBar_Right>
              <IronIcon
                side={'right'}
                icon={icons.close}
                onClick={this.handleCloseModal}
              />
            </IronBar_Right>
          </IronBar>
          <p style={{ padding: '10px 35px 0px 35px' }}>
            <Title
              style={{
                fontSize: '17px',
                padding: '0px',
                margin: '-10px 0px 0px -20px',
              }}
            >
              Logo visibile{' '}
              <div style={{ float: 'right' }}>
                <HideLogo_Switch />
              </div>
            </Title>
          </p>
        </ReactModal>
      </div>
    );
  }
}
