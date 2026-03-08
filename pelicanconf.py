AUTHOR = 'Buibui Software'
SITENAME = 'Buibui Software | Websites & Web Applications for Businesses in Zimbabwe'
SITEURL = ""

PATH = "content"

TIMEZONE = 'Africa/Harare'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
    ("You can modify those links in your config file", "#"),
)

# Social widget
SOCIAL = (
    ("You can add links in your config file", "#"),
    ("Another social link", "#"),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

MENUITEMS = [
    ("Home", "/"),
    ("About Us", "/#about"),
    ("Solutions", "/#services"),
    ("Our Work", "/#portfolio"),
    ("Blog", "/archives.html"),
    ("Contact Us", "/#contact"),
    ]

THEME = "buibui-theme"

CSS_FILE = "styles.css"

# Hero section

HEROTEXT = "We build affordable websites and web applications"
HERO_CTA_BUTTON_TEXT  = "Tell us about your project"
HEROSUBTEXT = "We help businesses and individuals in Zimbabwe — and around the world — get online with professional websites and web apps that work."
