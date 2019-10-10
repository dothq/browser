import * as React from 'react';
import {
  StyledSearchBox,
  SearchContainer,
  SearchIcon,
  Input,
  HiyaMessage,
} from './style';
import store from '~/renderer/app/store';
import { fetchHiyaMessage } from './../../constants/hiya';

export class SearchBox extends React.Component {
  public hiyaNotifications: string[] = [
    'How are you today?',
    `Search on Google or enter address`,
    'Where do you want to go today?',
    "What's on your mind?",
  ];

  public props: any = {
    isFixed: false,
    style: '',
  };

  constructor(props: any) {
    super(props);
  }

  public hiyaBox = document.getElementById('hiya');

  public state = {
    hiyaState: false,
    hiyaText: this.hiyaNotifications[
      Math.floor(Math.random() * this.hiyaNotifications.length)
    ],
  };

  componentDidMount() {
    document
      .getElementById('hiya')
      .addEventListener('animationiteration', () => {
        const hiyaText = this.hiyaNotifications[
          Math.floor(Math.random() * this.hiyaNotifications.length)
        ];

        this.setState({
          hiyaText,
        });
      });
  }

  onFocus(e: any) {
    this.setState({ hiyaState: true });
    document
      .getElementById('hiya')
      .removeEventListener('animationiteration', () => {});
  }

  onBlur(e: any) {
    if (!e.target.value) {
      this.setState({ hiyaState: false });
      setTimeout(() => {
        document
          .getElementById('hiya')
          .addEventListener('animationiteration', () => {
            const hiyaText = this.hiyaNotifications[
              Math.floor(Math.random() * this.hiyaNotifications.length)
            ];

            this.setState({
              hiyaText,
            });
          });
      }, 1000);
    }
  }

  render() {
    const { isFixed, style } = this.props;

    return (
      <StyledSearchBox isFixed={isFixed} style={style}>
        <SearchContainer>
          <SearchIcon />
          <Input
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            onFocus={() => this.onFocus(event)}
            onBlur={() => this.onBlur(event)}
          />
          {this.state.hiyaState == false && (
            <HiyaMessage id="hiya">{this.state.hiyaText}</HiyaMessage>
          )}
        </SearchContainer>
      </StyledSearchBox>
    );
  }
}
