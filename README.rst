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
       html_theme_path = itcase_sphinx_theme.get_html_themes_path()
