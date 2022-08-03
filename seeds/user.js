const { User } = require('../models');

const userData = [
    {
        username: 'sBobSqrPants',
        password: 'garyTheSnail321'
    },
    {
        username: 'patrickStar',
        password: 'underARock123'
    },
    {
        username: 'squidWard',
        password: 'hasABigNose555'
    }];

    const userDataA = () => User.bulkCreate(userData, {
        individualHooks: true,
      });
    module.exports = userDataA;