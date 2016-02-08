#meteor-touchstonejs  

Wrapper for [TouchstoneJS](https://github.com/touchstonejs/touchstonejs) to use in Meteor app

## How to install

`meteor add veeramarni:touchstonejs`

Create a .less file anywhere in your project to be served to the client and add

`@import "{veeramarni:touchstonejs}/touchstone.import.less";`

Optinally, you can import `demo.import.less` for quick demo

`@import "{veeramarni:touchstonejs}/demo.import.less";`


## Sample example
`app.jsx`

```
const {
    Container,
    createApp,
    UI,
    View,
    ViewManager
    } = Touchstone;

var lastSelectedTab = 'lists'
TabNav = React.createClass({
    mixins: [createApp()],

    componentDidMount () {
        // Hide the splash screen when the app is mounted
        if (navigator.splashscreen) {
            navigator.splashscreen.hide();
        }
    },
    render() {
        let appWrapperClassName = 'app-wrapper device--' + (window.device || {}).platform;
        return (

                    <ViewManager name="app" defaultView="main">
                        <View name="main" component={MainViewController}/>
                    </ViewManager>

        )
    }
});


// Main Controller
//----------------

var MainViewController = React.createClass({
    render(){
        return (
            <Container>
                <UI.NavigationBar name="main" />
            </Container>
        )
    }
});
```
