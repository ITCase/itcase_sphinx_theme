import os


def get_html_themes_path():
    """Return list of sphinx themes."""
    here = os.path.abspath(os.path.dirname(__file__))
    return here
