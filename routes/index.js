// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const home = require('../pages/home.json')
const blog = require('../pages/blog.json')

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
	const data = {
		page: home
	}
	res.render('index', data)
})

router.get('/blog', (req, res) => {
	const data = {
		page: blog
	}
	res.render('blog', data)
})


module.exports = router
