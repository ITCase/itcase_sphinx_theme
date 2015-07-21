import os
import pkg_resources


def get_html_themes_path():
    """Return list of sphinx themes."""
    return os.path.abspath(os.path.dirname(__file__))


def update_context(app, pagename, templatename, context, doctree):
    version = pkg_resources.get_distribution(
        "itcase_sphinx_theme"
    ).version
    context['theme_version'] = version


def setup(app):
    app.connect('html-page-context', update_context)
