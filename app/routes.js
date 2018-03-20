const express = require('express')
const router = express.Router()

// Variables
var data = {
  'thumbnails': {
    'plans_a' : [{
      'src': 'http://placehold.it/75x75/',
      'title': 'site_plan_IMG_A.png',
      'desc': 'Site plan'
    },
    {
      'src': 'http://placehold.it/75x75/',
      'title': 'floor_plans_IMG_B.pdf',
      'desc': 'Floor plan existing'
      
    }
  ],
  'plans_b': [{
      'src': 'http://placehold.it/75x75/',
      'title': 'other_IMG_C.doc',
      'desc': 'Floor plan proposed'
      
    },
    {
      'src': 'http://placehold.it/75x75/',
      'title': 'layout_plan_IMG_D.gif',
      'desc': 'Site plan'
    }],
    'plans_c': [{
      'src': 'http://placehold.it/75x75/',
      'title': 'other_IMG_C.doc',
      'desc': 'Floor plan proposed'
      
    },
    {
      'src': 'http://placehold.it/75x75/',
      'title': 'layout_plan_IMG_D.gif',
      'desc': 'Site plan'
    }]
  },
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
    },
    {
      'id': '9'
    }
  ],
  'reasons': [
    {
      'title': 'Refused planning permission for the development.'
    },
    {
      'title': 'Refused permission to vary or remove a condition(s).'
    },
    {
      'title': 'Refused prior approval of permitted development rights.'
    },
    {
      'title': 'Granted planning permission for the development subject to conditions to which you object.'
    },
    {
      'title': 'Refused approval of the matters reserved under an outline planning permission.'
    },
    {
      'title': 'Granted approval of the matters reserved under an outline planning permission subject to conditions to which you object.'
    },
    {
      'title': 'Refused to approve any matter required by a condition on a previous planning permission (other than those above).'
    },
    {
      'title': 'Failed to give notice of its decision within the appropriate period (usually 8 weeks) on an application for permission or approval.'
    },
    {
      'title': 'Failed to give notice of its decision within the appropriate period because of a dispute over provision of local list documentation.'
    }
  ]
}

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
    // res.render('/enforcement-notice')
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
router.get('/detailed-view', function (req, res) {
  res.render('detailed-view', data)
});

// Route thank you page
router.get('/dashboard-appellant', function (req, res) {
  res.render('dashboard-appellant');
});

// Route thank you page
router.get('/dashboard-validator', function (req, res) {
  res.render('dashboard-validator');
});

// Route placeholder page
router.get('/place-holder', function (req, res) {
  res.render('place-holder')
})

// Route your application
router.get('/your-application', function (req, res) {
  res.render('your-application', data)
})


module.exports = router
