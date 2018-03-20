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
          accept: "image/jpeg, image/png"
      })
    })
});

$(document).ready(function () {
  var self = this,
      $stepAction = $('.step-next'),
      $stepContainer = $('.step-container'),
      $index = $stepContainer.attr('data-index'),      
      $stepContainerNext = $stepAction.parent('.step-container').next();
      console.log('index ' + $index);
      progressBar($index);

  $stepContainer.each(function () {
    var $this = $(this),
        $prev = $this.find('.step-prev'),
        $next = $this.find('.step-next'),
        $index = $this.attr('data-index') -1;
        console.log('stepContainer INDEX ' + $index);


      $prev.on('click', function (e) {
      e.preventDefault();
      prevStep($index);  
      progressBar($index-1);
    });

    $next.on('click', function (e) {
      e.preventDefault();
      nextStep($index);  
      progressBar($index+1);
    });
  });

  function prevStep($index){
    var self = this,
        $stepContainerSelector = $('.step-container').eq($index);

    $('.step-container').removeClass('in show');
    $stepContainerSelector.prev().addClass('in');

    self.wait = setTimeout( function () {
      $stepContainerSelector.prev().addClass('show');
      clearTimeout(self.wait);
    }, 10);
  }

  function nextStep($index){
    var $stepContainerSelector = $('.step-container').eq($index);

    $('.step-container').removeClass('in show');
    $stepContainerSelector.next().addClass('in');

    self.wait = setTimeout( function () {
      $stepContainerSelector.next().addClass('show');
      clearTimeout(self.wait);
    }, 10);

  }

  function progressBar($index){
    console.log('progressBar INDEX ' + $index);
    var $progressStepSelector = $('.progress-step');
    var $progressStepLength = $('.progress-step').length;
    var $completedStep = $progressStepSelector.eq($index-1);

    $('.progress-step').removeClass('complete');
    $completedStep.addClass('complete');
    $completedStep.prevAll().addClass('complete');
  console.log($completedStep);
    
  $('.progress-step').each( function (i) {
        console.log($progressStepLength-1);
        console.log(i);

      var id = setInterval(frame, 600);
      function frame() {
      // if ( i >= $progressStepLength ) {
      // clearInterval(id);
      // } else {
      //   console.log(i);
      //   $(this).addClass('complete');
      // }
      }

    
      i++;

    });
  }
});

$(function () {
  $('.datepicker').datepicker({
    showOn: 'button',
    buttonImage: 'https://dequeuniversity.com/assets/images/calendar.png', // File (and file path) for the calendar image
    buttonImageOnly: false,
    buttonText: 'Calendar View',
    dayNamesShort: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    showButtonPanel: true,
    closeText: 'Close'
    // onClose: removeAria
  });

  // Add aria-describedby to the button referring to the label
  $('.ui-datepicker-trigger').attr('aria-describedby', 'datepickerLabel');
});
