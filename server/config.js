Accounts.config({
	forbidClientAccountCreation : true
});

Accounts.validateNewUser(function (user) {
  if (user.username && user.username.length >= 3)
    return true;
  throw new Meteor.Error(403, "Username must have at least 3 characters");
});

Accounts.urls.resetPassword = function (token) {
    return Meteor.absoluteUrl('reset-password/' + token);
};

Accounts.urls.verifyEmail = function (token) {
    return Meteor.absoluteUrl('verify-email/' + token);
};

Accounts.urls.enrollAccount = function (token) {
    return Meteor.absoluteUrl('enroll-account/' + token);
};

Accounts.emailTemplates.siteName = "Fitloop";

Accounts.emailTemplates.from = "Fitloop Accounts <no-reply@fitloop.co>";