import { css } from 'styled-components';

export const StyledCheckbox = css`
  input[type='checkbox'] {
    opacity: 0;
    position: absolute;
  }

  input[type='checkbox'],
  label {
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
    cursor: pointer;
  }

  label {
    position: relative;
  }

  input[type='checkbox'] + label:before {
    content: '';
    background: #fff;
    border: 1px solid #ddd;
    transition: 0.2s outline;
    display: inline-block;
    vertical-align: middle;
    width: 11px;
    height: 11px;
    margin-right: 10px;
    text-align: center;
    border-radius: 2px;
  }

  input[type='checkbox']:checked + label:before {
    line-height: 11px;
    font-family: 'Material Icons Round';
    content: 'done';
    background: #272727;
    color: #fff;
    border-radius: 3px;
    font-size: 9px;
    padding-left: 0px;
  }

  input[type='checkbox']:checked + label:before:focus {
    border: 2px solid #ddd;
  }
`;
