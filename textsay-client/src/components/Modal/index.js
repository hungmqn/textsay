import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const createRootElement = (id) => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

const addRootElement = (rootElem) => {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild.nextElementSibling,
  );
}

const usePortal = (id) => {
  const rootElemRef = useRef(null);

  useEffect(function setupElement() {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    parentElem.appendChild(rootElemRef.current);

    return function removeElement() {
      rootElemRef.current.remove();
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  });

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

const Modal = ({ children }) => {
  const target = usePortal('modal');
  return ReactDOM.createPortal(children, target);
};

export default Modal;

