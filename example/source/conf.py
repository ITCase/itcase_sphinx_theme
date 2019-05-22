# -*- coding: utf-8 -*-

import sys
import os
import re

import itcase_sphinx_theme

sys.path.insert(0, os.path.abspath('..'))
sys.path.append(os.path.abspath('./source/'))

from sphinx.locale import _

project = 'ITCase Sphinx Doc'
slug = re.sub(r'\W+', '-', project.lower())
author = 'ITCase'
copyright = author

extensions = [
    'sphinx.ext.intersphinx',
    'sphinx.ext.doctest',
    'sphinx.ext.imgmath',
    'sphinx.ext.mathjax',
    'sphinx.ext.todo',
    'sphinx.ext.viewcode',
    'sphinxcontrib.httpdomain',
    'itcase_sphinx_theme'
]

templates_path = ['_templates']
source_suffix = '.rst'
exclude_patterns = []

master_doc = 'index'
suppress_warnings = ['image.nonlocal_uri']
pygments_style = 'default'

intersphinx_mapping = {
    'rtd': ('https://docs.readthedocs.io/en/latest/', None),
    'sphinx': ('http://www.sphinx-doc.org/en/stable/', None),
}

html_theme = 'itcase_sphinx_theme'
html_theme_path = [itcase_sphinx_theme.get_html_themes_path()]
html_show_sourcelink = True

htmlhelp_basename = slug

latex_documents = [
    ('index', '{0}.tex'.format(slug), project, author, 'manual'),
]

man_pages = [
    ('index', slug, project, [author], 1)
]

texinfo_documents = [
    ('index', slug, project, author, slug, project, 'Miscellaneous'),
]


# Extensions to theme docs
def setup(app):
    from sphinx.domains.python import PyField
    from sphinx.util.docfields import Field

    app.add_object_type(
        'confval',
        'confval',
        objname='configuration value',
        indextemplate='pair: %s; configuration value',
        doc_field_types=[
            PyField(
                'type',
                label=_('Type'),
                has_arg=False,
                names=('type',),
                bodyrolename='class'
            ),
            Field(
                'default',
                label=_('Default'),
                has_arg=False,
                names=('default',),
            ),
        ]
    )
