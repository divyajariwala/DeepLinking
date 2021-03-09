
const config = {
    screens: {
        Home: 'home',
        Details: {
            path: "details/:userId",
        },

    },
};

const linking = {
    prefixes: ['myapp://'],
    config,
};

export default linking;