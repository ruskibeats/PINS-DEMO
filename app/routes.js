const express = require('express')
const router = express.Router()

// Variables
var data = {
  'thumbnails': [
    {
      'src': 'http://placehold.it/75x75/',
      'title': 'site_plan_IMG_A.png'
    },
    {
      'src': 'http://placehold.it/75x75/',
      'title': 'floor_plans_IMG_B.pdf'
    },
    {
      'src': 'http://placehold.it/75x75/',
      'title': 'other_IMG_C.doc'
    },
    {
      'src': 'http://placehold.it/75x75/',
      'title': 'layout_plan_IMG_D.gif'
    }
  ],
  'progress': [
    {
      'id': '1'
    },
    {
      'id': '2'
    },
    {
      'id': '3'
    },
    {
      'id': '4'
    },
    {
      'id': '5'
    },
    {
      'id': '6'
    },
    {
      'id': '7'
    },
    {
      'id': '8'
    }
  ],
  'reasons': [
    {
      'title': 'Reason A'
    },
    {
      'title': 'Reason B'
    },
    {
      'title': 'Reason C'
    },
    {
      'title': 'Reason D'
    },
    {
      'title': 'Reason E'
    },
    {
      'title': 'Reason F'
    },
    {
      'title': 'Reason G'
    },
    {
      'title': 'Reason H'
    }
  ]
}

// var data_steps = {
//   'steps': [
//     {
//       'className': 'in show',
//       'order' : '1',
//       'id' : 'step_a',
//       'label': 'Step A',
//       'title': 'Step A',
//       'content': 'Morbi vehicula nulla non ligula suscipit, et bibendum augue rhoncus. Integer ornare nibh vehicula tortor ullamcorper, at ullamcorper nulla mollis.',
//       'prev': false,
//       'next': true
//     },
//     {
//       'order' : '2',
//       'id' : 'step_b',
//       'label': 'Step B',
//       'title': 'Step B',
//       'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nulla sed urna bibendum facilisis vel quis nunc. Vestibulum fringilla sodales interdum. Curabitur viverra mollis interdum. Ut orci tellus, commodo at congue at, maximus id felis. Fusce ullamcorper euismod lectus.',
//       'prev': true,
//       'next': true
//     },
//     {
//       'order' : '4',
//       'id' : 'confirm',
//       'label': 'Step C',
//       'title': 'Step C',
//       'content': 'Morbi vehicula nulla non ligula suscipit, et bibendum augue rhoncus. Integer ornare nibh vehicula tortor ullamcorper, at ullamcorper nulla mollis.',
//       'prev': true,
//       'next': false
//     },      
//     {
//       'order' : '4',
//       'id' : 'thankyou',
//       'label': 'Step D',
//       'title': 'Thank you',
//       'content': 'Your submission is complete',
//       'prev': true,
//       'next': false
//     }
//   ]
// }

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route register page
router.get('/register', function (req, res) {
  res.render('register')
})

// Route login
router.get('/login', function (req, res) {
  var appeal = req.query.appeal

  if (appeal === 'true') {
    res.render('login', data)    
  } else {
    res.redirect('appellant')
  }
})

// Route application type page
router.get('/application-type', function (req, res) {
  var registered = req.query.registered

  if (registered === 'false') {
    res.redirect('/register')
  } else {
    res.render('application-type', data)
  }
});

// Route reason for appeal
router.get('/reason-appeal', function (req, res) {
  var enforcementNotice = req.query.enforcementNotice

  if (enforcementNotice === 'enforcementNotice') {
    res.redirect('/enforcement-notice')
  } else {
    res.render('reason-appeal', data)
  }
});

// Route enforcement notice
router.get('/enforcement-notice', function (req, res) {  
  var enforcementNotice = req.query.enforcementNotice

  if (enforcementNotice === 'false') {
    res.redirect('/place-holder')
  } else {
    res.redirect('/date-lpa')
  }
});

// // Route date of decision
router.get('/date-lpa', function (req, res) {  
  res.render('date-lpa', data)
});

// Route create appeal
router.get('/create-appeal', function (req, res) {
  var dateLPA = req.query.dateLPA

  if (dateLPA === 'false') {
    res.redirect('/place-holder')
  } else {
    res.render('create-appeal', data)
  }
});

// Route create appeal
router.get('/appellant', function (req, res) {
  res.render('appellant', data)
});

// Route form pages
router.get('/form-step-a', function (req, res) {
  res.render('form-step-a', data)
});
router.get('/form-step-b', function (req, res) {
  res.render('form-step-b', data)
});
router.get('/form-step-c', function (req, res) {
  res.render('form-step-c', data)
});

// Route thank you page
router.get('/confirm-details', function (req, res) {
  res.render('confirm-details', data)
});

// Route thank you page
router.get('/dashboard-appellant', function (req, res) {
  res.render('dashboard-appellant', tdata);
});

// Route thank you page
router.get('/dashboard-validator', function (req, res) {
  res.render('dashboard-validator', data);
});

// Route placeholder page
router.get('/place-holder', function (req, res) {
  res.render('place-holder')
})


module.exports = router
