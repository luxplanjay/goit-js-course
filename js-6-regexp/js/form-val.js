(function() {
  'use strict';

  var form = document.getElementsByTagName('form')[0],
    mail = document.getElementById('mail'),
    pass = document.getElementById('pass');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var result = validate(mail.value, pass.value);

    if (!result.mail.isValid || !result.pass.isValid) {
      console.log(result.mail.response);
      console.log(result.pass.response);
    } else {
      console.log('All VALID! Submitting!');
    }
  });

  function validate(m, p) {
    var mailPattern = /^\w+@[a-z]+\.[a-z]{2,}\b/,
      passPattern = /^\w{4,8}$/,
      result = {
        mail: {},
        pass: {}
      };

    if (mailPattern.test(m)) {
      result.mail.isValid = true;
      result.mail.response = 'Mail is valid!';

    } else {
      result.mail.isValid = false;
      result.mail.response = 'Mail is NOT valid!';
    }

    if (passPattern.test(p)) {
      result.pass.isValid = true;
      result.pass.response = 'Pass is valid!';

    } else {
      result.pass.isValid = false;
      result.pass.response = 'Pass is NOT valid!';
    }

    return result;
  }
})();
