// using states
// create a state
let state = {
  current: null
};

// animate panels by changing states
function toggleOpen (event) {
  // disable the previous panel that was in state.current
  if (event.currentTarget !== state.current && state.current !== null) {
    manageState();
  } 
  // if the same panel is clicked do nothing / 'return'
  if (event.currentTarget === state.current) {
    return;
  }
  // make clicked panel state.current
  state.current = event.currentTarget;
  manageState();
}

// animate panel by giving the panel a class
function toggleActive (event) {
  if (event.propertyName.includes('flex')) {
    event.currentTarget.classList.toggle('panel--open-active');
  }
}

// animate text
function manageState () {
  state.current.classList.toggle('panel--open');
  state.current.querySelector('p:nth-child(2)').classList.toggle('panel__p--hidden');
}

const panels = document.querySelectorAll('.panel');
// add click event listeners to each panel to animate them on click
panels.forEach(function (panel) {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
});