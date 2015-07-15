|PyPi|

ITCase Sphinx Theme
===================

Install
-------

.. code-block:: bash

   $ pip install itcase_sphinx_theme

Edit your Sphinx's ``conf.py``
------------------------------

#. Near the top, add the following.

   .. code-block:: python

      import itcase_sphinx_theme

#. Activate the theme.

   .. code-block:: python

       html_theme = 'itcase'
       html_theme_path = [itcase_sphinx_theme.get_html_themes_path()]
       extensions = ['itcase_sphinx_theme']

.. |PyPI| image:: http://img.shields.io/pypi/dm/itcase_sphinx_theme.svg
   :target: https://pypi.python.org/pypi/itcase_sphinx_theme/
