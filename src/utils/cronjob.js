const cron = require('node-cron');
const sendEmail = require('../services/email.service');
const userService = require('../services/user.service');

const checkBirthdays = async () => {
  console.log('This code dey run laidis');
  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth() + 1;

  try {
    const users = await userService.getAllUsers();
    // console.log('Cron job started', users);
    users.forEach(async (user) => {
      // Cron job started
      const birthDay = user.dateOfBirth.getDay();
      const birthMonth = user.dateOfBirth.getMonth() + 1;

      if (birthDay === day && birthMonth === month) {
        await sendEmail(user.email, user.username);
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Cron job ended');
  }
};

const startCronJob = () => {
  cron.schedule('* * * * *', checkBirthdays, {
    timezone: 'Africa/Lagos',
  });
  console.log('⏳ Cron job active');
};

module.exports = startCronJob;
