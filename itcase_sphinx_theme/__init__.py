import os
from os import path

def get_html_themes_path():
    """Return list of sphinx themes."""
    return os.path.abspath(os.path.dirname(__file__))

# See http://www.sphinx-doc.org/en/stable/theming.html#distribute-your-theme-as-a-python-package
def setup(app):
    app.add_html_theme('itcase_sphinx_theme', path.abspath(path.dirname(__file__)))
