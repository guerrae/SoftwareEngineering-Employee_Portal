import {createMuiTheme} from '@material-ui/core/styles';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      main: "#424242",
    },
    action: {
      hover: "#d32f2f"
    }
  },
});

export default customTheme;