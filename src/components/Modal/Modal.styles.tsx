import styled from 'styled-components';

export const Wrapper = styled.div`
  .modal {
    position: fixed;
    width: 90vw;
    max-width: 450px;
    top: 50%;
    left: 50%;
    background: #fff;
    z-index: 30;
    border-radius: 5px;
    overflow: hidden;
    transform: scale(0) translate(-50%, -50%);
    transition: 0.3s;
    transform-origin: top left;
    opacity: 0;
    visibility: hidden;
  }

  /* Hide checkbox */
  .modal-control {
    display: none;
  }

  /* Chọn .modal-background ở cùng cấp độ (cùng parent) với checkbox */
  .modal-control:checked ~ .modal-background {
    opacity: 1;
    visibility: visible;
  }

  /* Chọn .modal ở cùng cấp độ (cùng parent) với checkbox */
  .modal-control:checked ~ .modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1) translate(-50%, -50%);
  }

  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    background: #00000080;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
  }

  /* Style phần body của modal, có thể tuỳ chỉnh theo ý thích */
  .modal-header {
    padding: 13px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d3d3d3;
  }

  .modal-content {
    padding: 13px 20px;
  }
`;
