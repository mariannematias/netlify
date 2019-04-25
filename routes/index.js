// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const home = require('../pages/home.json')
const blog = require('../pages/blog.json')
const single = require('../pages/single.json')
const products = require('../pages/products.json')
const global = require('../pages/global.json')

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
	const data = {
		page: home,
		global: global
	}
	res.render('index', data)
})

router.get('/blog', (req, res) => {
	const data = {
		page: blog,
		global: global
	}
	res.render('blog', data)
})

router.get('/single', (req, res) => {
	const data = {
		page: single,
		global: global
	}
	res.render('single', data)
})

router.get('/products', (req, res) => {
	const data = {
		page: products,
		global: global
	}
	res.render('products', data)
})


module.exports = router
