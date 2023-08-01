
//sincronia

//callback (cb)
const downloadUserData = (cb) => {
    setTimeout(() => {
        console.log('User data downloaded');
        let user = { name: 'test' };
        cb(null, user);
    }, 2000);
};

const processUserData = (cb) => {
    setTimeout(() => {
        console.log('User data processed');
        cb();
    }, 1000);
};

const displayUserDashboard = (cb) => {
    setTimeout(() => {
        console.log('User dashboard displayed');
        
    }, 3000);
};

//PROMISES
const downloadUser_Data = (cb) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User data downloaded');
            let user = { name: 'test' };
resolve(user);
}, 2000);
    });
};

const processUser_Data = (cb) => {
    setTimeout(() => {
        console.log('User data processed');
    }, 1000);
};

const display_UserDashboard = (cb) => {
    setTimeout(() => {
        console.log('User dashboard displayed');
    }, 3000);
};