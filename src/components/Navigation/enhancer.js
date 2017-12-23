import { withState, compose } from 'recompose';
import { withHandlers } from 'recompose';

const enhancer = compose(
  withState('menuActive', 'setMenuActive', false),
  withHandlers({
    handleToggleMenu: ({ setMenuActive }) => () => setMenuActive(x => !x),
  }),
);

export default enhancer;
