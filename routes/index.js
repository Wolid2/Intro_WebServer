// adding the import express module
const express = require('express');
const router = express.Router();
//creating a rout for the home page
router.get('/',function (req, res,next) {
    res.render('index',{
        title:'Feedback Application',
        author: 'Wolid',
        timePageLoadedAt: new Date()
    });
})
// Adding a route to display the feedback form
router.get('/feedback-form', function (req, res,next) {
    res.render('feedback_form')
})
// adding a route to handle the submitted form
router.post('/submit-feedback', function (req, res,next) {
    // getting a form data from the request body
    const formData = req.body
    // console.log(formData)


    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        message: formData.comments,
        currentStudent: formData['current-student']
    })

})

module.exports = router;