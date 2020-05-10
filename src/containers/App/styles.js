import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    background: #eeeeee;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
  }

  .slick-next:before, .slick-prev:before {
    color: #000 !important;
  }

  div {
    outline: none;
  }


  #template {
    margin: 0 auto;
    width: 300px !important;
    padding-top: 15px;
  }

  #employees_popup .header .columnHeader {
      margin-left: 17px;
  }

  #employees_popup .header {
      font-weight: 600;
      color: rgba(0, 0, 0, .54);
      height: 48px;
      padding: 15px 0 0 16px;
      font-size: 16px;
      font-family: "Roboto";
      background-color: #f5f5f5;
  }

  .fabric #employees_popup .header {
      background-color: #fff;
      border-bottom: 1px solid #ccc;
      color: #0078d7;
      font-weight: 400;
  }

  .highcontrast #employees_popup .header {
      color: #fff;
      background-color: #000;
  }

  .bootstrap4 #employees_popup .header {
      color: #6c757d;
  }

  #employees_popup .ename {
      display: block !important;
      opacity: .87;
      font-size: 16px;
      margin-top: 6px;
  }

  #employees_popup .job {
      opacity: .54;
      font-size: 14px;
      margin-top: -15px;
      margin-bottom: 9px;
  }

  #employees_popup .empImage {
      margin: 6px 16px;
      float: left;
      width: 50px;
      height: 50px;
  }

  .e-bigger #employees_popup.e-popup .e-list-item * {
      display: block;
      text-indent: 0;
  }

  .e-bigger #employees_popup .e-dropdownbase .e-list-item {
      line-height: 42px;
      height: 80px;
  }

  .e-bigger #employees_popup.e-popup .empImage {
      margin: 10px 16px;
  }

  .e-bigger #template .e-input-group .e-input-value {
      padding: 2px;
  }

  .bootstrap4 #employees_popup .empImage {
      margin: 4px 16px;
  }

  .bootstrap4 #employees_popup .job {
      margin-top: 0;
  }

  .e-bigger.bootstrap4 #employees_popup .job {
      margin-top: -18px;
  }

  .e-bigger.bootstrap4 #employees_popup .ename {
      margin-top: 4px;
  }

  .item-transition-enter {
    opacity: 0.01;
  }

  .item-transition-enter.item-transition-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .item-transition-leave {
    opacity: 1;
  }

  .item-transition-leave.item-transition-leave-active {
    opacity: 0.01;
    transition: opacity 5000ms ease-out;
  }

  .list-transition {
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    > div {
      margin: 0.8em;
    }
  }
`;
