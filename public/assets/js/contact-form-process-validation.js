 jQuery.validator.addMethod('answercheck', function (value, element) {
              return this.optional(element) || /^\bgreen\b$/.test(value); //
          }, "type the correct answer (case matters)");
      
      // validate contact form
      $(function() {
          $('#contact').validate({
              rules: {
                  name: {
                      required: true,
                      minlength: 2
                  },
                  email: {
                      required: true,
                      email: true
                  },
                  contactsubject: {
                      required: true
                  },
                  message: {
                      required: true
                  },
                  answer: {
                      required: true,
                      answercheck: true
                  }
              },
              messages: {
                  name: {
                      required: "name is required",
                      minlength: "longer please"
                  },
                  email: {
                      required: "email required"
                  },
                  message: {
                      required: "Please fill in a message.",
                      minlength: "thats all? really?"
                  },
                  answer: {
                      required: "please fill this in"
                  }
              },
              submitHandler: function(form) {
                  $('#spinner').show().html('<img src="assets/images/spinner.gif">');
                  $(form).ajaxSubmit({
                      type:"POST",
                      data: $(form).serialize(),
                      url:"assets/js/contact-form-process.php",
                      success: function(responseText, statusText) {
                          $('#contact :input').attr('disabled', 'disabled');
                          $('#contact').fadeTo( "slow", 0.15, function() {
                          $(this).find(':input').attr('disabled', 'disabled');
                          $(this).find('label').css('cursor','default');
                          $('#success').html(responseText);
                          $('#success').fadeIn();
                          $('#spinner').fadeOut();
                      });
                      },
                      error: function(responseText, statusText) {
                      $('#contact').fadeTo( "slow", 0.15, function() {
                          $('#error').html(responseText);
                          $('#error').fadeIn();
                      });
                      }
                  });
              }
          });
      });