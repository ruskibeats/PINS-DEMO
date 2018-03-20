/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Details/summary polyfill from frontend toolkit
  GOVUK.details.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

$(document).ready(function () {
    var submitted = false;
    $('.form').validate({
        rules: {
          fileUploadPlan: {
              required: true,
              extension: "pdf|doc|docx"
          }
        },
        errorClass: 'error-message',
        errorPlacement: function(error, element) {
            error.appendTo( element.parents('.form-elem-container').find('.error-container') );
        },
        showErrors: function(errorMap, errorList) {
            if (submitted) {
                var summary = "You have the following errors: \n";
                $.each(errorMap, function(key, value) {
                  summary += key + ': ' + value + "\n";
                });
                $('.error-summary').addClass('in');
                submitted = false;
            }
            this.defaultShowErrors();
        },
        invalidHandler: function(form, validator) {
            submitted = true;
        }
    });

    $('input[class^="fileupload"]').each(function () {
      $(this).rules('add', {
          accept: "image/jpeg, image/jpg, image/png, image/gif, application/pdf, application/msword"
      })


    })

    $('input[type=file]').change(function(){
      $(this).addClass('uploaded');
  });
});

$(document).ready(function () {
  progressBar();

  function progressBar(){
    var $progress_step = $('.acp-form-container').data('progress');
    var $progressStepSelector = $('.progress-step').eq($progress_step-1);
    
    $('.progress-step').removeClass('complete');
      $progressStepSelector.addClass('complete');
    }
  });

  $(function () {
    $('.datepicker').datepicker({
      buttonText: 'Calendar View',
      dayNamesShort: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
      showButtonPanel: true,
      closeText: 'Close'
  });

  $(function () {
    function onSelect(dateText, inst) {
      var pieces = dateText.split('/');
      $('#day').val(pieces[0]);
      $('#month').val(pieces[1]);
      $('#year').val(pieces[2]);
    };

    $('.datepicker').click(function(event) {
      var d = $('#day').val() + '/' + $('#month').val() + '/' + $('#year').val();
      $(this).datepicker('dialog', d, onSelect, { dateFormat: 'dd/mm/yy' }, [10, 40]);
    });
  });

  // Add aria-describedby to the button referring to the label
  $('.ui-datepicker-trigger').attr('aria-describedby', 'datepickerLabel');

  $(function () {
    $('.select-plan').each(function () {
        var $this = $(this),
            $action = $this.parents('.plan-upload').find('.add-plan');

        $this.next('.text-hint').hide();

        $this.on('change', function () {
          var $value = $this.val();

          $this.parent('.form-group').find('.text-hint').show();

          console.log($value);

          if ($value === 'select-plan-a') {
            $action.hide();
          } else {
            $action.show();            
          }
        });
    });
  });
});
